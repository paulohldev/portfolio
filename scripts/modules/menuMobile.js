export default function menuMobile() {
  // seletores
  const menuMobile = document.querySelector('.menuMobile');
  const navMenu = document.querySelector('.header-menu');
  const cta = document.querySelector(".header a[href='#contato']");
  const header = document.querySelector('header');

  // string ativo e criação do elemento li
  const activeString = 'ativo';
  const liElement = document.createElement('li');

  // manipula o menu, ativando, desativando e movendo o liElement
  const handleMenu = () => {
    navMenu.classList.toggle(activeString);
    cta.classList.toggle(activeString);
    navMenu.appendChild(liElement);

    if (cta.classList.contains(activeString)) {
      navMenu.lastElementChild.appendChild(cta);
    } else {
      liElement.remove();
      header.appendChild(cta);
    }
  };

  // fecha o menu ao clicar em um link
  const closeMenu = ({ target, currentTarget }) => {
    if (target !== currentTarget) {
      navMenu.classList.remove(activeString);
      cta.classList.remove(activeString);
    }
  };

  navMenu.addEventListener('click', closeMenu);
  menuMobile.addEventListener('click', handleMenu);
}
