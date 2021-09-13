
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home/';
import { Menu } from './components/Menu';
import { VisualizarCliente } from './pages/Cliente/VisualizarCliente'
import { Cliente } from './pages/Cliente/Cliente';
import { CadastrarCliente } from './pages/Cliente/CadastrarCliente';
import { EditarCliente } from './pages/Cliente/EditarCliente';
import { VisualizarServico } from './pages/Servico/VisualizarServico'
import { Servico } from './pages/Servico/Servico';
import { CadastrarServico } from './pages/Servico/CadastrarServico';
import { EditarServico } from './pages/Servico/EditarServico';
import { VisualizarPedido } from './pages/Pedido/VisualizarPedido'
import { Pedido } from './pages/Pedido/Pedido';
import { CadastrarPedido } from './pages/Pedido/CadastrarPedido';
import { EditarPedido } from './pages/Pedido/EditarPedido';
import { PedidosdoCliente } from './pages/Pedido/PedidosdoCliente';


function App() {
  return (
    <div>
      <Menu />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/listadeclientes" component={VisualizarCliente} />
          <Route path="/cliente/:id" component={Cliente} />
          <Route path="/cadastrarcliente" component={CadastrarCliente} />
          <Route path="/editarcliente/:id" component={EditarCliente} />

          <Route path="/listadeservicos" component={VisualizarServico} />
          <Route path="/servico/:id" component={Servico} />
          <Route path="/cadastrarservico" component={CadastrarServico} />
          <Route path="/editarservico/:id" component={EditarServico} />


          <Route path="/listadepedidos" component={VisualizarPedido} />
          <Route path="/pedido/:id" component={Pedido} />
          <Route path="/cadastrarpedido" component={CadastrarPedido} />
          <Route path="/editarpedido/:id" component={EditarPedido} />
          <Route path="/pedidosdocliente/:id" component={PedidosdoCliente} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
