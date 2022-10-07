const React = require('react');
const Layout = require('./Layout');

function Home({ mur }) {
  return (
    <Layout mur={mur}>

      <div class="p-5 text-center bg-light">
        <h1 class="mb-3">🧦 TRIPLE SOCKS</h1>
        <h4 class="mb-3">Носки для всей семьи!</h4>
        <a class="btn btn-primary" href="/gener" role="button">Создать дизайн</a>
      </div>

      <div className="cards">
        <div className="card">
          <br />
          {/* <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" className="img-fluid" style={{ maxWidth: '30%'  }}/>
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
          </div> */}
          {/* <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text" style={{ maxWidth: '30%'  }} >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#!" className="btn btn-primary">Button</a>
          </div> */}
          
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true" style={{ maxWidth: '50%' }}>
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<br />
        </div>
      </div>


    </Layout>
  );
}

module.exports = Home;
