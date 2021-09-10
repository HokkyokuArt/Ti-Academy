import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"
import { Alert, Button, Container, Form, FormGroup, Input, Label, Spinner } from "reactstrap"
import { api, headers} from "../../../config";

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
                        <h2>Cadastrar Novo Seviço</h2>
                    </div>
                    <div className="p-2">
                        <Link to="/visualizarservico"
                            className="btn btn-outline-primary btn-sm">Lista
                        </Link>

                    </div>
                </div>
                <hr className="m-1" />

                {status.type === 'error' ? <Alert color="danger">
                    {status.message}</Alert> : ""}

                {status.type === 'success' ? <Alert color="success">
                    {status.message}</Alert> : ""}

                <Form className="p-2" onSubmit={cadServico}>
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
                    {status.formSave ?
                        <Button className="m-2" type="submit" outline color="primary" disabled>Salvando
                            <Spinner children="" color="primary" size="sm"/></Button> :
                        <Button className="m-2" type="submit" outline color="primary">Cadastrar</Button>
                    }
                    <Button type="reset" outline color="secondary">Limpar</Button>

                </Form>


            </Container>

        </div>
    )
}