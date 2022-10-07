const React = require('react');
const Layout = require('./Layout');

module.exports = function Generate ({ mur }) {
console.log(mur);
return(
<Layout mur={mur}>

<script defer src="/js/her.js"></script>
<script defer src="/js/socks.js"></script>


<form className="Deni" method="POST"  action="/gener">
<link rel="stylesheet" href="/css/login.css" /> 
<div className ='socks'>
<img width = "700px"
    height = "700px" src='/pic/pngwing_com.png'></img> </div>

<input name="color" id="color" list="colors"/>
<button type="button" className="btn btn-outline-primary" id="change-color" >Цвет носка</button>
{/* <button className="change-color">Change Color</button> */}
<input name="print" id="print" list="prints"/>
<button type="button" className="btn btn-outline-primary" id="change-print" >Принт</button>
<br />
<button type="submit" className="btn btn-outline-success" id="bask" >Сохранить</button>
{/* <button type="submit" className="btn btn-outline-success" id="fav" >В избранное</button> */}
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

<datalist id="prints">
<option value = "1">Лягушечка
</option><option value = "2">Ляг
</option><option value = "3">Лягуш
</option>
</datalist> 


</form>
</Layout>
)} 