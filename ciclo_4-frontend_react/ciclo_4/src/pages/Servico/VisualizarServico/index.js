import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container, Table } from 'reactstrap';
import { api, headers } from '../../../config';

export const VisualizarServico = () => {

    const [data, setData] = useState([]);
    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getServicos = async () => {
        await axios.get(api + "/listaservicos")
            .then((response) => {
                console.log(response.data.servicos);
                setData(response.data.servicos);

            }).catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Não foi possível conectar a Api.'
                });

            });

    }

    const apagarServico = async(idServico) =>{
        console.log("excluir serviço id "+idServico);
        await axios.delete(api+"/apagarservico/"+idServico,{headers})
        .then((response)=>{
            getServicos();
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

        }).catch(()=>{
            setStatus({
                type: 'error',
                message: "Erro: Não foi possível conectar a Api."
            });
        });
    }

    useEffect(() => {
        getServicos();
    }, []);

    return (
        <div className="p-3">
            <Container>
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                
                <div className="d-flex">
                    <div className="mr-auto">
                        <h2>Lista de Serviços</h2>
                    </div>
                    <div>
                        <Link to="/cadastrarservico"
                            className="btn btn-outline-primary btn-sm m-1">Cadastrar
                        </Link>
                    </div>
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
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.descricao}</td>
                                <td className="text-center">
                                    <Link to={"/servico/" + item.id}
                                        className="btn btn-outline-primary btn-sm m-1">Consultar</Link>
                                    <Link to={"/editarservico/" + item.id}
                                        className="btn btn-outline-warning btn-sm m-1">Editar</Link>
                                    <span className="btn btn-outline-danger btn-sm m-1"
                                        onClick={()=> apagarServico(item.id)}>Excluir</span>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </Container>
        </div>
    )
}