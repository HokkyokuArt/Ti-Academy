import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container, Table } from 'reactstrap';
import { api } from '../../../config';

export const VisualizarCliente = () => {

    
    const [data, setData] = useState([]);
    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getClientes = async () => {
        await axios.get(api + "/listacliente")
            .then((response) => {
                console.log(response.data.clientes);
                setData(response.data.clientes);

            }).catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Não foi possível conectar a Api.'
                });

            });

    }

    useEffect(() => {
        getClientes();
    }, []);








    return (
        <div className="p-3">
            <Container>
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                {/* <div>
                    <h2>Clientes</h2>
                </div> */}
                <div className="d-flex">
                    <div className="mr-auto">
                        <h2>Lista de Clientes</h2>
                    </div>
                    <div className="p-2">
                        <Link to="/cadastrarcliente"
                            className="btn btn-outline-primary btn-sm">Cadastrar
                        </Link>
                    </div>
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
                            <th>Ações</th>


                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.endereco}</td>
                                <td>{item.cidade}</td>
                                <td>{item.uf}</td>
                                <td>{item.nascimento}</td>
                                <td className="text-center">
                                    <Link to={"/cliente/" + item.id}
                                        className="btn btn-outline-primary btn-sm">Consultar</Link>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </Container>
        </div>
    )
}