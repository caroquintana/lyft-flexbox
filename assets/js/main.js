//traer los dos nav, el visible y el oculto//
var primernav= document.getElementById('menuprincipal');
var segundonav = document.getElementById('menuprincipalg');

var limite = 0;


function scrollFunction() {
    var posicioninicial = document.documentElement.scrollTop || document.body.scrollTop;
	var posicionfinal = document.documentElement.scrollTop = document.body.scrollTop = 1000;
    if (posicionfinal > posicioninicial) {
    	alert("Me desplazo");
    }
    
}

window.onscroll = scrollFunction;