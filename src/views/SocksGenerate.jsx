const React = require('react');
const Layout = require('./Layout');

module.exports = function Generate ({ mur }) {
console.log(mur);
return(
<Layout mur={mur}>
<script defer src="/js/her.js"></script>
{/* <link rel="stylesheet" href="/css/login.css" />  */}
<div className ='socks'>
<img src='/public/pic/1.png'></img> </div>

<input id="color" list="colors"/>

<button className="change-color">Change Color</button>

<datalist id="colors">
<option value="AliceBlue"/>
<option value="AntiqueWhite"/>
<option value="Aqua"/>
<option value="Aquamarine"/>
<option value="Azure"/>
<option value="Beige"/>
<option value="Bisque"/>
<option value="Black"/>
<option value="BlanchedAlmond"/>
<option value="Blue"/>
<option value="BlueViolet"/>
<option value="Brown"/>
<option value="BurlyWood"/>
<option value="CadetBlue"/>
<option value="Chartreuse"/>
<option value="Chocolate"/>
<option value="Coral"></option>
</datalist>
</Layout>
)}