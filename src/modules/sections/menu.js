const menu = () => {
  const section = document.createElement('section');
  section.id = 'menu';
  section.classList.add('parallax-section');
  const container = document.createElement('div');
  container.classList.add('container');
  const row = document.createElement('div');
  row.classList.add('row');
  const div = document.createElement('div');
  div.classList.add('col-md-offset-2', 'col-md-8', 'col-sm-12', 'text-center');
  const h1 = document.createElement('h1');
  h1.classList.add('heading');
  h1.innerText = 'Special Menu';
  const hr = document.createElement('hr');
  div.appendChild(hr);
  div.appendChild(h1);

  const li = document.createElement('div');
  li.innerHTML = `
        <div class="col-md-6 col-sm-6">
          <h4>Lemon-Rosemary Vegetable ................ <span>$20.50</span></h4>
          <h5>Chicken / Rosemary / Lemon</h5>
        </div>
        <div class="col-md-6 col-sm-6">
          <h4>Lemon-Rosemary Meat ........................... <span>$30.50</span></h4>
          <h5>Meat / Rosemary / Lemon</h5>
        </div>
        <div class="col-md-6 col-sm-6">
          <h4>Lemon-Rosemary Pork ........................ <span>$40.75</span></h4>
          <h5>Pork / Tooplate / Lemon</h5>
        </div>
        <div class="col-md-6 col-sm-6">
          <h4>Orange-Rosemary Salad .......................... <span>$55.00</span></h4>
          <h5>Salad / Rosemary / Orange</h5>
        </div>
        <div class="col-md-6 col-sm-6">
          <h4>Lemon-Rosemary Squid ...................... <span>$65.00</span></h4>
          <h5>Squid / Rosemary / Lemon</h5>
        </div>
        <div class="col-md-6 col-sm-6">
          <h4>Orange-Rosemary Shrimp ........................ <span>$70.50</span></h4>
          <h5>Shrimp / Rosemary / Orange</h5>
        </div>
        <div class="col-md-6 col-sm-6">
          <h4>Lemon-Rosemary Prawn ................... <span>$110.75</span></h4>
          <h5>Chicken / Rosemary / Lemon</h5>
        </div>
        <div class="col-md-6 col-sm-6">
          <h4>Lemon-Rosemary Seafood ..................... <span>$220.50</span></h4>
          <h5>Seafood / Rosemary / Lemon</h5>
        </div>`;

  row.appendChild(div);
  row.append(li);
  container.appendChild(row);
  section.appendChild(container);

  return section;
};

export default menu;
