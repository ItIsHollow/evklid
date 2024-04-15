// header

// nav
let navBtn = document.querySelector('.header__btn');
let menu = document.querySelector('.header__nav-list');
let menuLinks = document.querySelectorAll('.nav__link')

navBtn.addEventListener('click', function () {

  navBtn.classList.toggle('header__btn--active');
  menu.classList.toggle('header__nav-list--active');
  document.body.classList.toggle('stop-scroll');

})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    navBtn.classList.remove('header__btn--active');
    menu.classList.remove('header__nav-list--active');
    document.body.classList.remove('stop-scroll');

  })
})


// search
let inputSearch = document.querySelector('.search');
let searchBtn = document.querySelector('.search__btn');
let crestBtn = document.querySelector('.search__btn-exit');
// let navList = document.querySelector('.header__nav-list');

searchBtn.addEventListener('click', function () {
  inputSearch.classList.add('search--active');
  crestBtn.classList.add('search__btn-exit--active');
  // navList.classList.add('nav-search--active');
})

crestBtn.addEventListener('click', function () {
  inputSearch.classList.remove('search--active');
  crestBtn.classList.remove('search__btn-exit--active');
  // navList.classList.remove('nav-search--active');
})

// hero activity
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,
  loop: true,
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});


// how activity

let tabsBtn = document.querySelectorAll('.how__step');
let tabsItem = document.querySelectorAll('.step');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('how__step--active') });
    e.currentTarget.classList.add('how__step--active');

    tabsItem.forEach(function (element) { element.classList.remove('step--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('step--active');
  })
})


// faq
let accordionControl = document.querySelector('.accordion__control');
let faqBtn = document.querySelector('.faq__btn');

accordionControl.addEventListener('click', function() {
  faqBtn.classList.toggle('faq__btn--active');
})


new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});

// let buullet1 = document.querySelector('.swiper-pagination-bullet');
// buullet1.setAttribute('aria-label','test1');
// let swiperBullet = document.querySelectorAll('.swiper-pagination-bullet');
// swiperBullet.forEach(function(el){
//   el.setAttribute('aria-label', 'test2');
//   el.addEventListener('click', function(){
//     console.log('YOYO');
//   })
// })

