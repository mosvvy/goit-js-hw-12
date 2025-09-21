import{a as w,S as b,i as B}from"./assets/vendor-BSTwZ_tR.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const E="52353709-9856f312e72a5e0829ceb9a35",F=15;async function m(r,s){const a=await w("https://pixabay.com/api/",{params:{key:E,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:F,page:s}});return a.data.total_hits,a.data.hits}const g=document.querySelector(".gallery"),p=document.querySelector(".loader-container"),f=document.querySelector(".more-btn"),q=new b(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});function h(r){console.log(r);const s=[];for(const{webformatURL:a,largeImageURL:n,tags:e,likes:t,views:c,comments:k,downloads:v}of r)s.push(`<li class="gallery-item">
  <a class="gallery-link" href="${n}">
    <img
      class="gallery-image"
      src="${a}"
      data-source="${n}"
      alt="${e}"
    />
    <ul class="gallery-desc">
      <li class="gallery-desk-item">
        <p class="gallery-desk-key">Likes</p>
        <p class="gallery-desk-value">${t}</p>
      </li>
      <li class="gallery-desk-item">
        <p class="gallery-desk-key">Views</p>
        <p class="gallery-desk-value">${c}</p>
      </li>
      <li class="gallery-desk-item">
        <p class="gallery-desk-key">Comments</p>
        <p class="gallery-desk-value">${k}</p>
      </li>
      <li class="gallery-desk-item">
        <p class="gallery-desk-key">Downloads</p>
        <p class="gallery-desk-value">${v}</p>
      </li>
    </ul>
  </a>
</li>`);g.insertAdjacentHTML("beforeend",s.join(`
`)),q.refresh()}function C(){g.innerHTML=""}function L(){p.classList.remove("is-hidden")}function y(){p.classList.add("is-hidden")}function P(){f.classList.remove("is-hidden")}function d(){f.classList.add("is-hidden")}function S(r){window.scrollBy({top:g.firstChild.getBoundingClientRect().height*2,behavior:"smooth"})}const $=document.querySelector(".more-btn"),O=document.querySelector(".form");let o=[],i=1,u;O.addEventListener("submit",async r=>{if(r.preventDefault(),C(),d(),u=r.target.elements.searchText.value.trim(),!u.length){l("Enter key words to search for images");return}L();try{if(i=1,o=await m(u,i),i++,y(),h(o),P(),!o.length){d(),y(),l("Sorry, there are no images matching your search query. Please try again!");return}o.length<15&&(l("We're sorry, but you've reached the end of search results."),d())}catch(s){l(s.message)}});$.addEventListener("click",async r=>{L();try{o=await m(u,i),i++,y(),h(o),S(i),o.length<15&&(l("We're sorry, but you've reached the end of search results."),d())}catch(s){l(s.message)}});function l(r){B.show({message:r,position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFFFFF",progressBarColor:"#B51B1B",overlayColor:"#FFBEBE"})}
//# sourceMappingURL=index.js.map
