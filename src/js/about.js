export function about() {
// Splide 초기화
const splide = new Splide(".splide", {
  type: "loop",
  drag: false,
  focus: "center",
  autoWidth: true,
  arrows: false,
  pagination: false,
  autoScroll: {
      speed: 2,
      pauseOnHover: true,
      rewind: false,
  },
  breakpoints: {
      1200: { perPage: 3 },
      640: { perPage: 2 },
  },
});

splide.mount(window.splide.Extensions); 
// ------------------------------------------------------

Fancybox.bind("[data-fancybox]", {});


}
