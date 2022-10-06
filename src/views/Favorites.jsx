const React = require('react');
const Layout = require('./Layout');

function Favorites({  mur, myFavor, allSockFav}) {
  return (
    <Layout 
    mur={mur}
    myFavor = {myFavor}
    allSockFav = {allSockFav}
    >
        <br />
        {myFavor?.map((el)=>(
          <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" className="img-fluid" style={{ maxWidth: '30%'  }}/>
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)'  }}></div>
            </a>
            <a class="btn btn-primary" href={`/deleteFav/${el.id}`} role="button">Удалить</a>
          </div>
          ))}
          <br />
    </Layout>
  );
}

module.exports = Favorites;
