import axios from 'axios';

/*
Ця функція повинна приймати один параметр query (пошукове слово, яке є рядком),
 здійснювати HTTP-запит і
 повертати значення властивості data з отриманої відповіді.
 */
const API_KEY = '52353709-9856f312e72a5e0829ceb9a35';
const PER_PAGE = 15;
let total_hits;

export default async function getImagesByQuery(query, page) {
  const response = await axios('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: PER_PAGE,
      page: page,
    },
  });
  total_hits = response.data.total_hits;

  return response.data.hits;
}
