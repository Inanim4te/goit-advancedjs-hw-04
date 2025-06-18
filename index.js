import{a as l,i,S as c}from"./assets/vendor-DceEIEvX.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function u(s){const o=document.querySelector(".gallery"),a=s.hits.map(r=>`
        <li class="photo-card">
          <a href="${r.largeImageURL}">
            <img 
              src="${r.webformatURL}" 
              alt="${r.tags}" 
              loading="lazy" 
              class="photo-card-img"
            />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b> ${r.likes}
            </p>
            <p class="info-item">
              <b>Views</b> ${r.views}
            </p>
            <p class="info-item">
              <b>Comments</b> ${r.comments}
            </p>
            <p class="info-item">
              <b>Downloads</b> ${r.downloads}
            </p>
          </div>
        </li>
      `).join("");o.insertAdjacentHTML("beforeend",a),y.refresh()}const d="33649719-b7fecbfe979c6e7e0b54f5aa7";async function m(){const s=document.querySelector(".gallery"),o=document.querySelector(".loader"),a=document.getElementById("searchQuery");s.innerHTML="",o.style.display="block";const r=a.value.trim();a.value="";try{const t=(await l.get("https://pixabay.com/api",{params:{key:d,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data;if(!t.hits.length){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}u(t)}catch(e){i.error({message:e.message}),console.error(e)}finally{o.style.display="none"}}const f=document.getElementById("search-form"),y=new c(".gallery a",{captionsData:"alt",captionDelay:"250"});f.addEventListener("submit",s=>{s.preventDefault(),m()});
//# sourceMappingURL=index.js.map
