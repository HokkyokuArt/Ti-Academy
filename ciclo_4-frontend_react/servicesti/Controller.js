const express=require('express');
const cors=require('cors');

const models=require('./models');

const app=express();
app.use(cors());
app.use(express.json());

let cliente=models.Cliente;
let servico=models.Servico;
let pedido=models.Pedido;


app.get('/', function(req,res){
    res.send('Olá Mundo!');
});

app.post('/clientes', async(req,res)=>{
    let crate=await cliente.create(
        req.body
    );
    res.send('Novo Cliente foi inserido');
});


app.post('/servicos', async(req,res)=>{
    let create=await servico.create(
        req.body
    );
    res.send('Serviço foi inserido!');
});


app.post('/pedidos', async(req,res)=>{
    let create=await pedido.create(
        req.body
    );
    res.send('Pedido adicionado!');
});

app.get('/listaservicos', async(req,res)=>{
    await servico.findAll({
        order:[['id', 'ASC']]
    }).then(function(servicos){
        res.json({servicos})
    });

});

app.get('/ofertas', async(req,res)=>{
    await servico.count('id')
    .then(function(servicos){
        res.json(servicos);
    });

});

app.get('/servico/:id', async(req,res)=>{
    servico.findByPk(req.params.id)
    .then(servico =>{
        return res.json({
            error:false,
            servico
        });
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            messagem: "Código não está cadastrado!"
        });
    });

});

// get = importar da base de da dados / linha de aplicação
// post = inserção via formulário
//put = 

//1 visualize todos os clientes
app.get('/listacliente', async(req,res)=>{
    await cliente.findAll({
        order:[['nome','ASC']]
    }).then(function(clientes){
        res.json({clientes})
    });

});

//2 visualize os clientes em ordem de antiguidade
app.get('/ordenarclientes', async(req,res)=>{
    await cliente.findAll({
        order:[['id','DESC']]
    }).then(function(clientes){
        res.json({clientes})
    });

});

//3 visualize todos os pedidos
app.get('/listapedidos', async(req,res)=>{
    await pedido.findAll({
        order:[['id','ASC']]
    }).then(function(pedidos){
        res.json({pedidos})
    });

});

//4 visualize o pedido por ordem a partir do maior valor
app.get('/maiorvalor', async(req,res)=>{
    await pedido.findAll({
        order:[['valor','DESC']]
    }).then(function(pedidos){
        res.json({pedidos})
    });

});

//5 informe quantos clientes estão na nossa base de dados
app.get('/qtdclientes', async(req,res)=>{
    await cliente.count('id')
    .then(function(clientes){
        res.json(clientes);
    });
  
});

//6 informe a quantidade de pedidos solicitados
app.get('/qtdpedidos', async(req,res)=>{
    await pedido.count('id')
    .then(function(pedidos){
        res.json(pedidos);
    });
  
});

app.get('/atualizaservico', async(req,res)=>{
    await servico.findByPk(2) // comando para buscar a informaçao no servidor
    .then(servico=>{
        servico.nome='HTML/CSS/JS';
        servico.descricao='Páginas estáticas e dinâmicas estilizadas';
        servico.save(); // comando que salva as atualizaçoes no servidor
        return res.json({servico});

    });
});

// put  
// IMPORTANTE: editar um serviço por vez pq se não, não vai atualizar no servidor
app.put('/editarservico', (req,res)=>{  //nao é async pq precisa passar pela requisição
    servico.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Serviço foi alterado com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro na alteração do serviço."
        });
    });
});

app.get('/servicospedidos', async(req,res)=>{
    await servico.findByPk(2, {
        include:[{all:true}]
    }).then(servico=>{
        return res.json({servico});
    });

}); 

app.put('/editarpedido', (req,res)=>{
    pedido.update(req.body,{
        where: {ServicoId: req.body.ServicoId}
    }).then(function(){
        return res.json({
            error: false,
            message: "Pedido modificado com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível modificar o pedido."
        });
    });
});



// 1 faça busca por serviços de cliente passando o id do cliente
//   no corpo da requisição
app.get('/listaservicocliente/:id', async (req, res)=>{     
   
    await pedido.findAll({ where: { ClienteId: [req.params.id]  } })
    .then(function(pedidos){
        res.json(pedidos)        
    });
    console.log(pedidos,valor,ClienteId)
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
app.put('/editarcliente', (req,res)=>{  //nao é async pq precisa passar pela requisição
    cliente.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cliente foi alterado com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro na alteração do CLiente."
        });
    });
});


// 3 Utilize a rota para consultar pedidos e faça a edição de um
//   pedido pelo método put.

//consultar: /listapedidos
app.put('/editarpedido', (req,res)=>{
    pedido.update(req.body,{
        where: {ServicoId: req.body.ServicoId}
    }).then(function(){
        return res.json({
            error: false,
            message: "Pedido modificado com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível modificar o pedido."
        });
    });
});



//destroy

app.get('/excluircliente', async(req,res)=>{
    await cliente.destroy({
        where: {id:1}
    }).then(function(){
        return res.json("Deletado.");
    });
});

app.delete('/apagarcliente/:nome', (req,res)=>{
    cliente.destroy({
        where: {nome: req.params.nome}
    }).then(function(){
        return res.json({
            error:false,
            message: "Cliente foi excluído com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível excluir o cliente."
        });
    });
});












































// port
let port=process.env.PORT || 3001;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
})