/* click - Ao clicar em algum elemento HTML
mousemov - Ao mover o cursor do mouse entra num elemento
mouseover - Ao mover o cursos do mouse sobre um elemento
mouseout - Ao mover o cursor do mouse para fora do elemento
dblclick - Ao efetuar duplo click (rápido) no elemento
blur - Ao perder o foco do elemento, geralmente associado ao elemento HTML Text
*/

window.onload = function(){


//alert("alerta");
const btn1 = document.querySelector(".btn-click");
const legP = document.querySelector(".legenda");
const cxTexto = document.querySelector("#texto");

// click - Ao clicar em algum elemento HTML

btn1.addEventListener('click', ()=>{
    // escrever no elemento
    legP.innerHTML += cxTexto.value;
});

legP.addEventListener('click',()=>{

    legP.innerHTML='';

});


// mousemov - Ao mover o cursor do mouse entra num elemento

/* legP.addEventListener('mouseout',()=>{

    alert("Teste");

}); */

/* TROCAR TIPO DO ELEMENTO */

    const trocaSenha = document.querySelector("#verSenha");
    const cxSenha = document.querySelector("#senha");
    trocaSenha.addEventListener('click',()=>{
        // getAttribute()
        // setAttribute()
        if(cxSenha.getAttribute('type') == 'password'){
            cxSenha.setAttribute('type', 'text');

        }else {
            cxSenha.setAttribute('type', 'password');
        }
    })

// ALTERAR BACKGROUND

    const cxTrocaBg = document.querySelector("#cxTbg");

    cxTrocaBg.addEventListener('blur',()=>{
        cxTrocaBg.setAttribute('class','corBg');

    });

// SOMAR VALORES CX INPUT TEXT

    const valor1 = document.querySelector("#v1");
    const valor2 = document.querySelector("#v2");
    const btnSomar = document.querySelector("#soma");
    const spResultado = document.querySelector("#resultado");

        btnSomar.addEventListener('click',()=>{
            
            var cx1 = valor1.value;
            var cx2 = valor2.value;
            var r = Number(cx1)+Number(cx2);

            spResultado.innerHTML = r; 

        });

        // evento modal
        const btnModal = document.querySelector("#chamarModal");
        const janelaM = document.querySelector("#janModal");
        const closeMod = document.querySelector("#fechaModal");

        btnModal.addEventListener('click',()=>{

            janelaM.setAttribute('class','modal');


        });


        janelaM.addEventListener('click', ()=>{
            janelaM.classList.remove('modal');



        });


































































};//fim onload