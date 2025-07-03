export function project() {
  new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  let mobileMood = window.innerWidth <= 700;

  window.addEventListener("resize", () => {
    let noMobile = window.innerWidth <= 700;

    if (noMobile !== mobileMood) {
      mobileMood = noMobile;

      const swiperSlide = document.querySelectorAll(".swiper-slide");

      swiperSlide.forEach((slide) => {
        const img = slide.querySelector('.img_box img');
        if(!img)return;

        let src = img.getAttribute('src');

        if (noMobile) {
          // 모바일일 때 _mini 붙임
          if (!src.includes("_mini")) {
            const newSrc = src.replace(/(\.\w+)$/, "_mini$1");
            img.setAttribute("src", newSrc);
          }
        } else {
          // 데스크탑일 때 _mini 제거
          const newSrc = src.replace("_mini", "");
          img.setAttribute("src", newSrc);
        }
      });
    }
  });
}
