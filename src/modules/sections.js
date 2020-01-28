import base from './sections/base';
import home from './sections/home';
import gallery from './sections/gallery';
import menu from './sections/menu';
import contact from './sections/contact';
import footer from './sections/footer';

const sections = (() => {
  const getSection1 = () => base();
  const getSection2 = () => home();
  const getSection3 = () => gallery();
  const getSection4 = () => menu();
  const getSection5 = () => contact();
  const getSection6 = () => footer(); 

  return {
    getSection1,
    getSection2,
    getSection3,
    getSection4,
    getSection5,
    getSection6
  };
})();

export default sections;