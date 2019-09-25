//Metodos de Objetos

//Funcoes podem ser atribuidas a variaveis

//definicao de um objeto com todas as propriedades definidas
var pessoa = {
    nome: 'Thiago', 
    idade: 22, 
    peso: 70, 
    altura: 1.81
   };

//Se houver a necessidade de alterar algum valor de um objeto chamar o objeto e o atributo desejado.

pessoa.nome = "Thiago Aquino"; //Com isso foi definido um novo nome para o objeto pessoa.

//Criando funções em objetos.
pessoa.andar = function(){
    return 'Pessoa andando';
};

//Após criado o método andar, ele vai automaticamente para o objeto pessoa

var pessoa = {
    nome: 'Thiago', 
    idade: 22, 
    peso: 70, 
    altura: 1.81,
    andar: [Function]
   };

//Para chamar a função andar

pessoa.andar();

//Criar um metodo que aumente a idade de uma pessoa quando for fazer aniversário.

pessoa.aniversario = function () {
    pessoa.idade += 1;
}

//Chamando o nome completo de uma pessoa
var pessoa = {
    nome: 'Thiago', 
    sobrenome: 'Aquino',
    idade: 22, 
    peso: 70, 
    altura: 1.81,
    andar: [Function]
   };

//Definição de uma função para chamar o nome completo da pessoa
pessoa.nomeCompleto = function(){
    return pessoa.nome + ' ' + pessoa.sobrenome;
};