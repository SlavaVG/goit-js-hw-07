import { galleryItems } from './gallery-items.js';
// Change code below this line
let galleryEl = document.querySelector('.gallery');

const listPicsEl = galleryItems
  .map(
    pic => `<div class="gallery__item">
                <a class="gallery__link" href=${pic.original}>
                    <img
                    class="gallery__image"
                    src=${pic.preview}
                    data-source=${pic.original}
                    alt=${pic.description}
                    />
                </a>
            </div>`,
  )
  .join('');

galleryEl.insertAdjacentHTML('beforeend', listPicsEl);

for (let i = 0; i < document.getElementsByClassName('gallery__item').length; i++) {
  document.getElementsByClassName('gallery__link')[i].addEventListener('click', function (event) {
    event.preventDefault();
    return false;
  });
  const currentImg = document.getElementsByClassName('gallery__image')[i].dataset.source;
  document.getElementsByClassName('gallery__item')[i].onclick = () => {
    const instance = basicLightbox.create(`<img width="1280" height="720" src=${currentImg}>`);
    instance.show();
    document.addEventListener('keyup', e => {
      if (e.code === 'Escape') instance.close();
    });
  };
}


console.log(galleryItems);

