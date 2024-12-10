export function project() {
  // var swiper = new Swiper(".mySwiper", {
  //   loop: true,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   breakpoints: {
  //     700: {
  //       slidesPerView: 1,
  //       // spaceBetween: 10,
  //     },
  //     701: {
  //       slidesPerView: 2,
  //       // spaceBetween: 10,
  //     },
  //     1300: {
  //       slidesPerView: 4,
  //       // spaceBetween: 60,
  //     },
  //   },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  // });

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

const siteViewLinks = document.querySelectorAll('.info a.view_btn');
const imgBgs = document.querySelectorAll('.s_img .img_bg');

if (siteViewLinks.length === 0 || imgBgs.length === 0) {
  console.log('Missing elements!');
} else {
  siteViewLinks.forEach((link, index) => {
    link.addEventListener('mouseenter', () => {
      // 링크 호버시 해당 인덱스의 이미지 색상 변경
      imgBgs[index].style.filter = 'grayscale(0%)';  // 컬러로 변경

    });

    link.addEventListener('mouseleave', () => {
      // 링크 떠날 때 해당 인덱스의 이미지 다시 흑백으로 변경
      imgBgs[index].style.filter = 'grayscale(100%)';  // 다시 흑백으로 변경
    });
  });
}

}
