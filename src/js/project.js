var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    700: {
      slidesPerView: 1,
      // spaceBetween: 10,
    },
    701: {
      slidesPerView: 2,
      // spaceBetween: 10,
    },
    1300: {
      slidesPerView: 4,
      // spaceBetween: 60,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// ------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const poAbText = document.querySelector(".po_ab p"); // p 태그 선택

  if (poAbText) {
    setTimeout(() => {
      poAbText.style.left = "30px"; // 최종 위치
      poAbText.style.opacity = "1"; // 보이도록 설정
    }, 300); // 페이지 로드 후 300ms 대기
  }
});