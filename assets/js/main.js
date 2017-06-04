/*
*/

var start = 0;


window.addEventListener("scroll", eventoScroll, false);


function eventoScroll() {
	var scroll = window.pageYOffset || document.body.scrollTop;
	if (scroll > start) {
		document.getElementById("menuprincipalg").classList.add("sinbg");
		document.getElementById("logo").src = "../lyft-flexbox/assets/images/logo-pink.png";
	}else{
		document.getElementById("menuprincipalg").classList.remove("sinbg");
		document.getElementById("logo").src = "../lyft-flexbox/assets/images/logo-white.png";
	} 
	start = scroll;
}






