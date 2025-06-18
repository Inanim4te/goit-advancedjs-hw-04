import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { renderPics } from './render-functions';

const API_KEY = '33649719-b7fecbfe979c6e7e0b54f5aa7';

export function fetchPics() {
  const galleryEl = document.querySelector('.gallery');
  const loaderEl = document.querySelector('.loader');
  const inputEl = document.getElementById('searchQuery');

  galleryEl.innerHTML = '';
  loaderEl.style.display = 'block';

  const value = inputEl.value;
  inputEl.value = '';
  const encodedValue = encodeURIComponent(value);
  const params = new URLSearchParams({
    key: API_KEY,
    q: encodedValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const queryString = params.toString();

  fetch(`https://pixabay.com/api/?${queryString}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });

        return;
      }
      renderPics(data);
    })
    .catch(error => console.log(error))
    .finally(() => {
      loaderEl.style.display = 'none';
    });
}
