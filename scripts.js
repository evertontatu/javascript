//funcoes - funcao é um objeto
var criarPessoa = function (nome, idade){
  return {
    nome: nome,
    idade: idade
  };
};

//console.log(criarPessoa("Maria", 30));
//console.log(criarPessoa("Pedro", 27));

//chamar funcao e elementos
var produto = {nome: 'Sapato', preco:150};

var criarProduto = function(nome, preco){
    return{
        nome: nome,
        preco: preco
    };
};

console.log(criarProduto("Mac", "9"));

var formulaImpostoA = function(preco){return preco*0.1};

var calcularPreco = function (produto, formulaImposto){
  return produto.preco + formulaImposto(produto.preco);
}
console.log(calcularPreco(produto, formulaImpostoA));

// retornar uma funcao
var helloWorld = function () {
  return function (){
    return "Retornando uma função";
  };
};

//console.log(helloWorld);
//console.log(helloWorld());
//console.log(helloWorld()());

//referenciar o this, pessoa.getIdade => this.idade - this valor para qual se refere a uma propriedade do elemento, ou filho de elemento pai ou parte do elemento,
var getIdade = function (extra){
  return this.idade + extra;
};

var pessoa = {
  nome: "João",
  idade: 20,
  getIdade: getIdade
};

//console.log(getIdade()); //undefined
//console.log(pessoa.getIdade()); //20
//console.log(getIdade.call(pessoa)); //20

//passando parametro nas chamadas
//console.log(pessoa.getIdade(2)); //passando o 2 como paramentro do extra, somando em getIdade
//console.log(pessoa.getIdade(2));
//console.log(getIdade.call(pessoa, 2));
//console.log(getIdade.apply(pessoa, [2]));

//funcoes construtora e fábrica
var Cliente = function (nome, idade){
  this.nome = nome;
  this.idade = idade;
}

//importante operador new exige que seja feito a notacao this
//console.log(new Cliente("Pedro", 20));

var pedro = {};
Cliente.call(pedro, "Bia", 24);
//console.log(pedro);

//fábrica
var criarCliente = function (nome, idade){
  return{
    nome:nome,
    idade:idade
  };
}

//console.log(criarCliente("Maria", 22));

//CLOSURES
var helloWorld = function (){
  var message = "Hello World!";
  return function (){
    return message;
  };
};

//para retorna o valor da funcao dentro de outra funcao é necessário evocar duas vezes a funcao, representado pelo duplo ()
//console.log (helloWorld()());


//ARRAY -
//na verdade no JS nao e um array, somente um elemento especial
var carros=["Ka","Corsa","Palio"];
//console.log(carros);

//forEach pecorre o array
carros.forEach(function (carro){
  //console.log(carro);
});

//FILTER - filtrar o array com elemento desejado, no caso bandas, estilo, Trash Metal
var bandas = [];
bandas[0] = {estilo:"Trash Metal", nome:"Metallica"};
bandas[1] = {estilo:"Grunge", nome:"Nirvana"};
bandas[2] = {estilo:"Punk", nome:"Ramones"};
bandas[3] = {estilo:"Punk", nome:"Peny Wise"};
bandas[4] = {estilo:"Trash Metal", nome:"Pantera"};
bandas[5] = {estilo:"Metal", nome:"Killswitch Engage"};

//filter para retornar os valores
var bandasMetal = bandas.filter(function (bandas){
  return bandas.estilo === "Trash Metal";
});

//console.log(bandasMetal);
