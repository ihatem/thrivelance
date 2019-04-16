import Swiper from 'swiper'
import {
  equal
} from 'assert';

export default function swipers() {

  const mq = window.matchMedia('(min-width: 1175px)');
  let logosSwiper, profilesSwiper, fieldsSwiper;
  const swiperChecker = () => {
    if (mq.matches) {
      if (logosSwiper !== undefined && profilesSwiper !== undefined && fieldsSwiper !== undefined) {
        logosSwiper.destroy(true, true);
        profilesSwiper.destroy(true, true);
        fieldsSwiper.destroy(true, true);
        return;
      }
    } else if (mq.matches == false) {
      return enableSwipers();
    }
  }
  const enableSwipers = () => {
    // PARTNER LOGOS
    logosSwiper = new Swiper('.logosWrap', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      centeredSlides: true,
      loop: true
    });

    // PROFILE BOXES 
    profilesSwiper = new Swiper('.profilesWrap', {
      slidesPerView: 3,
      spaceBetween: 10,
      centeredSlides: true,
      loop: true,
      loopAdditionalSlides: 0,
      breakpoints: {
        960: {
          slidesPerView: 2
        },
        485: {
          slidesPerView: 1
        }
      },
      pagination: {
        el: '.swiper-pagination-profiles',
        clickable: true
      }
    });

    // FIELD BOXES
    fieldsSwiper = new Swiper('.fieldBoxesWrap', {
      slidesPerView: 2,
      spaceBetween: 10,
      centeredSlides: true,
      loop: true,
      breakpoints: {
        485: {
          slidesPerView: 1
        }
      }
    })
  }
  mq.addListener(swiperChecker);
  swiperChecker();


  // TESTIMONIAL BOXES
  new Swiper('.testimonSlider', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      700: {
        spaceBetween: 0
      },
      485: {
        slidesPerView: 1
      }
    },
    pagination: {
      el: '.swiper-pagination-testimon',
      clickable: true
    }
  });

  // PROFILE BOX TAGS
  new Swiper('.tagsWrap', {
    slidesPerView: 'auto',
    grabCursor: true,
    spaceBetween: 10,
    freeMode: true
  });

  // PLAN BOXES
  new Swiper('.planBoxesWrap', {
    slidesPerView: 3,
    spaceBetween: 30,
    allowSlidePrev: false,
    allowSlideNext: false,
    autoplay: false,
    keyboard: false,
    breakpoints: {
      1175: {
        slidesPerView: 1,
        allowSlidePrev: true,
        allowSlideNext: true,
        autoplay: true,
        keyboard: true
      }
    },
    pagination: {
      el: '.swiper-pagination-plans',
      clickable: true,
      renderBullet: function (index, className) {
        const tab = ["FREE", "PREMIUM", "ENTREPRISE"];
        return '<span class="' + className + '">' + tab[index] + '</span>';
      }
    }
  });
}