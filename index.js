import{a as E,S as q,i as C}from"./assets/vendor-BSTwZ_tR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const F="52353709-9856f312e72a5e0829ceb9a35";async function p(s,t,n){return(await E("https://pixabay.com/api/",{params:{key:F,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:t,page:n}})).data}const y=document.querySelector(".gallery"),h=document.querySelector(".loader-container"),L=document.querySelector(".more-btn"),P=new q(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});function k(s){console.log(s);const t=[];for(const{webformatURL:n,largeImageURL:i,tags:e,likes:r,views:c,comments:b,downloads:B}of s)t.push(`<li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${n}"
      data-source="${i}"
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
</li>`);y.insertAdjacentHTML("beforeend",t.join(`
`)),P.refresh(),y.childElementCount>15&&O()}function S(){y.innerHTML=""}function v(){h.classList.remove("is-hidden")}function w(){h.classList.add("is-hidden")}function $(){L.classList.remove("is-hidden")}function g(){L.classList.add("is-hidden")}function O(){window.scrollBy({top:y.firstChild.getBoundingClientRect().height*2,behavior:"smooth"})}const m=15,R=document.querySelector(".more-btn"),I=document.querySelector(".form");let d,o=[],a=1,f,u;I.addEventListener("submit",async s=>{if(s.preventDefault(),S(),g(),u=s.target.elements.searchText.value.trim(),!u.length){l("Enter key words to search for images");return}v();try{if(a=1,d=await p(u,m,a),o=d.hits,f=d.totalHits,!o.length){l("Sorry, there are no images matching your search query. Please try again!");return}a++,k(o),a*m<f&&$(),o.length<15&&(l("We're sorry, but you've reached the end of search results."),g())}catch(t){l(t.message)}finally{w()}});R.addEventListener("click",async s=>{v();try{if(d=await p(u,m,a),o=d.hits,k(o),!o.length){g(),l("Sorry, there are no images matching your search query. Please try again!");return}a*m>=f&&g(),a++,o.length<15&&l("We're sorry, but you've reached the end of search results.")}catch(t){l(t.message)}finally{w()}});function l(s){C.show({message:s,position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFFFFF",progressBarColor:"#B51B1B",overlayColor:"#FFBEBE"})}
//# sourceMappingURL=index.js.map
