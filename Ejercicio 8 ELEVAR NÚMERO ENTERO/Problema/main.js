//Escribe aquí tú código
var numero=prompt("Ingresar numero")
var potencia=prompt("Ingresar potencia")
var i=1
var total=1

while(i<=potencia){
	total*=numero
	i++
}
alert(numero + " elevado a la " + potencia + " potencia es igual a: " + total)