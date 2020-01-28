const contact = () => {
  const section = document.createElement('section')
  section.id = 'contact'
  section.classList.add('parallax-section')
  const container = document.createElement('div')
  container.classList.add('container')
  const row = document.createElement('div')
  row.classList.add('row')
  const div1 = document.createElement('div')
  div1.classList.add('col-md-offset-1', 'col-md-10', 'col-sm-12', 'text-center')
  const heading = document.createElement('h1')
  heading.classList.add('heading')
  heading.innerText = 'Contact Us'
  const hr = document.createElement('hr')
  div1.appendChild(heading)
  div1.appendChild(hr)

  const div2 = document.createElement('div')
  div2.classList.add('col-md-offset-1', 'col-md-10', 'col-sm-12', 'wow', 'fadeIn')
  div2.setAttribute('data-wow-delay', '0.9s')
  const form = document.createElement('form')

  const nameDiv = document.createElement('div')
  nameDiv.classList.add('col-md-6', 'col-sm-6')

  const inputName = document.createElement('input');
  inputName.classList.add('form-control')
  inputName.setAttribute('type', 'text');
  inputName.id = 'name'
  inputName.setAttribute('placeholder', 'Name');

  nameDiv.appendChild(inputName);

  const emailDiv = document.createElement('div');
  emailDiv.classList.add('col-md-6', 'col-sm-6');

  const inputEmail = document.createElement('input');
  inputEmail.classList.add('form-control');
  inputEmail.setAttribute('type', 'email');
  inputEmail.id = 'email';
  inputEmail.setAttribute('placeholder', 'Email');

  emailDiv.appendChild(inputEmail);

  const messageDiv = document.createElement('div');
  messageDiv.classList.add('col-md-12', 'col-sm-12');

  const inputMessage = document.createElement('textarea');
  inputMessage.classList.add('form-control');
  inputMessage.setAttribute('type', 'text');;
  inputMessage.id = 'message'
  inputMessage.setAttribute('placeholder', 'Message');

  messageDiv.appendChild(inputMessage);

  const buttonDiv = document.createElement('div');
  buttonDiv.classList.add('col-md-offset-3', 'col-md-6', 'col-sm-offset-3', 'col-sm-6');

  const button = document.createElement('input');
  button.classList.add('form-control');
  button.setAttribute('type', 'submit');
  button.id = 'submit';
  button.value = 'make a reservation';

  buttonDiv.append(button);

  form.append(nameDiv, emailDiv, messageDiv, buttonDiv);

  const div3 = document.createElement('div');
  div3.classList.add('col-md-2', 'col-sm-1');

  div2.appendChild(form);
  div1.appendChild(div2);
  row.appendChild(div1);
  row.appendChild(div3);
  container.appendChild(row);
  section.appendChild(container);

  return section;
}

export default contact;