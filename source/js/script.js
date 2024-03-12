var menu__toggle = document.querySelector(".menu__toggle");
var menu__list = document.querySelector(".menu__list");
var menu__interactive = document.querySelector(".menu__interactive");
var menu__close = document.querySelector(".menu__toggle--close");
var modal = document.querySelector(".modal");
var modal__open = document.querySelector(".modal__open");
var modal__overlay = document.querySelector(".modal-overlay");
var modal__overlay__open = document.querySelector(".modal-overlay__open");
var menu = document.querySelector(".menu");

menu.classList.remove("menu--nojs");

menu__toggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu__list.classList.toggle("menu__open");
  menu__interactive.classList.toggle("menu__open");
  menu__toggle.classList.toggle("menu__toggle--close");
});

for (var btn__order = document.querySelectorAll(".btn-order"), i = 0; i < btn__order.length; i++) {
  btn__order[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal__open");
    modal__overlay.classList.add("modal-overlay__open");
  });

  modal__overlay.addEventListener("click", function() {
    modal.classList.remove("modal__open");
    modal__overlay.classList.remove("modal-overlay__open");
  });
};
