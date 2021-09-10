import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap"
import { api } from "../../../config";

export const CadastrarCliente = () => {


    const [cliente, setCliente] = useState({
        nome: '',
        endereco: '',
        cidade: '',
        uf: '',
        nascimento:''

    });

    const [status, setStatus] = useState({
        type: '',
        message: ''

    });

    const valorInput = e => setCliente({
        ...cliente, [e.target.name]: e.target.value
    });

    const cadCliente = async e => {
        console.log(cliente)
        e.preventDefault();
        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.post(api + "/clientes", cliente, { headers })
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
                        <h2>Cadastrar Novo Cliente</h2>
                    </div>
                    <div className="p-2">
                        <Link to="/visualizarcliente"
                            className="btn btn-outline-primary btn-sm">Voltar
                        </Link>
                    </div>
                </div>
                <hr className="m-1" />

                {status.type === 'error' ? <Alert color="danger">
                    {status.message}</Alert>:""}
                    
                {status.type === 'success' ? <Alert color="success">
                    {status.message}</Alert>:""}
        
                <Form className="p-2" onSubmit={cadCliente}>
                    
                    <FormGroup className="p-2">
                        <Label>Id</Label>
                        <Input type="text" name="id"
                            placeholder="Id" onChange={valorInput} />
                    </FormGroup>
                    
                    
                    
                    
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome"
                            placeholder="Nome do Cliente" onChange={valorInput} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Endereço</Label>
                        <Input type="text" name="endereco"
                            placeholder="Endereço do Cliente" onChange={valorInput} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Cidade</Label>
                        <Input type="text" name="cidade"
                            placeholder="Cidade do Cliente" onChange={valorInput} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>UF</Label>
                        <Input type="text" name="uf"
                            placeholder="Estado" onChange={valorInput} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Nascimento</Label>
                        <Input type="text" name="nascimento"
                            placeholder="Data de Nascimento do Cliente" onChange={valorInput} />
                    </FormGroup>
                    
                    <Button className="m-2" type="submit" outline color="info">Cadastrar</Button>

                </Form>


            </Container>

        </div>
    )
}