const ref = {
  menu: document.querySelectorAll('.side__parent'),
  burger: document.querySelector('.side__burger'),
  body: document.querySelector('.side__body'),
  checkbox: document.querySelector('.checkbox__input'),
  resultElement: document.querySelector('.sum__checkbox'),
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

function fadeOut(element, duration) {
  element.style.opacity = 1;

  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const elapsedTime = currentTime - startTime;
    const opacity = 1 - (elapsedTime / duration);

    element.style.opacity = Math.max(opacity, 0);

    if (elapsedTime < duration) {
      requestAnimationFrame(animation);
    } else {
      element.style.display = 'none';
    }
  }

  requestAnimationFrame(animation);
}

for (let i = 0; i < ref.menu.length; i++) {
  const menuParent = ref.menu[i];

  menuParent.addEventListener('mouseenter', () => {
    menuParent.classList.add('active');
    fadeIn(menuParent.querySelector('.side__submenu'), 300);
  });

  menuParent.addEventListener('mouseleave', () => {
    menuParent.classList.remove('active');
    fadeOut(menuParent.querySelector('.side__submenu'), 300);
  });
}

ref.burger.addEventListener('click', () => {
  ref.burger.classList.toggle('active');

  if (ref.body.classList.contains('active')) {
    ref.body.classList.remove('active');
    fadeOut(ref.body, 300);
  } else {
    ref.body.classList.add('active');
    fadeIn(ref.body, 300);
  }
});