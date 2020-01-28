import base from './sections/base';
import home from './sections/home';
import gallery from './sections/gallery'
import menu from './sections/menu'

const sections = (() => {
  const getSection1 = () => base();
  const getSection2 = () => home();
  const getSection3 = () => gallery();
  const getSection4 = () => menu();

  return {
    getSection1,
    getSection2,
    getSection3,
    getSection4,
  };
})();

export default sections;