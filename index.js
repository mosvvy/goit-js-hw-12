import{a as q,S as E,i as F}from"./assets/vendor-BSTwZ_tR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const P="52353709-9856f312e72a5e0829ceb9a35";async function p(s,t,n){return(await q("https://pixabay.com/api/",{params:{key:P,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:t,page:n}})).data}const f=document.querySelector(".gallery"),h=document.querySelector(".loader-container"),L=document.querySelector(".more-btn"),S=new E(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});function k(s){console.log(s);const t=[];for(const{webformatURL:n,largeImageURL:l,tags:e,likes:r,views:c,comments:b,downloads:B}of s)t.push(`<li class="gallery-item">
  <a class="gallery-link" href="${l}">
    <img
      class="gallery-image"
      src="${n}"
      data-source="${l}"
      alt="${e}"
    />
    <ul class="gallery-desc">
      <li class="gallery-desk-item">
        <p class="gallery-desk-key">Likes</p>
        <p class="gallery-desk-value">${r}</p>
      </li>
      <li class="gallery-desk-item">
        <p class="gallery-desk-key">Views</p>
        <p class="gallery-desk-value">${c}</p>
      </li>
      <li class="gallery-desk-item">
        <p class="gallery-desk-key">Comments</p>
        <p class="gallery-desk-value">${b}</p>
      </li>
      <li class="gallery-desk-item">
        <p class="gallery-desk-key">Downloads</p>
        <p class="gallery-desk-value">${B}</p>
      </li>
    </ul>
  </a>
</li>`);f.insertAdjacentHTML("beforeend",t.join(`
`)),S.refresh()}function C(){f.innerHTML=""}function v(){h.classList.remove("is-hidden")}function w(){h.classList.add("is-hidden")}function $(){L.classList.remove("is-hidden")}function y(){L.classList.add("is-hidden")}function O(){window.scrollBy({top:f.firstChild.getBoundingClientRect().height*2,behavior:"smooth"})}const g=15,R=document.querySelector(".more-btn"),I=document.querySelector(".form");let d,o=[],i=1,m,u;I.addEventListener("submit",async s=>{if(s.preventDefault(),C(),y(),u=s.target.elements.searchText.value.trim(),!u.length){a("Enter key words to search for images");return}v();try{if(i=1,d=await p(u,g,i),o=d.hits,m=d.totalHits,!o.length){a("Sorry, there are no images matching your search query. Please try again!");return}k(o),i*g<m&&$(),o.length<15&&(a("We're sorry, but you've reached the end of search results."),y())}catch(t){a(t.message)}finally{w()}});R.addEventListener("click",async s=>{v();try{if(i++,d=await p(u,g,i),o=d.hits,k(o),O(),!o.length){y(),a("Sorry, there are no images matching your search query. Please try again!");return}i*g>=m&&(a("We're sorry, but you've reached the end of search results."),y())}catch(t){a(t.message)}finally{w()}});function a(s){F.show({message:s,position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFFFFF",progressBarColor:"#B51B1B",overlayColor:"#FFBEBE"})}
//# sourceMappingURL=index.js.map
