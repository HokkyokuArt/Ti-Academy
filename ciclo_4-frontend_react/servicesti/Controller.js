const express = require('express');
const cors = require('cors');
const models = require('./models');

const app = express();
app.use(cors());
app.use(express.json());

let cliente = models.Cliente;
let servico = models.Servico;
let pedido = models.Pedido;


app.get('/', function (req, res) {
    res.send('Olá Mundo!');
});

//criar novo cliente
app.post('/clientes', async (req, res) => {
    await aguardar(1000);

    function aguardar(ms){
        return new Promise((resolve)=>{
            setTimeout(resolve, ms);
        });
    }
    await cliente.create(
        req.body
    ).then(() => {
        return res.json({
            type: "success",
            message: "Cliente criado com sucesso."
        });
    }).catch((erro) => {
        return res.status(400).json({
            type: "error",
            message: "Erro na criação de cliente."
        });
    });
    
});

//adicionar um novo serviço
app.post('/servicos', async (req, res) => {
    await aguardar(1000);

    function aguardar(ms){
        return new Promise((resolve)=>{
            setTimeout(resolve, ms);
        });
    }

    await servico.create(
        req.body
    ).then(() => {
        return res.json({
            type: "success",
            message: "Serviço criado com sucesso."
        });
    }).catch((erro) => {
        return res.status(400).json({
            type: "error",
            message: "Erro na criação de serviço."
        });
    });
});

//adicionar um novo pedido
app.post('/pedidos', async (req, res) => {
    await aguardar(1000);

    function aguardar(ms){
        return new Promise((resolve)=>{
            setTimeout(resolve, ms);
        });
    }

    await pedido.create(
        req.body
    ).then(() => {
        return res.json({
            type: "success",
            message: "Pedido criado com sucesso."
        });
    }).catch((erro) => {
        return res.status(400).json({
            type: "error",
            message: "Erro na criação de serviço."
        });
    });
});

//mostrar todos os serviços
app.get('/listaservicos', async (req, res) => {
    await servico.findAll({
        order: [['id', 'ASC']]
    }).then(function (servicos) {
        res.json({ servicos })
    });

});

//numero de serviços cadastrados
app.get('/ofertas', async (req, res) => {
    await servico.count('id')
        .then(function (servicos) {
            res.json(servicos);
        });

});

//procurar um serviço pelo id
app.get('/servico/:id', async (req, res) => {
    servico.findByPk(req.params.id)
        .then(servico => {
            return res.json({
                error: false,
                servico
            });
        }).catch(function (erro) {
            return res.status(400).json({
                error: true,
                messagem: "Serviço não está cadastrado!"
            });
        });

});

app.get('/cliente/:id', async (req, res) => {
   cliente.findByPk(req.params.id)
        .then(cliente => {
            return res.json({
                error: false,
                cliente
            });
        }).catch(function (erro) {
            return res.status(400).json({
                error: true,
                messagem: "Cliente não está cadastrado!"
            });
        });

});

app.get('/pedido/:id', async (req, res) => {
    pedido.findByPk(req.params.id)
         .then(pedido => {
             return res.json({
                 error: false,
                 pedido
             });
         }).catch(function (erro) {
             return res.status(400).json({
                 error: true,
                 messagem: "Pedido não está cadastrado!"
             });
         });
 
 });

// get = importar da base de da dados / linha de aplicação
// post = inserção via formulário
//put = 

//1 visualize todos os clientes
app.get('/listaclientes', async (req, res) => {
    await cliente.findAll({
        order: [['nome', 'ASC']]
    }).then(function (clientes) {
        res.json({ clientes })
    });

});

//2 visualize os clientes em ordem de antiguidade
app.get('/ordenarclientes', async (req, res) => {
    await cliente.findAll({
        order: [['id', 'DESC']]
    }).then(function (clientes) {
        res.json({ clientes })
    });

});

//3 visualize todos os pedidos
app.get('/listapedidos', async (req, res) => {
    await pedido.findAll({
        order: [['id', 'ASC']]
    }).then(function (pedidos) {
        res.json({ pedidos })
    });

});

//4 visualize o pedido por ordem a partir do maior valor
app.get('/maiorvalor', async (req, res) => {
    await pedido.findAll({
        order: [['valor', 'DESC']]
    }).then(function (pedidos) {
        res.json({ pedidos })
    });

});

//5 informe quantos clientes estão na nossa base de dados
app.get('/qtdclientes', async (req, res) => {
    await cliente.count('id')
        .then(function (clientes) {
            res.json(clientes);
        });

});

//6 informe a quantidade de pedidos solicitados
app.get('/qtdpedidos', async (req, res) => {
    await pedido.count('id')
        .then(function (pedidos) {
            res.json(pedidos);
        });

});

//atualizar serviço pelo modo get
//ver "/editarservico"
/* app.get('/atualizaservico', async (req, res) => {
    await servico.findByPk(2) // comando para buscar a informaçao no servidor
        .then(servico => {
            servico.nome = 'HTML/CSS/JS';
            servico.descricao = 'Páginas estáticas e dinâmicas estilizadas';
            servico.save(); // comando que salva as atualizaçoes no servidor
            return res.json({ servico });

        });
});
 */


// put  editar
// IMPORTANTE: editar um serviço por vez pq se não, não vai atualizar no servidor

//editar um serviço pelo id
app.put('/editarservico', (req, res) => {  //nao é async pq precisa passar pela requisição
    servico.update(req.body, {
        where: { id: req.body.id }
    }).then(function () {
        return res.json({
            error: false,
            message: "Serviço foi alterado com sucesso."
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Erro na alteração do serviço."
        });
    });
});


//mostrar todos os pedidos de um cliente
app.get('/servicospedidos', async (req, res) => {
    await servico.findByPk(2, {
        include: [{ all: true }]
    }).then(servico => {
        return res.json({ servico });
    });

});

//editar um pedido pelo id
app.put('/editarpedido', (req, res) => {
    pedido.update(req.body, {
        where: { id: req.body.id}
    }).then(function () {
        return res.json({
            error: false,
            message: "Pedido foi alterado com sucesso."
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Não foi possível modificar o pedido."
        });
    });
});



// 1 faça busca por serviços de cliente passando o id do cliente
//   no corpo da requisição
app.get('/listaservicocliente/:id', async (req, res) => {

    await pedido.findAll({ where: { ClienteId: [req.params.id] } })
        .then(function (pedidos) {
            res.json(pedidos)
        });
    console.log(pedidos, valor, ClienteId)
});


/* app.get('/clienteservico', (req,res)=>{  //nao é async pq precisa passar pela requisição
    pedido.findOne(req.body,{
        where: {ClienteId: req.body.ClienteId}
    }).then(function(){
        return res.json({
            error: false,
            servicos
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro."
        });
    });
});
 */



// 2 Utilize a rota para consultar clientes e faça a edição de um
//   cliente pelo método put.

//consultar: /listacliente
app.put('/editarcliente', (req, res) => {  //nao é async pq precisa passar pela requisição
    cliente.update(req.body, {
        where: { id: req.body.id }
    }).then(function () {
        return res.json({
            error: false,
            message: "Cliente foi alterado com sucesso."
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Erro na alteração do CLiente."
        });
    });
});


// 3 Utilize a rota para consultar pedidos e faça a edição de um
//   pedido pelo método put.

//consultar: /listapedidos
//editar pedidos pelo ServicoId
// OBS: nao colocar o parametro id na hr de editar.
app.put('/editarpedidoservico', (req, res) => {
    pedido.update(req.body, {
        where: { ServicoId: req.body.ServicoId }
    }).then(function () {
        return res.json({
            error: false,
            message: "Pedido modificado com sucesso."
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Não foi possível modificar o pedido."
        });
    });
});



//destroy

//excluir cliente pelo modo get
//ver "/apagarcliente"
/* app.get('/excluircliente', async (req, res) => {
    await cliente.destroy({
        where: { id: 1 }
    }).then(function () {
        return res.json("Deletado.");
    });
}); */

//excluir um cliente pelo nome
app.delete('/apagarcliente/:id', (req, res) => {
    cliente.destroy({
        where: { id: req.params.id}
    }).then(function () {
        return res.json({
            error: false,
            message: "Cliente foi excluído com sucesso."
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Não foi possível excluir o cliente."
        });
    });
});

app.delete('/apagarservico/:id', (req, res) => {
    servico.destroy({
        where: { id: req.params.id}
    }).then(function () {
        return res.json({
            error: false,
            message: "Serviço foi excluído com sucesso."
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Não foi possível excluir o serviço."
        });
    });
});

app.delete('/apagarpedido/:id', (req, res) => {
    pedido.destroy({
        where: { id: req.params.id}
    }).then(function () {
        return res.json({
            error: false,
            message: "Pedido foi excluído com sucesso."
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Não foi possível excluir o pedido."
        });
    });
});



/////////////////////////////////////////////////////////////////////////

// DESAFIOS

//  AULA 1
/* Que outras informações (objetos) para controle
você incluiria no projeto da Services TIAcademy? */

/* 
feedback - uma área para feedback/sugestões
promoções - serviços ou produtos em promoções mostrados separadamente 
e com o preço ja ajustado
entregas - área reservada para vizualizar informaçoes sobre entrega 
*/



//  AULA 2
/* Insira 5 novos clientes.
Insira 10 novos pedidos. */




//  AULA 3
/* Qual é o total que o cliente
X gastou na ServicesTI? */

app.get('/totalgasto/:id', async (req, res) => {
    await pedido.sum('valor', {
        where: { ClienteId: req.params.id }
    }).then((pedido) => {
        return res.json({ pedido })
        })
    });


//  AULA 4
/* Faça uma rota que liste todos
os pedidos de um cliente.
Crie uma nova rota que
permita alterar esse pedido
utilizando o clienteId. */

//listar todos os pedidos de um cliente
app.get('/pedidosdocliente/:id', async(req,res)=>{
    await pedido.findAll({where: {ClienteId: [req.params.id]}})
    .then(function(pedidos){
        return res.json({pedidos})
    });
        
});
// editar pedidos pelo ClienteId
// OBS: nao colocar o parametro id na hr de editar.
app.put('/editarpedidocliente', (req, res) => {
    pedido.update(req.body, {
        where: { ClienteId: req.body.ClienteId}
    }).then(function () {
        return res.json(
            "Pedido alterado com sucesso."
        )
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Não foi possível modificar o pedido."
        });
    });

});


//  AULA 5


// port
let port = process.env.PORT || 3001;

app.listen(port, (req, res) => {
    console.log('Servidor ativo');
})