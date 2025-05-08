export function project() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      701: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1300: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
}
