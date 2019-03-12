import Swiper from 'swiper'
import anime from 'animejs/lib/anime.es.js'

const planBox = document.querySelectorAll('.planBox')

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


let swiper = new Swiper('.tagsWrap', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  freeMode: true,
});

let swiper2 = new Swiper('.testimonSlider', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

//swiper2.slideTo(1, 0);

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
    animateValue(2, 0, 250, 600);
    animateValue(3, 0, 3, 600);
    window.onscroll = null;
  }
}
window.onscroll = scroll;
