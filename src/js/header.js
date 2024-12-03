export function header() {
//스크롤 값 구하기
  // window.addEventListener('scroll', function() {
  //   console.log(window.scrollY);
  // });

  const header = document.querySelector('header');
  let headerTop = header.offsetTop;  

  function scrollFunc() {
      const scrollTop = window.scrollY;


      if (scrollTop + 0 >= headerTop) {
          header.classList.add('fixed');
      } else {
          header.classList.remove('fixed');
      }
  }

 
  window.addEventListener('scroll', scrollFunc);


  window.addEventListener('resize', () => {
      headerTop = header.offsetTop;
  });


  const links = document.querySelectorAll('a[href^="#sect"]');

  links.forEach((link) => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const href = this.getAttribute('href');
      const sect = document.querySelector(href);
  
      //일반적으로 해당 위치로 가기, 윈도우의 y 좌표값을 찾아가는 것
      // window.scrollTo({
      //   top: sect.offsetTop,
      //   behavior: 'smooth' //가는 움직임이 부드러움
      // })
      
      //해당 위치로 가는데 height의 센터로 감, 해당 오브젝트 찾아가는 것
      sect.scrollIntoView({
        behavior: 'smooth',
        block:'center',
  
      })
    });
  });
}
