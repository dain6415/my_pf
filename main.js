import { modal } from "./src/js/modal.js";

window.addEventListener("load", function () {
  modal();
  // const project = [
  //   {
  //     year: "2025",
  //     tag: "#ifram  #퓨처리즘",
  //     title: "NewJeans<br> 앨범 프로모션 <br class='minW7'>사이트 리디자인",
  //     text: "뉴진스의 ‘Supernatural’ 앨범을 주제로 공식 홈페이지리디자인한 프로젝트입니다. <br>앨범이 지닌 레트로한 분위기를 시각적으로 표현하기 위해 레트로 퓨처리즘을 디자인 콘셉트로 설정하고, 컬러 팔레트, 타이포그래피, 레이아웃 등에 이를 반영하였습니다.",
  //     img: "src/img/project/nj.jpg",
  //     site: "https://dain6415.github.io/project/p_NewJeans",
  //     notion: "https://www.notion.so/NewJeans-2482421107e780169eb2e2fb40622742",
  //     alt:"뉴진스 사이트 목업"
  //   },
  //   {
  //     year: "2025",
  //     tag: "#",
  //     title: "서울시립미술관 <br>사이트 리디자인",
  //     text: "서울시립미술관 웹사이트를 리디자인하며, 기존 디자인의 급격한 배경 색 전환과 시각 정보의 평면성을 문제로 인식했습니다. 사용자가 다크/라이트 모드를 직접 전환할 수 있도록 모드 전환 기능을 구현해, 갑작스러운 컬러 변화에 따른 시각적 피로를 줄였습니다. 또한 텍스트의 크기, 굵기, 색상 등을 조절해 정보의 우선순위를 시각적으로 드러내는 구조를 설계했습니다. 결과적으로 사용성과 가독성을 모두 고려한 디자인을 구현했습니다.",
  //     img: "src/img/project/sema_thum.jpg",
  //     site: "https://dain6415.github.io/project/p_SeMA",
  //     notion: "https://example.com",
  //     alt:"서울시립미술관 사이트 목업"
  //   },
  //   {
  //     year: "2024",
  //     tag: "#",
  //     title: "selmine App",
  //     text: "두 번째 프로젝트 설명입니다.",
  //     img: "src/img/project/selmine_mini.jpg",
  //     site: "https://dain6415.github.io/project/p_selmaine",
  //     notion: "https://example.com",
  //     alt:"selmine 목업"
  //   },
  // ];
  // const modalEl = document.getElementById("modal");

  // function openModal(data) {
  //   modalEl.querySelector(".modal_title").innerHTML = data.title;
  //   modalEl.querySelector("#project_desc .text").innerHTML = data.text;

  //   const siteLink = modalEl.querySelector(".site_view");
  //   siteLink.textContent = data.site;
  //   siteLink.href = data.site;

  //   const notionLink = modalEl.querySelector(".notion_view");
  //   notionLink.textContent = data.notion;
  //   notionLink.href = data.notion;

  //   const valueItems = modalEl.querySelectorAll(".values li");
  //   valueItems[0].textContent = data.year;
  //   valueItems[1].textContent = data.tag;

  //   modalEl.querySelector(".img_box").innerHTML = 
  //     `<img src="${data.img}" alt="${data.alt} 이미지" />`;

  //   modalEl.classList.add("show");
  // }

  // document.querySelectorAll(".project_item").forEach((item, index) => {  
  //   item.addEventListener("click", () => {
  //     openModal(project[index]);
  //   });
  // });

  // const closeBtn = document.querySelector(".close_btn");
  // if (closeBtn) {
  //   closeBtn.addEventListener("click", () => {
  //     modalEl.classList.remove("show");
  //   });
  // }
});
