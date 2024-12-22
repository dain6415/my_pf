export function header() {
  //스크롤 값 구하기
  // window.addEventListener('scroll', function() {
  //   console.log(window.scrollY);
  // });

  const header = document.querySelector("header");
  let headerTop = header.offsetTop;

  function scrollFunc() {
    const scrollTop = window.scrollY;

    if (scrollTop + 0 >= headerTop) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  }

  window.addEventListener("scroll", scrollFunc);

  window.addEventListener("resize", () => {
    headerTop = header.offsetTop;
  });

  let links = gsap.utils.toArray("nav ul li a");
  links.forEach((link) => {
    let elem = document.querySelector(link.getAttribute("href"));
    console.log(elem);

    ScrollTrigger.create({
      trigger: elem,
      start: "top center",
      end: "bottom center",
      onToggle: (self) => linkActive(link),
    });

    // nav li 클릭시 해당 위치로 스크롤 이동 + 부드럽게 이동 -------------------------------------------
    link.addEventListener("click", function (e) {
      e.preventDefault();
      linkActive(link);
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: elem,
          offsetY: 80,
        },
        overwrite: "auto",
      });
    });
  });
  // nav 활성화 비활성화-------------------------------------------
  const showNav = gsap
    .from("nav", {
      // yPercent: -200,
      paused: true,
      duration: 0.2,
    })
    .progress(1);

  ScrollTrigger.create({
    start: "top top",
    end: 9999,
    onUpdate: (self) => {
      self.direction === -1 ? showNav.play() : showNav.reverse();
    },
  });
  // 버튼 활성화-------------------------------------------
  function linkActive(link) {
    links.forEach((el) => el.classList.remove("on"));
    link.classList.add("on");
  }
}
