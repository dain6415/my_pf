/*------------------------------
Register plugins
------------------------------*/
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


/*------------------------------
Init ScrollSmoother
------------------------------*/
//스크롤 부드럽게 움직이기
const scrollerSmoother = ScrollSmoother.create({
  content: '#content',
  wrapper: '#wrapper',
  smooth: true,
  effects: false,
  normalizeScroll: true
})

// 움직임 타임라인
const tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.accordions',
      pin: true,
      start: 'top top', /* .accordions 요소가 화면의 최상단에 닿을 때 애니메이션 시작 */
      end: 'bottom top',/* 하단이 화면 상단에 닿으면 애니메이션 종료. */
      scrub: 1, /* 스크롤 위치와 애니메이션의 진행을 동기화.
      */
      ease: 'linear', /* 애니메이션이 일정한 속도로 진행되도록 설정 */
    }
})

// tl.to('.accordion:not(:last-child)', {
//   height: 0, /* .text의 높이를 0으로 만들겠다는 소리 즉, 없애겠다. 그럼 뭐가 남느냐 타이틀의 높이만 남음. */
//   paddingBottom: 0,
// })
tl.to('.accordion:not(:last-child) .text', {
  height: 0, /* .text의 높이를 0으로 만들겠다는 소리 즉, 없애겠다. 그럼 뭐가 남느냐 타이틀의 높이만 남음. */
  opacity:0,
  paddingBottom: 0,
  paddingTop: 0, /* .텍스트에 패딩을 주니 당연히 공간이 생김. 그래서 얘도 0, 모든 공간이 생길 수 있는 변수 없애주기 */
  // opacity: 0,
  stagger: .5, /* 각각의 애니메이션이 0.5초 간격으로 차례대로 실행 */
})
tl.to('.accordion:not(:last-child) .visual', {
  height: '60px',
  paddingBottom: 0,
  stagger: .5, 
}, '<')
tl.to('.accordion', {
  // marginBottom: 0,
  stagger: .5, /* 애니메이션이 0.5초 간격으로 실행 */
}, '<') 