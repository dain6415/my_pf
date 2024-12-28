export function project() {
  // ------------------------------------------------------
  // site view 호버 시 이미지 컬러 변경
  document.addEventListener("DOMContentLoaded", () => {
    const poAbText = document.querySelector(".po_ab p"); // p 태그 선택

    if (poAbText) {
      setTimeout(() => {
        poAbText.style.left = "30px"; // 최종 위치
        poAbText.style.opacity = "1"; // 보이도록 설정
      }, 300); // 페이지 로드 후 300ms 대기
    }
  });

  const siteViewLinks = document.querySelectorAll(".info a.view_btn");
  const visualImg = document.querySelectorAll(".visual .img_bg"); // visual 안에 있는 이미지

  if (siteViewLinks.length === 0 || visualImg.length === 0) {
    console.log("Missing elements!");
  } else {
    siteViewLinks.forEach((link, index) => {
      link.addEventListener("mouseenter", () => {
        // 링크 호버시 해당 인덱스의 이미지 색상 변경
        visualImg[index].style.filter = "grayscale(0%)"; // 컬러로 변경
      });

      link.addEventListener("mouseleave", () => {
        // 링크 떠날 때 해당 인덱스의 이미지 다시 흑백으로 변경
        visualImg[index].style.filter = "grayscale(100%)"; // 다시 흑백으로 변경
      });
    });
  }

  // -------------------------------------------------
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
        // end: () => `bottom-${getHeaderHeight()}`,
        end: "top",
        // end: () => `+=${window.innerHeight * 1.5}`,
        pin: true,
        pinSpacing: false,
        scrub: 1,
        markers: { indent: 0 * i },
        id: i + 1,
        onUpdate: updateAccordionHeight, // 높이 업데이트
      },
    });
  });

  // 초기 높이 설정
  updateAccordionHeight();
}
