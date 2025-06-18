import{a as y,i,S as p}from"./assets/vendor-DceEIEvX.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function g(s){const o=document.querySelector(".gallery"),n=s.hits.map(r=>`
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
      `).join("");o.insertAdjacentHTML("beforeend",n),E.refresh()}const h="33649719-b7fecbfe979c6e7e0b54f5aa7",c=15;let l=1,d="",u=0;async function m(s){const o=document.querySelector(".gallery"),n=document.querySelector(".loader"),r=document.querySelector(".load-more"),e=document.getElementById("searchQuery");s!==void 0&&(d=s.trim(),l=1,o.innerHTML=""),r.style.display="none",n.style.display="block",e.value="";try{const a=(await y.get("https://pixabay.com/api/",{params:{key:h,q:d,image_type:"photo",orientation:"horizontal",safesearch:!0,page:l,per_page:c}})).data;if(u=a.totalHits,!a.hits.length){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}if(g(a),l>1){const{height:f}=document.querySelector(".gallery li").getBoundingClientRect();window.scrollBy({top:f*2,behavior:"smooth"})}l*c<u?r.style.display="block":i.info({message:"We're sorry, but you've reached the end of search results."}),l+=1}catch(t){i.error({message:t.message}),console.error(t)}finally{n.style.display="none"}}const b=document.getElementById("search-form"),L=document.querySelector(".load-more"),E=new p(".gallery a",{captionsData:"alt",captionDelay:"250"});b.addEventListener("submit",s=>{s.preventDefault();const{value:o}=s.currentTarget.elements.searchQuery;m(o)});L.addEventListener("click",()=>{m()});
//# sourceMappingURL=index.js.map
