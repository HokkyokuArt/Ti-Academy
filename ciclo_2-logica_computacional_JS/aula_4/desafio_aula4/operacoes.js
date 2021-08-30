window.onload=function(){

    //produtos
	(()=>{
    let mostrarProdutosCliente = document.querySelector("#content-produtos > ul#produtos");

    for(let idx in produtos){
        mostrarProdutosCliente.innerHTML += `<li class="itemProduto" data-preco=${produtos[idx].prodPreco}>${produtos[idx].prodDesc}`        
    }
   })(produtos) 


///compra
const itemProduto= document.querySelectorAll("#produtos > li.itemProduto");

const cestaDocliente =document.querySelector("ul#cestaDoCliente");

const mostraTotalCompra = document.querySelector("#mostraTotalCompra");

const armazenaItem=[];

var totalPedido =0;

itemProduto.forEach((item)=>{
    item.addEventListener("click",()=>{

        li = document.createElement("li");
        li.setAttribute("data-preco", item.dataset.preco);
        
        if(armazenaItem.indexOf(item.textContent) == -1){
            
            armazenaItem.push(item.textContent);
            
            cestaDoCliente.appendChild(li).textContent = item.textContent = item.textContent;

            totalPedido += Number(item.dataset.preco);

            mostraTotalCompra.value = totalPedido.toLocaleString("pt-BR",
            {style:"currency", currency: "BRL"})

        }else{
            alert(`Este item ${item.textContent} já está na sua cesta!`);
        }


    });

});

 const cesta = document.querySelectorAll("#cestaDoCliente");
    cesta.forEach((item) => {
        item.addEventListener('click', (rmItem) => {
            var rmIdx = armazenaItem.indexOf(rmItem.target.textContent);
            if (rmIdx > -1) {
                totalPedido -= Number(rmItem.target.dataset.preco);
                cestaDocliente.removeChild(cestaDoCliente.childNodes[rmIdx]);
                armazenaItem.splice(rmIdx, 1);
                mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            }
        });
    });


}// fim