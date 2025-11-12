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

  // $(window).scroll(function () {
  //   var pageY = $(window).scrollTop();
  //   var fix = $(".section_4").offset().top;

  //   if (pageY > 2258.88) {
  //     $(".fix_section").css({
  //       position: "fixed",
  //       top: 0,
  //       left: 0,
  //     });
  //   } else if (pageY < 2258.88) {
  //     $(".fix_section").css({
  //       position: "absolute",
  //       top: 0,
  //       left: 0,
  //     });
  //   }
  // });
});
