window.onload=function(){
	

	const pai = document.querySelectorAll("#pai");

	pai.forEach((pegarFilhas)=>{

		pegarFilhas.addEventListener('click', (filha)=>{

			alert(filha.target.textContent);

		});

	});

	// removeChild

	const btn = document.querySelector("#btn");
	const outroPai = document.querySelector("#outroPai")
	var i=0;
	

	btn.addEventListener("click",()=>{

		let lista = ['Banana','Uva','pera','manga'];

		li = document.createElement("li");

		outroPai.appendChild(li).textContent =lista[i];
		li.setAttribute("class","itemL");
		i++;
	})

	const paiDaLista = document.querySelectorAll("#outroPai");
 	
 	paiDaLista = document.querySelectorAll("#outroPai");

 		listaDeFilhas.addEventListener('click',(filhas)=>{

 			alert(filhas.target.textContent);

 		})
 }


























