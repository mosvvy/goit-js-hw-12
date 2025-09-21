import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader-container');

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
});

/*
Ця функція повинна приймати масив images, 
створювати HTML-розмітку для галереї, 
додавати її в контейнер галереї та 
викликати метод екземпляра SimpleLightbox refresh(). 
Нічого не повертає*/
export function createGallery(images) {
  console.log(images);
  const imgListItemCollection = [];

  for (const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } of images) {
    imgListItemCollection.push(`<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      data-source="${largeImageURL}"
      alt="${tags}"
    />
    <ul class="gallery-desc">
      <li class="gallery-desk-item">
        <p class="gallery-desk-key">Likes</p>
        <p class="gallery-desk-value">${likes}</p>
      </li>
      <li class="gallery-desk-item">
        <p class="gallery-desk-key">Views</p>
        <p class="gallery-desk-value">${views}</p>
      </li>
      <li class="gallery-desk-item">
        <p class="gallery-desk-key">Comments</p>
        <p class="gallery-desk-value">${comments}</p>
      </li>
      <li class="gallery-desk-item">
        <p class="gallery-desk-key">Downloads</p>
        <p class="gallery-desk-value">${downloads}</p>
      </li>
    </ul>
  </a>
</li>`);
  }

  galleryContainer.innerHTML = imgListItemCollection.join('\n');
  gallery.refresh();
}

/*
Ця функція нічого не приймає та 
повинна очищати вміст контейнера галереї. 
Нічого не повертає. */
export function clearGallery() {
  galleryContainer.innerHTML = '';
}

/*
Ця функція нічого не приймає, 
повинна додавати клас для відображення лоадера. 
Нічого не повертає. */
export function showLoader() {
  loader.classList.remove('is-hidden');
}

/*
Ця функція нічого не приймає, 
повинна прибирати клас для відображення лоадера. 
Нічого не повертає. */
export function hideLoader() {
  loader.classList.add('is-hidden');
}
