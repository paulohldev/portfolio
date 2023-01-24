export default function initSlide() {
  const slideSection = document.querySelector('.slide-section');
  const slide = slideSection.querySelector('.slide');
  const slidesElements = slide.querySelectorAll('li');
  const nextButton = document.querySelector('.controllers .next');
  const previousButton = document.querySelector('.controllers .previous');
  const stringCurrentSlide = 'current-slide';

  const moveSlide = (currentSlide, nextOrPrevSlide) => {
    if (nextOrPrevSlide) {
      slide.style.transform = `translateX(-${nextOrPrevSlide.offsetLeft}px)`;
      toggleCurrentClass(currentSlide, nextOrPrevSlide);
    } else {
      toggleCurrentClass(currentSlide, nextOrPrevSlide);
      slide.style.transform = `translateX(${nextOrPrevSlide}px)`;
    }
  };

  const toggleCurrentClass = (currentSlide, nextOrPrevSlide) => {
    currentSlide.classList.remove(stringCurrentSlide);
    nextOrPrevSlide.classList.add(stringCurrentSlide);
  };

  const nextSlide = (currentSlide) => {
    const nextSlide = currentSlide.nextElementSibling;
    const firstSlide = nextSlide === null ? slidesElements[0] : nextSlide;
    moveSlide(currentSlide, firstSlide);
  };

  const previousSlide = (currentSlide) => {
    const previousSlide = currentSlide.previousElementSibling;
    const lastSlide =
      previousSlide === null
        ? slidesElements[slidesElements.length - 1]
        : previousSlide;
    moveSlide(currentSlide, lastSlide);
  };

  nextButton.addEventListener('click', () => {
    const currentSlide = Array.from(slidesElements).find((slide) => {
      return slide.classList.contains(stringCurrentSlide);
    });
    nextSlide(currentSlide);
  });

  previousButton.addEventListener('click', () => {
    const currentSlide = Array.from(slidesElements).find((slide) => {
      return slide.classList.contains(stringCurrentSlide);
    });
    previousSlide(currentSlide);
  });
}
