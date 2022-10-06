const React = require('react');
const Layout = require('./Layout');

module.exports = function Aut( ) {
  return (
  <Layout>
    <form>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">Name</label>
          <input name="name" type="name" className="form-control" id="exampleInputName" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
        </div>
 <button type="submit" className="btn btn-primary">Aw</button>
      </form>
  </Layout>

  )}
