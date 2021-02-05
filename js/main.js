$(document).ready(function() {
  const flowersSlider = new Swiper('.flowers-slider', {
    // Параметры слайдера
    loop: true,
    slidesPerView: 6,


    // Подключаем стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Настройки адаптива
    breakpoints: {
      // Если браузер больше >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // Если браузер >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // Если браузер >= 992px
      992: {
        slidesPerView: 6,
        spaceBetween: 40
      },
    }
  });

  const reviwesSlider = new Swiper('.reviews-slider', {
    // Параметры слайдера
    loop: true,
    slidesPerView: 1,


    // Подключаем стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $("#review1").on('click', function() {

    $.fancybox.open([{
        src: 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
        opts: {
          caption: 'First caption',
          thumb: 'https://source.unsplash.com/IvfoDk30JnI/240x160'
        }
      },
      {
        src: 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
        opts: {
          caption: 'Second caption',
          thumb: 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
        }
      }
    ], {
      loop: true,
      thumbs: {
        autoStart: true
      }
    });

  });

  let more = document.getElementById('more');
  let hidden = document.querySelectorAll('.hidden-element');

  more.onclick = function() {
    for (let element of hidden) {
      element.classList.toggle('hidden');
    };
  };


  let counterGs = document.querySelectorAll('.counter-group')
  var b = 1;

  for (let counterG of counterGs) {

    counterG.onclick = function() {
      let plus = document.querySelector('.plus');
      let minus = document.querySelector('.minus');
      let counter = document.querySelector('.counter-input');
      plus.onclick = function() {      
        b = 1 + b;
        counter.value = b;
        console.log(2)
      };
      minus.onclick = function() {
        b = b - 1;
        counter.value = b;
      };
    };
  };


});
