import iziToast from 'izitoast';
import axios from 'axios';
import 'izitoast/dist/css/iziToast.min.css';
import { renderPics } from './render-functions';

const API_KEY = '33649719-b7fecbfe979c6e7e0b54f5aa7';
const PER_PAGE = 15;
let page = 1;
let query = '';
let totalHits = 0;

export async function fetchPics(newQuery) {
  const galleryEl = document.querySelector('.gallery');
  const loaderEl = document.querySelector('.loader');
  const loadMoreBtn = document.querySelector('.load-more');
  const inputEl = document.getElementById('searchQuery');

  if (newQuery !== undefined) {
    query = newQuery.trim();
    page = 1;
    galleryEl.innerHTML = '';
  }

  loadMoreBtn.style.display = 'none';
  loaderEl.style.display = 'block';
  inputEl.value = '';

  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: PER_PAGE,
      },
    });

    const data = response.data;
    totalHits = data.totalHits;

    if (!data.hits.length) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    renderPics(data);

    if (page > 1) {
      const { height: cardHeight } = document
        .querySelector('.gallery li')
        .getBoundingClientRect();
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }

    if (page * PER_PAGE < totalHits) {
      loadMoreBtn.style.display = 'block';
    } else {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }

    page += 1;
  } catch (error) {
    iziToast.error({
      message: error.message,
    });
    console.error(error);
  } finally {
    loaderEl.style.display = 'none';
  }
}
