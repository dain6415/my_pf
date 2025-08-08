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

    swiper.slides.forEach((slide, idx) => {
      slide.classList.toggle("on", idx === activeIndex);
    });

    const textInfos = document.querySelectorAll(".text_container .text_info");
    textInfos.forEach((el, idx) => {
      el.classList.toggle("on", idx === activeIndex);
    });

    const activeText = textInfos[activeIndex];
    const textContainer = document.querySelector(".text_container");
    textContainer.style.height = activeText.scrollHeight + "px";
  }

  window.addEventListener("resize", () => {
    const activeText = document.querySelector(".text_info.on");
    const textContainer = document.querySelector(".text_container");
  
    if (activeText && textContainer) {
      textContainer.style.height = activeText.scrollHeight + "px";
    }
  });
}
