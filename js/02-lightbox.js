import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector('.gallery');

const addLiEls = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
   </a>
</li>`
  )
  .join('');

listEl.insertAdjacentHTML('beforeend', addLiEls);

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });