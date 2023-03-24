
/* consegna
Dato un array di oggetti letterali con:
- url dell’immagine
- titolo
- descrizione
Creare un carosello come nella foto allegata.

Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del 
markup statico: costruiamo il container e inseriamo l'immagine grande in modo da 
poter stilare lo slider.

- Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare 
dinamicamente il carosello.

- Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
- Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

bonus
- Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
- Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
- Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
*/

/* strumenti: 

*/
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//mi seleziono gli elementi della DOM
let active_slide = 0
const slides_dom_element = document.querySelector('.slides')
const thumbs_dom_element = document.querySelector('.thumbs')
const prev_dom_element = document.querySelector('button.prev')
const next_dom_element = document.querySelector('button.next')
const slider_dom_element = document.querySelector('.slider')
const revet_dom_elemet = document.querySelector('button.revert')

//Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
images.forEach((slide, index) => {
    const activeSlide = index === active_slide ? 'active' : ''
    const slide_markup = `
    <div class="slide ${activeSlide}">
      <img src="./assets/${slide.image}" alt="">
      <div class="text">
        <h3>${slide.title}</h3>
        <p>${slide.text}</p>
      </div>
    </div>
    `
    slides_dom_element.insertAdjacentHTML('beforeend', slide_markup)

//Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il thumbs.
    const thumb_markup = `<img src="./assets/${slide.image}" alt="" class="${activeSlide}">`
    thumbs_dom_element.insertAdjacentHTML('beforeend', thumb_markup)
})
prev_dom_element.addEventListener('click', prev)
next_dom_element.addEventListener('click', next)
/* funzioni */
function prev() {
    //per slide
    if (active_slide === images.length - 1) {
        active_slide = 0
      } else {
        active_slide--
      }
 
  const current_slide = document.querySelector('.slide.active')

  current_slide.classList.remove('active')

  const prev_slide = document.querySelectorAll('.slide')[active_slide]

  prev_slide.classList.add('active')


  //per thumbnail

  const current_thumb = document.querySelector('.thumbs > img.active')

  current_thumb.classList.remove('active')

  const prev_thumb = document.querySelectorAll('.thumbs > img')[active_slide]

  prev_thumb.classList.add('active')
}
function next() {
    //per slide
    if (active_slide === images.length - 1) {
      active_slide = 0
    } else {
      active_slide++
    }
    const current_slide = document.querySelector('.slide.active')

    current_slide.classList.remove('active')

    const next_slide = document.querySelectorAll('.slide')[active_slide]

    next_slide.classList.add('active')


    // per thumbnail
    const current_thumb = document.querySelector('.thumbs > img.active')

    current_thumb.classList.remove('active')

    const next_thumb = document.querySelectorAll('.thumbs > img')[active_slide]

    next_thumb.classList.add('active')
  }