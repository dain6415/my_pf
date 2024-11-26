import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function bgColor(){
  //백그라운드 색상 바꾸기 타임라인을 이요하여 스크롤에 따라 배경색 변경
  gsap.registerPlugin(ScrollTrigger);
  let bg = gsap.timeline({
    scrollTrigger:{
      trigger:document.body,
      start:0,
      end:"max",
      scrub:true
    }
  })

  //각 ScrollTrigger 생성
  document.querySelectorAll('section').forEach(item=>{
    let color = item.getAttribute('data-bg')
    ScrollTrigger.create({
      trigger:item,
      strat:"top top",
      end: "bottom top",

      onEnter:()=>gsap.to('body',{
        backgroundColor:color,
        duration:.5
      }),
      onEnterBack:()=>gsap.to('body',{
        backgroundColor:color,
        duration:.5
      })



    })
  })
}