function scrollLink() {
  const menuLista = document.querySelectorAll('.js-menu a[href^="#"]');
  const arrowDown = document.querySelector('.intro a[href^="#"]');
  console.log(arrowDown);
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

    arrowDown.addEventListener("click", scrollInterno);

    menuLista.forEach((item) => {
      item.addEventListener("click", scrollInterno);
    });
  }
}
scrollLink();

function animaScroll() {
  const sections = document.querySelectorAll(".js-section");
  const imgsTech = document.querySelectorAll(".js-tech li");
  const activeString = "ativo";
  if (imgsTech.length) {
    function scrollOpacity() {
      imgsTech.forEach((img) => {
        const windowUser = window.innerHeight * 0.9;
        const imgTop = img.getBoundingClientRect().top - windowUser;
        if (imgTop < 0) {
          img.classList.add(activeString);
        }
      });
      sections.forEach((section) => {
        const windowUser = window.innerHeight * 0.6;
        const sectionTop = section.getBoundingClientRect().top - windowUser;
        if (sectionTop < 0) {
          section.classList.add(activeString);
        }
      });
    }
    window.addEventListener("scroll", scrollOpacity);
    sections[0].classList.add(activeString);
  }
}
animaScroll();
