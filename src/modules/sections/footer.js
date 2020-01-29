const footer = () => {
  const section = document.createElement('footer');
  section.classList.add('parallax-section');
  const container = document.createElement('div');
  container.classList.add('container');
  const row = document.createElement('div');
  row.classList.add('row');
  const div = document.createElement('div');
  div.classList.add('col-md-4', 'col-sm-4', 'wow', 'fadeInUp');
  div.setAttribute('data-wow-delay', '0.6s');
  const heading = document.createElement('h2');
  heading.classList.add('heading');
  heading.innerText = 'Contact Info.';

  const phoneDiv = document.createElement('div');
  phoneDiv.classList.add('ph');
  const ph = document.createElement('p');
  ph.innerHTML = `
  <i class="fa fa-phone"></i> Phone
  `;
  const num = document.createElement('h4');
  num.innerText = '090-080-0760';
  phoneDiv.append(ph, num);

  const address = document.createElement('div');
  address.classList.add('address');
  const addr = document.createElement('p');
  addr.innerHTML = `
  <i class="fa fa-map-marker"></i> Our Location
  `;
  const location = document.createElement('h4');
  location.innerText = 'Ikeja, Lagos, Nigeria';

  address.append(addr, location);

  const availability = document.createElement('div');
  availability.classList.add('col-md-4', 'col-sm-4', 'wow', 'fadeInUp');
  const h2 = document.createElement('h2');
  h2.classList.add('heading');
  h2.innerText = 'Open Hours';
  const sunday = document.createElement('p');
  sunday.innerText = 'Sunday';
  const span1 = document.createElement('span');
  span1.innerText = '10:30 AM - 10:00 PM';
  sunday.appendChild(span1);
  const weekdays = document.createElement('p');
  weekdays.innerText = 'Mon-Fri';
  const span2 = document.createElement('span');
  span2.innerText = '9:00 AM - 8:00 PM';
  weekdays.appendChild(span2);
  const saturday = document.createElement('p');
  saturday.innerText = 'Saturday';
  const span3 = document.createElement('span');
  span3.innerText = '11:30 AM - 10:00 PM';
  saturday.appendChild(span3);

  availability.append(h2, sunday, weekdays, saturday);

  const follow = document.createElement('div');
  follow.classList.add('col-md-4', 'col-sm-4', 'wow', 'fadeInUp');
  const followH2 = document.createElement('h2');
  followH2.classList.add('heading');
  followH2.innerText = 'Follow Us';
  const ul = document.createElement('ul');
  ul.classList.add('social-icon');
  ul.innerHTML = `
    <li><a href="#" class="fa fa-facebook wow bounceIn" data-wow-delay="0.3s"></a></li>
            <li><a href="#" class="fa fa-twitter wow bounceIn" data-wow-delay="0.6s"></a></li>
            <li><a href="#" class="fa fa-behance wow bounceIn" data-wow-delay="0.9s"></a></li>
            <li><a href="#" class="fa fa-dribbble wow bounceIn" data-wow-delay="0.9s"></a></li>
            <li><a href="#" class="fa fa-github wow bounceIn" data-wow-delay="0.9s"></a></li>
  `;

  follow.append(followH2, ul);
  
  div.append(phoneDiv, address);
  row.append(div, availability, follow);
  container.appendChild(row);
  section.appendChild(container);

  return section;
};

export default footer;