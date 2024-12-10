// import {menu} from "./src/js/menu.js";
// import {link} from "./src/js/link.js";
import { header } from "./src/js/header.js";
// import { about } from "./src/js/about.js";
import { intro } from "./src/js/intro.js";
import { project } from "./src/js/project.js";
// import { bgColor } from "./src/js/bg_color.js";

window.addEventListener("load", function () {
  // menu()
  // link()
  // about();
  header();
  intro();
  project();
  // bgColor();

  // mouse event
  const mouses = document.querySelectorAll(".mouse_event");
  const customCursor = document.getElementById("custom_cursor");

  mouses.forEach((mouse) => {
    mouse.addEventListener("mouseenter", function () {
      customCursor.style.padding = "calc( 30px / 2)"; //15px이여
    });
    mouse.addEventListener("mouseleave", function () {
      customCursor.style.padding = "5px";
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
  // mouse color-----------
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
  // lenis - 안됨 스크롤 자체가 안됨ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
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
