import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

export function introStickers() {
  const stickerCanvas = document.getElementById("sticker_canvas");
  const stickers = document.querySelectorAll(".list_item");
  let currentZ = 1;

  stickers.forEach((sticker) => {
    sticker.addEventListener("click", () => {
      const stickerContainer = document.createElement("div");
      stickerContainer.className = "sticker";

      const vertex = document.createElement("div");
      vertex.className = "vertex";
      vertex.innerHTML = `
            <div class="top"></div>
            <div class="bottom"></div>
            `;

      const wrap = document.createElement("div");
      wrap.className = "sticker_wrap";

      const originalSvg = sticker.querySelector("svg");
      const stickerSvg = originalSvg.cloneNode(true);

      const vb = stickerSvg.viewBox.baseVal;
      let width = vb.width;
      let height = vb.height;

      if (window.innerWidth <= 700) {
        width = width / 2;
        height = height / 2;
      }

      wrap.style.width = width + "px";
      wrap.style.height = height + "px";

      const canvasRect = stickerCanvas.getBoundingClientRect();

      const viewportCenterX = window.innerWidth / 2 + window.scrollX;
      const viewportCenterY = window.innerHeight / 2 + window.scrollY;

      const containerLeft = viewportCenterX - (canvasRect.left + scrollX);
      const containerTop = viewportCenterY - (canvasRect.top + scrollY);

      stickerContainer.style.position = "absolute";
      stickerContainer.style.left = `${containerLeft}px`;
      stickerContainer.style.top = `${containerTop}px`;
      stickerContainer.style.transform = `translate(-50%, -50%) rotate(${
        (Math.random() - 0.5) * 320
      }deg)`;
      stickerContainer.style.zIndex = currentZ++;

      wrap.appendChild(stickerSvg);
      stickerContainer.appendChild(vertex);
      stickerContainer.appendChild(wrap);
      stickerCanvas.appendChild(stickerContainer);

      Draggable.create(stickerContainer, {
        type: "x,y",
        // bounds: stickerCanvas,
        inertia: true,
        onPress() {
          gsap.set(this.target, {
            x: gsap.getProperty(this.target, "x"),
            y: gsap.getProperty(this.target, "y"),
          });
          this.target.style.zIndex = ++currentZ;
        },
      });
    });
  });

  const portfolioMark = document.querySelector('.portfolio_mark');

  Draggable.create(portfolioMark, {
    type:'x,y',
    inertia:true,
    onPress() {
      gsap.set(this.target, {
        x: gsap.getProperty(this.target, "x"),
        y: gsap.getProperty(this.target, "y"),
      });
      this.target.style.zIndex = 999;
    },
  })

  // 초기화 ------------------
  let mobileMood = window.innerWidth <= 700;

  window.addEventListener("resize", () => {
    const nowMobile = window.innerWidth <= 700;

    if (nowMobile !== mobileMood) {
      const allStickers = document.querySelectorAll("#sticker_canvas .sticker");
      allStickers.forEach((sticker) => sticker.remove());
    }

    mobileMood = nowMobile;
  });
  // 스크롤 방향에 따라 nav 보이기/숨기기-------------------------------------------
  const showNav = gsap.to(".sticker_list_box", {
    y: 0,
    autoAlpha: 1,
    paused: true,
    duration: 0.3,
  });

  showNav.progress(1).pause();

  ScrollTrigger.create({
    start: "top top",
    end: document.querySelector("#footer").offsetTop - window.innerHeight,
    onUpdate: (self) => {
      if (
        window.scrollY + window.innerHeight >=
        document.querySelector("#footer").offsetTop
      ) {
        showNav.play();
      } else {
        self.direction === -1 ? showNav.play() : showNav.reverse();
      }
    },
  });
}
