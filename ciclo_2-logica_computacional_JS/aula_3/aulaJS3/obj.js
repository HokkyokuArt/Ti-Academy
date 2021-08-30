function Pessoa(nome,sobrenome, idade){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
}

var ps1 = new Pessoa("Raphael","Da Silva", 7);
console.log("Pessoa 1 - Nome "+ps1.nome+" "+ps1.sobrenome," idade",ps1.idade);

var ps2 = new Pessoa("Maria");

console.log("Pessoa 2 - Nome "+ps2.nome+" "+ps2.sobrenome);

var objPessoa = { rg:'7767', cpf:'8989'}

// console.log(typeof(objPessoa));

console.log("RG", objPessoa.rg);



function Pessoa2(nome,sobrenome, idade){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
	this.doc = {
		rg:'777', cpf:'8989'
	}
}

var pessoa2 = new Pessoa2("Raphael");
// console.log("Nome "+pessoa2.nome+" "+pessoa2.doc.rg);
console.log(`Nome ${pessoa2.nome} - Rg: ${pessoa2.doc.rg}`);
