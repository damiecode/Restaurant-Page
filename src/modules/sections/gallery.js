const gallery = () => {
  const section = document.createElement('section')
  section.id = 'gallery'
  section.classList.add('parallax-section')
  const container = document.createElement('div')
  container.classList.add('container')
  const row = document.createElement('div')
  row.classList.add('row')
  const div1 = document.createElement('div')
  div1.classList.add('col-md-offset-2', 'col-md-8','col-sm-12', 'text-center')
  const heading = document.createElement('h1')
  heading.classList.add('heading')
  heading.innerText = 'Food Gallery'
  const hr = document.createElement('hr')
  div1.appendChild(heading)
  div1.appendChild(hr)

  const liArr = [];

  for (let i = 0; i < 3; i += 1) {
    const li = document.createElement('div');
    li.classList.add('col-md-4', 'col-sm-4', 'wow', 'fadeInUp');
    li.setAttribute('data-wow-delay','0.3s')
    li.innerHTML = `
          <a href="images/gallery-img1.jpg" data-lightbox-gallery="zenda-gallery">
            <img src="images/gallery-img1.jpg"
              alt="gallery img"></a>
          <div>
            <h3>Lemon-Rosemary Prawn</h3>
            <span>Seafood / Shrimp / Lemon</span>
          </div>
          <a href="images/gallery-img2.jpg" data-lightbox-gallery="zenda-gallery">
            <img src="images/gallery-img2.jpg"
              alt="gallery img"></a>
          <div>
            <h3>Lemon-Rosemary Pizza</h3>
            <span>Tomato / Rosemary / Lemon</span>
          </div>`;

    liArr.push(li);
  }

  row.append(...liArr);  
  row.appendChild(div1)
  container.appendChild(row)
  section.appendChild(container)

  return section;
}

export default gallery;