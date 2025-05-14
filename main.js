import { customCursor } from "./src/js/customCursor.js";
import { header } from "./src/js/header.js";
import { intro } from "./src/js/intro.js";
import { about } from "./src/js/about.js";
import { project } from "./src/js/project.js";
import { work } from "./src/js/work.js";
import { footer } from "./src/js/footer.js";

// import { bgColor } from "./src/js/bg_color.js";

window.addEventListener("load", function () {
  customCursor();
  header();
  intro();
  about();
  project();
  work();
  footer();
  // bgColor();

  //------------------------------------------------------------------------------------
  // data - bg 바뀌기
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

  // 맨 위로 올라오기
  document.querySelector(".up_btn").addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  let observer = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show"); // 화면에 나타나면 show 추가
        } else if (entry.boundingClientRect.top > 0) {
          entry.target.classList.remove("show"); // 위로 올라가면 show 제거
        }
      });
    },
    { threshold: 0.1 }
  );
  
  document.querySelectorAll(".animate-up").forEach((el) => {
    observer.observe(el);
  });
});

