const home = () => {
  const parallax = document.createElement('section');
  parallax.classList.add('parallax-section');
  parallax.id = 'home';

  const container2 = document.createElement('div');
  container2.classList.add('container');

  const row = document.createElement('div');
  row.classList.add('row');

  const column = document.createElement('div');
  column.classList.add('col-md-12', 'col-sm-12');

  const h1 = document.createElement('h1');
  h1.innerText = 'CATERLY RESTAURANT';

  const h2 = document.createElement('h2');
  h2.innerText = 'FRENCH CUISINE AT ITS BEST';

  const link = document.createElement('a');
  link.classList.add('smoothScroll', 'btn', 'btn-default');
  link.innerText = 'LEARN MORE';
  link.id = '#gallery';
  link.href = '#gallery';

  column.appendChild(h1);
  column.appendChild(h2);
  column.appendChild(link);
  row.appendChild(column);
  container2.appendChild(row);
  parallax.appendChild(container2);

  return parallax;
};

export default home;