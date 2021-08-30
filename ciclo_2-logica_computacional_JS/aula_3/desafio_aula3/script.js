window.onload = function(){


    const valor1 = document.querySelector("#v1");
    const valor2 = document.querySelector("#v2");
    const resultado = document.querySelector("#r");
    const btnSomar = document.querySelector("#btnS");
    
    
    
    btnSomar.addEventListener('click',()=>{
            
        var cx1 = valor1.value;
        var cx2 = valor2.value;
        var cx3 = resultado.value;

        if(Number(cx1)+Number(cx2)==Number(cx3)){
            alert("Parabéns!!! A resposta está certa.");
        }else{
            alert("Que pena... A resposta está incorreta.");
        }
         

    });

};//fim
