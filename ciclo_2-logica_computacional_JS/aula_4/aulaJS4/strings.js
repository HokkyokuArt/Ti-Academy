/*var nome="Marcelo";

console.log(nome);
console.log(nome[0]);
*/

/* match()
o metodo match procura uma palavra em uma string.
existem alguns parametros de epsquisa que permite uma maior precisão conforme a
flags g/i/m
*/
var palavras = "Maçã doce";

// console.log(palavras.match(/D/gi));

/*	search()
o metodo search() procura pela ocorrencia e retornando a posição na
cadeia da string, a posição é em relação ao primeiro caractere da ocorrencia
*/

// console.log(palavras.search(/d/gi));


/* replace()
este metodo substitui uma string por outra, simples assim
ele pesquisa a string informada, como no metodo "match" e a
substitui por outra string nas aspas informada como segundo parametro
*/

/*var str= "Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Tempore, ex. Laboriosam magni perferendis optio! Fugiat, quidem nesciunt vel, quis est ducimus unde earum, "+
"id quam iure sit ipsa quibusdam, mollitia."

var mudarStr = str.replace(/mollitia/gi,'Xxxx');

console.log(mudarStr);
*/




/*localeCompare()
o metodo localeCompare compara efetua a comparação entre duas strings
se estas forem iguais o retorno será "0" zero. os valore -1 e 1 podem
ser esperados caso elas não seja iguais.*/

/*var comp1 = "Comparar";
var comp2 = "comparar";

var c1 = comp1.toLowerCase();
var c2 = comp2.toLowerCase();*/

// console.log(`Este é o c1: ${c1}. Este é o c2 ${c2}`);

/*var comparacao = c1.localeCompare(c2);
console.log(comparacao);*/

/* trim()
faz a remoção de espaços antes e depois da string especificada.
*/

var p = '         fpalavra+ ';
var r = p.trim();
console.log(r);
var s = r.replace(/f/gi,'');
console.log(s);
sub_a = s.replace(/a+/gi,'a');

console.log(`Removido: ${sub_a}`);


// toLocaleString
// formatação de moedas

var valor = 1.357 // 1,35;

var formatarMoeda = valor.toLocaleString('pt-BR',{
	style: 'currency',
	currency:'BRL'
})

console.log(formatarMoeda);




















