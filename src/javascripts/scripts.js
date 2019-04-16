import anime from 'animejs/lib/anime.es'
import swipers from './components/swipers'

const planBox = document.querySelectorAll('.planBox')
const toggle = document.getElementById('toggle')
const hamburger = document.getElementById('hamburger')
const aboutList = document.querySelector('.aboutList')
const discoverList = document.querySelector('.discoverList')
const aboutBtn = document.querySelector('.aboutHead')
const discoverBtn = document.querySelector('.discoverHead')
const arrowIcon = document.querySelectorAll('.arrowIcon')
const figureCount = document.querySelectorAll(".figureCounter");
const priceCount = document.querySelectorAll(".priceText");

swipers(); 

let expandList = (list, height, opacity, overflow) => {
  anime({
    targets: list,
    overflow: overflow,
    maxHeight: height,
    opacity: opacity,
    easing: 'easeInOutQuad',
    duration: 100,
  })
}

const screenTest = (e) => {
  if (e.matches) {
    expandList(aboutList, 0, 0, "hidden");
    expandList(discoverList, 0, 0, "hidden");
    arrowIcon[0].classList.remove("arrowActive");
    arrowIcon[1].classList.remove("arrowActive");
    
  } else {
    expandList(aboutList, "300px", 1, "visible");
    expandList(discoverList, "300px", 1, "visible");
    aboutBtn.classList.remove("footerHeadActive");
    discoverBtn.classList.remove("footerHeadActive");
  }
}

if (matchMedia) {
	const mq = window.matchMedia("(max-width: 1175px)");
	mq.addListener(screenTest);
	screenTest(mq);
}

aboutBtn.addEventListener('click', () => {
  if (window.innerWidth <= 1175) {
    if (arrowIcon[0].classList.length == 1) {
      arrowIcon[0].classList.add("arrowActive");
      aboutBtn.classList.add("footerHeadActive");
      expandList(aboutList, "300px", 1, "visible");
    } else {
      arrowIcon[0].classList.remove("arrowActive");
      aboutBtn.classList.remove("footerHeadActive");
      expandList(aboutList, 0, 0, "hidden");
    }
  }
})

discoverBtn.addEventListener('click', () => {
  if (window.innerWidth <= 1175) {
    if (arrowIcon[1].classList.length == 1) {
      arrowIcon[1].classList.add("arrowActive");
      discoverBtn.classList.add("footerHeadActive");
      expandList(discoverList, "300px", 1, "visible");
    } else {
      arrowIcon[1].classList.remove("arrowActive");
      discoverBtn.classList.remove("footerHeadActive");
      expandList(discoverList, 0, 0, "hidden");
    }
  }
})


hamburger.addEventListener('click', () => {
  if (hamburger.classList.contains('is-active')) {
   hamburger.classList.remove('is-active');
  } else {
    hamburger.classList.add('is-active');
  }
})

const toggleCheck = () => {
  if (toggle.checked) {
    // animateValue(index, start, end, duration, selector)
    animateValue(0, 9, 69, 300, priceCount);
    animateValue(1, 5, 99, 300, priceCount);
    setTimeout( () => { 
      document.querySelectorAll('.price > span')[2].innerHTML = '€'
    }, 400);
  } else {
    animateValue(0, 69, 9, 300, priceCount);
    animateValue(1, 99, 5, 300, priceCount);
    setTimeout( () => { 
      document.querySelectorAll('.price > span')[2].innerHTML = '%'
    }, 400);
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



function isScrolledIntoView(el) {
  var elemTop = el.getBoundingClientRect().top;
  var elemBottom = el.getBoundingClientRect().bottom;

  var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  return isVisible;
}

function animateValue(index, start, end, duration, selector) {
  var range = end - start;
  var current = start;
  var increment = end > start ? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = selector[index];
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
    animateValue(0, 0, 3, 600, figureCount);
    animateValue(1, 0, 1, 600, figureCount);
    animateValue(2, 0, 74, 600, figureCount);
    animateValue(3, 0, 3, 600, figureCount);
    window.onscroll = null;
  }
}

window.onscroll = scroll;
