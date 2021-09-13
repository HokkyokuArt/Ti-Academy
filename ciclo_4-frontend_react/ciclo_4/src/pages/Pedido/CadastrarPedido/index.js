import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"
import { Alert, Button, Container, Form, FormGroup, Input, Label, Spinner } from "reactstrap"
import { api, headers } from "../../../config";

export const CadastrarPedido = () => {


    const [pedido, setPedido] = useState({
        ClienteId: '',
        ServicoId: '',
        valor: '',
        data: ''

    });

    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''

    });

    const valorInput = e => setPedido({
        ...pedido, [e.target.name]: e.target.value
    });

    const cadPedido = async e => {
        e.preventDefault();

        setStatus({
            formSave: true
        });

        await axios.post(api + "/pedidos", pedido, { headers })
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

    return (
        <div className="p-3">
            <Container>
                <div className="d-flex">
                    <div className="mr-auto">
                        <h2>Cadastrar Novo Pedido</h2>
                    </div>

                </div>
                <hr />

                {status.type === 'error' ? <Alert color="danger">
                    {status.message}</Alert> : ""}

                {status.type === 'success' ? <Alert color="success">
                    {status.message}</Alert> : ""}

                <Form onSubmit={cadPedido}>
                    <FormGroup className="p-2">
                        <Label>Id Cliente</Label>
                        <Input type="text" name="ClienteId"
                            placeholder="Id do Cliente" onChange={valorInput} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Id Serviço</Label>
                        <Input type="text" name="ServicoId"
                            placeholder="Id do Serviço" onChange={valorInput} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Valor</Label>
                        <Input type="text" name="valor"
                            placeholder="Valor do Pedido" onChange={valorInput} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Data</Label>
                        <Input type="text" name="data"
                            placeholder="Prazo de Entrega" onChange={valorInput} />
                    </FormGroup>
                    <div className="p-1 pt-3">
                        {status.formSave ?
                            <Button className="m-1" size="sm" type="submit" outline color="success" disabled>Salvando
                                <Spinner children="" color="success" size="sm" /></Button> :
                            <Button className="m-1" size="sm" type="submit" outline color="success">Cadastrar</Button>
                        }
                        <Button type="reset" className="m-1" size="sm" outline color="danger">Limpar</Button>
                        <Link to="/listadepedidos"
                            className="btn btn-outline-primary btn-sm m-1">Voltar
                        </Link>

                    </div>

                </Form>


            </Container>

        </div>
    )
}