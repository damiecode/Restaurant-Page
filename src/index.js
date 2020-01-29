import '../dist/css/main.css';
import sections from './modules/sections';

const rootContainer = document.getElementById('content');
const content = document.querySelector('#content');

rootContainer.append(
  sections.getSection1(),
  sections.getSection2(),
  sections.getSection3(),
  sections.getSection4(),
  sections.getSection5(),
  sections.getSection6(),
  sections.getSection7(),
);

const render = () => {
  sections.getSection1();
  sections.getSection2();
};

window.addEventListener('DOMContentLoad', render());


const homeTab = document.querySelector('#home');
const galleryTab = document.querySelector('#gallery');
const menuTab = document.querySelector('#menu');
const contactTab = document.querySelector('#contact');

const changeMenu = (e) => {
  if (e.srcElement === homeTab) {
    content.innerHTML = '';
    sections.getSection2();
  } else if (e.srcElement === galleryTab) {
    content.innerHTML = '';
    sections.getSection3();
  } else if (e.srcElement === menuTab) {
    content.innerHTML = '';
    sections.getSection4();
  } else if (e.srcElement === contactTab) {
    content.innerHTML = '';
    sections.getSection5();
  }
};

homeTab.addEventListener('click', changeMenu);
galleryTab.addEventListener('click', changeMenu);
menuTab.addEventListener('click', changeMenu);
contactTab.addEventListener('click', changeMenu);
