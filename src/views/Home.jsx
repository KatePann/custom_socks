const React = require('react');
const Layout = require('./Layout');

function Home({ mur }) {
  return (
    <Layout mur={mur}>
      <h1>Добро пожаловать в носочный мир!!!</h1>
    </Layout>
  );
}

module.exports = Home;
