export function header() {
  const header = document.querySelector("header");
  const footer = document.querySelector("#footer");

  window.addEventListener("scroll", function () {
    const gnbMenusColor = document.querySelectorAll(".nav_link .up_btn");
    const gnbHomeBtn = document.querySelector(".gnb_logo a");
    const footerTop = footer.offsetTop;
    const scrollY = window.scrollY;
    const windowH = window.innerHeight;

    //만약 footer일때 -----
    if (scrollY + windowH > footerTop) {
      header.style.background = "rgba(255, 255, 255, 0.1)";
      gnbMenusColor.forEach((link) => {
        if (!link.classList.contains("on")) {
          link.style.color = "#ccc";
        } else {
          link.style.color = "#fff";
        }
      });
      gnbHomeBtn.style.color = "#fff";
      // 스크롤이 40 이상일 때 ----- 켄텐츠에서는~
    } else if (scrollY > 40) {
      header.style.background = "rgba(0, 0, 0, .2)";
      gnbMenusColor.forEach((link) => {
        if (!link.classList.contains("on")) {
          link.style.color = "#666";
        } else {
          link.style.color = "#999";
        }
      });
      gnbHomeBtn.style.color = "#666";
      // 40 미만일 때 = 맨위! 인트로 -----
    } else {
      header.style.background = "";
      gnbMenusColor.forEach((link) => {
        if (!link.classList.contains("on")) {
          link.style.color = "#666";
        }
      });
    }
    header.style.backdropFilter = "blur(10px)";
    header.style.transition = ".3s";
  });

  // --------------------------------------------------------------------------------
  // nav li 클릭시 해당 위치로 스크롤 이동 + 부드럽게 이동
  const navLinks = gsap.utils.toArray(".gnb .nav_link");
  const mobileLinks = gsap.utils.toArray(".gnb_mobile .nav_link");
  
  function addScrollHandler(links) {
    links.forEach((link) => {
      let href = document.querySelector(link.getAttribute("href"));
  
      link.addEventListener("click", function (e) {
        e.preventDefault();
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: href,
            offsetY: 0,
          },
          overwrite: "auto",
          onComplete: () => {
            links.forEach((el) => {
              el.setAttribute("aria-current", "false");
            });
            link.setAttribute("aria-current", "true");
          },
        });
      });
    });
  }
  
  addScrollHandler(navLinks);
  addScrollHandler(mobileLinks);

  
  // 현재 화면에 보이는 섹션에 해당하는 링크 활성화
  let sections = gsap.utils.toArray("section");

  window.addEventListener("scroll", function () {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const links = document.querySelectorAll(`a[href="#${section.id}"]`);
  
      links.forEach((link) => {
        if (rect.top <= 0 && rect.bottom > 0) {
          link.classList.add("on");
          link.setAttribute("aria-current", "true");
        } else {
          link.classList.remove("on");
          link.setAttribute("aria-current", "false");
        }
      });
    });
  });

  // ------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------
  // phon ver. nav -------------------------------------------
  const mobileMenu = document.querySelector(".gnb_mobile_var");
  const closeBtn = document.querySelector(".close");
  const mobileNav = document.querySelector(".gnb_mobile");
  const mobilBg = document.querySelector(".gnb_mobile_bg");

  const mediaQuery = window.matchMedia("(max-width: 700px)");

  const openMenu = (e) => {
    e.stopPropagation();
    mobileNav.classList.add("on");
    mobilBg.classList.add("on");
  };

  const closeMenu = (e) => {
    e.stopPropagation();
    mobileNav.classList.remove("on");
    mobilBg.classList.remove("on");
  };

  function handleMobileNav() {
    if (mediaQuery.matches) {
      mobileMenu.addEventListener("click", openMenu);
      closeBtn.addEventListener("click", closeMenu);
    } else {
      mobileNav.classList.remove("on");
      mobilBg.classList.remove("on");

      mobileMenu.removeEventListener("click", openMenu);
      closeBtn.removeEventListener("click", closeMenu);
    }
  }

  handleMobileNav();
  window.addEventListener("resize", handleMobileNav);
}
