
'use strict';

// Меню
// var body = document.querySelector('body');
var navList = document.querySelector('.nav__list');
var navToggle = document.querySelector('.nav__toggle');
// var menuLinks = document.querySelectorAll('.main-nav__item-link');


navList.classList.remove('nav__list--nojs');
navToggle.addEventListener('click', function() {
  navList.classList.toggle('nav__list--close');
});



// function menuPosition() {
//   navList.classList.toggle('nav__list--close');
//   navList.classList.toggle('nav__list--open');
// }

// if (navList && navToggle) {
//   navList.classList.remove('nav__list--nojs');

//   navToggle.onclick = function () {
//     menuPosition();
//     body.classList.toggle('body__js');
//   };
// }

//   menuLinks.forEach(function (item) {
    //     item.onclick = function () {
    //       changeStateMenu();
    //       body.classList.remove('body__js-menu');
    //     };
    //   });

    //   changeStateMenu();
    // }









// var navMain = document.querySelector('.main-nav');
// var navToggle = document.querySelector('.main-nav__toggle');
// var body = document.querySelector('.body');
// var menuLinks = document.querySelectorAll('.main-nav__item-link');

// function changeStateMenu() {
//   navMain.classList.toggle('main-nav--closed');
//   navMain.classList.toggle('main-nav--opened');
// }

// if (navMain && navToggle) {
//   navMain.classList.remove('main-nav--nojs');

//   navToggle.onclick = function () {
//     changeStateMenu();
//     body.classList.toggle('body__js-menu');
//   };

//   menuLinks.forEach(function (item) {
//     item.onclick = function () {
//       changeStateMenu();
//       body.classList.remove('body__js-menu');
//     };
//   });

//   changeStateMenu();
// }
