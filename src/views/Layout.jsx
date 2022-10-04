const React = require('react');

function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* подключаем бутстрап */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous" />
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossOrigin="anonymous" />
        {/* подключаем css файлы */}
        <link rel="stylesheet" href="../../public/css/index.css" />

        <title>Castom socks</title>
      </head>
      <body>
        <header>
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Главная страница</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Переключатель навигации">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <ul className="nav justify-content-end">
                    <li className="nav-item">
                      <a className="nav-link" href="#">Генератор носков</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Избранное</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Личный кабинет</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Корзина</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Выход</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <footer id="footer" className="footer-1">
          <div className="main-footer widgets-dark typo-light">
            <div className="container">
              <div className="row">

                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="widget subscribe no-box">
                    <h5 className="widget-title">
                      TRIPLE SOCKS
                      <span />
                    </h5>
                    <p>Мы работаем для Вас с 1980 года! </p>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="widget no-box">
                    <h5 className="widget-title">
                      Быстрый переход к нужной странице
                      <span />
                    </h5>
                    <ul className="thumbnail-widget">
                      <li>
                        <div className="thumb-content"><a href="#.">Избранное</a></div>
                      </li>
                      <li>
                        <div className="thumb-content"><a href="#.">Личный кабинет</a></div>
                      </li>
                      <li>
                        <div className="thumb-content"><a href="#.">Корзина</a></div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3">

                  <div className="widget no-box">
                    <h5 className="widget-title">
                      О нас
                      <span />
                    </h5>

                    <p><a href="mailto:info@domain.com" title="glorythemes">Служба поддержки:info@socks.com</a></p>
                    <p><a href="https://www.google.com/maps/place/M%C9%99mm%C9%99d%C9%99li+%C5%9E%C9%99rifli,+%D0%90%D0%B7%D0%B5%D1%80%D0%B1%D0%B0%D0%B9%D0%B4%D0%B6%D0%B0%D0%BD/@40.4133982,49.9492079,17.25z/data=!4m5!3m4!1s0x403062540e3bd7cb:0xc5b614276f2db322!8m2!3d40.4140015!4d49.949177" title="glorythemes">Адрес магазина: г.Баку, ул. Рустама Рустамова, д.1</a></p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="footer-copyright">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <p>TRIPLE SOCKS © 2022. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>

        { children }
      </body>
    </html>
  );
}

module.exports = Layout;
