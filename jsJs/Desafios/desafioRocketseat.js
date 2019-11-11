var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

/**Criar uma função que retorne 
 * O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
nº 1293. */

function nome (){

    return 'O usuário mora em '+ this.endereco.cidade + '/' + this.endereco.uf + ', no Bairro '+this.endereco.bairro+', na rua '+this.endereco.rua+' com n° '+this.endereco.numero;

};

//Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

function pares (x, y) {
    for (let i = x; i <= y ; i++) {
        if(i % 2 === 0){
            console.log("O número "+i+" é par")
        };
    };
};


/**Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não. */

var skills = ["Javascript", "ReactJS", "React Native"];

function temHabilidade(skills) {

    if(skills.indexOf("Javascript") !== -1){
        return true;
    } else{
        return false;
    }
};

temHabilidade(skills)


var verba = ["tem verba", "não tem verba"]

function temVerba (verba){
    if(verba.indexOf("tem verba") !== -1){
        return 'vamo viajar carai, ta demorando a verba';
    } else{
        return 'poxa vei cade a verba';
    }
}

temVerba(verba)


//Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:



function experiencia(anos) {
    
    if(anos <= 1){
        return "Iniciante"
    };
    if(anos <= 3 && anos >= 1){
        return "Intermediario"
    };
    if(anos <= 6 && anos >= 3){
        return "Avançado";
    }
    if(anos > 7){
        return "Jedi Master";
    }

};
    experiencia();
    // De 0-1 ano: Iniciante
    // De 1-3 anos: Intermediário
    // De 3-6 anos: Avançado
    // De 7 acima: Jedi Master