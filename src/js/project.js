export function project() {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 100,
    centeredSlides: true,
    speed: 500,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init: function () {
        updateActiveClasses(this);
      },
      slideChange: function () {
        updateActiveClasses(this);
      },
    },
    // breakpoints: {

    // },
  });

  function updateActiveClasses(swiper) {
    const activeIndex = swiper.realIndex;

    // 슬라이드에 .on 클래스
    swiper.slides.forEach((slide, idx) => {
      slide.classList.toggle("on", idx === activeIndex);
    });

    // 텍스트에 .on 클래스
    document.querySelectorAll(".text_container .text_info").forEach((el, idx) => {
      el.classList.toggle("on", idx === activeIndex);
    });
  }
}
