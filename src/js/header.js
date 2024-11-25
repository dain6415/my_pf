// let prevScrollTop = 0;
//       let header = document.querySelector("header");

//       const sectionElems = document.querySelectorAll("section");

//       window.addEventListener("scroll", function () {
//         let currentScrollTop = window.pageYOffset;

//         //현재보다 아래로 내려가면 header가 안 보이고
//         if (currentScrollTop > prevScrollTop) {
//           //스크롤을 아래로 내릴 때
//           header.style.top = "-100px";
//         } else {
//           header.style.top = 0;
//         }

//         //위로 올리면 header 보이기
//         //현재 스크롤 위치를 이전 스크롤값에 저장한다
//         prevScrollTop = currentScrollTop;
//       })