import{a as g,S as m,i as p}from"./assets/vendor-BSTwZ_tR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();const f="52353709-9856f312e72a5e0829ceb9a35";function h(t){return g("https://pixabay.com/api/",{params:{key:f,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>r)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader-container"),k=new m(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});function L(t){console.log(t);const r=[];for(const{webformatURL:l,largeImageURL:a,tags:e,likes:s,views:o,comments:d,downloads:y}of t)r.push(`<li class="gallery-item">
  <a class="gallery-link" href="${a}">
    <img
      class="gallery-image"
      src="${l}"
      data-source="${a}"
      alt="${e}"
    />
    <ul class="gallery-desc">
      <li class="gallery-desk-item">
        <p class="gallery-desk-key">Likes</p>
        <p class="gallery-desk-value">${s}</p>
      </li>
      <li class="gallery-desk-item">
        <p class="gallery-desk-key">Views</p>
        <p class="gallery-desk-value">${o}</p>
      </li>
      <li class="gallery-desk-item">
        <p class="gallery-desk-key">Comments</p>
        <p class="gallery-desk-value">${d}</p>
      </li>
      <li class="gallery-desk-item">
        <p class="gallery-desk-key">Downloads</p>
        <p class="gallery-desk-value">${y}</p>
      </li>
    </ul>
  </a>
</li>`);c.innerHTML=r.join(`
`),k.refresh()}function v(){c.innerHTML=""}function w(){u.classList.remove("is-hidden")}function F(){u.classList.add("is-hidden")}const b=document.querySelector(".form");let i=[];b.addEventListener("submit",t=>{t.preventDefault(),v();const r=t.target.elements.searchText.value.trim();if(!r.length){n("Enter key words to search for images");return}w(),h(r).then(l=>{if(i=l.hits,F(),L(i),!i.length){n("Sorry, there are no images matching your search query. Please try again!");return}}).catch(l=>{n(l.message)})});function n(t){p.show({message:t,position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFFFFF",progressBarColor:"#B51B1B",overlayColor:"#FFBEBE"})}
//# sourceMappingURL=index.js.map
