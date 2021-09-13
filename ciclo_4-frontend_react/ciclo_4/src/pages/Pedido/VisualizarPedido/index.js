import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container, Table } from 'reactstrap';
import { api, headers } from '../../../config';

export const VisualizarPedido = () => {


    const [data, setData] = useState([]);
    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getPedidos = async () => {
        await axios.get(api + "/listapedidos")
            .then((response) => {
                console.log(response.data.pedidos);
                setData(response.data.pedidos);

            }).catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Não foi possível conectar a Api.'
                });

            });

    }

    const apagarPedido = async (idPedido) => {
        console.log("excluir cliente id " + idPedido);
        await axios.delete(api + "/apagarpedido/" + idPedido, { headers })
            .then((response) => {
                getPedidos();
                if (response.data.error) {
                    setStatus({
                        type: 'error',
                        message: response.data.message
                    });
                } else {
                    setStatus({
                        type: 'success',
                        message: response.data.message
                    });
                }

            }).catch(() => {
                setStatus({
                    type: 'error',
                    message: "Erro: Não foi possível conectar a Api."
                });
            });
    }

    useEffect(() => {
        getPedidos();
    }, []);

    return (
        <div className="p-3">
            <Container>
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}

                <div className="d-flex">
                    <div className="mr-auto">
                        <h2>Lista de Pedidos</h2>
                    </div>

                </div>

                <Table striped hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>ID Cliente</th>
                            <th>ID Serviço</th>
                            <th>Valor</th>
                            <th>Prazo</th>
                            <th>Ações</th>


                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.ClienteId}</td>
                                <td>{item.ServicoId}</td>
                                <td>{item.valor}</td>
                                <td>{item.data}</td>
                                <td className="text-center">
                                    <Link to={"/pedido/" + item.id}
                                        className="btn btn-outline-info btn-sm m-1">Consultar</Link>
                                    <Link to={"/editarpedido/" + item.id}
                                        className="btn btn-outline-warning btn-sm m-1">Editar</Link>
                                    <span className="btn btn-outline-danger btn-sm m-1"
                                        onClick={() => apagarPedido(item.id)}>Excluir</span>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
                <div className="pt-2">
                    <Link to="/cadastrarpedido"
                        className="btn btn-outline-success btn-sm m-1">Adicionar Pedido
                    </Link>
                    <Link to="/"
                        className="btn btn-outline-primary btn-sm m-1">Voltar
                    </Link>
                </div>
            </Container>
        </div>
    )
}