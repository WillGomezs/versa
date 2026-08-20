#!/usr/bin/env node
'use strict';
const fs = require('fs');
const vm = require('vm');
const path = require('path');
const root = path.resolve(__dirname, '..');
const file = path.join(root, 'pnd-historia-data.js');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: file });
const course = sandbox.window.PND_HISTORIA_DATA;
if (!course) throw new Error('PND_HISTORIA_DATA não carregado');

// Seleção editorial v1.9.1. Os vídeos foram conferidos como URLs diretas em 19/08/2026.
// A curadoria é modular: uma aula panorâmica pode apoiar mais de uma microlição do mesmo módulo.
const picks = [
  { from:1,  to:5,   id:'DdywNdXF56I', title:'Principais teóricos — Piaget, Vygotsky e Wallon' },
  { from:6,  to:10,  id:'oc2kel1oUgg', title:'Currículo e Projeto Político-Pedagógico (PPP)' },
  { from:11, to:15,  id:'eSakBWAck-s', title:'Educação Especial na perspectiva inclusiva' },
  { from:16, to:20,  id:'nySOKUUmPBI', title:'Modalidades de ensino e organização da educação' },
  { from:21, to:25,  id:'P_o1zJ3Ivc4', title:'Projetos pedagógicos e articulação entre saberes' },
  { from:26, to:30,  id:'RuaVOhDDxm8', title:'Teoria e metodologia da História — conceitos e prática' },
  { from:31, to:35,  id:'5iv9FWnBb40', title:'Jörn Rüsen: consciência histórica e ensino de História' },
  { from:36, to:40,  id:'2iXEy8XrEn4', title:'Imagens e cultura material para o ensino de História' },
  { from:41, to:45,  id:'UpQH2upHsMI', title:'Patrimônio cultural, diversidade e memória pública' },
  { from:46, to:50,  id:'V1WO1Ml4MRE', title:'Correntes historiográficas: positivismo, marxismo e Annales' },
  { from:51, to:55,  id:'p6IxQbme1pI', title:'Brasil Colônia — síntese histórica' },
  { from:56, to:56,  id:'eERlMeLvQlI', title:'Brasil Império — formação política após a Independência' },
  { from:57, to:57,  id:'dZown3gnsn4', title:'Escravismo e abolicionismo no Brasil do século XIX' },
  { from:58, to:58,  id:'eERlMeLvQlI', title:'Brasil Império — formação política e conflitos do século XIX' },
  { from:59, to:59,  id:'dZown3gnsn4', title:'Escravismo, abolicionismo e pós-abolição' },
  { from:60, to:60,  id:'eERlMeLvQlI', title:'Brasil Império — sociedade, Estado e memória' },
  { from:61, to:62,  id:'jQU6Ojetq8M', title:'Era Vargas e transformações políticas e sociais' },
  { from:63, to:65,  id:'0A8fvJKzhcc', title:'Ditadura militar brasileira — aula completa' },
  { from:66, to:70,  id:'5VZsgjM5hR8', title:'PND — cultura afro-brasileira e indígena' },
  { from:71, to:75,  id:'wSd3t8xjxG4', title:'Ensino de História Indígena e Lei 11.645/2008' },
  { from:76, to:80,  id:'uGdMk8672-Y', title:'Gênero, sexualidade e ensino de História' },
  { from:81, to:81,  id:'uQusckgMaBg', title:'História Antiga e suas fontes — curso introdutório' },
  { from:82, to:84,  id:'CTIs_RSPr84', title:'Idade Média — síntese e problematização histórica' },
  { from:85, to:85,  id:'2iXEy8XrEn4', title:'Fontes, imagens e cultura material no ensino de História' },
  { from:86, to:90,  id:'WyyTi8kBLuk', title:'Idade Contemporânea — revoluções, industrialização e imperialismo' },
  { from:91, to:91,  id:'uwphyPZFodk', title:'Independências na América Latina' },
  { from:92, to:92,  id:'5-MPVrWPH_k', title:'Expansão territorial dos EUA e remoção indígena' },
  { from:93, to:93,  id:'7ThB9lVSVaM', title:'História Geral da África — perspectivas e ensino' },
  { from:94, to:94,  id:'QfJ52nFHbPs', title:'História global, história conectada e variações de escala' },
  { from:95, to:95,  id:'f5xNwn-S3_8', title:'Relações entre o global e o local' },
  { from:96, to:96,  id:'D50EgRY2bhk', title:'O lugar da História no Tempo Presente' },
  { from:97, to:97,  id:'XF6GBJGVGCI', title:'Como enfrentar o negacionismo histórico' },
  { from:98, to:98,  id:'ccX3BDu7B9k', title:'Fontes históricas, incluindo fontes digitais' },
  { from:99, to:99,  id:'YbaQXJntz4E', title:'Desafios contemporâneos e ensino de História' },
  { from:100,to:100, id:'KLKba0krcoI', title:'Aulão de História — Prova Nacional Docente (PND)' }
];
function pickFor(n){ return picks.find(p => n >= p.from && n <= p.to); }
for (const video of course.videoCatalog) {
  const n = Number(video.id.match(/(\d+)$/)?.[1]);
  const pick = pickFor(n);
  if (!pick) throw new Error(`Sem seleção para ${video.id}`);
  const lesson = course.lessons.find(l => l.id === `pnd-l${String(n).padStart(3,'0')}`);
  video.title = `Videoaula selecionada — ${lesson ? lesson.title : pick.title}`;
  video.channel = 'YouTube · seleção editorial v1.9.1';
  video.url = `https://www.youtube.com/watch?v=${pick.id}`;
  video.youtubeId = pick.id;
  video.type = 'video';
  video.curated = true;
  video.why = `Link direto selecionado para apoiar esta microlição. Aula de referência: ${pick.title}. Use a explicação e as questões do Versa como eixo principal do estudo.`;
}
course.videoReviewDate = '19/08/2026';
course.coverage = Object.assign({}, course.coverage, {
  videoLessonsCovered: 100,
  directVideoLessons: 100,
  videoCuration: 'direct-module-curation-v1'
});
fs.writeFileSync(file, `/* Versa Concursos — trilha PND História 2025 v1.9.1. */\n(() => {\n  "use strict";\n  const PND_HISTORIA_DATA = ${JSON.stringify(course, null, 2)};\n  window.PND_HISTORIA_DATA = PND_HISTORIA_DATA;\n})();\n`);
const unique = new Set(course.videoCatalog.map(v=>v.youtubeId));
console.log(JSON.stringify({status:'ok',videos:course.videoCatalog.length,direct:course.videoCatalog.filter(v=>v.youtubeId).length,uniqueDirect:unique.size,reviewDate:course.videoReviewDate},null,2));
