//EJERCICIO HECHO CON LOS TRES CICLOS, PARA PROBAR CADA UNO COMENTAR LOS OTROS DOS
var Nalumnos=prompt("¿Cuántos alumnos son?")
var TE=0
var i=1



//-------------------------------------WHILE---------------
while(i<=Nalumnos){
	E=prompt("Ingresa la Edad del alumno")
	TE+=parseInt(E)
	i++
}
alert("El promedio de edad es" + TE/Nalumnos)

//------------------------------------DO_WHILE---------------
// do{
// 	E=prompt("Ingresa la Edad del alumno")
// 	TE+=parseInt(E)
// 	i++
// }while(i<=Nalumnos)
// alert("El promedio de edad es" + TE/Nalumnos)

//--------------------------------------FOR------------------
// for(var i=1 ; i<=Nalumnos ; i++){
// 	E=prompt("Ingresa la Edad del alumno")
// 	TE+=parseInt(E)
// }
// alert(TE/Nalumnos)