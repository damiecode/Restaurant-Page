const base = () => {
  const header = document.createElement('section');
  header.classList.add('navbar', 'navbar-default', 'navbar-fixed-top');
  const container = document.createElement('div');
  container.classList.add('container');
  const navbarHeader = document.createElement('div');
  navbarHeader.classList.add('navbar-header');
  const button = document.createElement('button');
  button.classList.add('navbar-toggle');
  button.setAttribute('data-toggle', 'collapse');
  // $('[data-toggle="collapse"]').collapse()
  button.dataset.target = '.navbar-collapse';
  const brand = document.createElement('a');
  brand.classList.add('navbar-brand');
  brand.innerText = 'CATERLY';

  const navDiv = document.createElement('div');
  navDiv.classList.add('collapse' , 'navbar-collapse');
  const list = document.createElement('ul');
  list.classList.add('nav' , 'navbar-nav' , 'navbar-right');

  const toggle = ['', '', ''];
  toggle.forEach((el) => {
    let span = document.createElement('span');
    span.classList.add('icon' , 'icon-bar');
    button.appendChild(span);
  })

  const navArray = ['HOME', 'FOOD GALLERY', 'SPECIAL MENU', 'CONTACT'];
  const anchorArray = [];

  for (let i = 0; i < 4; i += 1) {
    const a = document.createElement('a');
    const li = document.createElement('li');
    if (i !== 0) a.setAttribute('href', `#page${i}`);
    a.classList.add('smoothScroll');
    a.innerHTML = navArray[i];
    li.appendChild(a)
    anchorArray.push(li);
  }

  navbarHeader.appendChild(button);

  navbarHeader.appendChild(brand);

  container.appendChild(navbarHeader);

  container.appendChild(navDiv);

  list.append(...anchorArray);

  navDiv.appendChild(list);

  header.appendChild(container);

  return header;
};

export default base;
