import { header } from "./src/js/header.js";
import { intro } from "./src/js/intro.js";
import { project } from "./src/js/project.js";
import { work } from "./src/js/work.js";
import { about } from "./src/js/about.js";

// import { bgColor } from "./src/js/bg_color.js";

window.addEventListener("load", function () {
  header();
  intro();
  project();
  work();
  about();

  // bgColor();

  // ***************************************************************************
  // mouse event
  const mouses =
    document.querySelectorAll(".mouse_event"); /* 호버했을 때 size 변경용*/
  const customCursor = document.getElementById("custom_cursor");
  /* color, background 변경용 : background로 컬러를 지정했으니까 */

  // 초기 설정
  customCursor.style.padding = "calc(30px / 2)";
  customCursor.style.mixBlendMode = "normal"; 

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

  // 블렌드 모드 컬러
  const blend = document.querySelectorAll(".m-blend");

  blend.forEach((mouse) => {
    mouse.addEventListener("mouseenter", function () {
      customCursor.style.mixBlendMode = "difference"; // custom_cursor의 mix-blend-mode 변경
    });
    mouse.addEventListener("mouseleave", function () {
      customCursor.style.mixBlendMode = "normal"; // 기본으로 돌아옴
    });
  });

  // mouse 커서 위치
  document.addEventListener("mousemove", (e) => {
    const cursor = document.getElementById("custom_cursor");
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  //about에서만 커서 컬러 변경  - 특정 공간에서만 바꾸고 싶을 때
  const aboutCursor = document.querySelector("#about .sect_inner");

  aboutCursor.addEventListener("mouseenter", function () {
    customCursor.style.background = "#fff";
  });
  aboutCursor.addEventListener("mouseleave", function () {
    customCursor.style.background = "var(--main-color)";
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
