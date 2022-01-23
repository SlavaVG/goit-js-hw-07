import { galleryItems } from './gallery-items.js';                                              //импорт данных из файла данных js где EXPORT
// Change code below this line
let galleryEl = document.querySelector('.gallery');                                             // елемент = узел разметки

const listPictureEl = galleryItems                                                              //готовим шаблонную строку кода картинки галереи
  .map(                                                                                         //мапим (перебираем каждый елемент) массива импортируемых данных
    pict => `<div class="gallery__item">                      
                <a class="gallery__link" href=${pict.original}>
                    <img
                      class="gallery__image"
                      src=${pict.preview}
                      data-source=${pict.original}
                      alt=${pict.description}
                    />
                </a>
            </div>`,
  )
  .join('');                                                                                        // соединяем строку

galleryEl.insertAdjacentHTML('beforeend', listPictureEl);                                           // вставляем код шаблона в конец полсле узла

const lengthEL = document.getElementsByClassName('gallery__item').length;                           // узнаем количество вставленных картинок

for (let i = 0; i < lengthEL; i +=1) {                                                              //для каждого елемента массива
  document.getElementsByClassName('gallery__link')[i].addEventListener('click', function (event) {  // вставляем ухо на каждуюю картинку 
    event.preventDefault();                                                                         // убираем действия браузера по умолчанию
    // return false;                                                                                  // возвращаем фолс
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

