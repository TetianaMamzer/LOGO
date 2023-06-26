const ref = {
  open: document.querySelector('.burger__open'),
  span: document.querySelector('.burger__span'),
  menu: document.querySelector('.burger__menu'),
  body: document.querySelector('body'),
  link: document.querySelectorAll('.burger__link')
};


ref.link.forEach(link => {
  link.addEventListener('click', () => {
  ref.menu.classList.remove('active');
  ref.open.classList.remove('active');
  ref.body.classList.remove('scroll')
  })
})


ref.open.addEventListener('click', () => {
  ref.menu.classList.toggle('active');
  ref.open.classList.toggle('active')
    ref.body.classList.toggle('scroll')
  });
