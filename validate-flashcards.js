#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const failures = [];
let checks = 0;
const assert = (condition, label) => {
  checks += 1;
  if (!condition) failures.push(label);
};

const sandbox = {
  window: {},
  document: {
    getElementById: () => ({}),
    querySelector: () => null,
    querySelectorAll: () => [],
    activeElement: null,
  },
  console,
};

for (const filename of ['cfaq-data.js', 'dataprev-history-data.js', 'transpetro-cyber-data.js', 'pnd-historia-data.js', 'flashcards-priority-data.js', 'flashcards-data.js', 'flashcards-engine.js', 'adaptive-engine.js']) {
  vm.runInNewContext(fs.readFileSync(path.join(root, filename), 'utf8'), sandbox, { filename });
}

let main = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
main = main.replace(/render\(\);\s*\}\)\(\);?\s*$/, 'window.__VERSA_COURSES=COURSES;window.__VERSA_NORMALIZE_PROGRESS=normalizeProgress;})()');
vm.runInNewContext(main, sandbox, { filename: 'app.js', timeout: 15000 });

const appSource = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const styleSource = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');
const indexSource = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
assert(appSource.includes('RESPOSTA DIRETA'), 'Renderer identifica a resposta objetiva');
assert(appSource.includes('ENTENDA O CONTEÚDO'), 'Renderer separa aprofundamento após a resposta');
assert(appSource.includes('card.directAnswer || card.back'), 'Renderer mantém fallback retrocompatível');
assert(styleSource.includes('.flash-direct') && styleSource.includes('.flash-origin'), 'Estilos da nova hierarquia de resposta existem');
assert(appSource.indexOf('RESPOSTA DIRETA') < appSource.indexOf('ENTENDA O CONTEÚDO'), 'Renderer coloca resposta objetiva antes do contexto');
const cacheKeys = [...indexSource.matchAll(/\?v=(\d+)/g)].map((match) => match[1]);
assert(cacheKeys.length >= 10 && cacheKeys.every((key) => key === '191'), 'Todos os assets usam cache-busting v191');
assert(!/\?v=18(?:[\"'])/.test(indexSource), 'Nenhum asset permanece com a chave antiga v18');
assert(sandbox.window.VERSA_FLASHCARDS.version === '1.9.1', 'Catálogo de flashcards está na v1.9.1');
assert(sandbox.window.VERSA_FLASHCARDS.auditVersion === 'semantic-625-v1', 'Auditoria semântica global identificada');
assert(sandbox.window.VERSA_FLASHCARDS.curatedAnswerCount === 191, 'Há 191 perguntas de maior risco com resposta explicitamente curada');

const courses = sandbox.window.__VERSA_COURSES;
const engine = sandbox.window.VERSA_FLASHCARDS_ENGINE;
const expected = { dataprev:153, ason:100, ibge:118, cfaq:50, 'transpetro-cyber':84, 'pnd-historia':120 };
const baseExpected = { dataprev:133, ason:80, ibge:98, cfaq:30, 'transpetro-cyber':64, 'pnd-historia':100 };
const priorityExpected = { dataprev:20, ason:20, ibge:20, cfaq:20, 'transpetro-cyber':20, 'pnd-historia':20 };
assert(Boolean(courses), 'Cursos expostos para validação');
assert(Boolean(engine), 'Motor de repetição carregado');

const allCards = [];
for (const [courseId, expectedCards] of Object.entries(expected)) {
  const course = courses[courseId];
  assert(Boolean(course), `Curso ${courseId} existe`);
  assert(course.flashcards.length === expectedCards, `${courseId} possui ${expectedCards} flashcards`);
  assert(course.flashcards.filter((card) => card.source === 'microlição').length === baseExpected[courseId], `${courseId} preserva um cartão por microlição`);
  assert(course.flashcards.filter((card) => card.priority === 'high').length === priorityExpected[courseId], `${courseId} preserva ${priorityExpected[courseId]} cartões estratégicos de alta incidência`);
  const lessons = new Set(course.lessons.map((lesson) => lesson.id));
  const units = new Set(course.units.map((unit) => unit.id));
  for (const card of course.flashcards) {
    allCards.push(card);
    assert(card.courseId === courseId, `Curso correto em ${card.id}`);
    assert(lessons.has(card.lessonId), `Lição válida em ${card.id}`);
    assert(units.has(card.unitId), `Módulo válido em ${card.id}`);
    assert(Boolean(card.front), `Frente preenchida em ${card.id}`);
    assert(Boolean(card.back), `Conteúdo-base preenchido em ${card.id}`);
    assert(Boolean(card.directAnswer), `Resposta direta preenchida em ${card.id}`);
    assert(card.directAnswer.length <= 520, `Resposta direta concisa em ${card.id}`);
    if (card.priority === 'high') {
      assert(Boolean(card.incidence), `Justificativa de incidência preenchida em ${card.id}`);
      assert(card.difficulty === 'Estratégico', `Dificuldade estratégica em ${card.id}`);
    }
  }

  const priority = course.flashcards.filter((card) => card.priority === 'high');
  const countDiscipline = (discipline) => priority.filter((card) => card.discipline === discipline).length;
  if (courseId === 'dataprev') {
    assert(priority.filter((card) => card.lessonId.startsWith('red-')).length === 4, 'DATAPREV estratégico preserva 4 cartões de redes');
    assert(priority.filter((card) => card.lessonId.startsWith('dgv-')).length === 2, 'DATAPREV estratégico preserva 2 cartões de governança');
    assert(priority.filter((card) => card.lessonId.startsWith('dcl-')).length === 6, 'DATAPREV estratégico preserva 6 cartões de nuvem');
    assert(priority.filter((card) => !/^(red|dgv|dcl)-/.test(card.lessonId)).length === 8, 'DATAPREV estratégico preserva 8 cartões de segurança e privacidade');
  }
  if (courseId === 'ason') {
    for (const discipline of ['Português', 'Inglês', 'Matemática', 'Física']) {
      assert(countDiscipline(discipline) === 5, `ASON estratégico possui 5 cartões de ${discipline}`);
    }
  }
  if (courseId === 'ibge') {
    assert(countDiscipline('Português') === 5, 'IBGE estratégico possui 5 cartões de Português');
    assert(countDiscipline('Raciocínio Lógico Quantitativo') === 3, 'IBGE estratégico possui 3 cartões de Raciocínio Lógico');
    assert(countDiscipline('Conhecimentos Específicos') === 12, 'IBGE estratégico possui 12 cartões de Conhecimentos Específicos');
  }
  if (courseId === 'cfaq') {
    assert(countDiscipline('Português') === 10, 'CFAQ estratégico possui 10 cartões de Português');
    assert(countDiscipline('Matemática') === 10, 'CFAQ estratégico possui 10 cartões de Matemática');
  }
  if (courseId === 'transpetro-cyber') {
    assert(priority.length === 20, 'TRANSPETRO Cyber possui 20 cartões estratégicos');
    assert(priority.some((card) => card.discipline === 'Segurança Ofensiva'), 'TRANSPETRO prioriza Segurança Ofensiva');
    assert(priority.some((card) => card.discipline === 'Segurança Defensiva'), 'TRANSPETRO prioriza Segurança Defensiva');
    assert(priority.some((card) => card.discipline === 'Compliance e Privacidade'), 'TRANSPETRO prioriza Compliance e Privacidade');
  }
  if (courseId === 'pnd-historia') {
    assert(countDiscipline('Formação Geral Docente') === 8, 'PND estratégico possui 8 cartões de Formação Geral Docente');
    assert(countDiscipline('Componente Específico — História') === 12, 'PND estratégico possui 12 cartões de História');
  }
}

assert(allCards.length === 625, 'Catálogo total possui 625 flashcards');
assert(!allCards.some((card) => /frase analisada/i.test(card.front)), 'Nenhum flashcard depende de contexto ausente como “frase analisada”');
const topologyCard = courses.dataprev.flashcards.find((card) => card.front === 'Qual topologia tende a oferecer mais caminhos alternativos?');
assert(/malha/i.test(topologyCard?.directAnswer || ''), 'DATAPREV topologia responde malha de forma direta');
const lanCard = courses.dataprev.flashcards.find((card) => card.front === 'Qual é a diferença central entre LAN e WLAN?');
assert(/LAN/i.test(lanCard?.directAnswer || '') && /WLAN/i.test(lanCard?.directAnswer || '') && !/WAN interliga/i.test(lanCard?.directAnswer || ''), 'Diferença LAN/WLAN é direta e sem conteúdo irrelevante');
const encapsCard = courses.dataprev.flashcards.find((card) => card.front === 'O que é acrescentado aos dados durante o encapsulamento?');
assert(/cabeçalh/i.test(encapsCard?.directAnswer || ''), 'Encapsulamento responde cabeçalhos diretamente');
const osiCard = courses.dataprev.flashcards.find((card) => card.front === 'Recite as sete camadas, do nível 7 ao 1.');
assert(/Física/i.test(osiCard?.directAnswer || '') && osiCard?.details?.length >= 7, 'OSI preserva sete camadas no cartão');
// Auditoria semântica de casos de maior risco: perguntas factuais, comparativas, transformações e conceitos que haviam falhado na heurística.
const semanticExpectations = [
  ['O repetidor examina endereços IP?', /Não.*camada física.*sem interpretar.*IP/i],
  ['Qual informação principal orienta o roteamento: MAC ou IP?', /^IP\b/i],
  ['Em qual camada do OSI está o HTTP?', /Aplicação.*7/i],
  ['Quais camadas OSI são reunidas no acesso à rede do TCP\/IP?', /Enlace.*Física/i],
  ['IKE é usado principalmente para transportar dados da aplicação ou negociar chaves?', /Negociar chaves/i],
  ['HTTPS é um protocolo completamente diferente do HTTP ou HTTP sobre uma camada de segurança?', /^HTTPS é HTTP.*TLS/i],
  ['Ordene mentalmente: configuração, resolução de nome, conexão, proteção e solicitação web.', /DHCP.*DNS.*TCP.*TLS.*HTTP/i],
  ['Qual é a regra geral da LAI sobre publicidade e sigilo?', /^Publicidade.*regra.*sigilo.*exceção/i],
  ['Dê um exemplo de aprendizado não supervisionado.', /clusters|agrup/i],
  ['Cite um serviço de object storage de cada provedor.', /S3.*Blob.*Cloud Storage/i],
  ['O que significa anycast no IPv6 e qual campo substitui o TTL?', /Anycast.*Hop Limit/i],
  ['Reescreva “Me informaram o resultado” segundo a norma formal em início de frase.', /Informaram-me/i],
  ['Por que há crase em “à noite”?', /locução adverbial feminina/i],
  ['What is the difference between skimming and scanning?', /Skimming.*Scanning/i],
  ['Converta o ponto polar (2, π\/2) para coordenadas cartesianas.', /\(0,\s*2\)/],
  ['Qual é o ângulo entre linhas de campo e uma superfície equipotencial?', /90°|90 graus/i],
  ['Qual é a principal diferença entre uma série de Taylor e uma série de Fourier?', /^Taylor.*Fourier/i],
  ['Qual é a vantagem da forma de Newton ao incluir novo nó?', /^Ela permite acrescentar|^Permite acrescentar/i],
  ['Qual condição é usual na regra de Simpson 1\/3 composta?', /subintervalos.*par/i],
  ['Por que ocorre crase em “à sala”?', /preposição.*artigo.*à/i],
  ['Por que a conversão de área usa o fator ao quadrado?', /bidimensional.*k²/i],
  ['O que o discriminante informa?', /Δ>0.*Δ=0.*Δ<0/i],
  ['Qual propriedade tende a ser mais afetada por uma escuta passiva?', /^Confidencialidade/i],
  ['No ATT&CK, o que uma tática representa?', /objetivo.*adversário/i],
  ['Qual protocolo é comum entre autenticador e servidor AAA em 802.1X?', /^RADIUS/i],
  ['O que caracteriza autenticação multifator?', /dois ou mais fatores.*categorias/i],
  ['Por que RAID não é sinônimo de backup?', /^Porque RAID|^RAID/i],
  ['Quais são as seis funções do NIST CSF 2.0?', /Govern.*Identify.*Protect.*Detect.*Respond.*Recover/i],
  ['O que representa IG1 nos CIS Controls?', /Implementation Group 1|conjunto básico/i],
  ['Quais são os três papéis de 802.1X e onde entram EAP e RADIUS?', /Suplicante.*autenticador.*servidor.*EAP.*RADIUS/i],
  ['Por que cadeia de custódia é importante?', /^Porque documenta.*evidência/i],
  ['Qual é a ideia central de um PIMS associado à ISO\/IEC 27701?', /^Um PIMS é um Sistema de Gestão de Informações de Privacidade/i],
];
for (const [front, expectedPattern] of semanticExpectations) {
  const matches = allCards.filter((card) => card.front === front);
  assert(matches.length > 0, `Pergunta auditada existe: ${front}`);
  for (const card of matches) assert(expectedPattern.test(card.directAnswer), `Resposta semanticamente correta em ${card.id}`);
}

const forbiddenLegacyAnswers = [
  /^Topologia descreve como os dispositivos/i,
  /^Não\. analisam endereços/i,
  /^HTTP e HTTPS atendem a Web/i,
  /^Não há crase antes de verbo/i,
  /^Campo é vetorial\.?$/i,
  /^A conversão acompanha a dimensão da grandeza\.?$/i,
];
for (const card of allCards) {
  assert(!forbiddenLegacyAnswers.some((pattern) => pattern.test(card.directAnswer)), `Sem resposta legada incorreta em ${card.id}`);
  assert(card.directAnswer.trim().length >= 2, `Resposta direta não vazia em ${card.id}`);
}

// Perguntas explicitamente comparativas devem mencionar os dois lados quando os termos são inequívocos.
const pairedChecks = [
  ['Qual é a diferença central entre LAN e WLAN?', /LAN.*WLAN/i],
  ['Explain the difference between skimming and scanning.', /Skimming.*scanning/i],
  ['What is the difference between “must not” and “do not have to”?', /Must not.*do not have to/i],
  ['Qual é a diferença entre controlador e operador?', /Controlador.*operador/i],
  ['Qual é a diferença entre vulnerabilidade e exploit?', /Vulnerabilidade.*exploit/i],
];
for (const [front, pattern] of pairedChecks) {
  for (const card of allCards.filter((item) => item.front === front)) assert(pattern.test(card.directAnswer), `Comparação completa em ${card.id}`);
}
const directCount = allCards.filter((card) => Boolean(card.directAnswer)).length;
assert(directCount === 625, 'Todos os 625 flashcards possuem resposta direta');
assert(new Set(allCards.map((card) => card.id)).size === allCards.length, 'IDs de flashcards são únicos');
assert(Object.keys(sandbox.window.VERSA_PRIORITY_FLASHCARDS.basisByCourse).length === 6, 'Metodologia estratégica disponível nos seis cursos com baralho prioritário');
for (const [courseId, basis] of Object.entries(sandbox.window.VERSA_PRIORITY_FLASHCARDS.basisByCourse)) {
  assert(Boolean(basis.methodology), `Metodologia preenchida em ${courseId}`);
  assert(Array.isArray(basis.sources) && basis.sources.length > 0, `Fontes preenchidas em ${courseId}`);
  assert(basis.sources.every((source) => /^https:\/\//.test(source.url)), `Links HTTPS válidos em ${courseId}`);
}

const baseTime = Date.parse('2026-08-08T12:00:00.000Z');
const again = engine.schedule(null, 'again', baseTime);
const hard = engine.schedule(null, 'hard', baseTime);
const good = engine.schedule(null, 'good', baseTime);
const easy = engine.schedule(null, 'easy', baseTime);
assert(Date.parse(again.due) - baseTime === 10 * 60 * 1000, 'Errei agenda em 10 minutos');
assert(hard.intervalDays === 1, 'Difícil inicia com intervalo de um dia');
assert(good.intervalDays === 3, 'Bom inicia com intervalo de três dias');
assert(easy.intervalDays === 7, 'Fácil inicia com intervalo de sete dias');
assert(engine.isDue({ due:'2026-08-08T11:59:00.000Z' }, baseTime), 'Cartão vencido é reconhecido');
assert(!engine.isDue({ due:'2026-08-08T12:01:00.000Z' }, baseTime), 'Cartão futuro não é considerado vencido');

const legacy = sandbox.window.__VERSA_NORMALIZE_PROGRESS({ completed:['old-lesson'], xp:77, errors:[] });
assert(legacy.completed[0] === 'old-lesson', 'Migração preserva lições antigas');
assert(legacy.xp === 77, 'Migração preserva XP antigo');
assert(Boolean(legacy.flashcards.cards), 'Migração adiciona armazenamento de flashcards');
assert(Array.isArray(legacy.simulations), 'Migração completa campos ausentes');

if (failures.length) {
  console.error(JSON.stringify({ status:'failed', checks, failures }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({
  status:'passed',
  checks,
  summary:{ courses:6, flashcards:allCards.length, directAnswers:directCount, curatedAnswers:sandbox.window.VERSA_FLASHCARDS.curatedAnswerCount, semanticAudit:'passed', cacheKey:'191', counts:expected, migration:'passed', scheduler:'passed' }
}, null, 2));
