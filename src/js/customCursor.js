export function customCursor(){
  // mouse event
  const mouses = document.querySelectorAll("a");
  const customCursor = document.getElementById("custom_cursor"); 

  // 초기 설정
  customCursor.style.padding = "calc(30px / 2)";
  customCursor.style.mixBlendMode = "normal";

  // phone일 때 마우스 없애기
  const mediaQuery = window.matchMedia("(max-width: 700px)");
  const customMouse = () => {
    if (mediaQuery.matches) {
      customCursor.style.display = "none";
      document.body.style.cursor = "auto"; // 기본 마우스
    } else {
      customCursor.style.display = "block";
      document.body.style.cursor = "none"
    }
  };

  // 초기 실행
  customMouse();

  mediaQuery.addEventListener("change", customMouse);

  // 블렌드 모드 컬러 ------------------------------------------
  mouses.forEach((mouse) => {
    mouse.addEventListener("mouseenter", function () {
      if (!mouse.classList.contains("on")) {
        customCursor.style.padding = "5px"; // 나누기니까 15px
      }
      customCursor.style.mixBlendMode = "difference";
    });
    mouse.addEventListener("mouseleave", function () {
      if (!mouse.classList.contains("on")) {
        customCursor.style.padding = "calc( 30px / 2)";
      }
      customCursor.style.mixBlendMode = "normal";
    });
  });

  // mouse 커서 위치 ------------------------------------------
  document.addEventListener("mousemove", (e) => {
    const cursor = document.getElementById("custom_cursor");
    cursor.style.left = e.pageX + "px";
    cursor.style.top =  e.pageY - scrollY + "px";
  });
  

  //특정 공간에서 커서 컬러 변경  - 특정 공간에서만 바꾸고 싶을 때 -----------------------------------
  const footerCursor = document.querySelector("#footer .sect_inner");

  footerCursor.addEventListener("mouseenter", function () {
    customCursor.style.background = "#f5f5f5";
  });
  footerCursor.addEventListener("mouseleave", function () {
    customCursor.style.background = "var(--main-color)";
  });
}
