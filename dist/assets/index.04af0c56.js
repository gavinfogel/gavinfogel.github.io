import{j as d,u,a as f,c as m,R as h,b as p}from"./vendor.867c4e53.js";const g=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}};g();const t=d.exports.jsx,l=d.exports.jsxs,x=({children:i,website:n,newTab:s=!0})=>t("a",{href:n,target:s?"_blank":"_self",children:i}),a=({site:i,link:n})=>t(x,{website:n,children:t("span",{className:"hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-200",children:i})}),y=()=>{const i=u({to:{opacity:1,transform:"translateY(0vh)"},from:{opacity:0,transform:"translateY(4vh)"},config:m.molasses});return t("div",{className:"bg-white dark:bg-black",children:l(f.div,{className:"p-12 space-y-8",style:i,children:[t("h1",{className:"text-4xl",children:"Gavin Fogel"}),t("h2",{className:"text-2xl",children:"Working on building the future of finance. Previously Cornell student."}),l("p",{children:["Currently interested in"," ",t("b",{className:"underline decoration-2 decoration-[#FF7F7F]",children:"consumer fintech user experience"})," ","and all aspects of engeering to enable such."]}),l("div",{className:"flex flex-row space-x-12",children:[t(a,{site:"Blog",link:""}),t(a,{site:"Twitter",link:"https://twitter.com/gavinfogel"}),t(a,{site:"LinkedIn",link:""})]})]})})};h.render(t(p.StrictMode,{children:t(y,{})}),document.getElementById("root"));