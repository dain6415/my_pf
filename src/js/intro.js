export function intro(){
  gsap.set('.sticker',{opacity:0})
  gsap.to('.sticker', {
    // y: 200,
    opacity:1,
    stagger: { each: 0.1, from: 'start', },
    // repeat: 1,
    // yoyo: true,
    // ease: "esaeout"
  });

}