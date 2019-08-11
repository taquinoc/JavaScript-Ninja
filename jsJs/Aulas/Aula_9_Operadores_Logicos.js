//Existem operadores lógicos, onde retornam 1 ou 0 ou true or false.
//por exemplo

var x = 3;

var y = 7;

x === 3;
//Retorna true

y === 5
//False

y === '7'
//False

//O operador lógico === compara o valor e o tipo

y == 7
//True

x === 3 && y === 7
//True

x === 2 && y === 7
//False

//Operador lógico OU
//Como testar se um dos valores é verdadeiro?
x === 3 || y === 3
//True

//Operador lógico NOT

!x === 3
//False

x!= '3'

//Agora vamos brincar um pouquinho com operadores lógicos.

//Enchendo uma garrafa de 1 litro.
//A garrafa só pode ficar cheia se tiver 1 litro de água, mais que isso transborda.


var garrafa;
garrafa = 500; //Imagine este valor como sendo ml

if (garrafa == 1000){

    console.log('Enchendo a garrafa');
    garrafa = garrafaCheia;

} else if(garrafa > 1000) {

    console.log('Meu brother, a garrafa tá transbordando!')
    
} else {
    console.log('A garrafa ainda só tem ' +garrafa+ 'ml. Por favor adicione mais água na garrafa.');
}