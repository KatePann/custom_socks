const React = require('react');
const Layout = require('./Layout');

function Basket() {
  return (
    <Layout>

      <div className="container-xxl js-order final-order">
        <h3 className="card-title">Корзина </h3>
        <div>
          <h5 className="js-total">
            Стоимость заказа
            <p className="js-totalPrice" />
            {' '}
            руб.
          </h5>
          <button type="button" className="btn btn-outline-primary order-make ">
            Оформить заказ
          </button>
        </div>

        <div className="card mb-3" style={{ maxWidth: '540px' }}>
          <div className="row g-0z ">
            <div className="col-md-4 ">
              <img src="#" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  Цена

                  {' '}
                  руб.
                </h5>

                <p className="card-text">название</p>
                <p className="card-text">
                  колличество в корзине
                  <p className="counter">колличество</p>
                </p>
                <div
                  className="btn-group-vertical"
                  role="group"
                  aria-label="Vertical button group"
                >
                  <p className="info" />
                  <button
                    type="button"
                    className="btn btn-success p-2 border btnPlus-data"
                  >
                    +

                    {' '}
                    добавить товар
                  </button>

                  <button
                    type="button"
                    className="btn btn-warning p-2 border btnMinus"
                  >
                    -

                    {' '}
                    убрать товар
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </Layout>
  );
}

module.exports = Basket;
