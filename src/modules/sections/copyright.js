const copyright = () => {
  const section = document.createElement('section');
  section.id = 'copyright';
  const container = document.createElement('div');
  container.classList.add('container');
  const row = document.createElement('div');
  row.classList.add('row');
  const div = document.createElement('div');
  div.classList.add('col-md-12', 'col-sm-12');
  const h3 = document.createElement('h3');
  h3.innerText = 'CATERLY';
  const p = document.createElement('p');
  p.innerText = 'Copyright © Caterly Restaurant and Cafe';

  div.append(h3, p)
  row.appendChild(div);
  container.appendChild(row);
  section.appendChild(container);

  return section;
};

export default copyright;