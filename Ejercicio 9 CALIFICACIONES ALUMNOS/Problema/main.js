//Escribe aquí tú código
var num_alumnos=prompt("Cuantos alumnos son?")
calificaciones= new Array (num_alumnos)
var suma=0
var promedio=0

for(var i=1; i<=num_alumnos; i++){
	calificaciones[i]=parseInt(prompt("Ingresa calificacion"))
	suma=suma +(calificaciones[i])
	promedio=suma/num_alumnos
}

alert("La suma de calificaciones es de: " + suma)
alert("La media es de: " + promedio)

calificaciones.sort(function (a,b){return a-b})
alert ("La calificacion mas baja es:" + calificaciones[0])


//--------1er intento, guarda valores en array
// var num_alumnos=prompt("Cuantos alumnos son?")
// var calificaciones=[]

// for(var i=1; i<=num_alumnos; i++){
// 	calificaciones[i]=prompt("Ingresa calificacion")
// }

// alert(calificaciones)