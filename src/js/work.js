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

  // 필터
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

  // 창 크기 변경 시 배경 위치 재조정
  window.addEventListener("resize", function () {
    let activeBtn = document.querySelector(".filter button.on");
    if (activeBtn) {
      moveBg(activeBtn);
    }
  });
}

// 아이템박스 열고 닫고
document.querySelectorAll(".item").forEach(function (i) {
  i.addEventListener("click", function () {
    const itemTxt = this.querySelector(".info");

    if (itemTxt) {
      // getComputedStyle로 현재(실제) maxHeight 값을 가져옴
      // 왜냐 0이여야 열리는데 실제론 0이 아니여서 열리지 않음 + 두번째 클릭부터 열림 이슈
      const currentH = window.getComputedStyle(itemTxt).maxHeight;

      const txtOpen = currentH !== "0px"; // 열려있는지 체크

      // 닫혀 있는 상태 = 기본 값
      document.querySelectorAll(".info").forEach((txt) => {
        txt.style.maxHeight = null;
      });
      document.querySelectorAll(".item").forEach((i) => {
        i.classList.remove("on");
      });

      if (!txtOpen) {
        itemTxt.style.maxHeight = itemTxt.scrollHeight + "px";
        this.classList.add("on");
      } else {
        // 이미 열려 있다면 닫기
        itemTxt.style.maxHeight = "0";
        this.classList.remove("on");
      }
    }
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

// **************************************************
