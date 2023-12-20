import galleryItems from "./app.js";
console.log(galleryItems)

const ref = {
    galleryListRef:document.querySelector(".js-gallery"),
    backdropRef:document.querySelector(".js-lightbox"),
    lightboxOverlay:document.querySelector(".lightbox__overlay"),
    lightboxContent:document.querySelector(".lightbox__content"),
    lightboxImg:document.querySelector(".lightbox__image"),
    btnModalClose:document.querySelector("[data-action=close-lightbox]"),
};

function createGallery(gallery) {
    return gallery
        .map(({ preview, original, description }, index) => {
            return `<li class="gallery__item">
            <a
              class="gallery__link"
              href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
            >
              <img
                class="gallery__image"
                src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
                data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
                alt="Tulips"
              />
            </a>
          </li>`;
        })
        .join('')
}
const imgGallery = createGallery(galleryItems);
ref.galleryListRef.insertAdjacentHTML("beforeend", imgGallery);

ref.galleryListRef.addEventListener("click", onClickGalleryItem);
ref.btnModalClose.addEventListener("click", onCloseButtonClick);

function onClickGalleryItem(evt){
  evt.preventDefault(); 
    const target = evt.target;
    if (target.nodeName !== 'IMG') {
        return;
}
if (target.nodeName === 'IMG') {
  ref.backdropRef.classList.add("is-open");
  ref.lightboxImg.src = target.dataset.source;
  ref.lightboxImg.alt = target.alt;
  ref.lightboxImg.dataset.index = target.dataset.index;
}
console.log()
}

function onClickCloseModal(){
  ref.backdropRef.classList.remove("is-open");
}

function onCloseButtonClick(evt){
  evt.preventDefault();
  onClickCloseModal();

  ref.lightboxImg.src = "";
  ref.lightboxImg.alt = "";
  console.log(evt)
}

