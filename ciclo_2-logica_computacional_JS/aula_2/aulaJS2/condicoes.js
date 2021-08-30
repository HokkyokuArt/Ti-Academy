/*

estrutura de condiçoes e operadores

logicos
==
===
!=
!==
<
>
<=
>=
*/

//(==) igualdade
/*var v1 = 1;
var v2 = 1;
if(v1==v2){
	console.log("Sim é verdade");
}
else{
	console.log("Isto é falso")
}*/


//(===) identico
/*var v3 = 1;
var v4;
if(v3===v4){
	console.log("V3 é exatamente igual a V4");
}
else{
	console.log("V3 não igual a V4");
	console.log(v4);
}*/

/*var v3 = 1;
var v4 = 1;
if(v3===v4){
	console.log("V3 é exatamente igual a V4");
	console.log(typeof (v4));
}
else{	
	console.log("V3 não igual a V4");
	console.log(typeof (v3));
}*/


//(!=) diferente
/*var v5 = 1;
var v6 = 0;

if(v5!=v6){
	console.log("V5 é diferente de V6");
}
else{
	console.log("São iguais");
}*/



//(!==) estritatmente diferente
/*var v7 = 1;
var v8 = '1';
if(v7!==v8){
	console.log("Exatamente diferentes");
}
else{
	console.log("Iguais")
}*/



/*//(<) menor que
var va = 200;
var vb = 400;
if(va<vb){
	console.log("Sim va é menor que vb");
}*/



//(>) maior que
/*var va = 1;
var vb = 1;
if(va>vb){
	console.log("Sim va é maior que vb");
}*/


//(<=) menor ou igual
/*var vc = 400;
var vd = 399;
if(vc<=vd){
	console.log("Vc="+vc+ "é menor ou igual a Vd="+vd);
}*/


//(>=) maior ou igual
/*var ve = 400;
var vf = 444;
if(ve>=vf){
	console.log("ve="+ve+" é maior ou igual a vf="+vf);
}*/




/*if / else e operadores logicos

AND 'E'			logico (&&) e comercial
OR	'OU'		logico (||) pipe/pipe
NOT 'NEGAÇÃO'	logico (!) exclamação*/

//&& Todas as condições precisam ser atendidas

/*var a = 0;
var b = 1;
if(a==0 && b==0){
	console.log("Verdadeiro");
}
else{
	console.log("Falso");
}*/


//|| Alguma das condições precisa ser atendida
/*var c = 0;
var d = 0;
if(c==1 || d==1){
	console.log("Ok");
}
else{
	console.log("!Ok");
}*/


/*var s = 1;

if(!typeof(s)){
	console.log("Não é uma string")
}
else{
	console.log("É uma esting");
	console.log(typeof(s));
}
*/



//switch

/*var op = 10;

switch(op){

	case 1:
	alert("Estou sendo enviado pelo case 1");
	break

	case 2:
	alert("Cai dentro do case 2");
	break

	case 3:
	alert("Cai dentro do case 3");
	break

	default:
	alert("Nehuma das opções");
	break
}*/