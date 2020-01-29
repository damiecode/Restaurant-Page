const gallery = () => {
  const section = document.createElement('section');
  section.id = 'gallery';
  section.classList.add('parallax-section');
  const container = document.createElement('div');
  container.classList.add('container');
  const row = document.createElement('div');
  row.classList.add('row');
  const div1 = document.createElement('div');
  div1.classList.add('col-md-offset-2', 'col-md-8', 'col-sm-12', 'text-center');
  const heading = document.createElement('h1');
  heading.classList.add('heading');
  heading.innerText = 'Food Gallery';
  const hr = document.createElement('hr');
  div1.appendChild(heading);
  div1.appendChild(hr);

  const li = document.createElement('div');
  li.innerHTML = `
      <div class="col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.3s">
        <a href="images/gallery-img1.jpg" data-lightbox-gallery="zenda-gallery"><img src="images/gallery-img1.jpg" alt="gallery img"></a>
        <div>
          <h3>Lemon-Rosemary Prawn</h3>
          <span>Seafood / Shrimp / Lemon</span>
        </div>
        <a href="images/gallery-img2.jpg" data-lightbox-gallery="zenda-gallery"><img src="images/gallery-img2.jpg" alt="gallery img"></a>
        <div>
          <h3>Lemon-Rosemary Beans</h3>
          <span>Tomato / Rosemary / Lemon</span>
        </div>
      </div>
      <div class="col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.6s">
        <a href="images/gallery-img3.jpg" data-lightbox-gallery="zenda-gallery"><img src="images/gallery-img3.jpg" alt="gallery img"></a>
        <div>
          <h3>Lemon-Rosemary Bakery</h3>
          <span>Bread / Rosemary / Orange</span>
        </div>
      </div>
      <div class="col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.9s">
        <a href="images/gallery-img4.jpg" data-lightbox-gallery="zenda-gallery"><img src="images/gallery-img4.jpg" alt="gallery img"></a>
        <div>
          <h3>Lemon-Rosemary Salad</h3>
          <span>Chicken / Rosemary / Green</span>
        </div>
        <a href="images/gallery-img5.jpg" data-lightbox-gallery="zenda-gallery"><img src="images/gallery-img5.jpg" alt="gallery img"></a>
        <div>
          <h3>Lemon-Rosemary Pizza</h3>
          <span>Pasta / Rosemary / Green</span>
        </div>`;


  row.appendChild(div1);
  row.append(li);
  container.appendChild(row);
  section.appendChild(container);

  return section;
};

export default gallery;