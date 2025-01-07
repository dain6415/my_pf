export function project() {
  // -------------------------------------------------------------------------------------------------------
  // site view 호버 시 이미지 컬러 변경
  // document.addEventListener("DOMContentLoaded", () => {
  //   const poAbText = document.querySelector(".po_ab p"); // p 태그 선택

  //   if (poAbText) {
  //     setTimeout(() => {
  //       poAbText.style.left = "30px"; // 최종 위치
  //       poAbText.style.opacity = "1"; // 보이도록 설정
  //     }, 300); // 페이지 로드 후 300ms 대기
  //   }
  // });

  // const vBtn = document.querySelectorAll(".info a.view_btn");
  // const visualImg = document.querySelectorAll(".visual .img_bg"); // visual 안에 있는 이미지
  
  // const checkWindowSize = () => {
  //   console.log("window.innerWidth: ", window.innerWidth); // 창 크기 확인
  
  //   if (window.innerWidth > 701) {
  //     vBtn.forEach((link, i) => {
  //       link.addEventListener("mouseenter", () => {
  //         visualImg[i].style.filter = "grayscale(0%)"; // 컬러로 변경
  //       });
  
  //       link.addEventListener("mouseleave", () => {
  //         visualImg[i].style.filter = "grayscale(100%)"; // 흑백으로 변경
  //       });
  //     });
  //   } else if(window.innerWidth < 700) {
  //     visualImg.forEach(link => {
  //       link.style.filter = "grayscale(0%)"; // 기본적으로 컬러로 유지
  //     });
  //   }
  // };
  $(document).ready(function() {
    const $vBtn = $(".info a.view_btn");
    const $visualImg = $(".visual .img_bg");
  
    // 화면 크기 체크하고 적절히 이벤트 추가/제거
    function handleResize() {
      if ($(window).width() > 701) {
        // 701px 이상일 때만 호버 이벤트 추가
        $vBtn.each(function(index) {
          $(this).on("mouseenter", function() {
            $visualImg.eq(index).css("filter", "grayscale(0%)"); // 컬러로 변경
          });
  
          $(this).on("mouseleave", function() {
            $visualImg.eq(index).css("filter", "grayscale(100%)"); // 다시 흑백으로 변경
          });
        });
  
        // 701px 이상에서는 기본적으로 흑백 필터 적용
        $visualImg.css("filter", "grayscale(100%)");
      } else {
        // 700px 이하일 때는 이미지가 컬러 상태로 유지되고, 호버 이벤트 제거
        $visualImg.css("filter", "grayscale(0%)"); // 컬러로 유지
        $vBtn.off("mouseenter mouseleave"); // 호버 이벤트 제거
      }
    }
  
    // 초기 상태 설정
    handleResize();
  
    // 창 크기 변경 시 이벤트 처리
    $(window).on("resize", handleResize);
  });
  

  
  

  

  // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // 아코디언
  console.clear();
  // 콘솔 로그 지우기. 디버깅 중에 콘솔을 정리하는 용도로 사용
  gsap.registerPlugin(ScrollTrigger);

  const aritBox = gsap.utils.toArray(".article_box");
  const sWrap = document.querySelector(".sect__wrap");

  function getHeaderHeight() {
    return document.querySelector("#header").getBoundingClientRect().height - 1; // 헤더 높이 실시간 계산
  }

  function updateAccordionHeight() {
    // 마지막 아코디언의 .vlsual이 확장된 상태에서 높이 계산
    let totalHeight = 0;
    // 아코디언의 각 항목을 기준으로 높이를 업데이트하는 역할

    aritBox.forEach((item) => {
      const contentHeight = item.scrollHeight; // 실제 내용 높이
      totalHeight += contentHeight;
      // contentHeight 값을 가져와 모든 항목의 총 높이 구하기
    });
    // .sWrap 높이 = 총 높이
    sWrap.style.height = totalHeight + "px";
  }

  // 아코디언 애니메이션 설정
  aritBox.forEach((item, i) => {
    const header = item.querySelector(".header__title");

    gsap.to(aritBox, {
      // height: "0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: item,
        start: () => `top ${getHeaderHeight() + header.clientHeight * 2 * i}`,
        endTrigger: "#work",
        end: "top",
        // end: () => `+=${window.innerHeight * 1.5}`,
        pin: true,
        pinSpacing: false,
        scrub: 1,
        id: i + 1,
        onUpdate: updateAccordionHeight, // 높이 업데이트
        // markers: { indent: 0 * i },
      },
    });
  });

  // 초기 높이 설정
  updateAccordionHeight();
}
