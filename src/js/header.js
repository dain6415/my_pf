export function header() {
  window.addEventListener('load', function () {
    header(); // 페이지 로드 후 header 함수 실행
  });
  
  function header() {
    window.addEventListener('scroll', function () {
      console.log('스크롤이 발생했습니다!');
      let header = document.querySelector('#header');
      if (window.scrollY > 100) {
        header.style.backgroundColor = 'transparent';
      } else {
        header.style.backgroundColor = 'black';
      }
    });
  }


  window.addEventListener("scroll", function () {
    const header = document.querySelector("#header");
    // const nav = document.querySelector("nav ul li a");

    if (window.scrollY > 1250) {
      // 스크롤 600이상으로 내려가면 header에 scrolled라는 클래스 추가
      header.classList.add("scrolled");
    } else {
      // 600이하가 아니면 scrolled 클래스를 제거 = 원래대로 돌아와라
      header.classList.remove("scrolled");
    }
  });
}