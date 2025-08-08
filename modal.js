const project = [
  {
    year: "2025",
    tag: "#ifram  #퓨처리즘",
    title: "NewJeans<br> 앨범 프로모션 <br class='minW7'>사이트 리디자인",
    text: "뉴진스의 ‘Supernatural’ 앨범을 주제로 공식 홈페이지리디자인한 프로젝트입니다. 앨범이 지닌 레트로한 분위기를 시각적으로 표현하기 위해 레트로 퓨처리즘을 디자인 콘셉트로 설정하고, 컬러 팔레트, 타이포그래피, 레이아웃 등에 이를 반영하였습니다.",
    img: "./src/img/project/nj_thum.png",
    site: "https://dain6415.github.io/project/p_NewJeans",
    notion: "https://www.notion.so/NewJeans-2482421107e780169eb2e2fb40622742",
  },
  {
    year: "2025",
    tag: "#",
    title: "서울시립미술관",
    text: "뉴진스의 ‘Supernatural’ 앨범을 주제로 공식 홈페이지리디자인한 프로젝트입니다. 앨범이 지닌 레트로한 분위기를 시각적으로 표현하기 위해기 위해 레트로 퓨처리즘을 디자인 콘셉트로 설정하고, 컬러 팔레트, 타이포그래피, 레이아웃 시각적으로 표현하기 위해기 위해 레트로 퓨처리즘을 디자인 콘셉트로 설정하고, 컬러 팔레트, 타이포그래피, 레이아웃 시각적으로 표현하기 위해기 위해 레트로 퓨처리즘을 디자인 콘셉트로 설정하고, 컬러 팔레트, 타이포그래피, 레이아웃 시각적으로 표현하기 위해기 위해 레트로 퓨처리즘을 디자인 콘셉트로 설정하고, 컬러 팔레트, 타이포그래피, 레이아웃 등에 이를 반영하였습니이포그래피, 트로 설정하고, 컬러 팔레트, 타이포그래피, 레이아웃 등에 이를 반영하였습니다",
    img: "./src/img/project/sema_thum.jpg",
    site: "https://dain6415.github.io/project/p_SeMA",
    notion: "https://example.com",
  },
  {
    year: "2024",
    tag: "#",
    title: "selmaine",
    text: "두 번째 프로젝트 설명입니다.",
    img: "images/sample2.jpg",
    site: "https://dain6415.github.io/project/p_selmaine",
    notion: "https://example.com",
  },
];

const modal = document.getElementById("modal");
function openModal(data) {

  modal.querySelector(".modal_title").innerHTML = data.title;
  modal.querySelector("#project_desc .text").textContent = data.text;

  const siteLink = modal.querySelector(".site_view");
  siteLink.textContent = data.site;
  siteLink.href = data.site; 
  
  const notionLink = modal.querySelector(".notion_view");
  notionLink.textContent = data.notion;
  notionLink.href = data.notion;

  const valueItems = modal.querySelectorAll(".values li");
  valueItems[0].textContent = data.year;
  valueItems[1].textContent = data.tag;
  modal.querySelector(".img_box").innerHTML = `<img src="${data.img}" alt="${data.tag} 이미지" />`;

  modal.classList.add("show");
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".project_item").forEach((item, index) => {  
    item.addEventListener("click", () => {
      openModal(project[index]);
    });
  });
  const closeBtn = document.querySelector(".close_btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("show");
    });
  }
});
