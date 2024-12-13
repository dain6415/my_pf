import { header } from "./src/js/header.js";
// import { about } from "./src/js/about.js";
import { intro } from "./src/js/intro.js";
import { project } from "./src/js/project.js";
import { work } from "./src/js/work.js";

// import { bgColor } from "./src/js/bg_color.js";

window.addEventListener("load", function () {
  // about();
  header();
  intro();
  project();
  work();

  // bgColor();

  
  // ***************************************************************************

  //about에서만 커서 컬러 변경 - 근데 안됨
  document.addEventListener("DOMContentLoaded", function () {
    // 페이지 경로 확인 후 'about' 페이지에서만 색상 변경
    if (window.location.pathname.includes("about")) {
      document.documentElement.style.setProperty('--main-color', '#FFFFFF'); // 흰색
      console.log("어바웃 페이지 - 커서 색상 변경됨");
    } else {
      document.documentElement.style.setProperty('--main-color', '#0051F4'); // 기본 파란색
      console.log("어바웃 페이지가 아님 - 기본 색상 유지");
    }
  });
  
  // mouse event
  const mouses = document.querySelectorAll(".mouse_event");
  const customCursor = document.getElementById("custom_cursor");
  
  mouses.forEach((mouse) => {
    mouse.addEventListener("mouseenter", function () {
      customCursor.style.padding = "calc( 30px / 2)"; // 나누기니까 15px
      customCursor.style.mixBlendMode = "difference"; // 15px
    });
    mouse.addEventListener("mouseleave", function () {
      customCursor.style.padding = "5px";
      customCursor.style.mixBlendMode = "normal"; // 15px
    });
  });
  
  const blend = document.querySelectorAll(".m-blend");
  
  blend.forEach((mouse) => {
    mouse.addEventListener("mouseenter", function () {
      customCursor.style.mixBlendMode = "difference"; // custom_cursor의 mix-blend-mode 변경
    });
    mouse.addEventListener("mouseleave", function () {
      customCursor.style.mixBlendMode = "normal"; // 기본으로 돌아옴
    });
  });
  
  // mouse color
  document.addEventListener("mousemove", (e) => {
    const cursor = document.getElementById("custom_cursor");
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });
  

  // ------------------------------------------
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
