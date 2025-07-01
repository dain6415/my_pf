export function about() {
  document.querySelectorAll(".hoverTxt").forEach((li) => {
    const hoverTxt = li.getAttribute("data-hover");

    li.addEventListener("mouseenter", function () {
      this.setAttribute("data-hover", hoverTxt);
      // console.log("현재 data-hover 값:", this.getAttribute("data-hover"));
    });
  });

  const aboutSticker = document.querySelector('.mini_sticker');

  Draggable.create(aboutSticker, {
    type: "x,y",
    inertia: true,
    onPress() {
      gsap.set(this.target, {
        x: gsap.getProperty(this.target, "x"),
        y: gsap.getProperty(this.target, "y"),
      });
      this.target.style.zIndex = ++currentZ;
    },
  });
}
