import{j as d,u,a as f,c as m,R as h,b as p}from"./vendor.867c4e53.js";const g=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};g();const r=d.exports.jsx,a=d.exports.jsxs,x=({children:o,website:n,newTab:i=!0})=>r("a",{href:n,target:i?"_blank":"_self",children:o}),c=({site:o,link:n})=>r(x,{website:n,children:r("span",{className:"hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-200",children:o})}),y=()=>{const o=u({to:{opacity:1,transform:"translateY(0vh)"},from:{opacity:0,transform:"translateY(4vh)"},config:m.molasses});return r("div",{className:"bg-white dark:bg-black",children:a(f.div,{className:"p-12 space-y-8",style:o,children:[r("h1",{className:"text-4xl",children:"Gavin Fogel"}),r("h2",{className:"text-2xl",children:"Working on building the future of finance. Previously Cornell student."}),a("p",{children:["Currently interested in"," ",r("b",{className:"underline decoration-2 decoration-[#FF7F7F]",children:"consumer fintech user experience"})," ","and all aspects of engeering to enable such."]}),a("div",{className:"flex flex-row space-x-12",children:[r(c,{site:"gavin@fogel.io",link:"mailto:gavin@fogel.io"}),r(c,{site:"Twitter",link:"https://twitter.com/gavinfogel"})]})]})})};h.render(r(p.StrictMode,{children:r(y,{})}),document.getElementById("root"));
