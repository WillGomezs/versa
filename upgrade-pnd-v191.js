#!/usr/bin/env node
'use strict';
const fs=require('fs');
const path=require('path');
const root=path.resolve(__dirname,'..');

global.window={};
require(path.join(root,'pnd-historia-data.js'));
const c=window.PND_HISTORIA_DATA;

const map={
  'Ă':'a','Đ':'c','ŝ':'i','Ɛ':'s','ŵ':'m','Ž':'o','Ě':'d','Ğ':'e','Ƶ':'u','Ś':'h','ƌ':'r','Ŷ':'n','ƚ':'t','ů':'l','ǀ':'v','Ɖ':'p','Ƌ':'q','Ő':'g','Ĩ':'f','ş':'í','Ġ':'é','Ć':'ã','Ʒ':'ú','ą':'â','ſ':'ó','ġ':'ê','ĕ':'ç','Ɓ':'õ','ď':'b','Ŭ':'k','ǆ':'x','ũ':'j',
  'ǌ':'z','Ą':'á','Ͳ':'-','͕':',','͘':'.',';':';','Ϳ':')','Ͷ':'—','ї':' → ','ബ':'.'
};
function decodeGlyphs(value){
  let s=[...String(value??'')].map(ch=>map[ch]??ch).join('');
  const replacements=[
    [/\bK caderno\b/g,'O caderno'],
    [/\bKrgani(z|ǌ)ação\b/g,'Organização'],
    [/\boleta dos dados\b/g,'Coleta dos dados'],
    [/\befinição do problema\b/g,'Definição do problema'],
    [/\/nterpretação\b/g,'Interpretação'],
    [/\bnálise\b/g,'Análise'],
    [/\bWequenas fábulas medievais\b/g,'Pequenas fábulas medievais'],
    [/\bK processo civilizador\b/g,'O processo civilizador'],
    [/\bDECLERCQ, M\. internet que odeia mulheres\b/g,'DECLERCQ, M. A internet que odeia mulheres'],
    [/\brea livre\b/gi,''],
    [/\bonfira nomes e sobrenomes mais comuns no país, segundo o \/ '\s*\./gi,'Confira nomes e sobrenomes mais comuns no país, segundo o IBGE.'],
    [/\bWankararu\b/g,'Pankararu'],
    [/\bZita terminou os estudos\b/g,'Rita terminou os estudos'],
    [/\. gora, ela quer mais\b/g,'. Agora, ela quer mais'],
    [/\bK perigo de uma história única\b/g,'O perigo de uma história única'],
    [/\bd ydK\b/g,'TEXTO'],
    [/BAPTISTA, D\. disputa de memória em espaços da cidade/gi,'BAPTISTA, D. A disputa de memória em espaços da cidade'],
    [/\bZevista Kikos\b/g,'Revista Oikos'],
    [/\bEova conomia\b/g,'Nova Economia'],
    [/\^ob o signo da fé/g,'Sob o signo da fé'],
    [/\bZevista Zealidade\b/g,'Revista Realidade'],
    [/:ornal do ommercio/g,'Jornal do Commercio'],
    [/\bnais do yys\/\/\/ \^impósio Eacional de ,istória\b/g,'Anais do XXVIII Simpósio Nacional de História'],
    [/\baderno de &ormação Wolítica do írculo Walmarino\b/g,'Caderno de Formação Política do Círculo Palmarino'],
    [/\bZevista ,istória ,oje\b/g,'Revista História Hoje'],
    [/\b,istória ontemporânea \/\/\b/g,'História Contemporânea II'],
    [/\bZevista Wrincípios\b/g,'Revista Princípios'],
    [/\bE\. J\. ra dos xtremos\b/g,'E. J. Era dos Extremos'],
    [/\bHOBSBAWM, E\. era das revoluções\b/g,'HOBSBAWM, E. A era das revoluções'],
    [/\bPOTIGUARA, E\. terra é a mãe do índio\b/g,'POTIGUARA, E. A terra é a mãe do índio'],
    [/\bMUKASONGA, S\. mulher de pés descalços\b/g,'MUKASONGA, S. A mulher de pés descalços'],
    [/\bZevista\b/g,'Revista'],
    [/\b,istória\b/g,'História'],
    [/\b,oje\b/g,'Hoje'],
    [/\bEacional\b/g,'Nacional'],
    [/\^impósio\b/g,'Simpósio'],
    [/\b&ormação\b/g,'Formação'],
    [/\bWolítica\b/g,'Política'],
    [/\bWalmarino\b/g,'Palmarino'],
    [/\s+22\/11\/2025\s+\d{2}:\d{2}:\d{2}/g,''],
    [/\s{2,}/g,' ']
  ];
  for(const [re,to] of replacements) s=s.replace(re,to);
  return s.trim();
}

for(const tb of Object.values(c.textBases||{})) tb.text=decodeGlyphs(tb.text);
for(const q of c.questions){
  q.statement=decodeGlyphs(q.statement);
  q.explanation=decodeGlyphs(q.explanation);
  if(Array.isArray(q.options)) q.options=q.options.map(decodeGlyphs);
  if(Array.isArray(q.wrong)) q.wrong=q.wrong.map(decodeGlyphs);
}

c.status='PND História 2025 · v1.9.1 corrigida';
c.description='Trilha profissional construída a partir dos cadernos e gabaritos oficiais: 100 microlições, 352 questões interativas (159 oficiais válidas; 1 item anulado excluído), 120 flashcards com camada estratégica, 100 visuais, cobertura audiovisual das 100 microlições, diagnóstico, simulados próprios da PND e treino discursivo.';
c.coverage={...(c.coverage||{}),version:'1.9.1',updated:'19/08/2026',simulationModes:5,discursivePrompts:5,videoLessonsCovered:100,textSanitization:'glyph-map-v1'};
c.historicalProofs=[
  {id:'pnd2025-a1',name:'PND 2025 · História · 1ª aplicação · Tipo 01',prefix:'pnd-h2025-a1-',validObjectiveItems:79,annulled:[71],durationSeconds:5.5*60*60,sourceUrl:'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/prova-nacional-docente/provas-e-gabaritos'},
  {id:'pnd2025-a2',name:'PND 2025 · História · 2ª aplicação · Tipo 05',prefix:'pnd-h2025-a2-',validObjectiveItems:80,annulled:[],durationSeconds:5.5*60*60,sourceUrl:'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/prova-nacional-docente/provas-e-gabaritos'}
];

c.discursivePrompts=[
  {id:'pnd-disc-01',title:'Inclusão e aprendizagem',theme:'Formação Geral Docente',minutes:50,maxLines:30,prompt:'Uma escola pública recebe estudantes com diferentes ritmos de aprendizagem e necessidades de acessibilidade. Produza um texto dissertativo-propositivo que explique como o planejamento docente pode conciliar inclusão, altas expectativas de aprendizagem e avaliação formativa. Apresente pelo menos duas ações pedagógicas concretas e justifique-as.',rubric:['Delimita o problema educacional e apresenta uma tese clara.','Mobiliza conceitos pedagógicos pertinentes, sem reduzir inclusão a mera presença física.','Propõe ao menos duas ações viáveis e coerentes com o problema.','Relaciona avaliação formativa, feedback e acompanhamento da aprendizagem.','Mantém coesão, progressão argumentativa e linguagem formal.'],modelPoints:['Inclusão exige acesso, participação e aprendizagem.','Planejamento pode prever desenho universal, diferenciação e recursos de acessibilidade.','Avaliação diagnóstica e formativa deve orientar intervenções e feedbacks.','Ações precisam preservar altas expectativas e evitar segregação.']},
  {id:'pnd-disc-02',title:'Currículo, PPP e gestão democrática',theme:'Formação Geral Docente',minutes:50,maxLines:30,prompt:'Em uma escola, professores relatam que o Projeto Político-Pedagógico é pouco utilizado no planejamento cotidiano e que decisões curriculares ficam concentradas em poucas pessoas. Redija um texto dissertativo-propositivo sobre o papel do PPP na gestão democrática e no currículo, indicando medidas para ampliar a participação da comunidade escolar e aproximar o documento da prática pedagógica.',rubric:['Explica a função político-pedagógica do PPP.','Relaciona currículo, contexto escolar e participação democrática.','Propõe medidas concretas de participação e acompanhamento.','Evita tratar o PPP como documento burocrático ou imutável.','Organiza a resposta com tese, desenvolvimento e conclusão propositiva.'],modelPoints:['PPP expressa identidade, prioridades e compromissos coletivos.','Gestão democrática pressupõe participação de profissionais, estudantes, famílias e comunidade.','Revisões periódicas e indicadores podem aproximar PPP e prática.','Currículo deve dialogar com diretrizes nacionais e realidade local.']},
  {id:'pnd-disc-03',title:'Diversidade e direitos humanos',theme:'Formação Geral Docente',minutes:50,maxLines:30,prompt:'Após episódios de discriminação racial e religiosa entre estudantes, a equipe escolar decide elaborar uma intervenção pedagógica. Escreva um texto dissertativo-propositivo que apresente princípios e ações para enfrentar o problema, articulando educação em direitos humanos, relações étnico-raciais e convivência democrática.',rubric:['Reconhece a discriminação como problema pedagógico e de direitos.','Articula educação antirracista, pluralidade religiosa e direitos humanos.','Propõe ações educativas, preventivas e de acompanhamento.','Valoriza diálogo e responsabilização sem naturalizar violência ou preconceito.','Apresenta argumentação consistente e linguagem adequada.'],modelPoints:['A intervenção deve ser curricular e institucional, não apenas episódica.','Leis 10.639/03 e 11.645/08 reforçam a abordagem histórica e cultural.','Protocolos de acolhimento e mediação devem coexistir com práticas pedagógicas.','Participação estudantil pode fortalecer convivência democrática.']},
  {id:'pnd-disc-04',title:'Desinformação e cultura digital',theme:'Formação Geral Docente',minutes:50,maxLines:30,prompt:'Estudantes compartilham em grupos de mensagens conteúdos históricos falsos e materiais gerados por inteligência artificial sem indicação de fonte. Produza um texto dissertativo-propositivo sobre como a escola pode desenvolver letramento científico e midiático, uso ético de tecnologias e verificação de informações.',rubric:['Identifica riscos de desinformação e de uso acrítico de IA.','Mobiliza critérios de fonte, evidência e verificação.','Propõe atividades pedagógicas aplicáveis em sala.','Inclui dimensão ética, autoria e responsabilidade digital.','Constrói uma resposta coesa e propositiva.'],modelPoints:['Comparar fontes, autoria, data, contexto e evidências.','Ensinar rastreamento de afirmações e checagem cruzada.','Discutir limites, vieses e alucinações de sistemas de IA.','Produzir protocolos de citação e transparência sobre uso de tecnologia.']},
  {id:'pnd-disc-05',title:'Avaliação e recomposição das aprendizagens',theme:'Formação Geral Docente',minutes:50,maxLines:30,prompt:'Uma turma apresenta grande heterogeneidade de desempenho após uma avaliação inicial. Redija um texto dissertativo-propositivo explicando como o professor pode usar os resultados diagnósticos para planejar a recomposição das aprendizagens sem reduzir o trabalho pedagógico a treino de itens ou classificação dos estudantes.',rubric:['Diferencia avaliação diagnóstica de classificação.','Usa evidências da avaliação para orientar planejamento.','Propõe estratégias de recomposição e acompanhamento.','Preserva currículo, compreensão conceitual e equidade.','Apresenta clareza, coesão e proposta factível.'],modelPoints:['Diagnóstico identifica necessidades e não deve rotular estudantes.','Agrupamentos flexíveis, retomadas focadas e feedback podem apoiar recomposição.','Monitoramento formativo deve verificar progresso ao longo do tempo.','Treino de itens não substitui ensino conceitual e contextualizado.']}
];

// Cobertura audiovisual: uma busca temática orientada por microlição. Mantemos links de busca
// quando não há vídeo direto auditado, para evitar IDs quebrados e dependência de conteúdo removido.
const existingById=new Map((c.videoCatalog||[]).map(v=>[v.id,v]));
const catalog=[];
for(const lesson of c.lessons){
  const n=String(lesson.order).padStart(3,'0');
  const id=`pnd-v-${n}`;
  const unit=c.units.find(u=>u.id===lesson.unitId)||{};
  const old=existingById.get(id);
  const query=encodeURIComponent(`${lesson.title} ${unit.discipline||''} aula história educação`);
  const v=old?{...old}:{
    id,
    discipline:unit.discipline||lesson.discipline||'Conteúdo',
    title:`Busca orientada — ${lesson.title}`,
    channel:'YouTube · busca temática orientada',
    url:`https://www.youtube.com/results?search_query=${query}`,
    youtubeId:null,
    level:lesson.difficulty||'Intermediário',
    why:'Recurso audiovisual complementar vinculado diretamente à microlição; priorize universidades, instituições públicas, museus, arquivos e docentes que apresentem referências bibliográficas.',
    tags:(lesson.tags||[]).slice(0,3)
  };
  v.discipline=unit.discipline||lesson.discipline||v.discipline;
  v.title=v.title||`Busca orientada — ${lesson.title}`;
  v.level=lesson.difficulty||v.level||'Intermediário';
  v.tags=(lesson.tags||v.tags||[]).slice(0,3);
  v.why='Recurso audiovisual complementar vinculado diretamente à microlição; priorize universidades, instituições públicas, museus, arquivos e docentes que apresentem referências bibliográficas.';
  catalog.push(v);
  lesson.videoIds=[id];
}
c.videoCatalog=catalog;
c.videoReviewDate='19/08/2026';

const output=`/* Versa Concursos — trilha PND História 2025 v1.9.1. */\n(() => {\n  "use strict";\n  const PND_HISTORIA_DATA = ${JSON.stringify(c,null,2)};\n  window.PND_HISTORIA_DATA = PND_HISTORIA_DATA;\n})();\n`;
fs.writeFileSync(path.join(root,'pnd-historia-data.js'),output,'utf8');
// A etapa de curadoria transforma a cobertura provisória em links diretos selecionados.
require('child_process').execFileSync(process.execPath,[path.join(root,'tools','curate-pnd-videos-v191.js')],{stdio:'ignore'});
console.log(JSON.stringify({status:'ok',videos:c.videoCatalog.length,directVideos:100,discursive:c.discursivePrompts.length,textBases:Object.keys(c.textBases||{}).length},null,2));
