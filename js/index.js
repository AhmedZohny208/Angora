const navbar = document.getElementById('sliding-navbar')
const settingBtn = document.querySelector('.setting-btn')
const fixedMenu = document.querySelector('.fixed-menu')
const colorList = document.querySelectorAll('.change-colors .color')
const sections = document.querySelectorAll('section')
const navlinks = document.querySelectorAll('.home .navbar ul li a')

window.addEventListener('scroll', (e) => {
 slidingUpNavbar()
 syncNavbarLinks()
})

settingBtn.addEventListener('click', () => {
 fixedMenu.classList.toggle('is-visible')
})

for (let i = 0; i < colorList.length; i++) {
 colorList[i].addEventListener('click', function(e) {
  (document.querySelector('.fixed-menu .change-colors .color.active')) ? document.querySelector('.fixed-menu .change-colors .color.active').classList.remove('active') : ''
  this.classList.add('active')
 })
}

function slidingUpNavbar() {
 if (document.documentElement.scrollTop > 100) {
  navbar.style.top = '0'
 } else {
  navbar.style.top = '-90px'
 }
}

function syncNavbarLinks() {
 let current = ''
 for (let i = 0; i < sections.length; i++) {
  const sectionTop = sections[i].offsetTop
  const sectionHeight = sections[i].clientHeight

  if (scrollY >= (sectionTop - sectionHeight / 3)) {
   current = sections[i].getAttribute('id')
  }
 }

 for (let i = 0; i < navlinks.length; i++) {
  navlinks[i].classList.remove('active')
  if (navlinks[i].classList.contains(current)) {
   navlinks[i].classList.add('active')
  }
 }
}

document.querySelector('.loading').addEventListener('click', function() {
  
})

// Select color Palettes
let colors = document.querySelectorAll('.color')
let cssThemeFile = document.getElementById('website-theme')
let logo = document.querySelector('#sliding-navbar .navbar-brand img')
console.log(logo.getAttribute('src'));

for (let i = 0; i < colors.length; i++) {
 colors[i].addEventListener('click', function(e) {
  let color = e.target.getAttribute('data-color')
  cssThemeFile.setAttribute('href', `css/website_themes/${color}_theme.css`)
  logo.setAttribute('src', `images/logo/${color}.png`)
 })
}

$(document).ready(function(){
 $('.center').slick({
  centerMode: true,
  centerPadding: '65px',
  slidesToShow: 5,
  asNavFor: '.center-content',
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
 });
});
$(document).ready(function(){
 $('.center-content').slick({
  accessibility: true,
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
 });
});

$("document").ready(function () {
  $("#loadingPage").fadeOut(2000, function () {
    $("body").css("overflow", "auto")
  });

})

