// Ajustando barra de navegacion
$(document).ready(function(){
	var opciones=document.querySelectorAll("#barra-item");
	var long=0;
	alert(opciones.length);
	for (var i=0; opciones.length; i++){
		long=long+opciones[i].width();	
	}	
});

