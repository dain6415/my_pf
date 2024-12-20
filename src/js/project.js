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

  // *****************************************************************
  // const relaElem = document.querySelector(".sect__wrap");
  // const stickyElems = document.querySelectorAll(".article_box");

  // // 높이와 top 위치를 data 속성에서 가져오기
  // const stickyHeight = Number(relaElem.dataset.height);
  // const stickyTop = Number(relaElem.dataset.top);
  // const stickyTitle = Number(relaElem.dataset.title);
  // const stickyTotal = stickyElems.length - 1; // 마지막 인덱스 계산

  // // 요소에 자동으로 값 설정
  // stickyElems.forEach((sticky, idx) => {
  //   const reverseIdx = stickyTotal - idx; // 반대 순서의 인덱스 계산
  //   sticky.style.height = `${stickyHeight + stickyTitle * reverseIdx}px`; // 높이 설정
  //   sticky.style.top = `${stickyTop + stickyTitle * idx}px`; // top 위치 설정
  // });

  // const mobile = 700;
  // window.addEventListener("resize", function () {
  //   resize();
  // });
  // function resize() {
  //   let currentWid = window.outerWidth;
  //   if (currentWid > mobile) {
  //     console.log("pc");
  //   } else {
  //     console.log("mobile");
  //   }
  // }

  // let arti = gsap.utils.toArray(".article_box");

  // arti.forEach((panel, i) => {
  //   ScrollTrigger.create({
  //     trigger: arti, // panel 요소가 트리거 역할을 함
  //     start: "top top", // panel의 top이 뷰포트의 top에 닿을 때 시작
  //     endTrigger: panel.querySelector(".sect__item .title"), // .title 요소에 도달할 때 끝내기
  //     end: "bottom top", // .title의 bottom이 뷰포트의 top에 도달할 때 멈추게 설정
  //     pin: true, // 스크롤이 해당 영역에 닿을 때 해당 요소 고정
  //     scrub: 3, // 부드러운 스크롤
  //     pinSpacing: true // 고정된 요소 주변 여백을 유지
  //   });
  // });

  // ------------------------------------------------------

  // 아코디언
  console.clear();
  // 콘솔 로그 지우기. 디버깅 중에 콘솔을 정리하는 용도로 사용

  gsap.registerPlugin(ScrollTrigger);
  
  const aritBox = gsap.utils.toArray(".article_box"); 
  const sWrap = document.querySelector(".sect__wrap");

  function getHeaderHeight() {
    return document.querySelector("#header").getBoundingClientRect().height; // 헤더 높이 실시간 계산
  }

  let headerHeight = getHeaderHeight();
window.addEventListener('resize', () => {
  headerHeight = getHeaderHeight();
  updateAccordionHeight();
});

  function updateAccordionHeight() {
    // 마지막 아코디언의 .vlsual이 확장된 상태에서 높이 계산
    let totalHeight = 0;
    // 아코디언의 각 항목을 기준으로 높이를 업데이트하는 역할

    aritBox.forEach((item) => {
      const visualHeight = item.querySelector(".visual"); 
      const contentHeight = visualHeight.scrollHeight; // 실제 내용 높이
      totalHeight += contentHeight;
      // contentHeight 값을 가져와 모든 항목의 총 높이 구하기

      // console.log(visualHeight.scrollHeight);
    });
  
    // .sWrap 높이 = 총 높이
    sWrap.style.height = totalHeight + "px";
  }

  function getScrollTriggerValues(i, headerHeight) {
    if (window.innerWidth > 1000) {
      return {
        start: `top ${headerHeight + (100 * i)}`,
        end: `bottom-=${headerHeight}`
      };
    } else {
      return {
        start: `top ${headerHeight + (50 * i)}`,
        end: `bottom-=${headerHeight}`
      };
    }
  }
  
  // 아코디언 애니메이션 설정
  aritBox.forEach((item, i) => {
    const visualContent = item.querySelector(".visual");
    const header = item.querySelector(".header__title");
  
    gsap.to(visualContent, {
      height: "0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: item,
        // start: "top " + (header.clientHeight * 2.5) * i,
        start: () => `top ${getHeaderHeight() + (header.clientHeight * 2.5) * i}`,
        endTrigger: "#work",
        end: () => `bottom-${getHeaderHeight()}`,
        // end: "top bottom",
        // end: "top " + header.clientHeight * 21,
        pin: true,
        pinSpacing: false,
        scrub: .5,
        markers: { indent: 0 * i },
        id: i + 1,
        onUpdate: updateAccordionHeight, // 높이 업데이트
      },
    });
  });
  
  // 초기 높이 설정
  updateAccordionHeight();
  
}
