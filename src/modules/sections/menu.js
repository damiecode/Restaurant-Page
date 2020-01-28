const menu = () => {
  const section = document.createElement('section')
  section.id = 'menu'
  section.classList.add('parallax-section')
  const container = document.createElement('div')
  container.classList.add('container')
  const row = document.createElement('div')
  row.classList.add('row')

  container.appendChild(row)
  section.appendChild(container)

  return section;
}

export default menu;
