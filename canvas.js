const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");

let image=new Image();

image.src="./imagen.jpg";

image.onload=function(){
	console.log("La imagen fue cargada");
	//ctx.drawImagen(imagen,coordX,coordY)
	//ctx.drawImage(imagen, coordX para dibujar, coordY para dibujar, ancho, alto)
	//ctx.drawImagen(image,imageX,imageY,imagenAncho,imagenAlto,coordX,coordY,ancho,alto)
	//ctx.drawImage(this,10,10,400,500);
	ctx.drawImage(this,560,20,150,220,20,20,200,300);
}