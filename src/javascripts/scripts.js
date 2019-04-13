import Swiper from 'swiper'
import anime from 'animejs/lib/anime.es.js'

const planBox = document.querySelectorAll('.planBox')
const toggle = document.getElementById('toggle')
const hamburger = document.getElementById('hamburger')

hamburger.addEventListener('click', () => {
  if (hamburger.classList.contains('is-active')) {
   hamburger.classList.remove('is-active');
  } else {
    hamburger.classList.add('is-active');
  }
})

const toggleCheck = () => {
  if (toggle.checked) {
    document.querySelectorAll('.price > p')[1].innerHTML = 69
    document.querySelectorAll('.price > p')[2].innerHTML = 99
    document.querySelectorAll('.price > span')[2].innerHTML = '€'
  } else {
    document.querySelectorAll('.price > p')[1].innerHTML = 9
    document.querySelectorAll('.price > p')[2].innerHTML = 5
    document.querySelectorAll('.price > span')[2].innerHTML = '%'
  }
}

toggleCheck()
toggle.addEventListener('change', () => {
  toggleCheck()
})

planBox.forEach( (elem, i) => {
  elem.addEventListener('mouseenter', () => {
    anime({
      targets: elem,
      height: '29em',
      easing: 'easeOutCubic',
      duration: 300
    })
  })
  elem.addEventListener('mouseleave', () => {
    anime({
      targets: elem,
      height: '26em',
      easing: 'easeOutCubic',
      duration: 300
    })
  })
});


new Swiper('.tagsWrap', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  freeMode: true,
});

new Swiper('.testimonSlider', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

new Swiper('.logosWrap', {
  effect: "slider",
  slidesPerView: 5,
  spaceBetween: 30,
	allowSlidePrev: false,
	allowSlideNext: false,
	autoplay: false,
	keyboard: false,
  loop: true,
  centeredSlides: true,
  breakpoints: {
    1175: {
      slidesPerView: 3,
      allowSlidePrev: true,
      allowSlideNext: true,
      spaceBetween: 10,
      autoplay: true,
      keyboard: true,
    },
    600: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

new Swiper('.profilesWrap', {
  effect: "slider",
  slidesPerView: 3,
  spaceBetween: 30,
	allowSlidePrev: false,
	allowSlideNext: false,
	autoplay: false,
	keyboard: false,
  loop: true,
  centeredSlides: true,
  breakpoints: {
    1175: {
      allowSlidePrev: true,
      allowSlideNext: true,
      spaceBetween: 10,
      autoplay: true,
      keyboard: true,
      slidesPerView: 2,
    },
    600: {
      spaceBetween: 5,
    },
    380: {
      slidesPerView: 1,
      spaceBetween: 0,
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

function isScrolledIntoView(el) {
  var elemTop = el.getBoundingClientRect().top;
  var elemBottom = el.getBoundingClientRect().bottom;

  var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  return isVisible;
}

function animateValue(index, start, end, duration) {
  var range = end - start;
  var current = start;
  var increment = end > start ? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.querySelectorAll(".figureCounter")[index];
  var timer = setInterval(function() {
    current += increment;
    obj.innerHTML = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

let scroll = () => {
  if (isScrolledIntoView(document.querySelector('.figuresWrap'))) {
    console.log('counting');
    animateValue(0, 0, 3, 600);
    animateValue(1, 0, 1, 600);
    animateValue(2, 0, 74, 600);
    animateValue(3, 0, 3, 600);
    window.onscroll = null;
  }
}
window.onscroll = scroll;
