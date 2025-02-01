import { header } from "./src/js/header.js";
import { intro } from "./src/js/intro.js";
import { project } from "./src/js/project.js";
import { work } from "./src/js/work.js";
import { about } from "./src/js/about.js";
import { footer } from "./src/js/footer.js";

// import { bgColor } from "./src/js/bg_color.js";

window.addEventListener("load", function () {
  header();
  intro();
  about(); // 순서를 기다리세요
  project();
  work();
  footer();
  // bgColor();

  // *********************************************************************************************************************************************************************************************************************************
  // mouse event
  const mouses =
    document.querySelectorAll(".mouse_event"); /* 호버했을 때 size 변경용*/
  const customCursor = document.getElementById("custom_cursor"); /* color, background 변경용 : background로 컬러를 지정했으니까 */

  // 초기 설정
  customCursor.style.padding = "calc(30px / 2)";
  customCursor.style.mixBlendMode = "normal";

  // phone일 때 마우스 없애기
  const mediaQuery = window.matchMedia("(max-width: 700px)"); 
  const customMouse = () =>{
    if(mediaQuery.matches){
      customCursor.style.display = "none";
      this.document.body.style.cursor= "auto" // 기본 마우스
    }else{
       customCursor.style.display = "block";
      this.document.body.style.cursor= "none"
    }
  }

  // 초기 실행
  customMouse();

  mediaQuery.addEventListener("change", customMouse);

  // 블렌드 모드 컬러 ------------------------------------------
  mouses.forEach((mouse) => {
    mouse.addEventListener("mouseenter", function () {
      if (!mouse.classList.contains("on")) {
        customCursor.style.padding = "5px"; // 나누기니까 15px
      }
      customCursor.style.mixBlendMode = "difference";
    });
    mouse.addEventListener("mouseleave", function () {
      if (!mouse.classList.contains("on")) {
        customCursor.style.padding = "calc( 30px / 2)";
      }
      customCursor.style.mixBlendMode = "normal";
    });
  });


  // mouse 커서 위치 ------------------------------------------
  document.addEventListener("mousemove", (e) => {
    const cursor = document.getElementById("custom_cursor");
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  //특정 공간에서 커서 컬러 변경  - 특정 공간에서만 바꾸고 싶을 때 ------------------------------------------
  const footerCursor = document.querySelector("#footer .sect_inner");

  footerCursor.addEventListener("mouseenter", function () {
    customCursor.style.background = "#f5f5f5";
    // customCursor.style.opacity = "0.5";
  });
  footerCursor.addEventListener("mouseleave", function () {
    customCursor.style.background = "var(--main-color)";
    // customCursor.style.opacity = "0";
  });

  // 위로가기 ------------------------------------------
  // document.querySelector(".up_btn").addEventListener("click", function () {
  //   // alert()
  //   window.scroll({
  //     top: 0, // 최상단으로 이동
  //     behavior: "smooth", // 부드럽게 이동
  //   });
  // });

  // ------------------------------------------
  // lenis
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // 스크롤바------------------------------------------
  // requestAnimationFrame(raf);
  // $("body").mCustomScrollbar({
  //   theme: "minimal-dark",
  // });
});
