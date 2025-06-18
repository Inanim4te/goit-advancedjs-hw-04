import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchPics } from './js/pixabay-api';

const formEl = document.getElementById('search-form');

export const galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});

formEl.addEventListener('submit', e => {
  e.preventDefault();
  fetchPics();
});
