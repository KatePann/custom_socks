// const React = require('react');
// const Layout = require('./Layout');

//  module.exports = function Generate ({ mur }) {
//     console.log(mur);
//     return(
//         <Layout mur={mur}>
//             <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
//   <div class="carousel-inner">
//     <div class="carousel-item active" data-bs-interval="10000">
//       <img  width="150" height="150" src="https://sun9-west.userapi.com/sun9-37/s/v1/ig2/wXBCGlWccGYAD59HE9_vm816dkcN0-__8Uqx5yLeMFWxQRMd0tW3nwddkau3l8vIPHTRokRyLd1DMD0E1B5iiZ_E.jpg?size=640x676&quality=96&type=album" class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-item" data-bs-interval="2000">
//       <img src="https://sun1.userapi.com/sun1-92/s/v1/ig2/Q2fwEm0nJKkyfshY14T2zCdDDeax_11FYSZ-j7qtm1csoMZmTsHm-l5hBM-jucqV5bgMUDk-ZnCF1kntMEhDQ9o5.jpg?size=1080x1312&quality=96&type=album" class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img src=".https://sun1.userapi.com/sun1-92/s/v1/ig2/Q2fwEm0nJKkyfshY14T2zCdDDeax_11FYSZ-j7qtm1csoMZmTsHm-l5hBM-jucqV5bgMUDk-ZnCF1kntMEhDQ9o5.jpg?size=1080x1312&quality=96&type=album" class="d-block w-100" alt="..."/>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
//         </Layout>
//     )
    
// }

const React = require('react');

module.exports = function Generate() {
  return (
    <>
      <script defer src="js/generatorScripts.js"></script>
      <script defer src="js/CartAndFav.js"></script>

      <div className="generatorBox">
        <div className="generator">
          <div className="generatorhead">
            <h1>Your Socks</h1>
          </div>
          <div className="generatorbody">
            <div className="btns">
              <div id="white" className="btn"></div>
              <div id="black" className="btn"></div>
              <div id="yello" className="btn"></div>
              <div id="violet" className="btn"></div>
              <div id="pink" className="btn"></div>
              <div id="blue" className="btn"></div>
              <div id="green" className="btn"></div>
            </div>

            <div className="socksimg">
              <div id="color" style={{ position: "absolute" }} >
                <img className='color' name="white" src="/images/generatorFiles/colorSocks/original.png" alt="" />
              </div >
              <div id="fon" style={{ position: "absolute" }}>
                {/* <img className="fon" name="triangle" alt="" /> */}
              </div>
              <div id="logo" style={{ position: "absolute" }}>
                {/* <img className="prints" name="duck" alt="" /> */}
              </div>
              <div className="backBTNs">
                <div className="backBut" id="btnReset">Reset</div>
                <div className="backBut" id="toCart">&#128722;</div>
                <div className="backBut" id="toFavorites">&#128153;</div>
              </div>
            </div>

            <div className="btnsfon">
              <div id="triangle" className="btn"></div>
              <div id="dots" className="btn"></div>
              <div id="sky" className="btn"></div>
              <div id="geometry" className="btn"></div>
              <div id="skyInvert" className="btn"></div>
              <div id="geometryInvert" className="btn"></div>
              <div id="triangleInvert" className="btn"></div>
            </div>
          </div>

          <div className="printbtns">
            <div id="cactus" className="prints"></div>
            <div id="yoda" className="prints"></div>
            <div id="duck" className="prints"></div>
            <div id="rum" className="prints"></div>
          </div>
        </div>
      </div>
    </>
  )
}