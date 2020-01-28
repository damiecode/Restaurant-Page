const footer = () => {
  const section = document.createElement('footer');
  section.classList.add('parallax-section')
  const container1 = document.createElement('div')
  container1.classList.add('container')
  const row1 = document.createElement('div')
  row1.classList.add('row')
  const footerdiv = document.createElement('div')
  footerdiv.classList.add('col-md-4', 'col-sm-4', 'wow', 'fadeInUp')
  footerdiv.setAttribute('data-wow-delay', '0.6s')
  const footerheading = document.createElement('h2')
  footerheading.classList.add('heading')
  footerheading.innerText = 'Contact Info.'

  footerdiv.appendChild(footerheading)
  row1.appendChild(footerdiv)
  container1.appendChild(row1)
  section.appendChild(container1)
}