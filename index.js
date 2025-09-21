import{a as B,S as q,i as E}from"./assets/vendor-BSTwZ_tR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const F="52353709-9856f312e72a5e0829ceb9a35";async function p(s,t,i){return(await B("https://pixabay.com/api/",{params:{key:F,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:t,page:i}})).data}const m=document.querySelector(".gallery"),f=document.querySelector(".loader-container"),h=document.querySelector(".more-btn"),P=new q(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});function L(s){console.log(s);const t=[];for(const{webformatURL:i,largeImageURL:l,tags:e,likes:r,views:n,comments:w,downloads:b}of s)t.push(`<li class="gallery-item">
  <a class="gallery-link" href="${l}">
    <img
      class="gallery-image"
      src="${i}"
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
        <p class="gallery-desk-value">${n}</p>
      </li>
      <li class="gallery-desk-item">
        <p class="gallery-desk-key">Comments</p>
        <p class="gallery-desk-value">${w}</p>
      </li>
      <li class="gallery-desk-item">
        <p class="gallery-desk-key">Downloads</p>
        <p class="gallery-desk-value">${b}</p>
      </li>
    </ul>
  </a>
</li>`);m.insertAdjacentHTML("beforeend",t.join(`
`)),P.refresh()}function S(){m.innerHTML=""}function k(){f.classList.remove("is-hidden")}function g(){f.classList.add("is-hidden")}function C(){h.classList.remove("is-hidden")}function u(){h.classList.add("is-hidden")}function $(){window.scrollBy({top:m.firstChild.getBoundingClientRect().height*2,behavior:"smooth"})}const v=15,O=document.querySelector(".more-btn"),R=document.querySelector(".form");let y,o=[],c=1,d;R.addEventListener("submit",async s=>{if(s.preventDefault(),S(),u(),d=s.target.elements.searchText.value.trim(),!d.length){a("Enter key words to search for images");return}k();try{if(c=1,y=await p(d,v,c),g(),o=y.hits,!o.length){a("Sorry, there are no images matching your search query. Please try again!");return}c++,L(o),C(),o.length<15&&(a("We're sorry, but you've reached the end of search results."),u())}catch(t){a(t.message)}});O.addEventListener("click",async s=>{k();try{if(y=await p(d,v,c),g(),o=y.hits,c++,L(o),$(),!o.length){u(),a("Sorry, there are no images matching your search query. Please try again!");return}o.length<15&&(a("We're sorry, but you've reached the end of search results."),u())}catch(t){g(),a(t.message)}});function a(s){E.show({message:s,position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFFFFF",progressBarColor:"#B51B1B",overlayColor:"#FFBEBE"})}
//# sourceMappingURL=index.js.map
