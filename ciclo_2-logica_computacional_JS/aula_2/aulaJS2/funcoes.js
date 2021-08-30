
function soma(){
	var x = 1;
	var y = 2;
	console.log(x+2);
}

// soma();

function somaPar(x, y){
	var r = x+y;
	console.log(r);
}

function mult(n,o){
	var resultado = (n * o); //vars locais
	console.log(resultado);
}

function pot(n,o){
	var resultado = Math.pow(n,o);//potencia
	console.log(resultado);
}

mult(3,4);
pot(7,2);

// somaPar(4, 9);

/*(function respostaF(){
	var nome="Marcelo";
	alert(nome);
	return nome;
})();*/



/*//funçao anonima
var f = function(){
	alert("Funcao sem nome");
}
*/
 // f();
// var d = respostaF()


//arrow function
/*var ar = ()=>{
	alert("ArFunc");
}
//ar();
*/

/*(()=>{
	alert("ArFunc");
})();*/