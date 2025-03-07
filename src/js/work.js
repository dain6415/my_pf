export function work() {
  document.querySelectorAll(".filter ul li a").forEach(function (link) {
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



  document.querySelectorAll(".item").forEach(function (i) {
    i.addEventListener("click", function () {
      const itemTxt = this.querySelector(".info");

      if (itemTxt) {
        const txtOpen = itemTxt.style.maxHeight !== "0px"; // 열려있는지 체크

        // 닫혀 있는 상태 = 기본 값
        document.querySelectorAll(".info").forEach((txt) => {
          txt.style.maxHeight = "0";
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
  // **************************************************  
}