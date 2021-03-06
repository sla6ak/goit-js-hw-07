import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox';
// Change code below this line

console.log( galleryItems );

// *************************дополнительное задание использовать классы-ES6 в решении**********************************

// 1) создадим клас изображений
// в который покладем все свойства из массива

class Gallerey1 {
    constructor (preview, original, description) {
        this.preview = preview
        this.original = original
        this.description = description
   }
}

// получим родителя для нашей галереии
const gallerey = document.querySelector( '.gallery' )


// функция динамической разметки передаем в нее любой  массив изображений и рендерим разметку
const html = (gallery) => {
    return gallery.map( ( img ) => {
        const imgEl = new Gallerey1( img.preview, img.original, img.description )
        const htmlEl = `<div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                class="gallery__image"
                src="${imgEl.preview}"
                alt="${imgEl.description}"
                data-source="${imgEl.original}"
                />
            </a>
            </div>`;
            return htmlEl
    })
}
// повесим нашу разметку на сайт
gallerey.insertAdjacentHTML("beforeend", html(galleryItems).join(""))

gallerey.addEventListener( "click", onOriginalClick )

function onOriginalClick ( e ) {
    e.preventDefault();
    if ( e.target.nodeName !== 'IMG' ) {
        return
    }
console.log(e.target.dataset.source)
    basicLightbox.create(`
    <img width="1400" height="900" src="${e.target.dataset.source}">
     `).show()
}


// *********************************предыдущее решение************************************************


// // получим родителя для нашей галереии
// const gallerey = document.querySelector( '.gallery' )

// // напмшем функцию для динамически создаваемой галереии в html
// const html = ( gallery ) => {
//     return gallery.map( ( img ) => {
//             // создадим обертку для изображения "див"
//             let boxEl = document.createElement( "div" )
//             boxEl.classList.add( 'gallery__item' )
//             // обернем изображение в ссылку
//             let link = document.createElement( "a" )
//             link.classList.add( 'gallery__link' )
//             link.href = img.original
//             // создадим тег изображения с объязательными полями размеров и подпись
//             let imgEl = document.createElement( "img" )
//             imgEl.src = img.preview
//             imgEl.classList.add('gallery__image')
//             imgEl.width = '509'
//             imgEl.height = '340'
//             imgEl.alt = img.description
//             link.append(imgEl) 
//             boxEl.append( link )
//             // вернем уже набраные элементы в массив
//             return boxEl
//     });
// }
// // распылим получившуюся верстку в dom за один раз
// gallerey.append(...html(galleryItems))

// // мы имеем галерею - создадим функционал прослушивая клики по каждому img
// gallerey.addEventListener( 'click', onImjClick )

// // функция обрабатывающая событие клика по изображению
// function onImjClick ( e ) {
//     e.preventDefault();

//     if ( e.target.nodeName !== 'IMG' ) {
//         return
//     }

//     // для наглядности вынесем елемент клика в переменную
//     let clickImg = e.target

//     // подготовим переменную для изображения модального окна
//     let srcEl = "";

//     // найдем по какому изображению в массиве был клик и вытянем оригинальное фото из массива
//     galleryItems.forEach( ( img ) => {
//         if ( clickImg.src === img.preview ) {
//             srcEl = img.original
//         }  
//     })
    
//     // эта часть кода написанна не мной а взята из документации библиотеки
//     basicLightbox.create(`
//     <img width="1400" height="900" src="${srcEl}">
//     `).show()
// }

