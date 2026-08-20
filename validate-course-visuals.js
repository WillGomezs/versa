#!/usr/bin/env node
'use strict';
const fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.resolve(__dirname,'..');
const app=fs.readFileSync(path.join(root,'app.js'),'utf8');
const css=fs.readFileSync(path.join(root,'styles.css'),'utf8');
const index=fs.readFileSync(path.join(root,'index.html'),'utf8');
const code=fs.readFileSync(path.join(root,'course-visuals.js'),'utf8');
const pndCode=fs.readFileSync(path.join(root,'pnd-historia-visuals.js'),'utf8');
const sandbox={window:{}}; vm.createContext(sandbox); vm.runInContext(code,sandbox); vm.runInContext(pndCode,sandbox);
const visuals=sandbox.window.VERSA_COURSE_VISUALS;
let checks=0; const failures=[]; const ok=(c,m)=>{checks++;if(!c)failures.push(m)};
ok(visuals&&typeof visuals==='object','Catálogo visual das demais trilhas exposto');
const expected={ason:80,ibge:98,cfaq:30,'transpetro-cyber':64,'pnd-historia':100};
const supported=['flow','hub','switch','ap','compare','topology','stack','packet','grid','timeline','mapping','address','split','table','bars','triangle','cycle','formula','focus'];
for(const [cid,count] of Object.entries(expected)){
  const cat=visuals?.[cid]||{}; ok(Object.keys(cat).length===count,`${cid}: ${count} visuais esperados`);
  for(const [id,v] of Object.entries(cat)){
    ok(supported.includes(v.type),`${id}: tipo visual suportado`);
    ok(typeof v.title==='string'&&v.title.length>=8,`${id}: título visual`);
    ok(typeof v.caption==='string'&&v.caption.length>=12,`${id}: legenda visual`);
    ok(Array.isArray(v.items)&&v.items.length>=1,`${id}: itens visuais`);
    ok(Array.isArray(v.steps)&&v.steps.length>=3,`${id}: três passos guiados`);
    v.steps.slice(0,3).forEach((x,i)=>ok(typeof x==='string'&&x.length>=8,`${id}: passo ${i+1}`));
    if(v.type==='formula') ok(typeof v.formula==='string'&&v.formula.length>=3,`${id}: exemplo/fórmula central`);
    if(v.type==='focus') ok(typeof v.focus==='string'&&v.focus.length>=3,`${id}: exemplo central`);
    if(v.type==='table') ok(v.table&&Array.isArray(v.table.rows)&&v.table.rows.length>=1,`${id}: tabela visual`);
  }
}
ok(app.includes('function lessonVisual(c, l)'),'Resolver visual por trilha presente');
ok(app.includes('function courseVisualSection(c, l)'),'Renderer visual genérico presente');
ok(app.includes('v.type === "formula"'),'Renderer de fórmula presente');
ok(app.includes('v.type === "focus"'),'Renderer de exemplo focado presente');
ok(app.includes('Boolean(lessonVisual(c, l))'),'Mapa da trilha sinaliza visual em todas as trilhas');
ok(css.includes('.dv-formula')&&css.includes('.dv-focus'),'CSS para fórmula e exemplo visual presente');
ok(index.includes('course-visuals.js') && index.includes('pnd-historia-visuals.js'),'Catálogo das demais trilhas carregado');
ok(index.indexOf('pnd-historia-visuals.js')<index.indexOf('app.js'),'Catálogo carrega antes do app');
const payload={status:failures.length?'failed':'passed',checks,failures,summary:{courses:5,visuals:Object.values(expected).reduce((a,b)=>a+b,0),expected}};
console.log(JSON.stringify(payload,null,2)); if(failures.length) process.exit(1);
