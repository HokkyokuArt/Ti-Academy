
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Container, Form, FormGroup, Input, Label, Spinner } from 'reactstrap';
import { api, headers } from '../../../config';

export const EditarPedido = (props) => {

    const [id] = useState(props.match.params.id);
    const [ClienteId, setClienteId] = useState('');
    const [ServicoId, setServicoId] = useState('');
    const [valor, setValor] = useState('');
    const [data, setData] = useState('');
    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''
    })

    const edtPedido = async e => {
        e.preventDefault();
        console.log("Editar")

        setStatus({
            formSave: true
        });

        await axios.put(api + "/editarpedido", { id, ClienteId, ServicoId, valor, data }, { headers })
            .then((response) => {
                if (response.data.error) {
                    setStatus({
                        formSave: false,
                        type: 'error',
                        message: response.data.message
                    });
                } else {
                    setStatus({
                        formSave: false,
                        type: 'success',
                        message: response.data.message
                    });
                }

            }).catch(() => {
                setStatus({
                    formSave: false,
                    type: 'error',
                    message: "Erro: Não foi possível conectar a Api."
                });
            });
    }

    useEffect(() => {
        const getPedido = async () => {
            await axios.get(api + "/pedido/" + id)
                .then((response) => {
                    setClienteId(response.data.pedido.ClienteId);
                    setServicoId(response.data.pedido.ServicoId);
                    setValor(response.data.pedido.valor);
                    setData(response.data.pedido.data);
                }).catch(() => {
                    console.log("Erro: Não foi possível conectar a API.")
                });
        }
        getPedido();
    }, [id]);

    return (
        <div className="p-3">
            <Container>
                <div className="d-flex">
                    <div className="mr-auto">
                        <h2>Editar um Pedido</h2>
                    </div>

                </div>
                <hr />
                {status.type === 'error' ? <Alert color="danger">
                    {status.message}</Alert> : ""}

                {status.type === 'success' ? <Alert color="success">
                    {status.message}</Alert> : ""}

                <Form onSubmit={edtPedido}>
                    <FormGroup className="p-2">
                        <Label>Id Cliente</Label>
                        <Input type="text" name="ClienteId"
                            placeholder="Nome do pedido" value={ClienteId}
                            onChange={e => setClienteId(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Id Serviço</Label>
                        <Input type="text" name="ServicoId"
                            placeholder="Endereço do cliente" value={ServicoId}
                            onChange={e => setServicoId(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Valor</Label>
                        <Input type="text" name="valor"
                            placeholder="Cidade" value={valor}
                            onChange={e => setValor(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Prazo</Label>
                        <Input type="text" name="data"
                            placeholder="Estado" value={data}
                            onChange={e => setData(e.target.value)} />
                    </FormGroup>

                    <div className="p-1 pt-3">
                        {status.formSave ?
                            <Button className="m-1" size="sm" type="submit" outline color="warning" disabled>Salvando
                                <Spinner children="" size="sm" color="warning" /></Button> :
                            <Button className="m-1" size="sm" type="submit" outline color="warning">Atualizar</Button>
                        }
                        <Link to={"/pedido/" + id}
                            className="btn btn-outline-info btn-sm m-1">Consultar</Link>
                        <Link to={"/listadepedidos"}
                            className="btn btn-outline-primary btn-sm m-1">Voltar</Link>
                    </div>

                </Form>
            </Container>
        </div>
    )
}