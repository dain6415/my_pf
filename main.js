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
  //------------------------------------------------------------------------------------
  // ******************************************************************************************************************
  // mouse event
  const mouses = document.querySelectorAll("a"); /* 호버했을 때 size 변경용 */
  // 원래는 mouse_event라는 클래스를 썼는데 어차피 거의 a태그에 써서 필요가 없어졌음
  const customCursor =
    document.getElementById(
      "custom_cursor"
    ); /* color, background 변경용 : background로 컬러를 지정했으니까 */

  // 초기 설정
  customCursor.style.padding = "calc(30px / 2)";
  customCursor.style.mixBlendMode = "normal";

  // phone일 때 마우스 없애기
  const mediaQuery = window.matchMedia("(max-width: 700px)");
  const customMouse = () => {
    if (mediaQuery.matches) {
      customCursor.style.display = "none";
      document.body.style.cursor = "auto"; // 기본 마우스
    } else {
      customCursor.style.display = "block";
      this.document.body.style.cursor = "none";
    }
  };

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

  //------------------------------------------------------------------------------------
  // data - bg 바뀌기
  // console.log(gsap);
  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll("section").forEach((item) => {
    const color = item.getAttribute("data-bg"); // 섹션의 배경색 가져오기

    ScrollTrigger.create({
      trigger: item, // 각 섹션을 트리거로 설정
      start: "top 80%", // 섹션이 화면 상단에 닿을 때
      end: "bottom 60%", // 섹션이 화면 상단을 지나갈 때
      scrub: true, // 스크롤에 맞춰 배경색 변화
      onEnter: () =>
        gsap.to("main", {
          background: color,
          duration: 0.2,
        }),
      onEnterBack: () =>
        gsap.to("main", {
          background: color,
          duration: 0.2,
        }),
      // markers: true
    });
  });
  // ------------------------------------------
  // lenis
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf); // Lenis만 애니메이션 프레임을 사용하도록 분리
  }
  requestAnimationFrame(raf);
});
