export function project() {
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

  const siteViewLinks = document.querySelectorAll(".info a.view_btn");
  const imgBgs = document.querySelectorAll(".s_img .img_bg");

  if (siteViewLinks.length === 0 || imgBgs.length === 0) {
    console.log("Missing elements!");
  } else {
    siteViewLinks.forEach((link, index) => {
      link.addEventListener("mouseenter", () => {
        // 링크 호버시 해당 인덱스의 이미지 색상 변경
        imgBgs[index].style.filter = "grayscale(0%)"; // 컬러로 변경
      });

      link.addEventListener("mouseleave", () => {
        // 링크 떠날 때 해당 인덱스의 이미지 다시 흑백으로 변경
        imgBgs[index].style.filter = "grayscale(100%)"; // 다시 흑백으로 변경
      });
    });
  }

  // *****************************************************************
  const relaElem = document.querySelector(".sect__wrap");
  const stickyElems = document.querySelectorAll(".article_box");

  // 높이와 top 위치를 data 속성에서 가져오기
  const stickyHeight = Number(relaElem.dataset.height);
  const stickyTop = Number(relaElem.dataset.top);
  const stickyTitle = Number(relaElem.dataset.title);
  const stickyTotal = stickyElems.length - 1; // 마지막 인덱스 계산

  // 요소에 자동으로 값 설정
  stickyElems.forEach((sticky, idx) => {
    const reverseIdx = stickyTotal - idx; // 반대 순서의 인덱스 계산
    sticky.style.height = `${stickyHeight + stickyTitle * reverseIdx}px`; // 높이 설정
    sticky.style.top = `${stickyTop + stickyTitle * idx}px`; // top 위치 설정
  });

  const mobile = 700;
  window.addEventListener("resize", function () {
    resize();
  });
  function resize() {
    let currentWid = window.outerWidth;
    if (currentWid > mobile) {
      console.log("pc");
    } else {
      console.log("mobile");
    }
  }
}
