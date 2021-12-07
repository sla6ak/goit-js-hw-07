import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log( galleryItems );

// *****************************дополнительное задание использовать классы ES6***************************************

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
        const htmlEl = `<a class="gallery__item" href="${imgEl.original}">
            <img class="gallery__image" src="${imgEl.preview}" title ="${imgEl.description}" alt="${imgEl.description}" />
            </a>`
       return htmlEl
    })
}
      
// повесим нашу разметку на сайт
gallerey.insertAdjacentHTML("beforeend", html(galleryItems).join(""))


// этот кусок кода написан не мной, а взят из документации где в аргументы передаем настройки для новой галереи
let gallerySet = new SimpleLightbox( '.gallery a', { captionPosition: "bottom", captionDelay: 250 } );

gallerySet.on( 'show.simplelightbox', function () {
    
    console.log( "Получаеться прослушивать клики даже ненужно, все уже есть под капотом" )
    
} );


// **********************************предыдущее решение******************************************


// const gallerey = document.querySelector( '.gallery' )

// // уже знакомый метод верстки через шаблонную функцию
// const imgEl = (galleryItems) => {
//     return galleryItems.map( ( img ) => {
//         let linkEl = document.createElement( "a" )
//         linkEl.classList.add( "gallery__item" )
//         linkEl.href = img.original
//         let imgEl = document.createElement( "img" )
//         imgEl.src = img.preview
//         imgEl.alt = img.description
//         imgEl.title= img.description
//         imgEl.classList.add( "gallery__image" )
//         linkEl.append(imgEl)
//         return linkEl
//     })
// }

// gallerey.append( ...imgEl( galleryItems ) )

// // этот кусок кода написан не мной, а взят из документации где в аргументы передаем настройки для новой галереи
// let gallerySet = new SimpleLightbox( '.gallery a', { captionPosition: "bottom", captionDelay: 250 } );

// gallerySet.on( 'show.simplelightbox', function () {
    
//     console.log( "Получаеться прослушивать клики даже ненужно, все уже есть под капотом" )
    
// } );

