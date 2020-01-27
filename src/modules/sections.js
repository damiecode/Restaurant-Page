import base from './sections/base';
import home from './sections/home';

const sections = (() => {
  const getSection1 = () => base();
  const getSection2 = () => home();

  return {
    getSection1,
    getSection2
  };
})();

export default sections;