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

    // ✅ 여기 추가: 텍스트 높이 자동 조정
    const activeText = textInfos[activeIndex];
    const textContainer = document.querySelector(".text_container");
    textContainer.style.height = activeText.scrollHeight + "px";
  }

  const projectTextMore = document.querySelectorAll(".text_info .more");

  projectTextMore.forEach((btn) => {
    btn.addEventListener("click", () => {
      const parent = btn.closest(".text_info");
      const isExpand = parent.classList.toggle("expand");
  
      btn.textContent = isExpand ? "접기" : "더보기";
  
      // ✅ 펼치거나 접을 때 높이 다시 계산
      const textContainer = document.querySelector(".text_container");
      textContainer.style.height = parent.scrollHeight + "px";
    });
  });
  window.addEventListener("resize", () => {
    const activeText = document.querySelector(".text_info.on");
    const textContainer = document.querySelector(".text_container");
  
    if (activeText && textContainer) {
      textContainer.style.height = activeText.scrollHeight + "px";
    }
  });
}
