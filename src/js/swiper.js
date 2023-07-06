
if (document.querySelector('.mainslider')) {
  new Swiper('.hero__body', {

    on: {
      slideChange: function () {
        updatePagination();
      }
    },

    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
    speed: 800,
    grabCursor: true,
    // loop: true,
    // strelki
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    // navigation
    pagination: {
      el: '.swiper-pagination',
      // bull
      clickable: true,
      // dinamic bull
      // dinamicBullets: true,
      // .swiper-pagination-bullet
      // custom bull дає можливість виводити номер слайдеру
      // renderBullet: function (index, className) {
      //   return "<span class='" + className + '">' + (index + 1) + '</span>';
      // },
      // фракции (на какой странице из общего списка)
      // type: 'fraction',
      // .swiper-pagination-fraction
      // кастомний для підписання Фото 3 з 4
      // renderFraction: function (currentClass, totalClass) {
      //   return (
      //     'Фото <span class="' +
      //     currentClass +
      //     '"></span>' +
      //     'з' +
      //     '<span class="' +
      //     totalClass +
      //     '"></span>'
      //   );
      // type: 'progressbar'
      // .swiper-pagination-progressbar-fill
      },
  
    // scroll
    // scrollbar: {
    //   el: '.swiper-scrollbar',
      // можливість пересунити скрол 
      // .swiper-scrollbar-drag
      // draggable: true
    // }
  
    
  
  });

  const ref = {
    pagination: document.querySelectorAll('.swiper-pagination-bullet'),
    active: document.querySelector('.swiper-pagination-bullet-active'),
    slideBg: document.querySelectorAll('.hero__slide')
  }
  console.log(ref)
  
  
  function updatePagination() {
    for (let i = 0; i < ref.pagination.length; i++) {
      const index = ref.pagination[i];
      console.log(index);
        if (index.classList.contains('swiper-pagination-bullet-active')) {
          index.innerHTML = `${i + 1}`;
          index.style.background = "#f68038";
        } else {
          index.innerHTML = '';
          index.style.background = "";
        }
      
    }
  }
  
  updatePagination();
}
