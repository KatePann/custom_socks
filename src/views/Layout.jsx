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
        <link rel="stylesheet" href="../../css/index.css" />

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
                      <a className="nav-link" href="/personal">Личный кабинет</a>
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
        { children }
      </body>
      
    </html>
  );
}

module.exports = Layout;
