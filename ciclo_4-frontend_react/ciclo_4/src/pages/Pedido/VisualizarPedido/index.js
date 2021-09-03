import { Container, Table} from 'reactstrap';

export const VisualizarPedido = () => {
    return (
        <div className="p-3" >
            <Container>
                <div>
                    <h2>Pedidos</h2>
                </div>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Pedido</th>
                            <th>ID Cliente</th>
                            <th>ID Serviço</th>
                            <th>Valor</th>
                            <th>Prazo</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>1</td>
                            <td>23</td>
                            <td>8</td>
                            <td>999,99</td>
                            <td>30/03/2022</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>999,99</td>
                            <td>30/03/2022</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>999,99</td>
                            <td>30/03/2022</td>
                        </tr>                        
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}