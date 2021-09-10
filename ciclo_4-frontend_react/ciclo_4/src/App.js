
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Home} from './pages/Home/';
import {Menu} from './components/Menu';
import {VisualizarCliente} from './pages/Cliente/VisualizarCliente'
import {VisualizarServico} from './pages/Servico/VisualizarServico'
import {VisualizarPedido} from './pages/Pedido/VisualizarPedido'
import { Servico } from './pages/Servico/Servico';
import { CadastrarServico } from './pages/Servico/CadastrarServico';
import { Cliente } from './pages/Cliente/Cliente';
import { CadastrarCliente } from './pages/Cliente/CadastrarCliente';
import { Pedido } from './pages/Pedido/Pedido';
import { CadastrarPedido } from './pages/Pedido/CadastrarPedido';
import { EditarServico } from './pages/Servico/EditarServico';


function App() {
  return (
    <div>
      <Menu/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/visualizarcliente" component={VisualizarCliente}/>
          <Route path="/cliente/:id" component={Cliente}/>
          <Route path="/cadastrarcliente" component={CadastrarCliente}/>

          <Route path="/visualizarservico" component={VisualizarServico}/>
          <Route path="/servico/:id" component={Servico}/>
          <Route path="/cadastrarservico" component={CadastrarServico}/>
          <Route path="/editarservico/:id" component={EditarServico}/>
          

          <Route path="/visualizarpedido" component={VisualizarPedido}/>
          <Route path="/pedido/:id" component={Pedido}/>  
          <Route path="/cadastrarpedido" component={CadastrarPedido}/> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
