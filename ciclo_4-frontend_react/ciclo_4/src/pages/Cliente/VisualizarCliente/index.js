import { Container, Table} from 'reactstrap';

export const VisualizarCliente = () => {
    return (
        <div className="p-3">
            <Container>
                <div>
                    <h2>Clientes</h2>
                </div>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Cidade</th>
                            <th>UF</th>
                            <th>Nascimento</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Teste1</td>
                            <td>Rua Teste</td>
                            <td>Maringá</td>
                            <td>PR</td>
                            <td>01/01/2001</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Teste2</td>
                            <td>Rua Teste</td>
                            <td>Maringá</td>
                            <td>PR</td>
                            <td>01/01/2001</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Teste3</td>
                            <td>Rua Teste</td>
                            <td>Maringá</td>
                            <td>PR</td>
                            <td>01/01/2001</td>
                        </tr>
                              
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}