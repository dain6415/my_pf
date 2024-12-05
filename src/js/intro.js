import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

export function intro() {
  // 초기 opacity 설정
  gsap.set('#intro .sticker', { opacity: 0 });

  // 등장 애니메이션
  gsap.to('#intro .sticker', {
    opacity: 1,
    stagger: { each: 0.1, from: 'start' },
  });

  const initialPositions = {
    desktop: [],
    tablet: [],
    mobile: []
  };

  // 각 화면 크기별 위치 저장
  function storeInitialPositions() {
    document.querySelectorAll("#intro .sticker").forEach((sticker, index) => {
      const rect = sticker.getBoundingClientRect();
      if (window.innerWidth >= 1024) {
        initialPositions.desktop[index] = { x: rect.left, y: rect.top };
      } else if (window.innerWidth >= 768) {
        initialPositions.tablet[index] = { x: rect.left, y: rect.top };
      } else {
        initialPositions.mobile[index] = { x: rect.left, y: rect.top };
      }
    });
  }

  // 반응형에 따라 위치 적용
  function adjustPositions() {
    let positions;
    if (window.innerWidth >= 1024) {
      positions = initialPositions.desktop;
    } else if (window.innerWidth >= 768) {
      positions = initialPositions.tablet;
    } else {
      positions = initialPositions.mobile;
    }

    positions.forEach((pos, index) => {
      const sticker = document.querySelectorAll("#intro .sticker")[index];
      if (pos) {
        gsap.set(sticker, { x: pos.x, y: pos.y });
      }
    });
  }

  // 초기화 순서: 페이지 로드 시 실행
  window.addEventListener('load', () => {
    storeInitialPositions();
    adjustPositions(); // 초기 위치 적용
  });

  // 화면 크기 변경 시 위치 재조정
  window.addEventListener('resize', adjustPositions);

  // 드래그 설정
  Draggable.create("#intro .sticker", {
    type: "x,y",
    // bounds: "#intro", 
    // 화면 밖으로 나가지 않도록 제한
    inertia: true,    // 관성 효과 추가
    onDragStart: function () {
      console.log("드래그 시작");
      this.style.zIndex='-1'
    },
    onDragEnd: function () {
      console.log("드래그 종료");
    }
  });

}
