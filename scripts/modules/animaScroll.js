export default function animaScroll() {
  const sections = document.querySelectorAll('.js-section');
  const imgsTech = document.querySelectorAll('.js-tech li');
  const activeString = 'ativo';

  function scrollOpacity(...restElement) {
    restElement.forEach((element) => {
      element.forEach((prop) => {
        const propNumber = prop !== HTMLLIElement ? 0.65 : 0.9;
        const windowUser = window.innerHeight * propNumber;
        const elementTop = prop.getBoundingClientRect().top - windowUser;
        if (elementTop < 0) {
          prop.classList.add(activeString);
        }
      });
    });
  }

  if (imgsTech.length) {
    scrollOpacity(sections, imgsTech);
    window.addEventListener('scroll', () => scrollOpacity(sections, imgsTech));
    sections[0].classList.add(activeString);
  }
}
