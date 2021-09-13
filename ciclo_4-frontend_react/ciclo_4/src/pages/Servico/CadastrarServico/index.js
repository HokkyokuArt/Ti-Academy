import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"
import { Alert, Button, Container, Form, FormGroup, Input, Label, Spinner } from "reactstrap"
import { api, headers } from "../../../config";

export const CadastrarServico = () => {


    const [servico, setServico] = useState({
        nome: '',
        descricao: ''

    });

    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''

    });

    const valorInput = e => setServico({
        ...servico, [e.target.name]: e.target.value
    });

    const cadServico = async e => {
        e.preventDefault();

        setStatus({
            formSave: true
        });



        await axios.post(api + "/servicos", servico, { headers })
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
                        <h2>Cadastrar Novo Serviço</h2>
                    </div>

                </div>
                <hr />

                {status.type === 'error' ? <Alert color="danger">
                    {status.message}</Alert> : ""}

                {status.type === 'success' ? <Alert color="success">
                    {status.message}</Alert> : ""}

                <Form onSubmit={cadServico}>
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome"
                            placeholder="Nome do serviço" onChange={valorInput} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Descrição</Label>
                        <Input type="text" name="descricao"
                            placeholder="Descrição do serviço" onChange={valorInput} />
                    </FormGroup>
                    <div className="p-1 pt-3">
                        {status.formSave ?
                            <Button className="m-1" type="submit" size="sm" outline color="success" disabled>Salvando
                                <Spinner children="" color="success" size="sm" /></Button> :
                            <Button className="m-1" type="submit" size="sm" outline color="success">Cadastrar</Button>
                        }
                        <Button type="reset" className="m-1" size="sm" outline color="danger">Limpar</Button>
                        <Link to="/listadeservicos"
                            className="btn btn-outline-primary btn-sm m-1">Voltar
                        </Link>
                    </div>

                </Form>


            </Container>

        </div>
    )
}