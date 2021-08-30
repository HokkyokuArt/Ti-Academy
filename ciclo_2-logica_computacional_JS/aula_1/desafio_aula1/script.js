nome = prompt("Por favor, insira seu nome:");
num = parseInt(prompt(nome+", por favor insira um número para comparação:"));
n = 20;

document.write("1. Seja bem vindo(a) "+nome+".<br/>");
document.write("2. Você digitou o número: ("+num+").<br/>");
document.write("3. O retorno da comparação booleana é: ",num!=0,".<br/>");
document.write("4. A soma dos valores é: ",n+num,".<br/>");
document.write("5. A subtração dos valores é: ",n-num,".<br/>");
document.write("6. O resto da divisão é de: ",n%num,".<br/>");
document.write("7. O quadrado do número digitado é: ",num*num,".");