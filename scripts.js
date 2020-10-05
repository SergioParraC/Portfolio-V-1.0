$(document).ready(function(){
	// Ajustando barra de navegacion
	var long = $("#barra-inicio").width();
	long=long+$("#barra-exp").width();
	long=long+$("#barra-edc").width();
	long=long+$("#barra-habil").width();
	long=long+$("#barra-int").width();
	long=long+$("#barra-proy").width();
	long=(894.06-long)/6/2;
	document.getElementById("barra-inicio").style.paddingLeft=long+"px";
	document.getElementById("barra-inicio").style.paddingRight=long+"px";
	document.getElementById("barra-exp").style.paddingLeft=long+"px";
	document.getElementById("barra-exp").style.paddingRight=long+"px";
	document.getElementById("barra-edc").style.paddingLeft=long+"px";
	document.getElementById("barra-edc").style.paddingRight=long+"px";
	document.getElementById("barra-habil").style.paddingLeft=long+"px";
	document.getElementById("barra-habil").style.paddingRight=long+"px";
	document.getElementById("barra-int").style.paddingLeft=long+"px";
	document.getElementById("barra-int").style.paddingRight=long+"px";
	document.getElementById("barra-proy").style.paddingLeft=long+"px";
	document.getElementById("barra-proy").style.paddingRight=long+"px";
	var anch_v=$("#inicio").width();
	anch_v=(anch_v-901)/2;
	document.getElementById("barra").style.left=anch_v+"px";
	//cambiar imagen al pasar mouse por un parrafo en los intereses
	$("#parrafo1").hover(img1,imgnormal);
	$("#parrafo2").hover(img2,imgnormal);
	$("#parrafo3").hover(img3,imgnormal);
});
function img1(){
	$("#imagen").attr("src","Imagenes/banner.jpg");
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

