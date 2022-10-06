const React = require('react');
const Layout = require('./Layout');

function Basket({mur, total, allSock, myBasket}) {
  return (
    <Layout 
    mur={mur}
    total = {total}
    allSock = {allSock}
    myBasket = {myBasket}
    >
{myBasket.length ?(
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
                        {allSock?.map((el)=>(
                        <tr>
                            <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                            <td>Product Name Dada</td>
                            <td></td>
                            <td><input className="form-control" type="text" value="1" /></td>
                            <td className="text-right">{el['Sock.price']} руб.</td>
                            <td className="text-right"><a href={`/deleteBas/${el.id}`}><button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i></button></a> </td>
                        </tr>
                        ))}
                        
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Итого:</td>
                            <td className="text-right">{total} руб.</td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </div>
        <div className="col mb-2">
            <div className="row">
                <div className="col-sm-12 col-md-6 text-right">
                    <button className="btn btn-lg btn-block btn-success text-uppercase">Оплатить</button>
                </div>
            </div>
        </div>
    </div>
</div>
):(
    <div>
        <h3>🧺 Ваша корзина грустит без покупок!</h3>
    </div>
)}

    </Layout>
  );
}

module.exports = Basket;
