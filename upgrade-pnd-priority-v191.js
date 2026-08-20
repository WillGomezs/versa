#!/usr/bin/env node
'use strict';
const fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.resolve(__dirname,'..');
const sandbox={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root,'pnd-historia-data.js'),'utf8'),sandbox);
vm.runInNewContext(fs.readFileSync(path.join(root,'flashcards-priority-data.js'),'utf8'),sandbox);
const c=sandbox.window.PND_HISTORIA_DATA;
const old=sandbox.window.VERSA_PRIORITY_FLASHCARDS;
const basisByCourse=JSON.parse(JSON.stringify(old.basisByCourse));
const cardsByCourse=JSON.parse(JSON.stringify(old.cardsByCourse));
const officialCounts=new Map();
for(const q of c.questions.filter(q=>q.official===true)) officialCounts.set(q.lessonId,(officialCounts.get(q.lessonId)||0)+1);
const unitById=new Map(c.units.map(u=>[u.id,u]));
const ranked=c.lessons.map(l=>({l,count:officialCounts.get(l.id)||0,disc:unitById.get(l.unitId)?.discipline||l.discipline||''}));
const selected=[
  ...ranked.filter(x=>x.disc==='Formação Geral Docente').sort((a,b)=>b.count-a.count||a.l.order-b.l.order).slice(0,8),
  ...ranked.filter(x=>x.disc==='Componente Específico — História').sort((a,b)=>b.count-a.count||a.l.order-b.l.order).slice(0,12)
];
cardsByCourse['pnd-historia']=selected.map((x,i)=>({
  id:`pnd-hi-${String(i+1).padStart(3,'0')}`,
  lessonId:x.l.id,
  front:`O que você precisa dominar sobre “${x.l.title}” para a PND?`,
  back:x.l.summary||x.l.objective,
  details:(x.l.points||[]).slice(0,4),
  incidence:x.count?`Tema associado a ${x.count} questão${x.count===1?'':'ões'} oficial${x.count===1?'':'is'} nas duas aplicações de 2025 catalogadas na trilha.`:'Tema estratégico por peso curricular e poder de transferência para a prova.',
  priority:'high'
}));
basisByCourse['pnd-historia']={
  label:'Duas aplicações oficiais PND História 2025',
  evidence:'provas-oficiais',
  methodology:'Seleção de 20 cartões estratégicos a partir da incidência das 159 questões oficiais válidas catalogadas nas duas aplicações de 2025, com balanceamento entre Formação Geral Docente e Componente Específico de História. Frequência histórica não é previsão de cobrança futura.',
  sample:'20 cartões: 8 de Formação Geral Docente e 12 de História, preservando aproximadamente o peso relativo dos blocos e priorizando lições com maior incidência no banco oficial.',
  sources:[
    {label:'PND — Provas e Gabaritos',url:'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/prova-nacional-docente/provas-e-gabaritos'},
    {label:'PND — página institucional',url:'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/prova-nacional-docente'}
  ]
};
const out=`/* Versa Concursos — flashcards estratégicos v1.9.1. */\n(() => {\n  'use strict';\n  const basisByCourse = ${JSON.stringify(basisByCourse,null,2)};\n  const cardsByCourse = ${JSON.stringify(cardsByCourse,null,2)};\n  window.VERSA_PRIORITY_FLASHCARDS = Object.freeze({version:'1.9.1',basisByCourse:Object.freeze(basisByCourse),cardsByCourse:Object.freeze(cardsByCourse)});\n})();\n`;
fs.writeFileSync(path.join(root,'flashcards-priority-data.js'),out,'utf8');
console.log(JSON.stringify({status:'ok',pndCards:cardsByCourse['pnd-historia'].length,fgd:selected.filter(x=>x.disc==='Formação Geral Docente').length,hist:selected.filter(x=>x.disc.includes('História')).length},null,2));
