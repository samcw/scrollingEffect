import FixElement from './FixElement';

const HOME = document.querySelector('#home');
const INTRODUCTION = document.querySelector('#introduction');
const PROJECT = document.querySelector('#project');
const NAV = document.querySelector('#nav');

let last_known_scroll_position: number = 0;
let ticking: boolean = false;

const HOME_FIX = new FixElement(HOME, [0, 1000]);
const INTRODUCTION_FIX = new FixElement(INTRODUCTION, [1000, 2000]);
const PROJECT_FIX = new FixElement(PROJECT, [2000, 3000]);

NAV.addEventListener('click', (e) => {
  const TARGET = e.target as Element;
  moveToTarget(TARGET);
});

function moveToTarget(target: Element): void {
  let targetValue: number = document.documentElement.scrollTop || document.body.scrollTop;
  switch (target.innerHTML) {
    case 'HOME':
      targetValue = 0;
      break;
    case 'INTRODUCTION':
      targetValue = 1000;
      break;
    case 'PROJECT':
      targetValue = 2000;
      break;
    default:
      break;
  }
  smoothscroll(targetValue);
}

function smoothscroll(value: number) {
  let currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop;
  let targetValue = Math.abs(value - currentScroll) <= 5 ? value : (currentScroll + (value - currentScroll) / 5);
  if (currentScroll !== value) {
    window.requestAnimationFrame(smoothscroll.bind(null, value));
    window.scrollTo(0, targetValue);
  }
}

function changeNavActive(value: number, target: Element): void {
  const childrenList = target.firstElementChild.getElementsByTagName('li');
  let activeIndex = 0;
  if (0 <= value && value < 1000) {
    activeIndex = 0;
  } else if (1000 <= value && value < 2000) {
    activeIndex = 1;
  } else if (2000 <= value) {
    activeIndex = 2;
  }
  for (let i = 0; i < childrenList.length; i++) {
    if (i === activeIndex) {
      childrenList[i].setAttribute('class', 'fix-nav-active');
    } else {
      childrenList[i].removeAttribute('class');
    }
  }
}

window.addEventListener('scroll', (e) => {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      HOME_FIX.changeZ(last_known_scroll_position);
      HOME_FIX.changeOpacity(last_known_scroll_position);
      HOME_FIX.update();

      INTRODUCTION_FIX.changeZ(last_known_scroll_position);
      INTRODUCTION_FIX.changeOpacity(last_known_scroll_position);
      INTRODUCTION_FIX.update();

      PROJECT_FIX.changeZ(last_known_scroll_position);
      PROJECT_FIX.changeOpacity(last_known_scroll_position);
      PROJECT_FIX.update();

      changeNavActive(last_known_scroll_position, NAV);

      ticking = false;
    });

    ticking = true;
  }
});
