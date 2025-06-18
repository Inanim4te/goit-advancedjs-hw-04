import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchPics } from './js/pixabay-api';

const formEl = document.getElementById('search-form');
const loadMoreBtn = document.querySelector('.load-more');

export const galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});

formEl.addEventListener('submit', e => {
  e.preventDefault();
  const { value } = e.currentTarget.elements.searchQuery;
  fetchPics(value);
});

loadMoreBtn.addEventListener('click', () => {
  fetchPics();
});
