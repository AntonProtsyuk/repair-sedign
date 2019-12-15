$(document).ready(function () {
  var modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close');
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  /* button top */

  $(window).scroll(function () {
    // Если отступ сверху больше 50px то показываем кнопку "Наверх"
    if ($(this).scrollTop() > 100) {
      $('.button-up').fadeIn();
    } else {
      $('.button-up').fadeOut();
    }
  });
  /** При нажатии на кнопку мы перемещаемся к началу страницы */
  $('.button-up').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  /* slider */

  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10);
  bullets.css('left', prev.width() + 10)
});

/* button */


