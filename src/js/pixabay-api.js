import iziToast from 'izitoast';
import axios from 'axios';
import 'izitoast/dist/css/iziToast.min.css';
import { renderPics } from './render-functions';

const API_KEY = '33649719-b7fecbfe979c6e7e0b54f5aa7';

export async function fetchPics() {
  const galleryEl = document.querySelector('.gallery');
  const loaderEl = document.querySelector('.loader');
  const inputEl = document.getElementById('searchQuery');

  galleryEl.innerHTML = '';
  loaderEl.style.display = 'block';

  const value = inputEl.value.trim();
  inputEl.value = '';

  try {
    const response = await axios.get('https://pixabay.com/api', {
      params: {
        key: API_KEY,
        q: value,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });

    const data = response.data;

    if (!data.hits.length) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    renderPics(data);
  } catch (error) {
    iziToast.error({
      message: error.message,
    });
    console.error(error);
  } finally {
    loaderEl.style.display = 'none';
  }
}
