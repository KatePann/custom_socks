const React = require('react');
const Layout = require('./Layout');

module.exports = function Reg( ) {
  return (
    <Layout>
      <form method="POST" action="/user/reg">
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">Name</label>
          <input name="name" type="name" className="form-control" id="exampleInputName" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputLastName" className="form-label">Lastname</label>
          <input name="surname" type="lastname" className="form-control" id="exampleInputLastName" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPatronymic" className="form-label">Patronymic</label>
          <input name="patronymic" type="patronymic" className="form-control" id="exampleInputPatronymic" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
          <input name="phone" type="number" className="form-control" id="exampleInputPhone" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputAdress" className="form-label">Adress</label>
          <input name="adress" type="adress" className="form-control" id="exampleInputAdress" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
        </div>

        <button type="submit" className="btn btn-primary">Reg</button>
      </form>
    </Layout>
  );
};
