export function intro(){
  gsap.set('#intro .sticker',{opacity:0})
  gsap.to('#intro .sticker', {
    // y: 200,
    opacity:1,
    stagger: { each: 0.1, from: 'start', },
    // repeat: 1,
    // yoyo: true,
    // ease: "esaeout"
  });


  const initialPositions = {
    desktop: [],
    tablet: [],
    mobile: []
  };
  
  // 각 화면 크기별 위치 계산
  function storeInitialPositions() {
    document.querySelectorAll(".sticker").forEach((sticker, index) => {
      const rect = sticker.getBoundingClientRect();
      if (window.innerWidth >= 1024) {  // desktop
        initialPositions.desktop[index] = { x: rect.left, y: rect.top };
      } else if (window.innerWidth >= 768) {  // tablet
        initialPositions.tablet[index] = { x: rect.left, y: rect.top };
      } else {  // mobile
        initialPositions.mobile[index] = { x: rect.left, y: rect.top };
      }
    });
  }
  
  // 반응형에 따라 위치 재조정
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
      const sticker = document.querySelectorAll(".sticker")[index];
      gsap.set(sticker, { x: pos.x, y: pos.y });
    });
  }
  
  // 화면 크기 변경 시 위치 업데이트
  window.addEventListener('resize', adjustPositions);
  
  // 페이지 로드 시 위치 초기화
  window.addEventListener('load', storeInitialPositions);
  
  gsap.registerPlugin(Draggable);
  Draggable.create(".sticker", {
    type: "x,y",
    // bounds: "#intro", // bounds를 설정하지 않으면 화면 밖으로 나갈 수 있음
    inertia: true, // 드래그 후 자연스러운 움직임 추가
    onDragStart: function () {
      console.log("드래그 시작");
    },
    onDragEnd: function () {
      console.log("드래그 종료");
    }
  });

  
  

  
}