/*
У файлі main.js напиши всю логіку роботи додатка. 
Виклики нотифікацій iziToast, 
усі перевірки на довжину масиву в отриманій відповіді робимо саме в цьому файлі. 
Імпортуй в нього функції із файлів pixabay-api.js та render-functions.js 
та викликай їх у відповідний момент. */

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
let images = [];

form.addEventListener('submit', event => {
  event.preventDefault();
  clearGallery();
  const searchReq = event.target.elements.searchText.value.trim();
  if (!searchReq.length) {
    showPopUp('Enter key words to search for images');
    return;
  }

  showLoader();
  getImagesByQuery(searchReq)
    .then(data => {
      images = data.hits;
      hideLoader();
      createGallery(images);
      if (!images.length) {
        showPopUp(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }
    })
    .catch(error => {
      showPopUp(error.message);
    });
});

function showPopUp(msg) {
  iziToast.show({
    message: msg,
    position: 'topRight',
    backgroundColor: '#EF4040',
    messageColor: '#FFFFFF',
    progressBarColor: '#B51B1B',
    overlayColor: '#FFBEBE',
  });
}
