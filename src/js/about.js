export function about() {
  document.querySelectorAll(".hoverTxt").forEach(li=>{
    const hoverTxt = li.getAttribute("data-hover");

    li.addEventListener("mouseenter", function(){
      this.setAttribute("data-hover",hoverTxt)
      // console.log("현재 data-hover 값:", this.getAttribute("data-hover")); 
    })
  })
}
