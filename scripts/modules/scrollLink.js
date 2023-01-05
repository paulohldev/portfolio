export default function scrollLink() {
  const menuLista = document.querySelectorAll('.js-menu a[href^="#"]');
  const arrowDown = document.querySelector('.intro a[href^="#"]');
  if (menuLista.length) {
    function scrollInterno(event) {
      event.preventDefault();
      const href = this.getAttribute('href');
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }

    arrowDown.addEventListener('click', scrollInterno);

    menuLista.forEach((item) => {
      item.addEventListener('click', scrollInterno);
    });
  }
}
