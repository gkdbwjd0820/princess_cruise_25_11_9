$(document).ready(function () {
  var swiper = new Swiper(".sec_1_2", {
    slidesPerView: 3.8,
    spaceBetween: 8,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".sec_1_2_food", {
    slidesPerView: 2.5,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".con_2_wrap", {
    slidesPerView: 1.6,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".sec_5", {
    slidesPerView: 3.8,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



});
