const React = require('react');
const Layout = require('./Layout');

function Personal({ mur,myUser }) {
   
  return (
    <Layout mur={mur}
    myUser={myUser}
    >
<br />
<section style={{backgroundColor: '#eee'}}>
  <div className="container py-5">
  <h2 className="my-3">Данные пользователя</h2>
    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
              className="rounded-circle img-fluid" style={{width: '150px'}}/>
            <h5 className="my-3">{myUser.name} {myUser.surname}</h5>
            <p className="text-muted mb-4">{myUser.home_adress}</p>
            <div className="d-flex justify-content-center mb-2">
              <button type="button" className="btn btn-primary">Изменить</button>
              <button type="button" className="btn btn-outline-primary ms-1">Удалить</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="card mb-4">
          <div className="card-body">

            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Фамилия</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{myUser.surname}</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Имя</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{myUser.name}</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Отчество</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{myUser.patronymic}</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Телефон</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{myUser.phone_number}</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">e-mail</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{myUser.email}</p>
              </div>
            </div>
            <hr/>

            

            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Адрес</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{myUser.home_adress}</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              
              <div className="col-sm-9">
              <a className="nav-link" href="/chat">Чат с консультантом</a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</section>


    </Layout>
  );
}

module.exports = Personal;
