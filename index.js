import{a as g,S as h,i}from"./assets/vendor-DceEIEvX.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const b="33649719-b7fecbfe979c6e7e0b54f5aa7",y=15;async function L(t,s){return(await g.get("https://pixabay.com/api/",{params:{key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:y}})).data}function v(t){const s=document.querySelector(".gallery"),n=t.hits.map(o=>`
        <li class="photo-card">
          <a href="${o.largeImageURL}">
            <img 
              src="${o.webformatURL}" 
              alt="${o.tags}" 
              loading="lazy" 
              class="photo-card-img"
            />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b> ${o.likes}
            </p>
            <p class="info-item">
              <b>Views</b> ${o.views}
            </p>
            <p class="info-item">
              <b>Comments</b> ${o.comments}
            </p>
            <p class="info-item">
              <b>Downloads</b> ${o.downloads}
            </p>
          </div>
        </li>
      `).join("");s.insertAdjacentHTML("beforeend",n),P.refresh()}const w=document.getElementById("search-form"),d=document.querySelector(".load-more"),E=document.querySelector(".gallery"),m=document.querySelector(".loader"),c=document.getElementById("searchQuery"),P=new h(".gallery a",{captionsData:"alt",captionDelay:"250"});let a=1,f="",u=0;w.addEventListener("submit",async t=>{if(t.preventDefault(),f=c.value.trim(),!f){i.error({message:"Please enter a search query"}),c.value="";return}c.value="",a=1,E.innerHTML="",await p()});d.addEventListener("click",async()=>{await p()});async function p(){d.style.display="none",m.style.display="block";try{const t=await L(f,a);if(u=t.totalHits,!t.hits.length){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}if(v(t),a>1){const{height:s}=document.querySelector(".gallery li").getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}a*y<u?d.style.display="block":u!==0&&i.info({message:"We're sorry, but you've reached the end of search results."}),a+=1}catch(t){i.error({message:t.message}),console.error(t)}finally{m.style.display="none"}}
//# sourceMappingURL=index.js.map
