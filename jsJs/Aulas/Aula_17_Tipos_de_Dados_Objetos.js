/**Em javascript os tipos podem ser definidos em Tipos Primitivos e
 * Tipos de Objetos
 * 
 * Tipos Primitivos são aqueles básicos> number, boolean, string, null e undefined
 * 
 * O restante tudo em javascript é objeto, o javascript trabalha sempre com objetos.
 * Objeto é um conjunto de propriedades.
 * 
 * 
 */

 //Um objeto é definido com Chaves

 { propriedade: 'valor1' }

 var objeto = { propriedade: 'valor', propriedade2: 10, propriedade3: true};

 //Um objeto geralmente pode ser referido a algo real, como por exemplo: Uma pessoa

 var pessoa = {
     nome: 'Thiago', 
     idade: 22, 
     peso: 70, 
     altura: 1.81
    };

var carro = {
    cor: 'Azul',
    motor: '1.6',
    portas: 4
};

//Um objeto também pode receber outro objeto. No caso, as funções. Funções são objetos de primeira classe que pode ser atribuido a um objeto ou variavel

var myvar = function() { //Uma função criada como uma variável.
    return 'variavel myvar';
};

//Utilização de métodos em javascript
var pessoa = {
    nome: 'Thiago', 
    idade: 22, 
    peso: 70, 
    altura: 1.81
   };

