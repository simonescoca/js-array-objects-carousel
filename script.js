// ? Consegna:
    // * Dato un array di oggetti letterali con:
        // * url dell’immagine
        // * titolo
        // * descrizione
        // * Creare un carosello come nella foto allegata.

    // ! Milestone 0:
        // * Come nel primo carosello realizzato, 
        // * focalizziamoci prima sulla creazione del markup statico: costruiamo il container
        // * e inseriamo l'immagine grande in modo da poter stilare lo slider.

    // ! Milestone 1: 
        // * Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
        // * Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
        
    // ! Milestone 2:
        // * Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto,
        // * la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.

    // BONUS 1:
        // Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
    // BONUS 2:
        // Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
    // BONUS 3:
        // Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.


const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
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

const backButton = document.getElementById ("previous-img")
const nextButton = document.getElementById ("next-img")
const imgElement = document.getElementById ("img")
const titleElement = document.getElementById ("title")
const textElement = document.getElementById ("text")
let i = 0


imgTitleTextAtLoading (i)

backButton.addEventListener ("click", () => {
    if (i === 0) {
        i = images.length - 1

    } else {
        i--
    }
    imgElement.src = previousImg (i)
    titleElement.innerText = previousTitle (i)
    textElement.innerText = previousText (i)
})

nextButton.addEventListener ("click", () => {
    if (i === images.length - 1) {
        i = 0

    } else {
        i++
    }
    imgElement.src = nextImg (i)
    titleElement.innerText = nextTitle (i)
    textElement.innerText = nextText (i)
})

function previousImg (i) {
    if (i === 0) {
        i = images.length - 1
        return images[i].image

    } else {
        i--
        return images[i].image
    }
}

function nextImg (i) {
    if (i === images.length - 1) {
        i = 0
        return images[i].image

    } else {
        i++
        return images[i].image
    }
}

function previousTitle (i) {
    if (i === 0) {
        i = images.length - 1
        return images[i].title

    } else {
        i--
        return images[i].title
    }
}

function nextTitle (i) {
    if (i === images.length - 1) {
        i = 0
        return images[i].title

    } else {
        i++
        return images[i].title
    }
}

function previousText (i) {
    if (i === 0) {
        i = images.length - 1
        return images[i].text

    } else {
        i--
        return images[i].text
    }
}

function nextText (i) {
    if (i === images.length - 1) {
        i = 0
        return images[i].text

    } else {
        i++
        return images[i].text
    }
}

function imgTitleTextAtLoading (i) {
    imgElement.src = images[i].image
    titleElement.innerText = images[i].title
    textElement.innerText = images[i].text
}