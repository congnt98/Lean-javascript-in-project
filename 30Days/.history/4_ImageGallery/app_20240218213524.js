var btnClose = document.querySelector('.close')
var images = document.querySelectorAll('.image img')
var galleryImage = document.querySelector('.gallery__inner img')
var btnPrev = document.querySelector('.control.prev')
var btnNext = document.querySelector('.control.next')
var gallery = document.querySelector('.gallery')

var currentIndex = 0;

btnClose.addEventListener('click', function () {
    gallery.c
})

images.forEach((item, index) => {
    item.addEventListener('click', function () {
        currentIndex = index
        galleryImage.src = images[currentIndex].src
        gallery.classList.add('show')
    }
    )
})