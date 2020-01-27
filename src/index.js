import '../dist/css/main.css';
import sections from './modules/sections';

const rootContainer = document.getElementById('content');

rootContainer.append(
  sections.getSection1(),
  sections.getSection2(),
);
