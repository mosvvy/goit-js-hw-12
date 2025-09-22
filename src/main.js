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
  showLoadMoreBtn,
  hideLoadMoreBtn,
  scroolOn2Rows,
} from './js/render-functions';

const PER_PAGE = 15;

const moreBtn = document.querySelector('.more-btn');
const form = document.querySelector('.form');
let response;
let images = [];
let page = 1;
let total;
let searchReq;

form.addEventListener('submit', async event => {
  event.preventDefault();
  clearGallery();
  hideLoadMoreBtn();
  searchReq = event.target.elements.searchText.value.trim();
  if (!searchReq.length) {
    showPopUp('Enter key words to search for images');
    return;
  }

  showLoader();
  try {
    page = 1;
    response = await getImagesByQuery(searchReq, PER_PAGE, page);
    images = response.hits;
    total = response.totalHits;

    if (!images.length) {
      showPopUp(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }

    page++;
    createGallery(images);

    if (page * PER_PAGE < total) {
      showLoadMoreBtn();
    }

    if (images.length < 15) {
      showPopUp("We're sorry, but you've reached the end of search results.");
      hideLoadMoreBtn();
    }
  } catch (error) {
    showPopUp(error.message);
  } finally {
    hideLoader();
  }
});

moreBtn.addEventListener('click', async event => {
  showLoader();
  try {
    response = await getImagesByQuery(searchReq, PER_PAGE, page);
    images = response.hits;

    createGallery(images);
    // scroolOn2Rows();

    if (!images.length) {
      hideLoadMoreBtn();
      showPopUp(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }

    if (page * PER_PAGE >= total) {
      hideLoadMoreBtn();
    }

    page++;

    if (images.length < 15) {
      showPopUp("We're sorry, but you've reached the end of search results.");
    }
  } catch (error) {
    showPopUp(error.message);
  } finally {
    hideLoader();
  }
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
