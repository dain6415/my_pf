export function about() {
  document.querySelectorAll(".hoverTxt").forEach((li) => {
    const hoverTxt = li.getAttribute("data-hover");

    li.addEventListener("mouseenter", function () {
      this.setAttribute("data-hover", hoverTxt);
      // console.log("현재 data-hover 값:", this.getAttribute("data-hover"));
    });
  });

  
  gsap.registerPlugin(ScrollTrigger);

  const aboutTrigger = document.querySelectorAll(".text_scrollTrigger");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: aboutTrigger[0],
      start: "top 80%", 
      end: "bottom 50%",
      scrub: true, 
    },
  });

  aboutTrigger.forEach((textElement) => {
    let combinedText = "";

    textElement.childNodes.forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        combinedText += child.textContent.trim(); 
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        combinedText += child.textContent.trim();
      }
    });

    const splitText = combinedText
      .split("")
      .map((char) => `<span>${char}</span>`)
      .join("");

    textElement.innerHTML = splitText;

    const chars = textElement.querySelectorAll("span");

    tl.from(
      chars,
      {
        color: "#ddd",
        stagger: 1, 
        duration: 1, 
      },
      "+=0.5"
    );
  });

}
