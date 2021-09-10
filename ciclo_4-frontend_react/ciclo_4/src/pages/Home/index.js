import{Container} from 'reactstrap';

export const Home = ()=>{
    return(
        <div className="p-3">
            <Container>
                <div className="d-flex">
                    <div className="mr-auto">
                        <h2>Página inicial</h2>
                    </div>
                    <div>
                        <a href="/visualizarcliente" 
                        className="btn btn-outline-primary btn-sm m-1">Clientes</a>
                    </div>
                    <div>
                        <a href="/visualizarservico" 
                        className="btn btn-outline-primary btn-sm m-1">Serviços</a>
                    </div>
                    <div>
                        <a href="/visualizarpedido" 
                        className="btn btn-outline-primary btn-sm m-1">Pedidos</a>
                    </div>
                </div>
                
            </Container>
        </div>
    )
}