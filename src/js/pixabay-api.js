import axios from 'axios';

/*
Ця функція повинна приймати один параметр query (пошукове слово, яке є рядком),
 здійснювати HTTP-запит і
 повертати значення властивості data з отриманої відповіді.
 */
const API_KEY = '52353709-9856f312e72a5e0829ceb9a35';

export default function getImagesByQuery(query) {
  return axios('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });
}
