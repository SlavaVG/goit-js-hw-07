import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
let galEl = document.querySelector('.gallery')

const picsList = galleryItems
    .map(
        pic => `<a class="gallery__item" href="${pic.original}">
        <img class="gallery__image" src=${pic.preview} alt=${pic.description} />
            </a>`, 
)
    .join('')

galEl.insertAdjacentHTML('beforeend', picsList)

for (let i = 0; i < document.getElementsByClassName('gallery__item').length; i++)
{
    document.getElementsByClassName('gallery__item')[i].addEventListener('click', function (event)
    {
        event.preventDefault()
        return false
    }
    )
}
const lightbox = new SimpleLightbox('.gallery a',
    {
        captionData: 'alt',
        animationSpeed: 255
}
)
