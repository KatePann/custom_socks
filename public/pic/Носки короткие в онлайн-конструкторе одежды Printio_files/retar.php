if (document.createElement) {
	var shopf = "false";try {if(Shopify){shopf = "true";}} catch (e) {if (e instanceof ReferenceError) {}}
	var refer = (window != window.top) ? document.referrer : document.location.href;
	var refer2 = (window != window.top) ? document.location.href : '';
	var re = document.referrer;
	var veoxa_if = document.createElement('script');
	if (veoxa_if) {
		veoxa_if.setAttribute("src", ('https:' == document.location.protocol ? 'https://' : 'http://') + "vu.adschoom.com/trafic/retar_js.php?type=PRODUIT&boutique=printioru&categorie_id=&produit_id={PRODUCT_ID}&data=&transaction_id=0&transaction_amount=0&valid=1&rid_tt=" + '&refer=' + escape(refer) + "&refer2=" + escape(refer2) + "&shopf="+shopf+"&random=" + Math.round(Math.random() * 1000000000));
		veoxa_if.type = 'text/javascript';
		veoxa_if.async = "async";
		veoxa_if.defer = "defer";
		document.getElementsByTagName("head")[0].appendChild(veoxa_if);
	}
}





/*if (document.createElement) {
	var add_fr = document.createElement('iframe');
	if (add_fr) {
		add_fr.setAttribute("src", ('https:' == document.location.protocol ? 'https://' : 'http://') + "am15.net/px.php?rid=43634&d=30&t=html&random=" + Math.round(Math.random() * 1000000000));
		add_fr.setAttribute('id', 'advm');
		add_fr.style.width = 1+'px';
		add_fr.style.height = 1+'px';
		add_fr.setAttribute('frameborder', '0');
		add_fr.setAttribute('vspace', '0');
		add_fr.setAttribute('hspace', '0');
		add_fr.setAttribute('marginwidth', '0');
		add_fr.setAttribute('marginheight', '0');
		add_fr.setAttribute('scrolling', 'no');
		document.getElementsByTagName("body")[0].appendChild(add_fr);
	}
}*/


   
   
    