import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const markup =galleryItems.map(({preview, original, description}) =>
 `<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`);
gallery.insertAdjacentHTML('beforeend', markup.join(""))
gallery.addEventListener('click', onCLick);
function onCLick(event){
    event.preventDefault()
    if(!event.target.classList.contains('gallery__image')){
        return;
    }
    const original = event.target.dataset.source;
    const description = event.target.alt;
    const instance = basicLightbox.create(`
      <img
        class="gallery__image"
        src="${original}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
    </li>`, {
      onShow: (instance) => {return window.addEventListener('keydown', function onClose(event) {
        if (event.key === "Escape") {
         instance.close();
        }
    }   );},
      onClose: (instance) => {return window.removeEventListener('keydown',function onClose(event) {
        if (event.key === "Escape") {
         instance.close();
        }
    }   )}
    })
    instance.show()
}
