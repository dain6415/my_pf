export function work() {
  // 필터링
  document.querySelectorAll(".filter ul li button").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelectorAll(".filter ul li a").forEach((link) => {
        //()=>{} or function(){}
        link.classList.remove("on");
      });
      this.classList.add("on");

      var filters = this.getAttribute("data-filter");
      filtering(filters);
    });
  });

  function filtering(filters) {
    var items = document.querySelectorAll(".item");
    items.forEach(function (i) {
      if (filters === "*" || i.matches(filters)) {
        i.style.display = "block";
      } else {
        i.style.display = "none";
      }
    });
  }

  // 필터링 위치로 배경 움직이기 (칠성사이다 탭)
  function moveBg(activeBtn) {
    let thisF = document.querySelector(".this-filter");
    let left = activeBtn.offsetLeft; // 클릭한 버튼의 왼쪽 위치
    let width = activeBtn.offsetWidth; // 클릭한 버튼의 너비

    thisF.style.left = `${left}px`;
    thisF.style.width = `${width}px`;
  }

  // 페이지 로드 시 "all" 버튼에 배경 위치 설정
  let firstBtn = document.querySelector(".filter button.on");
  if (firstBtn) {
    moveBg(firstBtn);
  }

  // 버튼 클릭 시 배경 이동
  document.querySelectorAll(".filter button").forEach((btn) => {
    btn.addEventListener("click", function () {
      document
        .querySelectorAll(".filter button")
        .forEach((b) => b.classList.remove("on"));
      this.classList.add("on");
      moveBg(this);
    });
  });
  // ---------------------------------------------------------

  // 창 크기 변경 시 배경 위치 재조정
  window.addEventListener("resize", function () {
    let activeBtn = document.querySelector(".filter button.on");
    if (activeBtn) {
      moveBg(activeBtn);
    }
  });

  // 아이템박스 열고 닫고
  document.querySelectorAll(".item .title").forEach(function (i) {
    const item = i.closest(".item"); // 가까운 형제
    const itemTxt = item.querySelector(".info");
    const viewBtns = item.querySelectorAll(".view-btn");
    const svg = item.querySelector(".view-btn svg");

    i.addEventListener("click", function () {
      if (itemTxt) {
        // getComputedStyle로 현재(실제) maxHeight 값을 가져옴
        // 왜냐 0이여야 열리는데 실제론 0이 아니여서 열리지 않음 + 두번째 클릭부터 열림 이슈

        const currentH = window.getComputedStyle(itemTxt).maxHeight;
        const txtOpen = currentH !== "0px"; // 열려있는지 체크

        // 닫혀 있는 상태 = 기본 값
        document.querySelectorAll(".item.on").forEach((openItem) => {
          if (openItem !== item) { // 현재 클릭한 아이템이 아니라면 닫기
            openItem.querySelector(".info").style.maxHeight = "0px";
            openItem.classList.remove("on");
            openItem.querySelectorAll(".view-btn").forEach((btn) => {
              btn.style.setProperty("--bg-color", "transparent");
            });
            openItem.querySelectorAll(".view-btn svg").forEach((svg) => {
              svg.style.stroke = "#333";
            });
          }
        });

        if (!txtOpen) {
          itemTxt.style.maxHeight = itemTxt.scrollHeight + 20 + "px";
          item.classList.add("on");
          viewBtns.forEach((viewBtn) => {
            viewBtn.style.setProperty("--bg-color", "#333");
          });
          svg.style.stroke = "#fff";
        } else { // 이미 열려 있다면 닫기
          itemTxt.style.maxHeight = "0";
          item.classList.remove("on");
          viewBtns.forEach((viewBtn) => {
            viewBtn.style.setProperty("--bg-color", "transparent");
          });
          svg.style.stroke = "#333";
        }
      }
    });
    //svg hover
    viewBtns.forEach(function (viewBtn) {
      viewBtn.addEventListener("mouseenter", function () {
        viewBtn.style.setProperty("--bg-color", "#ddd"); 
        // viewBtn.querySelector("svg").style.stroke = "#fff";
      });

      viewBtn.addEventListener("mouseleave", function () {
        if (!item.classList.contains("on")) { // 아이템에 "on" 이 없으면(!이 붙었자나..)
          viewBtn.style.setProperty("--bg-color", "transparent"); 
          // viewBtn.querySelector("svg").style.stroke = "#333"; 
        }
      });
    });
  });

  // 반응형
  window.addEventListener("resize", function () {
    document.querySelectorAll(".item.on").forEach(function (i) {
      const itemTxt = i.querySelector(".info");
      if (itemTxt) {
        itemTxt.style.maxHeight = itemTxt.scrollHeight + "px"; // 열린 항목만 높이 재조정
      }
    });
  });

  // 이미지 호버시 view 버튼 나타나기
  document.querySelectorAll(".view-btn").forEach((imgBox) => {
    const hoverText = imgBox.querySelector(".hover-text");

    if (!hoverText) return; // hover-text가 없으면 실행 안 함

    imgBox.addEventListener("mousemove", (e) => {
      const rect = imgBox.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      hoverText.style.left = `${x}px`;
      hoverText.style.top = `${y}px`;
    });

    imgBox.addEventListener("mouseenter", () => {
      hoverText.style.display = "block";
    });

    imgBox.addEventListener("mouseleave", () => {
      hoverText.style.display = "none";
    });
  });

  // **************************************************
}
