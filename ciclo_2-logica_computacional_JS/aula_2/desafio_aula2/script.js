var nome = prompt("Por favor, insira seu nome:");
var num = (prompt(nome+", por favor insira um número para comparação:"));
n = 20;

console.log(typeof(num));
alert("Você inseriu uma string.");
alert("A string será convertida para número.");
num = parseInt(num);
console.log(typeof(num));

//eu nao tinha entendido a proposta kkkk mas vou deixar como eu havia feito ai comentado
/*
while(Number.isInteger(num)==false){
    alert("Você inseriu uma palavra.");
    num = parseInt(prompt(nome+", por favor insira um número para comparação:"));
}
*/


document.write("1. Seja bem vindo(a) "+nome+".<br/>");
document.write("2. Você digitou o número: ("+num+").<br/>");
document.write("3. O retorno da comparação booleana é: ",num!=0,".<br/>");
document.write("4. A soma dos valores é: ",n+num,".<br/>");
document.write("5. A subtração dos valores é: ",n-num,".<br/>");
document.write("6. O resto da divisão é de: ",n%num,".<br/>");
document.write("7. O quadrado do número digitado é: ",num*num,".");





