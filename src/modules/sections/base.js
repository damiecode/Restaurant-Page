const base = () => {
  const header = document.createElement('section')
  header.classList.add('navbar', 'navbar-default', 'navbar-fixed-top')
  const container = document.createElement('div')
  container.classList.add('container')
  const navbarHeader = document.createElement('div')
  navbarHeader.classList.add('navbar-header')

  const navArray = ['HOME', 'FOOD GALLERY', 'SPECIAL MENU', 'CONTACT'];
  const anchorArray = [];

  for (let i = 0; i < 4; i += 1) {
    const a = document.createElement('a');
    if (i !== 0) a.setAttribute('href', `#page${i}`);
    a.classList.add('smoothScroll');
    a.innerHTML = navArray[i];
    anchorArray.push(a);
  }

  navbarHeader.append(...anchorArray);

  container.appendChild(navbarHeader);

  header.appendChild(container);

  return header;
};

export default base;
