import { galleryLightbox } from '../main';

export function renderPics(pictures) {
  const galleryEl = document.querySelector('.gallery');
  const markup = pictures.hits
    .map(pic => {
      return `
        <li class="photo-card">
          <a href="${pic.largeImageURL}">
            <img 
              src="${pic.webformatURL}" 
              alt="${pic.tags}" 
              loading="lazy" 
              class="photo-card-img"
            />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b> ${pic.likes}
            </p>
            <p class="info-item">
              <b>Views</b> ${pic.views}
            </p>
            <p class="info-item">
              <b>Comments</b> ${pic.comments}
            </p>
            <p class="info-item">
              <b>Downloads</b> ${pic.downloads}
            </p>
          </div>
        </li>
      `;
    })
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  galleryLightbox.refresh();
}
