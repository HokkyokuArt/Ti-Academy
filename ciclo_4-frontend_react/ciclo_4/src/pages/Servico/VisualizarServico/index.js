import { Container, Table } from 'reactstrap';

export const VisualizarServico = () => {
    return (
        <div className="p-3">
            <Container>
                <div>
                    <h2>Serviços</h2>
                </div>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Serviço</th>
                            <th>Descrição</th>
                            <th>Ações</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Serviço1</td>
                            <td>Descrição1</td>
                            <td>aaaaaaa</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Serviço2</td>
                            <td>Descrição2</td>
                            <td>aaaaaaa</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Serviço3</td>
                            <td>Descrição3</td>
                            <td>aaaaaaa</td>
                        </tr>
                                             
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}