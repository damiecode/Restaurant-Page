const base = () => {
  const header = document.createElement('section');
  header.classList.add('navbar', 'navbar-default', 'navbar-fixed-top');
  const container = document.createElement('div');
  container.classList.add('container');
  const navbarHeader = document.createElement('div');
  navbarHeader.classList.add('navbar-header');
  navbarHeader.innerHTML = `
  <button class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
      <span class="icon icon-bar"></span>
      <span class="icon icon-bar"></span>
      <span class="icon icon-bar"></span>
    </button>
    <a href="#" class="navbar-brand">CATERLY</a>
  `;
  const navDiv = document.createElement('div');
  navDiv.classList.add('collapse', 'navbar-collapse');
  navDiv.id = 'navbar-collapse';
  const list = document.createElement('ul');
  list.classList.add('nav', 'navbar-nav', 'navbar-right');

  const navArray = ['HOME', 'FOOD GALLERY', 'SPECIAL MENU', 'CONTACT'];
  const anchorArray = [];

  for (let i = 0; i < 4; i += 1) {
    const a = document.createElement('a');
    const li = document.createElement('li');
      if (i === 1) {
        a.setAttribute('href', '#gallery');
    } else if (i === 2) {
        a.setAttribute('href', '#menu');
    } else if (i === 3) {
        a.setAttribute('href', '#contact');
      } else {
        a.setAttribute('href', '#home');
    }

    a.classList.add('smoothScroll');
    a.innerHTML = navArray[i];
    li.appendChild(a);
    anchorArray.push(li);
  }

  container.appendChild(navbarHeader);

  container.appendChild(navDiv);

  list.append(...anchorArray);

  navDiv.appendChild(list);

  header.appendChild(container);

  return header;
};

export default base;
