// import {menu} from "./src/js/menu.js";
// import {link} from "./src/js/link.js";
import { header } from "./src/js/header.js";
import { intro } from "./src/js/intro.js";
import { project } from "./src/js/project.js";
// import { bgColor } from "./src/js/bg_color.js";

window.addEventListener("load", function () {
  // menu()
  // link()
  header();
  intro();
  project();
  // bgColor();

  document.querySelector(".up_btn").addEventListener("click", function () {
    // alert()
    window.scroll({
      top: 0, // 최상단으로 이동
      behavior: "smooth", // 부드럽게 이동
    });
  });

  // const customCursor = document.getElementById("custom_cursor");
  // document.addEventListener("mousemove", function (e) {
  //   let cursorX = e.clientX;
  //   let cursorY = e.clientY;

  //   customCursor.style.left = cursorX + "px";
  //   customCursor.style.top = cursorY + "px";
  // });
});
