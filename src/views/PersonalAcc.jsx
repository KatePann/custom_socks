const React = require('react');
const Layout = require('./Layout');

function Personal({ mur,myUser }) {
   
  return (
    <Layout mur={mur}
    myUser={myUser}
    >

<br />
<div className="container-fluid">
    <div className="row">
        <div className="col-12">
            <div className="card card-inverse" >
                <div className="card-block">
                    <div className="row">
                        <div className="col-md-8 col-sm-8">
                            <h2 className="card-title">Данные пользователя</h2>
                            <br />
                            <p className="card-text"><strong>Фамилия: </strong> {myUser.name} </p>
                            <p className="card-text"><strong>Имя: </strong> {myUser.surname} </p>
                            <p className="card-text"><strong>Отчество: </strong> {myUser.patronymic} </p>
                            <p className="card-text"><strong>Номер телефона: </strong> {myUser.phone_number} </p>
                            <p className="card-text"><strong>e-mail: </strong> {myUser.email} </p>
                            <p className="card-text"><strong>Адрес: </strong> {myUser.home_adress} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</div>

    </Layout>
  );
}

module.exports = Personal;
