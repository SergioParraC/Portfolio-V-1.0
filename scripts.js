$(document).ready(function(){
	// Ajustando barra de navegacion

	
	var anch_v=$("#inicio").width();
	anch_v=(anch_v-900)/2;
	document.getElementById("barra").style.left=anch_v+"px";
	
	//cambiar imagen al pasar mouse por un parrafo en los intereses
	$("#parrafo1").hover(img1,imgnormal);
	$("#parrafo2").hover(img2,imgnormal);
	$("#parrafo3").hover(img3,imgnormal);
	
	//Scroll suave para ir a los elementos de la pagina
	
	$('a[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top-52,
                    },
                    1000);
				"easeInOutExpo"
                return false;
            }
        }
    });
	//ultima seccion debe ocupar toda la ventana
	
	let altoP = document.documentElement.clientHeight;
	document.getElementById("proyecto-contenido").style.height=altoP -52+"px";
	
	
	

	//Muestra ubicacion actual de la pagina bajo la barra de navegacion
	
	var longLinksSecc = [6];
	longLinksSecc[0]=$("#barra-inicio").width()+38.42*2;
	longLinksSecc[1]=$("#barra-exp").width()+38.42*2;
	longLinksSecc[2]=$("#barra-edc").width()+38.42*2;
	longLinksSecc[3]=$("#barra-habil").width()+38.42*2;
	longLinksSecc[4]=$("#barra-int").width()+38.42*2;
	longLinksSecc[5]=($("#barra-proy").width()+38.42*2);
	
	
	let progresbar = document.querySelector("#progress");
	var secciones = document.querySelectorAll("section");
	var longSecc = [secciones.length]; 
	for (var i=0 ; i<secciones.length; i++){
		longSecc[i]=secciones[i].offsetTop-52; //Altura del elemento con respecto a la parte superior de la pag
	}
	longSecc[6]=longSecc[6]-altoP+52;
	
	//Configuracion inicial para animaciones
	let animado = document.querySelectorAll(".animacion1");
	document.getElementById("barra").classList.add("animacion2");

	//funciones que realiza al detecta el scroll
	function ScrollProgresBar() {

		let scrollTop = document.documentElement.scrollTop; //Valor del scroll
		let scrollHeight = document.documentElement.scrollHeight; //Alto total
		let clientHeight = document.documentElement.clientHeight; //lo que ve el usuario
		
		let windowsHeight = scrollHeight - clientHeight;
		let porcentaje= scrollTop/windowsHeight*100;
		var porcentaje1=0, secc=0;
		for (var i=0 ; i<secciones.length; i++){
			
			if (scrollTop>longSecc[i]){
				secc=i;
			}
		}
		porcentaje1=(scrollTop-longSecc[secc])/(longSecc[secc+1]-longSecc[secc])*100;
		var porcentaje2=0;
		for (var i=0 ; i<secc; i++){
			
			porcentaje2=porcentaje2+longLinksSecc[i]/900*100;
			
		}
		
		porcentaje2=porcentaje2+longLinksSecc[i]*porcentaje1/900;
		

		progresbar.style.width = porcentaje2 + "%";
		
		//Animaciones para elmentos de la pagina
		for (var i=0;i<animado.length; i++){
			let alturaAnimado=animado[i].offsetTop;
			if (alturaAnimado -500< scrollTop){
				animado[i].style.opacity = 1;
				animado[i].classList.add("mostrarArriba");
			}
			
		}
	}
	window.addEventListener("scroll", ScrollProgresBar)

});
//Funciones para cambiar las imagenes al pasar mouse por un parrafo en los intereses
var foto_1 = new Image();
foto_1.src="Imagenes/banner.jpg";
function img1(){
	$("#imagen").attr("src",foto_1.src);
}
function img2(){
	$("#imagen").attr("src","Imagenes/IMG_20171231_083651171_1.jpg");
}
function img3(){
	$("#imagen").attr("src","Imagenes/IMG_20190724_084628249_1.jpg");
}
function imgnormal(){
	$("#imagen").attr("src","Imagenes/IMG-20191128-WA0004.jpg");
}

