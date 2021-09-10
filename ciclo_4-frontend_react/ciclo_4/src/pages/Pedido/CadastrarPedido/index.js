import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap"
import { api } from "../../../config";

export const CadastrarPedido = () => {


    const [pedido, setPedido] = useState({
        ClienteId: '',
        ServicoId: '',
        valor: '',
        data: ''

    });

    const [status, setStatus] = useState({
        type: '',
        message: ''

    });

    const valorInput = e => setPedido({
        ...pedido, [e.target.name]: e.target.value
    });

    const cadPedido = async e => {
        console.log(pedido)
        e.preventDefault();
        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.post(api + "/pedidos", pedido, { headers })
            .then((response) => {
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

    return (
        <div className="p-3">
            <Container>
                <div className="d-flex">
                    <div className="mr-auto">
                        <h2>Cadastrar Novo Pedido</h2>
                    </div>
                    <div className="p-2">
                        <Link to="/visualizarpedido"
                            className="btn btn-outline-primary btn-sm">Voltar
                        </Link>
                    </div>
                </div>
                <hr className="m-1" />

                {status.type === 'error' ? <Alert color="danger">
                    {status.message}</Alert>:""}
                    
                {status.type === 'success' ? <Alert color="success">
                    {status.message}</Alert>:""}

                <Form className="p-2" onSubmit={cadPedido}>
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
                                
                    <Button className="m-2" type="submit" outline color="info">Cadastrar</Button>

                </Form>


            </Container>

        </div>
    )
}