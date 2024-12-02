// import {menu} from "./src/js/menu.js";
// import {link} from "./src/js/link.js";
import {header} from "./src/js/header.js";
import {project} from "./src/js/project.js";
import {bgColor} from "./src/js/bg_color.js";

window.addEventListener('load', function(){
  // menu()
  // link()
  header()
  project()
  bgColor()
  
  document.querySelector('.up_btn').addEventListener('click', function() {
    // alert()
    window.scroll({
        top: 0,           // 최상단으로 이동
        behavior: 'smooth' // 부드럽게 이동
      });
  });
  
})

