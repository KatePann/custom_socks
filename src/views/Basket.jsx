const React = require('react');
const Layout = require('./Layout');

function Basket() {
  return (
    <Layout>

<div className="container mb-4">
    <div className="row">
        <div className="col-12">
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"> </th>
                            <th scope="col">Товар</th>
                            <td></td>
                            <th scope="col" className="text-center">Количество</th>
                            <th scope="col" className="text-right">Цена</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                            <td>Product Name Dada</td>
                            <td></td>
                            <td><input className="form-control" type="text" value="1" /></td>
                            <td className="text-right">124,90 €</td>
                            <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i> </button> </td>
                        </tr>
                        <tr>
                            <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                            <td>Product Name Toto</td>
                            <td></td>
                            <td><input className="form-control" type="text" value="1" /></td>
                            <td className="text-right">33,90 €</td>
                            <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i> </button> </td>
                        </tr>
                        <tr>
                            <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                            <td>Product Name Titi</td>
                            <td></td>
                            <td><input className="form-control" type="text" value="1" /></td>
                            <td className="text-right">70,00 €</td>
                            <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i> </button> </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Итого:</td>
                            <td className="text-right">255,90 €</td>
                        </tr>
                        {/* <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Shipping</td>
                            <td className="text-right">6,90 €</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><strong>Total</strong></td>
                            <td className="text-right"><strong>346,90 €</strong></td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
        <div className="col mb-2">
            <div className="row">
                {/* <div className="col-sm-12  col-md-6">
                    <button className="btn btn-block btn-light">Continue Shopping</button>
                </div> */}
                <div className="col-sm-12 col-md-6 text-right">
                    <button className="btn btn-lg btn-block btn-success text-uppercase">Оплатить</button>
                </div>
            </div>
        </div>
    </div>
</div>


    </Layout>
  );
}

module.exports = Basket;
