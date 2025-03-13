export function header() {
  const header = document.querySelector("header");
  const footer = document.querySelector("#footer");

  window.addEventListener("scroll", function () {
    const headerColor = document.querySelectorAll("header nav li a");
    const homeBtn = document.querySelector(".header__logo a");
    const footerTop = footer.offsetTop;
    const scrollY = window.scrollY;
    const windowH = window.innerHeight;

    //만약 footer일때 -----
    if (scrollY + windowH > footerTop) {
      header.style.background = "rgba(255, 255, 255, 0.1)";
      headerColor.forEach((link) => {
        if (!link.classList.contains("on")) {
          link.style.color = "#ccc";
        } else{
          link.style.color = "#fff"; 
        }
      });
      homeBtn.style.color = "#fff";
      // 스크롤이 40 이상일 때 ----- 켄텐츠에서는~
    } else if (scrollY > 40) {
      header.style.background = "rgba(0, 0, 0, .2)";
      headerColor.forEach((link) => {
        if (!link.classList.contains("on")) {
          link.style.color = "#666";
        }else{
          link.style.color = "#fff";
        }
      });
      homeBtn.style.color = "#666";
      // 40 미만일 때 = 맨위! 인트로 -----
    } else {
      header.style.background = ""; 
      headerColor.forEach((link) => {
        if (!link.classList.contains("on")) {
          link.style.color = "#666";
        }
      });
    }
    header.style.backdropFilter = "blur(10px)";
    header.style.transition = ".3s";
  });
  // 버튼 활성화-------------------------------------------
  function linkActive(link) {
    links.forEach((el) => el.classList.remove("on"));
    link.classList.add("on");
  }

  // --------------------------------------------------------------------------------
  // nav li 클릭시 해당 위치로 스크롤 이동 + 부드럽게 이동
  let links = gsap.utils.toArray("nav ul li a");
  let sections = gsap.utils.toArray("section"); 

  links.forEach((link) => {
    let elem = document.querySelector(link.getAttribute("href"));
    console.log(elem);

    link.addEventListener("click", function (e) {
      e.preventDefault();
      linkActive(link);
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: elem,
          offsetY: 0,
        },
        overwrite: "auto",
      });
    });
  });

  // 현재 화면에 보이는 섹션에 해당하는 링크 활성화
window.addEventListener("scroll", function () {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const link = document.querySelector(`a[href="#${section.id}"]`);
    
    // 섹션이 화면에 들어오면 링크 활성화
    if (rect.top <= 0 && rect.bottom > 0) {
      link.classList.add("on");
    } else {
      link.classList.remove("on"); 
    }
  });
});

  // 스크롤 방향에 따라 nav 보이기/숨기기-------------------------------------------
  const showNav = gsap
    .from("header", {
      yPercent: 200, // y를 아래로 200px 내림
      paused: true, // 멈춤
      duration: 0.3, // 3초 뒤
    })
    .progress(1);

  ScrollTrigger.create({
    start: "top top",
    // end: 9999,
    end: document.querySelector("#footer").offsetTop - window.innerHeight,
    onUpdate: (self) => {
      if (
        window.scrollY + window.innerHeight >= document.querySelector("#footer").offsetTop
      ) {
        showNav.play(); // 푸터에 도달하면 네비게이션 항상 보이게
      } else {
        self.direction === -1 ? showNav.play() : showNav.reverse();
      }
    },
  });

  // ------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------
  // phon ver. nav -------------------------------------------
  const mobileMeun = document.querySelector(".header__nav_mobile");
  const closeBtn = document.querySelector(".close");
  const nav = document.querySelector("nav.header__mobile");
  const filter = document.querySelector(".header__mobile_filter");

  const mediaQuery = window.matchMedia("(max-width: 700px)");

  const openMenu = (e) => {
    e.stopPropagation();
    nav.classList.add("on");
    filter.classList.add("on");
  };

  const closeMenu = (e) => {
    e.stopPropagation();
    nav.classList.remove("on");
    filter.classList.remove("on");
  };

  function handleMobileNav() {
    if (mediaQuery.matches) {
      mobileMeun.addEventListener("click", openMenu);
      closeBtn.addEventListener("click", closeMenu);
    } else {
      nav.classList.remove("on");
      filter.classList.remove("on");

      mobileMeun.removeEventListener("click", openMenu);
      closeBtn.removeEventListener("click", closeMenu);
    }
  }

  // 초기 실행 및 리사이즈 이벤트 연결
  handleMobileNav();
  window.addEventListener("resize", handleMobileNav);

  // 네비게이션 클릭 시 이벤트 전파 방지
  // nav.addEventListener("click", (e) => {
  //   e.stopPropagation();
  // });
}
