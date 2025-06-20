import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchPics, PER_PAGE } from './js/pixabay-api';
import { renderPics } from './js/render-functions';

const formEl = document.getElementById('search-form');
const loadMoreBtn = document.querySelector('.load-more');
const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');
const inputEl = document.getElementById('searchQuery');

export const galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});

let page = 1;
let query = '';
let totalHits = 0;

formEl.addEventListener('submit', async e => {
  e.preventDefault();

  query = inputEl.value.trim();
  if (!query) {
    iziToast.error({ message: 'Please enter a search query' });
    inputEl.value = '';
    return;
  }
  inputEl.value = '';
  page = 1;
  galleryEl.innerHTML = '';
  await loadPictures();
});

loadMoreBtn.addEventListener('click', async () => {
  await loadPictures();
});

async function loadPictures() {
  loadMoreBtn.style.display = 'none';
  loaderEl.style.display = 'block';

  try {
    const data = await fetchPics(query, page);
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
    } else if (totalHits !== 0) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }

    page += 1;
  } catch (error) {
    iziToast.error({ message: error.message });
    console.error(error);
  } finally {
    loaderEl.style.display = 'none';
  }
}
