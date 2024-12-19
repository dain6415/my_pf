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

  gsap.registerPlugin(ScrollTrigger);
  
  const items = gsap.utils.toArray(".article_box"); // .item -> .sect__item
  
  const accordionSection = document.querySelector(".sect__wrap"); // .accordion-section -> .sect__wrap
  
  function updateAccordionHeight() {
    // 마지막 아코디언의 .body가 확장된 상태에서 높이 계산
    let totalHeight = 0;
    items.forEach((item) => {
      const body = item.querySelector(".info"); // .body -> .info
      const contentHeight = body.scrollHeight; // 실제 내용 높이
      totalHeight += contentHeight;
    });
  
    // .accordion-section 높이 설정
    accordionSection.style.height = totalHeight + "px";
  }
  
  // 아코디언 애니메이션 설정
  items.forEach((item, i) => {
    const content = item.querySelector(".visual"); // .body -> .info
    const header = item.querySelector(".header__title"); // .header -> .header__title
  
    gsap.to(content, {
      height: "0", // .body -> .info
      ease: "none",
      scrollTrigger: {
        trigger: item,
        start: "top " + (header.clientHeight * 2.5) * i,
        endTrigger: "#work", // .final -> .sect__wrap
        end: "top " + header.clientHeight * items.length,
        pin: true,
        pinSpacing: false,
        scrub: true,
        markers: { indent: 150 * i },
        id: i + 1,
        onUpdate: updateAccordionHeight, // 높이 업데이트
      },
    });
  });
  
  // 초기 높이 설정
  updateAccordionHeight();
  
}
