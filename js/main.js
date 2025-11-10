$(document).ready(function () {
  var swiper = new Swiper(".travel_con", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1.2,
    spaceBetween: 30,
    loop: true,
    coverflowEffect: {
      rotate: 0,
      // stretch: 0,
      depth: 100,
      // modifier: 1,
      slideShadows: true,
    },
  });
});
