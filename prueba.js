/* const persona = {
nombre : 'martin',
apellido: 'ruiz',
edad : 30

}

persona.calle = 'siempre viva'
console.log(persona.calle)



const peso = [789,323,3423,'mirwerw']

console.log(peso.length)
peso.push(145,'rojo')

console.log(peso[4])
console.log(persona.length)
*/
/*
let nombre = 'martin';
let apellido = 'ruiz';
let edad = 30;
let saludo;

saludo = `buenos dias ${nombre} ${apellido} su edad es: ${edad}`

console.log(
 saludo,
 nombre.length,
 apellido.length,
 saludo.length,

)*/
/*
let num1 = 4.234;
let num2='8.9';

console.log(num1.toFixed(1))

console.log(num1+ parseInt(num2));
*/

/*function hola(x,u){
   let resultado = x * u;
   return resultado;
}

let auto = 34;
let chuchu= 7;


 
let tutu = hola(auto,chuchu);

*/
/*let funcionbc = function(x,y){
let resultado = x * y 
return resultado
}

console.log(funcionbc(4,8))
*/
/*
let noer = [1232,2312,423,3231,'hola','peporrtef'];

console.log(noer[3]);

const obj = {
nombre : 'perez',
apellido : 'ruiz',
cdpersona : {
   cpelo: 'negro',
   altura:1.78,
   peso:' 80 kg',
   test:'blanca',
}

}

alert(obj.cdpersona.altura);
*/
/*
let pero = [1231,'a','e','ty',['oa','La opcion ingresada es incorrecta',[78,'opp']]];

console.log(pero[4][2][1]);
alert(pero[4][1]);

const hola = Array.of('jok',true,78);
console.log(hola[0])
*/
/*
function saludo (){
console.log('hola mi nombre es martin');
console.log('mi apillido es ruiz');
console.log('mi esdad es 38');
console.log('mi perra se llama disy');

}

saludo();

let sumar = function (x,y){
 sumar= x + y ;
 return sumar;

}

console.log(sumar(4,2));


function multiplicar(t,i){
let multiplicarr = t * i ;
return multiplicarr;

}

console.log(multiplicar(5,2));

*/
/*
let edad = prompt('ingrese su edad para saber si usted puede entrar al bar o no ')



if (edad >= 18) {
   console.log('usted puede entrar al bar')
} else {
   console.log('usted no puede entrar al bar')
}
*/
/*
let edaddd = 17;
console.log('operador ternario');
let compara = (edaddd >= 18)
? 'sos mayor de edad'
: 'eres menor de edad'
console.log(compara)
*/
 /* switch - case*/
/*
dia = 2;



switch (dia) {
   case 0 :
      console.log('lunes');
      break;
   case 1:
      console.log('martes');
      break;
   case 2:
      console.log('miercoles');
      break;
   case 3:
      console.log('jueves');
      break;
   case 4:
      console.log('viernes');
      break;    
   case 5:
      console.log('sabado');
      break; 
   case 6:
      console.log('domingo');
      break;            
   default:
      console.log('el valor ingresado es incorrecto')
      break;
 }
 */
/*
let contador = 0 ;


while (contador <= 100) {
  if (contador % 2 === 0){
   console.log(contador);
  }
 contador += 1;
   
}
*/
/*
for(i=0;i<10;i+=1){
 alert('hola');
 
}
*/
/*
for (i=0;i<=100;i+=1){
   if(i % 2 === 0 ){
    console.log(i);

   }


}
*/
/*los valores ingresados por el usuario entran como string por eso no funciona la opcion case.
por eso las opciones case tien que pasarce a string o convertir el valor. parseInt() convierte de string a numero real.*/
/*
let saludar = prompt('ingrese la opcion deceada para saludarlo');

 
switch (saludar) {
   case '1':
      console.log('hola buen hombre');
      break;
   case '2':
      console.log("chau buen hombre");
      break;
   case '3':
      console.log('hombre no sea tan pelotudo');
      break;

   default:
      console.log('la opcion ingresada es incorrecta');
      break;
}
*/
/*
let numeros = [10,20,30,40,50,60,70,80,90];


for (i=0;i< numeros.length;i+=1){

   alert(numeros[i])
}
*/

/* for in solo recorre propiedadaes de un objeto
const persona ={
  nombre:'martin',
  apellido:'ruiz',
  edad:'31',
  perro:'dissy',
  hija:'martina',
  mujer:'carina',
}

for (const propiedad in persona) {
   console.log(`key ${propiedad} , value:${persona[propiedad]}`)
}
*/

/*for of permite recorrer cualquier objeto que sea iterable en java scrip.  
*/
/*
const numeross = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70]


for (const itiniciador of numeross) {
   console.log(itiniciador)
   
}
*/
/*
let sal = 'hola mi nombre es martin'

for (const inicia of sal) {
   alert(inicia);
   
}
*/
/*
try {
   'aca va el fragmento de codigo a evaluar '
   
} catch (error) {
   'captura el error detectado en el try '
}finally{
 'se ejecuca siempre despues de un bloque try catch haya o no errror'

}
*/

/*
try {
   let numero='hola';

   if (isNaN(numero)){
      throw new Error('el valor ingresado no es un numero');
   }

 console.log(numero*numero);
   
} catch (error) {
   alert(`se produjo el siguiente ${error}`)
   
}
*/