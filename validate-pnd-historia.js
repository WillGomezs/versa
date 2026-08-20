#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.resolve(__dirname, '..');
const failures=[]; let checks=0;
const assert=(c,m)=>{checks++; if(!c) failures.push(m);};
const sandbox={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root,'pnd-historia-data.js'),'utf8'),sandbox,{filename:'pnd-historia-data.js'});
vm.runInNewContext(fs.readFileSync(path.join(root,'course-visuals.js'),'utf8'),sandbox,{filename:'course-visuals.js'});
vm.runInNewContext(fs.readFileSync(path.join(root,'pnd-historia-visuals.js'),'utf8'),sandbox,{filename:'pnd-historia-visuals.js'});
const c=sandbox.window.PND_HISTORIA_DATA, visuals=sandbox.window.VERSA_COURSE_VISUALS?.['pnd-historia']||{};
assert(Boolean(c),'Trilha PND carregada');
assert(c.id==='pnd-historia','ID correto');
assert(c.units.length===20,'20 módulos');
assert(c.lessons.length===100,'100 microlições');
assert(c.questions.length===352,'352 questões');
assert(c.diagnosticIds.length===30,'30 itens diagnósticos');
assert(c.videoCatalog.length===100,'100 recursos audiovisuais, um por microlição');
assert(Array.isArray(c.discursivePrompts)&&c.discursivePrompts.length===5,'5 propostas discursivas');
assert(Array.isArray(c.historicalProofs)&&c.historicalProofs.length===2,'2 provas históricas configuradas');
assert(Object.keys(visuals).length===100,'100 visuais');
assert(Object.keys(c.textBases||{}).length>=20,'Textos-base oficiais integrados');
const official=c.questions.filter(q=>q.official===true);
const authorial=c.questions.filter(q=>q.official!==true);
assert(official.length===159,'159 questões oficiais válidas recuperadas das duas aplicações');
assert(authorial.length===193,'193 questões autorais/transferência');
const lessonIds=new Set(c.lessons.map(l=>l.id)), qids=new Set(c.questions.map(q=>q.id)), vids=new Set(c.videoCatalog.map(v=>v.id));
assert(lessonIds.size===100,'IDs de lição únicos');
assert(qids.size===352,'IDs de questão únicos');
for(const l of c.lessons){
 assert(l.questionIds.length>=2,`${l.id}: ao menos 2 questões`);
 assert(l.questionIds.every(id=>qids.has(id)),`${l.id}: referências de questões válidas`);
 assert(Boolean(visuals[l.id]),`${l.id}: visual presente`);
 assert((l.videoIds||[]).every(id=>vids.has(id)),`${l.id}: referências audiovisuais válidas`);
 assert((l.videoIds||[]).length>=1,`${l.id}: cobertura audiovisual presente`);
}
assert(!qids.has('pnd-h2025-a1-71'),'Item anulado da 1ª aplicação não integra o banco');
assert(!official.some(q=>/qual foi o tempo gasto por você para concluir a prova/i.test(q.statement+' '+q.options.join(' '))),'Questionário de percepção não contaminou o banco oficial');
for(const q of c.questions){
 assert(lessonIds.has(q.lessonId),`${q.id}: lessonId válido`);
 assert(Array.isArray(q.options)&&q.options.length===4,`${q.id}: 4 alternativas`);
 assert(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4,`${q.id}: gabarito válido`);
 if(q.official){
  assert(q.examYear===2025,`${q.id}: ano oficial`);
  assert(/gabarito oficial/i.test(q.sourceStatus||''),`${q.id}: origem oficial declarada`);
  assert(/^assets\/pnd\/.+\.webp$/.test(q.image||''),`${q.id}: página oficial associada`);
  assert(fs.existsSync(path.join(root,q.image)),`${q.id}: imagem oficial existe`);
 }
}
for(const id of c.diagnosticIds) assert(qids.has(id),`Diagnóstico referencia ${id}`);
for(const f of ['2025_historia_PV_1.pdf','2025_historia_GB_1.pdf','2025_historia_PV_5.pdf','2025_historia_GB_5.pdf']) assert(fs.existsSync(path.join(root,'documentos/pnd-historia',f)),`Fonte empacotada: ${f}`);
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert(html.includes('pnd-historia-data.js?v=191'),'index carrega dados PND');
assert(html.includes('pnd-historia-visuals.js?v=191'),'index carrega visuais PND');
assert(html.indexOf('pnd-historia-data.js')<html.indexOf('flashcards-data.js'),'Dados PND antes de flashcards');
assert(html.indexOf('pnd-historia-visuals.js')<html.indexOf('app.js'),'Visuais PND antes do app');
const app=fs.readFileSync(path.join(root,'app.js'),'utf8');
assert(app.includes('type.startsWith("pnd-proof:")'),'simPool possui provas oficiais PND');
assert(app.includes('type === "pnd-completo"'),'simPool possui modelo PND completo');
assert(app.includes('id="pnd-discursive-start"'),'tela de simulados oferece treino discursivo');
assert(app.includes('function pndDiscursiveView'),'treinador discursivo implementado');
const suspicious=/[\u0100-\u024F\u1E00-\u1EFF]/;
assert(!Object.values(c.textBases||{}).some(tb=>suspicious.test(tb.text||'')),'textos-base sem glifos corrompidos');
assert(!official.some(q=>[q.statement,q.explanation,...(q.options||[])].some(v=>suspicious.test(String(v||'')))),'questões oficiais sem glifos corrompidos');
const a1=official.filter(q=>q.id.startsWith('pnd-h2025-a1-')), a2=official.filter(q=>q.id.startsWith('pnd-h2025-a2-'));
assert(a1.length===79,'1ª aplicação preserva 79 itens válidos');
assert(a2.length===80,'2ª aplicação preserva 80 itens válidos');
const report={status:failures.length?'failed':'passed',checks,failures,summary:{course:'pnd-historia',units:c.units.length,lessons:c.lessons.length,questions:c.questions.length,official:official.length,authorial:authorial.length,diagnostic:c.diagnosticIds.length,videos:c.videoCatalog.length,visuals:Object.keys(visuals).length,textBases:Object.keys(c.textBases||{}).length}};
console.log(JSON.stringify(report,null,2));
if(failures.length) process.exit(1);
