const msgLog = function(msg=''){


	try{

		if(msg.length <=6){
			throw "Digite uma mensagem válida!"
		};
		alert(msg)

		}catch(err){
			alert(`Erro: ${err}`);
		}

}//fim function

const Produtos = [{
	codigoProduto: 1,
	descProduto: "mesa",
	precoProduto: 890.00
}]

export {msgLog, Produtos}
