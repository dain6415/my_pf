import { customCursor } from "./src/js/customCursor.js";
import { header } from "./src/js/header.js";
import { introStickers } from "./src/js/introStickers.js";
import { about } from "./src/js/about.js";
import { project } from "./src/js/project.js";
import { work } from "./src/js/work.js";
import { footer } from "./src/js/footer.js";

window.addEventListener("load", function () {
  customCursor();
  header();
  introStickers();
  about();
  project();
  work();
  footer();
  // bgColor();

  //------------------------------------------------------------------------------------
  // lenis
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf); // Lenis만 애니메이션 프레임을 사용하도록 분리
  }
  requestAnimationFrame(raf);

  // 맨 위로 올라오기
  document.querySelectorAll(".up_btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
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
