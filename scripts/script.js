// function scrollLink() {
//   const menuLista = document.querySelectorAll('.js-menu a[href^="#"]');
//   const arrowDown = document.querySelector('.intro a[href^="#"]');
//   if (menuLista.length) {
//     function scrollInterno(event) {
//       event.preventDefault();
//       const href = this.getAttribute('href');
//       const section = document.querySelector(href);
//       section.scrollIntoView({
//         behavior: 'smooth',
//         block: 'center',
//       });
//     }

//     arrowDown.addEventListener('click', scrollInterno);

//     menuLista.forEach((item) => {
//       item.addEventListener('click', scrollInterno);
//     });
//   }
// }
// scrollLink();

// function animaScroll() {
//   const sections = document.querySelectorAll('.js-section');
//   const imgsTech = document.querySelectorAll('.js-tech li');
//   const activeString = 'ativo';

//   function scrollOpacity(...restElement) {
//     restElement.forEach((element) => {
//       element.forEach((prop) => {
//         const propNumber = prop !== HTMLLIElement ? 0.6 : 0.9;
//         const windowUser = window.innerHeight * propNumber;
//         const elementTop = prop.getBoundingClientRect().top - windowUser;
//         if (elementTop < 0) {
//           prop.classList.add(activeString);
//         }
//       });
//     });
//   }

//   if (imgsTech.length) {
//     scrollOpacity(sections, imgsTech);
//     window.addEventListener('scroll', () => scrollOpacity(sections, imgsTech));
//     sections[0].classList.add(activeString);
//   }
// }
// animaScroll();

import animaScroll from './modules/animaScroll.js';
import scrollLink from './modules/scrollLink.js';

animaScroll();
scrollLink();
