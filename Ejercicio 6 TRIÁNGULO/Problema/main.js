for(c=1; c<=500; c++){
	var hipotenusa=c*c
	for(a=1; a<=500; a++){
		var opuesto=a*a
		for(b=1; b<=500; b++){
			var adyacente=b*b
			var suma=opuesto+adyacente
			if(suma==hipotenusa){
				alert(hipotenusa + "= " + opuesto + adyacente)
			}
		}
	}
}



// //Escribe aquí tú código
// var catetoA=prompt("Medida del cateto adyacente:")
// var catetoB=prompt("Medida del cateto opuesto: ")


// while ((parseInt(catetoA)<=500) && (parseInt(catetoB)<=500)){
// 	var a=parseInt(catetoA)*parseInt(catetoA)
// 	var b=parseInt(catetoB)*parseInt(catetoB)
// 	var h=Math.sqrt(a+b)
// }
// alert(h)


// // var a2=Math.pow(catetoA, 2)
// // var o2=Math.pow(catetoO, 2)
// // var hipotenusa2=(a2+o2)