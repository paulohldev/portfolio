function scrollLink() {
  const menuLista = document.querySelectorAll('.js-menu a[href^="#"]');
  // const arrowDown = document
  //   .querySelector('.intro a[href^="#"]')
  //   .getAttribute("href");
  // console.log(arrowDown);
  if (menuLista.length) {
    function scrollInterno(event) {
      event.preventDefault();
      const href = this.getAttribute("href");
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }

    // arrowDown.addEventListener("click", scrollInterno);

    menuLista.forEach((item) => {
      item.addEventListener("click", scrollInterno);
    });
  }
}
scrollLink();

function animaScroll() {
  const sections = document.querySelectorAll(".js-section");
  if (sections.length) {
    function scrollOpacity() {
      sections.forEach((section) => {
        const windowUser = window.innerHeight * 0.6;
        const sectionTop = section.getBoundingClientRect().top - windowUser;
        if (sectionTop < 0) {
          section.classList.add("ativo");
        }
      });
    }
    window.addEventListener("scroll", scrollOpacity);
    sections[0].classList.add("ativo");
  }
}
animaScroll();
