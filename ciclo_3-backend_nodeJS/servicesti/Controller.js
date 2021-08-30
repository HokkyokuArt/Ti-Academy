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
        order:[['id','ASC']]
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

//desafio

/* app.get('/listaclientes/:nome', async(req,res)=>{
    cliente.findByPk(req.params.nome)
    .then(listaclientes =>{
        return res.json(
            await pedido.sum('valor')
            // await pedido.sum('valor', { where: { cliente: { [Op.gt]: 1} } }),
        )
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            messagem: "Cliente não está existe."
        });
    });

}); */



let port=process.env.PORT || 3000;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
})
