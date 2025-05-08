export function work() {
  // 필터링
  function setupFilterBtns() {
    document.querySelectorAll(".btn_filter").forEach(function (btn) {
      btn.addEventListener("click", function () {
        document.querySelectorAll(".btn_filter").forEach(function (btn) {
          btn.setAttribute("aria-selected", "false");
        });

        this.setAttribute("aria-selected", "true");

        let filters = this.getAttribute("data-filter");
        filtering(filters);

        currentFilter(this);
      });
    });
  }

  function filtering(filters) {
    let items = document.querySelectorAll(".item");
    items.forEach(function (i) {
      if (filters === "*" || i.matches(filters)) {
        i.style.display = "block";
      } else {
        i.style.display = "none";
      }
    });
  }

  function currentFilter(onBtn) {
    const thisFunction = document.querySelector(".this-filter");
    var filterItem = onBtn.closest(".filter_item");

    if (!filterItem || !thisFunction) return;

    var filterItemLeft = filterItem.offsetLeft;
    var filterItemWidth = filterItem.offsetWidth;

    thisFunction.style.left = `${filterItemLeft}px`;
    thisFunction.style.width = `${filterItemWidth}px`;
  }

  setupFilterBtns();

  // ---------------------------------------------------------
  // 아이템박스 열고 닫고
  document.querySelectorAll(".header_group").forEach(function (i) {
    const workitem = i.closest(".item");
    const itemTxtBox = workitem.querySelector(".info");
    const viewBtns = workitem.querySelectorAll(".view_btn");
    const viewSvg = workitem.querySelector(".view_btn svg");

    i.addEventListener("click", function (e) {
      if (itemTxtBox) {
        if (e.target.closest(".view_btn")) return;

        const currentH = window.getComputedStyle(itemTxtBox).maxHeight;
        const txtOpen = currentH !== "0px"; // 열려있는지 체크

        // 닫혀 있는 상태 = 기본 값
        document.querySelectorAll(".item.on").forEach((openItem) => {
          if (openItem !== workitem) {
            openItem.querySelector(".info").style.maxHeight = "0px";
            openItem.classList.remove("on");
            openItem
              .querySelector(".header_group")
              .setAttribute("aria-expanded", "false");
            openItem.querySelector(".info").setAttribute("aria-hidden", "true");
            openItem.querySelectorAll(".view_btn").forEach((btn) => {
              btn.style.setProperty("--bg-color", "transparent");
            });
            openItem.querySelectorAll(".view_btn svg").forEach((svg) => {
              svg.style.stroke = "#333";
            });
          }
        });

        if (!txtOpen) {
          i.setAttribute("aria-expanded", "true");
          itemTxtBox.setAttribute("aria-hidden", "false");
          itemTxtBox.style.maxHeight = itemTxtBox.scrollHeight + 20 + "px";
          workitem.classList.add("on");
          viewBtns.forEach((viewBtn) => {
            viewBtn.style.setProperty("--bg-color", "#333");
          });
          viewSvg.style.stroke = "#fff";
        } else {
          i.setAttribute("aria-expanded", "false");
          itemTxtBox.setAttribute("aria-hidden", "true");
          itemTxtBox.style.maxHeight = "0";
          workitem.classList.remove("on");
          viewBtns.forEach((viewBtn) => {
            viewBtn.style.setProperty("--bg-color", "transparent");
          });
          viewSvg.style.stroke = "#333";
        }
      }
      updateMainHeight();
    });

    i.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        i.click();
      }
    });

    function updateMainHeight() {
      const mainHeight = document.querySelector("main").scrollHeight;
      document.querySelector("html").style.height = `${mainHeight}px`;
    }

    viewBtns.forEach(function (viewBtn) {
      viewBtn.addEventListener("mouseenter", function () {
        viewBtn.style.setProperty("--bg-color", "#ddd");
      });

      viewBtn.addEventListener("mouseleave", function () {
        if (!workitem.classList.contains("on")) {
          viewBtn.style.setProperty("--bg-color", "transparent");
        }
      });
    });
  });

  let resizeTimer;

  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const activeBtn =
        document.querySelector(".btn_filter[aria-selected='true']") ||
        document.querySelector(".btn_filter");
      if (activeBtn) {
        currentFilter(activeBtn);
      }
  
      document.querySelectorAll(".item.on").forEach(function (i) {
        const itemTxtBox = i.querySelector(".info");
        if (itemTxtBox) {
          itemTxtBox.style.maxHeight = itemTxtBox.scrollHeight + "px";
        }
      });
    }, 300); // <- 0에서 100으로 늘림
  });
  
  // **************************************************
}
