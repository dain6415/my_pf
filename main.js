// import {menu} from "./src/js/menu.js";
// import {link} from "./src/js/link.js";
<<<<<<< HEAD
import { header } from "./src/js/header.js";
import { intro } from "./src/js/intro.js";
import { project } from "./src/js/project.js";
// import { bgColor } from "./src/js/bg_color.js";
=======
import gsap from 'gsap';

import {header} from "./src/js/header.js";
import {project} from "./src/js/project.js";
import {work} from "./src/js/work.js";
// import {bgColor} from "./src/js/bg_color.js";
>>>>>>> 0f41af582466979a8ed6011342bc2de934bac742

window.addEventListener("load", function () {
  // menu()
  // link()
<<<<<<< HEAD
  header();
  intro();
  project();
  // bgColor();

  document.querySelector(".up_btn").addEventListener("click", function () {
=======
  header()
  project()
  work()
  // bgColor()
  
  document.querySelector('.up_btn').addEventListener('click', function() {
>>>>>>> 0f41af582466979a8ed6011342bc2de934bac742
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
