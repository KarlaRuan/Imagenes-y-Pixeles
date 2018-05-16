const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");

let image=new Image();

image.src="./imagen.jpg";

image.onload=function(){
	console.log("La imagen fue cargada");
	//ctx.draeImage(this o imagen, coordX para dibujar, coordY para dibujar, Tamaño de ancho, tamaño de largo)
	ctx.drawImage(this,10,10,400,500);
}