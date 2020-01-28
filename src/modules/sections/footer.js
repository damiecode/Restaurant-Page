const footer = () => {
  const section = document.createElement('footer');
  section.classList.add('parallax-section');
  const container = document.createElement('div')
  container.classList.add('container');
  const row = document.createElement('div');
  row.classList.add('row');
  const div = document.createElement('div');
  div.classList.add('col-md-4', 'col-sm-4', 'wow', 'fadeInUp');
  div.setAttribute('data-wow-delay', '0.6s');
  const heading = document.createElement('h2');
  heading.classList.add('heading');
  heading.innerText = 'Contact Info.'

  const phoneDiv = document.createElement('div');
  phoneDiv.classList.add('ph');
  const ph = document.createElement('p');
  ph.innerHTML = `
  <p><i class="fa fa-phone"></i> Phone</p>
            <h4>090-080-0760</h4>
  `
  phoneDiv.appendChild(ph);

  div.appendChild(phoneDiv);
  row.appendChild(div);
  container.appendChild(row);
  section.appendChild(container);

  return section;
};

export default footer;