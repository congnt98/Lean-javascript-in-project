var btnClose = document.querySelector('.close')
var images = document.querySelectorAll('.image img')
var galleryImage = document.querySelector('.gallery__inner img')
var btnPrev = document.querySelector('.control.prev')
var btnNext = document.querySelector('.control.next')
var gallery = document.querySelector('.gallery')

var currentIndex = 0;


function showGallery() {
    // display
    if (currentIndex === 0) {
        btnPrev.classList.add('hide')
    }
    else {
        btnPrev.classList.remove('hide')
    }

    if (currentIndex === images.length - 1) {
        btnNext.classList.add('hide')
    }
    else {
        btnNext.classList.remove('hide')
    }

    galleryImage.src = images[currentIndex].src
    gallery.classList.add('show')
}

btnClose.addEventListener('click', function () {
    gallery.classList.remove('show')
})

images.forEach((item, index) => {
    item.addEventListener('click', function () {
        currentIndex = index
        showGallery();
    }
    )
})


btnPrev.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--
        showGallery();
    }
})

btnNext.addEventListener('click', function () {
    if (currentIndex < images.length - 1) {
        currentIndex++
        showGallery();
    }
})

document.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) {
        gallery.classList.remove('show')

    }
})