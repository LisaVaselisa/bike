'use strict';

// Меню
var menuNav = document.querySelector('.nav');
var navToggle = document.querySelector('.nav__toggle');
var body = document.querySelector('.body');
var navLink = document.querySelectorAll('.nav__link');

function changeMenuPosition() {
  menuNav.classList.toggle('nav--close');
  menuNav.classList.toggle('nav--open');
}

if (menuNav && navToggle) {
  menuNav.classList.remove('nav--nojs');

  navToggle.addEventListener('click', function () {
    changeMenuPosition();
    body.classList.toggle('body__js');
  });

  navLink.forEach(function (item) {
    item.addEventListener('click', function ()  {
      changeMenuPosition();
      body.classList.remove('body__js');
    });
  });

  changeMenuPosition();
}

// Маска для формы
var maskedInputs = document.querySelectorAll("[data-mask]");

for (var index = 0; index < maskedInputs.length; index++) {
  maskedInputs[index].addEventListener('input', maskInput);
}

function maskInput() {
  var input = this;
  var mask = input.dataset.mask;
  var value = input.value;
  var literalPattern = /[0\*]/;
  var numberPattern = /[0-9]/;
  var newValue = "";
  try {
    var maskLength = mask.length;
    var valueIndex = 0;
    var maskIndex = 0;

    for (; maskIndex < maskLength;) {
      if (maskIndex >= value.length) break;

      if (mask[maskIndex] === "0" && value[valueIndex].match(numberPattern) === null) break;

      while (mask[maskIndex].match(literalPattern) === null) {
        if (value[valueIndex] === mask[maskIndex]) break;
        newValue += mask[maskIndex++];
      }
      newValue += value[valueIndex++];
      maskIndex++;
    }

    input.value = newValue;
  } catch (e) {
    console.log(e);
  }
}


