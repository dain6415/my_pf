export function modal() {
  const project = [
    {
      year: "2025",
      tag: "#퓨처리즘 #적응형 #ifram",
      title: "NewJeans<br> 앨범 프로모션 <br class='minW7'>사이트 리디자인",
      text: [
        "뉴진스의 ‘Supernatural’ 앨범을 주제로 공식 홈페이지를 리디자인한 프로젝트입니다.",
        "앨범이 지닌 레트로한 분위기를 시각적으로 표현하기 위해 <b>레트로 퓨처리즘</b>을 디자인 콘셉트로 설정하고, 컬러 팔레트, 타이포그래피, 레이아웃 등에 이를 반영하였습니다.",
      ],
      img: [
        {
          src: "https://dain6415.github.io/my_pf/src/img/project/nj_pc.png",
          alt: "뉴진스 PC 사이트",
        },
        {
          src: "https://dain6415.github.io/my_pf/src/img/project/nj_mobile.png",
          alt: "뉴진스 Mobile 사이트",
        },
      ],
      site: "https://dain6415.github.io/project/p_NewJeans/pc.html",
      notion: "https://buly.kr/EI48UCl",
    },
    {
      year: "2025",
      tag: "#모드 체인지 #계층구조",
      title: "서울시립미술관 <br>사이트 리디자인",
      text: [
        "서울시립미술관 웹사이트를 리디자인하며, 기존 디자인의 급격한 배경 색 전환과 시각 정보의 평면성을 문제로 인식했습니다.",
        "사용자가 다크/라이트 모드를 직접 전환할 수 있도록 모드 전환 기능을 구현해, 갑작스러운 컬러 변화에 따른 시각적 피로를 줄였습니다. 또한 텍스트의 크기, 굵기, 색상 등을 조절해 정보의 우선순위를 시각적으로 드러내는 구조를 설계했습니다.",
        "결과적으로 사용성과 가독성을 높이기 위한 시각적 구조를 설계했습니다.",
      ],
      img: [
        {
          src: "https://dain6415.github.io/my_pf/src/img/project/sema_pc.png",
          alt: "서울시립미술관 PC 사이트",
        },
        {
          src: "https://dain6415.github.io/my_pf/src/img/project/sema_mobile.png",
          alt: "서울시립미술관 Mobile 사이트",
        },
      ],
      site: "https://dain6415.github.io/project/p_SeMA",
      notion: "https://buly.kr/8pgiIMH",
    },
    {
      year: "2024",
      tag: "#APP #Figma",
      title: "selmine",
      text: "부모님께서 약 드시는 시간을 자주 잊는 모습을 곁에서 지켜보며 착안한 앱입니다. <br>알람 기능과 약 정보를 쉽게 확인할 수 있는 기능을 제공하여, 사용자가 스스로 건강을 관리할 수 있도록 돕습니다.",
      img: [
        {
          src: "https://dain6415.github.io/my_pf/src/img/project/selmine.jpg",
          alt: "selmine 목업",
        },
      ],
      site: "https://buly.kr/EzjAOL6",
      notion:
        "https://www.notion.so/selmine-2572421107e7804a9912f0ae689eeb73 (수정 중)",
    },
  ];
  const modalEl = document.getElementById("modal");

  function openModal(data) {
    modalEl.querySelector(".modal_title").innerHTML = data.title;

    const descBox = modalEl.querySelector("#project_desc .text");
    if (Array.isArray(data.text)) {
      descBox.innerHTML = data.text.map((p) => `<p>${p}</p>`).join("");
    } else {
      descBox.innerHTML = data.text;
    }

    const siteLink = modalEl.querySelector(".site_view");
    siteLink.textContent = data.site;
    siteLink.href = data.site;

    const notionLink = modalEl.querySelector(".notion_view");
    notionLink.textContent = data.notion;
    notionLink.href = data.notion;

    const valueItems = modalEl.querySelectorAll(".values li");
    valueItems[0].textContent = data.year;
    valueItems[1].textContent = data.tag;

    const imgBox = modalEl.querySelector(".img_box");
    imgBox.innerHTML = data.img
      .map((img) => `<img src="${img.src}" alt="${img.alt}" />`)
      .join("");

    modalEl.classList.add("show");
  }

  document.querySelectorAll(".project_item").forEach((item, index) => {
    item.addEventListener("click", () => {
      openModal(project[index]);
    });
  });

  const closeBtn = document.querySelector(".close_btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modalEl.classList.remove("show");
    });
  }
}
