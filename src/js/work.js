// document.addEventListener("DOMContentLoaded", () => {
//   const poAbText = document.querySelector(".po_ab p"); // p 태그 선택

//   if (poAbText) {
//     setTimeout(() => {
//       poAbText.style.left = "30px"; // 최종 위치
//       poAbText.style.opacity = "1"; // 보이도록 설정
//     }, 300); // 페이지 로드 후 300ms 대기
//   }
// });
export function work(){
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
  }
  
