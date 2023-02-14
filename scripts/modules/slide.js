export default function initSlide() {
  const slideSection = document.querySelector('.slide-section');
  const slide = slideSection.querySelector('.slide');
  const slidesElements = slide.querySelectorAll('li');
  const nextButton = document.querySelector('.controllers .next');
  const previousButton = document.querySelector('.controllers .previous');
  const stringCurrentSlide = 'current-slide';

  const moveSlide = (currentElementSlide, nextElementSlide) => {
    if (currentElementSlide && nextElementSlide !== null) {
      slide.style.transform = `translateX(-${nextElementSlide.offsetWidth}px)`;
      return toggleClass(currentElementSlide, nextElementSlide);
    }
    slide.style.transform = `translateX(${currentElementSlide.previousElementSibling.offsetLeft}px)`;
    return toggleClass(
      currentElementSlide.previousElementSibling,
      nextElementSlide,
    );
  };

  const toggleClass = (currentElementSlide, nextElementSlide) => {
    if (nextElementSlide !== null) {
      currentElementSlide.classList.remove(stringCurrentSlide);
      nextElementSlide.classList.add(stringCurrentSlide);
    }
  };

  const nextSlide = (currentElementSlide) => {
    const nextElementSlide = currentElementSlide.nextElementSibling;
    const firstSlide =
      nextElementSlide === null ? slidesElements[0] : nextElementSlide;
    moveSlide(currentElementSlide, firstSlide);
  };

  const previousSlide = (currentElementSlide) => {
    const previousElementSlide = currentElementSlide.previousElementSibling;
    const lastElementSlide =
      previousElementSlide === null
        ? slidesElements[slidesElements.length - 1]
        : previousElementSlide;
    moveSlide(currentElementSlide, lastElementSlide);
  };

  nextButton.addEventListener('click', () => {
    const currentElementSlide = Array.from(slidesElements).find((slide) => {
      return slide.classList.contains(stringCurrentSlide);
    });
    nextSlide(currentElementSlide);
  });

  previousButton.addEventListener('click', () => {
    const currentSlide = Array.from(slidesElements).find((slide) => {
      return slide.classList.contains(stringCurrentSlide);
    });
    previousSlide(currentSlide);
  });
}
