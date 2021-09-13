import { Container } from 'reactstrap';

export const Home = () => {
    return (
        <div className="p-3">
            <Container>
                <div>
                    <div className="mr-auto m-1">
                        <h2>Home</h2>
                    </div>
                    <hr/>
                    <div className="d-flex">
                        <div>
                            <a href="/listadeclientes"
                                className="btn btn-outline-info btn-sm m-1">Clientes</a>
                        </div>
                        <div>
                            <a href="/listadeservicos"
                                className="btn btn-outline-info btn-sm m-1">Serviços</a>
                        </div>
                        <div>
                            <a href="/listadepedidos"
                                className="btn btn-outline-info btn-sm m-1">Pedidos</a>
                        </div>
                    </div>



                </div>

            </Container>
        </div>
    )
}