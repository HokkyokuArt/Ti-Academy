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

app.get('/clientes', async(req,res)=>{
    let crate=await cliente.create({
        nome: "cliente1",
        endereco: "rua endereco1",
        cidade: "cidade1",
        uf: "UF",
        nascimento: "2001-01-01",
    })
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




let port=process.env.PORT || 3000;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
})