var start = 0; //se inicializa en 0 porque la etiqueta html parte desde el 0
window.addEventListener("scroll", eventoScroll); //escuchador del movimiento scroll en la ventana y que ejecuta la funcion eventoScroll al sentir movimiento vertical

function eventoScroll() {
	var scroll = window.scrollY || window.pageYOffset || document.body.scrollTop //posición de desplazamiento vertical del documento en el navegador
	if (scroll > start) {
		document.getElementById("menuprincipalg").classList.add("sinbg"); //al bajar, agregar fondo blanco
		document.getElementById("logo").src = "../lyft-flexbox/assets/images/logo-pink.png"; //al bajar, cambiar a logo pink
		document.getElementById("signin").classList.remove("botonoculto"); //al bajar, mostrar boton oculto
		document.getElementById("menu1").classList.add("menugris"); //al bajar, cambiar color botones menú a gris
		document.getElementById("menu2").classList.add("menugris");
		document.getElementById("menu3").classList.add("menugris");
		document.getElementById("menu4").classList.add("menugris");
	}else{
		document.getElementById("menuprincipalg").classList.remove("sinbg"); //al subir, quitar fondo blanco
		document.getElementById("logo").src = "../lyft-flexbox/assets/images/logo-white.png"; //al subir, cambiar a logo blanco
		document.getElementById("signin").classList.add("botonoculto"); //al subir, ocultar boton
		document.getElementById("menu1").classList.remove("menugris"); //al subir, cambiar color botones menú a blanco
		document.getElementById("menu2").classList.remove("menugris");
		document.getElementById("menu3").classList.remove("menugris");
		document.getElementById("menu4").classList.remove("menugris");
	} 
};






