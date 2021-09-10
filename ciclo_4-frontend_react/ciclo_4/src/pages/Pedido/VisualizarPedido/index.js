import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container, Table } from 'reactstrap';
import { api } from '../../../config';

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
                    <div className="p-2">
                        <Link to="/cadastrarpedido"
                            className="btn btn-outline-primary btn-sm">Cadastrar
                        </Link>
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