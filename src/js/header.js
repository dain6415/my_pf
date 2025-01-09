export function header() {
  //스크롤 값 구하기
  // window.addEventListener('scroll', function() {
  //   console.log(window.scrollY);
  // });

  const header = document.querySelector("header");
  let headerTop = header.offsetTop;

  function scrollFunc() {
    const scrollTop = window.scrollY;

    if (scrollTop + 0 >= headerTop) { // 숫자가 탑에서 어쩌고...
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

  // phon ver nav -------------------------------------------
  const toggleMovile = document.querySelector(".header__inner"); // 햄버거 버튼
  const nav = document.querySelector("nav.header__mobile"); // 네비게이션 메뉴
  const navIi = nav.querySelectorAll("li"); // 네비게이션 항목

  toggleMovile.addEventListener("click", (e) => {
    e.stopPropagation();

    const open = nav.classList.contains("open");

    if (open) { // 열리면
      //close
      nav.classList.remove("open");
      nav.style.opacity = "0";
      nav.style.display = "none";
      nav.style.position = "fixed";
      toggleMovile.setAttribute("aria-expanded", "false");
      toggleMovile.classList.remove("open");
    } else {
      //open
      nav.classList.add("open");
      nav.style.display = "block";
      setTimeout(() => (nav.style.opacity = "1"), 0); // 부드러운 전환
        toggleBtn.setAttribute("aria-expanded", "true");
        toggleBtn.classList.add("open");
    }
  });

//   navIi.forEach((item) => {
//     item.addEventListener("click", () => {
//         nav.classList.remove("open");
//         nav.style.opacity = "0";
//         nav.style.display = "none";
//         toggleMovile.setAttribute("aria-expanded", "false");
//         toggleMovile.classList.remove("open");
//     });
// });

document.addEventListener("click", () => {
  if (nav.classList.contains("open")) {
      nav.classList.remove("open");
      nav.style.opacity = "0";
      nav.style.display = "none";
      toggleMovile.setAttribute("aria-expanded", "false");
      toggleMovile.classList.remove("open");
  }
});

// 네비게이션 클릭 시 전파 중지
nav.addEventListener("click", (e) => {
  e.stopPropagation(); // 이벤트 전파 방지
});



  // $(".header__nav_mobile").click(function (e) {
  //   const nav = $("nav");
  //   const toggleBtn = $(this);

  //   if (nav.is(":visible")) {
  //     // 닫기
  //     // nav가 화면에 보이는 상태인지 확인함 = 열려있다면
  //     header.classList.add("fixed");
  //     header.classList.remove("borderNo");
  //     nav.stop().slideUp(600).find("ul").css("opacity", "0");
  //     toggleBtn.attr("aria-expanded", "false").removeClass("open");
  //   } else {
  //     // 열기
  //     header.classList.add("fixed", "borderNo");
  //     nav.stop().slideDown().find("ul").css("opacity", "1");
  //     toggleBtn.attr("aria-expanded", "true").addClass("open");
  //   }
  //   e.stopPropagation();
  // });

  // // li 클릭 시 메뉴 닫기
  // $("nav li").click(function () {
  //   const nav = $("nav");
  //   const toggleBtn = $(".header__nav_mobile");

  //   nav.stop().slideUp().find("ul").css("opacity", "0");
  //   toggleBtn.attr("aria-expanded", "false").removeClass("open");
  // });

  // // 다른 곳을 클릭해도 닫기
  // $(document).click(function () {
  //   const nav = $("nav");
  //   const toggleBtn = $(".header__nav_mobile");

  //   if (nav.is(":visible")) {
  //     nav.stop().slideUp(300).find("ul").css("opacity", "0");
  //     toggleBtn.attr("aria-expanded", "false").removeClass("open");
  //   }
  // });

  // // nav 클릭 시 전파 중지 (닫히지 않도록 설정)
  // $("nav").click(function (event) {
  //   event.stopPropagation();
  // });

  // 요소 선택
  // const toggleBtn = document.querySelector(".header__nav_mobile"); // 햄버거 버튼
  // const nav = document.querySelector("nav"); // 네비게이션 메뉴
  // const navItems = nav.querySelectorAll("li"); // 네비게이션 항목

  // // 메뉴 열기/닫기 토글
  // toggleBtn.addEventListener("click", (e) => {
  //     e.stopPropagation(); // 이벤트 전파 중지
  //     const isVisible = nav.classList.contains("open");

  //     if (isVisible) { // 메뉴 닫기
  //         nav.classList.remove("open");
  //         toggleBtn.setAttribute("aria-expanded", "false");
  //     } else { // 메뉴 열기
  //         nav.classList.add("open");
  //         toggleBtn.setAttribute("aria-expanded", "true");
  //     }
  // });

  // // 네비게이션 항목 클릭 시 메뉴 닫기
  // navItems.forEach((item) => {
  //     item.addEventListener("click", () => {
  //         nav.classList.remove("open");
  //         toggleBtn.setAttribute("aria-expanded", "false");
  //     });
  // });

  // // 문서 클릭 시 메뉴 닫기
  // document.addEventListener("click", () => {
  //     if (nav.classList.contains("open")) {
  //         nav.classList.remove("open");
  //         toggleBtn.setAttribute("aria-expanded", "false");
  //     }
  // });

  // // nav 클릭 시 전파 중지 (닫히지 않도록 설정)
  // nav.addEventListener("click", (e) => {
  //     e.stopPropagation();
  // });
}
