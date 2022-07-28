// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const imageContainer = document.querySelector('.gallery');
const cardsMarkup = createImageCardsMarkup(galleryItems);

imageContainer.insertAdjacentHTML('beforeend', cardsMarkup);
// imageContainer.innerHTML = cardsMarkup

function createImageCardsMarkup(images) {
  return images
    .map(({ original, description, preview }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
  doubleTapZoom: 1.2,
});
