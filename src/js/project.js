export function project() {
  new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        spaceBetween: 8,
      },
      701: {
        spaceBetween: 20,
      },
      1300: {
        spaceBetween: 20,
      },
    },
  });
}
