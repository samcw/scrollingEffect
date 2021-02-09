import FixElement from './js/ZAxisFixed.js';

const HOME = document.querySelector('#home');
const INTRODUCTION = document.querySelector('#introduction');
const PROJECT = document.querySelector('#project');

let last_known_scroll_position = 0;
let ticking = false;

const HOME_FIX = new FixElement(HOME, [0, 1000]);
const INTRODUCTION_FIX = new FixElement(INTRODUCTION, [1000, 2000]);
const PROJECT_FIX = new FixElement(PROJECT, [2000, 3000]);

window.addEventListener('scroll', (e) => {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      console.log(last_known_scroll_position);
      HOME_FIX.changeZ(last_known_scroll_position);
      HOME_FIX.changeOpacity(last_known_scroll_position);
      HOME_FIX.update();

      INTRODUCTION_FIX.changeZ(last_known_scroll_position);
      INTRODUCTION_FIX.changeOpacity(last_known_scroll_position);
      INTRODUCTION_FIX.update();

      PROJECT_FIX.changeZ(last_known_scroll_position);
      PROJECT_FIX.changeOpacity(last_known_scroll_position);
      PROJECT_FIX.update();

      ticking = false;
    });

    ticking = true;
  }
});
