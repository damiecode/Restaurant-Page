import '../dist/css/main.css';
import sections from './modules/sections';

const rootContainer = document.getElementById('content');

rootContainer.append(
  sections.getSection1(),
  sections.getSection2(),
  sections.getSection3(),
  sections.getSection4(),
  sections.getSection5(),
  sections.getSection6()
);
