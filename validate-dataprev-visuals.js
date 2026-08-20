#!/usr/bin/env node
'use strict';
const fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.resolve(__dirname,'..'); let checks=0; const failures=[]; const ok=(c,m)=>{checks++;if(!c)failures.push(m)};
class Storage{constructor(){this.m=new Map()}get length(){return this.m.size}key(i){return [...this.m.keys()][i]??null}getItem(k){return this.m.has(k)?this.m.get(k):null}setItem(k,v){this.m.set(String(k),String(v))}removeItem(k){this.m.delete(k)}}
const localStorage=new Storage();localStorage.setItem('versa-profile-v2',JSON.stringify({name:'Visual',dailyMinutes:30,onboarded:true,theme:'light'}));
const rootNode={innerHTML:''};
const sandbox={window:{localStorage,addEventListener:()=>{},removeEventListener:()=>{}},localStorage,URL,console,confirm:()=>true,scrollTo:()=>{},setInterval:()=>1,clearInterval:()=>{},setTimeout,Date,Math,JSON,Object,Array,Set,Map,String,Number,Boolean,RegExp,document:{documentElement:{dataset:{}},getElementById:id=>id==='root'?rootNode:null,querySelector:()=>null,querySelectorAll:()=>[],activeElement:null,addEventListener:()=>{},removeEventListener:()=>{},createElement:()=>({append:()=>{},replaceChildren:()=>{},className:'',textContent:''})},location:{reload:()=>{}}};
sandbox.window.window=sandbox.window;sandbox.window.document=sandbox.document;sandbox.window.URL=URL;sandbox.window.Date=Date;sandbox.window.Math=Math;sandbox.window.confirm=()=>true;sandbox.window.scrollTo=()=>{};
for(const f of ['security-bootstrap.js','cfaq-data.js','dataprev-history-data.js','transpetro-cyber-data.js','pnd-historia-data.js','dataprev-visuals.js','dataprev-visuals-extra.js','course-visuals.js','pnd-historia-visuals.js','flashcards-priority-data.js','flashcards-data.js','flashcards-engine.js','adaptive-engine.js']) vm.runInNewContext(fs.readFileSync(path.join(root,f),'utf8'),sandbox,{filename:f,timeout:15000});
let app=fs.readFileSync(path.join(root,'app.js'),'utf8');app=app.replace(/render\(\);\s*\}\)\(\);?\s*$/,`window.__DV_AUDIT={COURSES,lessonVisual,courseVisualSection};})()`);vm.runInNewContext(app,sandbox,{filename:'app.js',timeout:30000});
const t=sandbox.window.__DV_AUDIT, c=t&&t.COURSES.dataprev, base=sandbox.window.VERSA_DATAPREV_VISUALS||{}, extra=sandbox.window.VERSA_DATAPREV_EXTRA_VISUALS||{};
ok(Boolean(c),'Curso DATAPREV carregado no runtime');
ok(c.lessons.length===133,`DATAPREV deve possuir 133 microlições reais; encontrou ${c.lessons.length}`);
ok(Object.keys(base).length===77,'Catálogo visual base preserva 77 entradas');
ok(Object.keys(extra).length===56,'Catálogo visual complementar possui 56 entradas');
ok(new Set([...Object.keys(base),...Object.keys(extra)]).size===133,'133 IDs visuais únicos');
const supported=['flow','hub','switch','ap','compare','topology','stack','packet','grid','timeline','mapping','address','split','table','bars','triangle','cycle','formula','focus'];
let rendered=0;
for(const l of c.lessons){
 const v=t.lessonVisual(c,l); ok(Boolean(v),`Sem visual para ${l.id}`); if(!v) continue; rendered++;
 ok(supported.includes(v.type),`${l.id}: tipo visual suportado`);
 ok(typeof v.title==='string'&&v.title.length>=5,`${l.id}: título visual`);
 ok(typeof v.caption==='string'&&v.caption.length>=10,`${l.id}: legenda visual`);
 ok(Array.isArray(v.items)&&v.items.length>=1,`${l.id}: itens visuais`);
 ok(Array.isArray(v.steps)&&v.steps.length>=3,`${l.id}: ao menos 3 passos guiados`);
 v.steps.slice(0,3).forEach((s,i)=>ok(typeof s==='string'&&s.length>=8,`${l.id}: passo ${i+1} válido`));
 const html=t.courseVisualSection(c,l);ok(/DEMONSTRAÇÃO VISUAL/.test(html)&&/data-visual-step/.test(html),`${l.id}: render visual interativo`);
}
ok(rendered===133,'Todos os 133 visuais DATAPREV renderizam');
const extraIds=Object.keys(extra);ok(extraIds.every(id=>c.lessons.some(l=>l.id===id)), 'Todos os 56 visuais adicionais apontam para microlições existentes');
const index=fs.readFileSync(path.join(root,'index.html'),'utf8');const b=index.indexOf('dataprev-visuals.js'),e=index.indexOf('dataprev-visuals-extra.js'),a=index.indexOf('app.js');ok(b>0&&e>b&&a>e,'Catálogos DATAPREV carregam antes do app e na ordem correta');
const payload={status:failures.length?'failed':'passed',checks,failures,summary:{dataprevLessons:c?c.lessons.length:0,baseVisuals:Object.keys(base).length,extraVisuals:Object.keys(extra).length,totalVisuals:rendered,coverage:`${rendered}/133`}};console.log(JSON.stringify(payload,null,2));if(failures.length)process.exit(1);
