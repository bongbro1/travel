// Hiển thị menu trên mobile
var menubars = document.querySelectorAll('.js_bar');
var menu = document.querySelector('.header_nav_menu');
var cls = document.querySelector('.header');
cls.addEventListener('click', function () {
    if (menu.classList.contains('open'))
        menu.classList.remove('open');
})
menubars.forEach(element => {
    element.addEventListener('click', function (e) {
        e.stopPropagation();
    })
});
menubars[0].addEventListener('click', function () {
    if (menu.classList.contains('open'))
        menu.classList.remove('open');
    else if (!menu.classList.contains('open'))
        menu.classList.add('open');
})

/* slide show */
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

/* footer */
var imgs = document.querySelectorAll('.img_footer');
var imgfeature = document.querySelector('.img_feature');
var prev = document.querySelector('.control_prev i');
var next = document.querySelector('.control_next i');
var footer_container = document.querySelector('.footer_container');
var uncloses = document.querySelectorAll('.unclose');

// close modal khi click ra ngoài đối tượng
footer_container.addEventListener('click', function () {
    if (footer_container.classList.contains('open'))
        footer_container.classList.remove('open')
})
// Ngăn chặn hành vi nổi bọt khi close modal
uncloses.forEach(element => {
    element.addEventListener('click', function (e) {
        console.log(element)
        if (typeof element == Image)
            alert('no');
        e.stopPropagation();
    })
});

var current = 0;

function updateFeatureImg (index) {
    if (!footer_container.classList.contains('open'))
        footer_container.classList.add('open');
    current = index;
    imgfeature.src = imgs[current].getAttribute('src');
}

imgs.forEach((img, index) => {
    img.addEventListener('click', e => {
        updateFeatureImg(index);
    })
})
// control prev, next
prev.addEventListener('click', function (){
    if (current == 0)
        current = imgs.length - 1;
    else
        current --;
    updateFeatureImg(current);
})

next.addEventListener('click', function (){
    if (current == imgs.length - 1)
        current = 0;
    else
        current ++;
    updateFeatureImg(current);
})







