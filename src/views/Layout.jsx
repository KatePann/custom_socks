const React = require('react');

function Layout({ children, mur }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* подключаем бутстрап */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous" />
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossOrigin="anonymous" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
        {/* подключаем css файлы */}
        <link rel="stylesheet" href="/css/index.css" />
        <title>Castom socks</title>
      </head>
      <body>
        <header>
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">Главная</a>

              {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav"> */}
                  <ul className="nav justify-content-end">
                   {mur?( <><li className="nav-item">
                  <a className="nav-link" href="/gener">Генератор носков</a>
                </li><li className="nav-item">
                    <a className="nav-link" href="/favorite">Избранное</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/personal">Личный кабинет</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/basket">Корзина</a>
                  </li><li className="nav-item">
                    <a className="nav-link" href="/logout">Выход</a>
                  </li></>)
                    :
                   ( <><li className="nav-item">
                    <a className="nav-link" href="/user/reg">Регистрация</a>
                  </li><li className="nav-item">
                      <a className="nav-link" href="/user/aut">Авторизация</a>
                    </li></>)}
                  </ul>
                {/* </div>
              </div> */}
            </div>
          </nav>
        </header>

        <footer>

        {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" /> */}

          <section className="">
            <div className="container text-center text-md-start mt-5">

              <div className="row mt-3">

                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3 text-secondary" />
                    TRIPLE SOCKS
                  </h6>
                  <p>
                    Мы работаем для Вас с 1980 года!
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                  <h6 className="text-uppercase fw-bold mb-4">
                    Быстрые ссылки
                  </h6>
                  <p>
                    <a href="/favorite" className="text-reset">Избранное</a>
                  </p>
                  <p>
                    <a href="/personal" className="text-reset">Личный кабинет</a>
                  </p>
                  <p>
                    <a href="/basket" className="text-reset">Корзина</a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                  <h6 className="text-uppercase fw-bold mb-4">
                    Социальные сети
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">YouTube</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">ВКонтакте</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Facebook</a>
                  </p>

                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                  <h6 className="text-uppercase fw-bold mb-4">Контакты</h6>
                    <p>
                      <a href="#!" className="text-reset">Москва, ул. Центральная, д.10</a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset"> info@socks.com</a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">+ 7 934 567 88 88</a>
                    </p>
          
                </div>

              </div>

            </div>
          </section>

          <div className="text-center p-4" style={{ backgroundColor: '#e3f2fd' }}>
            <p>TRIPLE SOCKS © 2022. All rights reserved.</p>
          </div>
          
        </footer>
        { children }
      </body>
      
    </html>
  );
  
}

module.exports = Layout;
