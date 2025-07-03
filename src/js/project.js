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

  function updateImages(isMobile) {
    const swiperSlides = document.querySelectorAll(".swiper-slide");
  
    swiperSlides.forEach((slide) => {
      const img = slide.querySelector('.img_box img');
      if (!img) return;
  
      let src = img.getAttribute('src');
  
      if (isMobile) {
        if (!src.includes("_mini")) {
          const newSrc = src.replace(/(\.\w+)$/, "_mini$1");
          img.setAttribute("src", newSrc);
        }
      } else {
        const newSrc = src.replace("_mini", "");
        img.setAttribute("src", newSrc);
      }
    });
  }
  
  // 페이지 로드시 한번 실행
  updateImages(mobileMood);
  
  window.addEventListener("resize", () => {
    let nowMobile = window.innerWidth <= 700;
  
    if (nowMobile !== mobileMood) {
      mobileMood = nowMobile;
      updateImages(mobileMood);
    }
  });  
}
