
'use strict';

// Меню

var navList = document.querySelector('.nav__list');
var navToggle = document.querySelector('.nav__toggle');


navList.classList.remove('nav__list--nojs');
navToggle.addEventListener('click', function() {
  navList.classList.toggle('nav__list--close');
});
