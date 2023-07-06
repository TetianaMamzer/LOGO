const ref = {
  search: document.querySelector('.search__select'),
  title: document.querySelector('.search__title'),
  categories: document.querySelector('.search__categories')
}

function fadeIn(element, duration) {
  element.style.opacity = 0;
  element.style.display = 'block';

  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const elapsedTime = currentTime - startTime;
    const opacity = elapsedTime / duration;

    element.style.opacity = Math.min(opacity, 1);

    if (elapsedTime < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

function fadeOut(element, duration) { // Змінив назву функції на fadeOut
  element.style.opacity = 1;

  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const elapsedTime = currentTime - startTime;
    const opacity = 1 - (elapsedTime / duration); // Змінив формулу для opacity

    element.style.opacity = Math.max(opacity, 0);

    if (elapsedTime < duration) {
      requestAnimationFrame(animation);
    } else {
      element.style.display = 'none'; // Приховуємо елемент після зникнення
    }
  }

  requestAnimationFrame(animation);
}

ref.search.addEventListener('mouseenter', () => {
  ref.title.classList.add('active');
    ref.categories.classList.add('active');
    fadeIn(ref.categories, 300);
});
ref.search.addEventListener('mouseleave', () => {
    ref.title.classList.remove('active');
    ref.categories.classList.remove('active'); 
    fadeOut(ref.categories, 300);
});
ref.categories.addEventListener('click', (event) => {
  event.stopPropagation();
});