export function work() {
  // swiper
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

  $(document).ready(function () {
    const $imageDisplay = $("#hovered-image");

    // 호버 시 이미지 변경 및 표시
    $(".hover-container p").hover(
      function () {
        // 호버 시 이미지 변경 및 표시
        const imageSrc = $(this).data("image");
        $imageDisplay.attr("src", imageSrc).fadeIn();

        // 호버된 항목에 active 클래스 추가하여 색상 유지
        $(this).addClass("active").css("color", "blue");
      },
      function () {
        // 호버 해제 시, active 상태인 항목은 이미지 유지
        if (!$(this).hasClass("active")) {
          $imageDisplay.fadeOut();
        }
      }
    );

    // 호버된 항목은 active 상태로 유지되며 색상은 파란색
    $(".hover-container span").mouseenter(function () {
      // 다른 항목의 active 클래스 제거 및 초기화
      $(".hover-container span").removeClass("active").css("color", "black");

      // 현재 호버된 항목만 active 상태로 변경
      $(this).addClass("active").css("color", "blue");
    });
  });

  // 논픽션의 로고 회전
  const slide2 = document.querySelector(".slide2");
  const rotatingImage = slide2.querySelector(".rotating-image");

  
let currentRotation = 0; // 초기 회전 값
let rotationInterval; // 회전 유지 타이머
  // slide2에 마우스를 올릴 때
  slide2.addEventListener("mouseenter", () => {
    clearInterval(rotationInterval); // 기존 타이머 중지
    rotationInterval = setInterval(() => {
      currentRotation += .6; // 일정 각도씩 계속 회전
      rotatingImage.style.transform = `rotate(${currentRotation}deg)`;
    }, 16); // 약 60FPS로 회전
  });

  // slide2에서 마우스가 떠날 때
  slide2.addEventListener("mouseleave", () => {
    clearInterval(rotationInterval); // 회전 중지
  });
}
