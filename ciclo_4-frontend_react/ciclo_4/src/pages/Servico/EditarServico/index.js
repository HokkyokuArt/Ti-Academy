
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Container, Form, FormGroup, Input, Label, Spinner } from 'reactstrap';
import { api , headers } from '../../../config';

export const EditarServico = (props) => {

    const [id] = useState(props.match.params.id);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''
    })

    const edtServico = async e => {
        e.preventDefault();
        console.log("Editar")

        setStatus({
            formSave:true
        });

        await axios.put(api + "/editarservico", { id, nome, descricao }, { headers })
        .then((response)=>{
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

        }).catch(()=>{
            setStatus({
                formSave: false,
                type: 'error',
                message: "Erro: Não foi possível conectar a Api."
            });
        });
    }

    useEffect(() => {
        const getServico = async () => {
            await axios.get(api + "/servico/" + id)
                .then((response) => {
                    setNome(response.data.servico.nome);
                    setDescricao(response.data.servico.descricao)
                }).catch(() => {
                    console.log("Erro: Não foi possível conectar a API.")
                });
        }
        getServico();
    }, [id]);

    return (
        <div className="p-3">
            <Container>
                <div className="d-flex">
                    <div className="mr-auto">
                        <h2>Editar um Serviço</h2>
                    </div>
                    <div>
                        <Link to={"/visualizarservico"}
                            className="btn btn-outline-primary btn-sm m-1">Lista</Link>
                        <Link to={"/servico/" + id}
                            className="btn btn-outline-primary btn-sm m-1">Consultar</Link>
                    </div>
                </div>
                <hr className="m-1" />
                {status.type === 'error' ? <Alert color="danger">
                    {status.message}</Alert> : ""}

                {status.type === 'success' ? <Alert color="success">
                    {status.message}</Alert> : ""}

                <Form className="p-2" onSubmit={edtServico}>
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome"
                            placeholder="Nome do serviço" value={nome}
                            onChange={e => setNome(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Descrição</Label>
                        <Input type="text" name="descricao"
                            placeholder="Descrição do serviço" value={descricao}
                            onChange={e => setDescricao(e.target.value)} />
                    </FormGroup>
                    {status.formSave ?
                        <Button className="m-2" type="submit" outline color="warning" disabled>
                            <Spinner color="warning" /></Button> :
                        <Button className="m-2" type="submit" outline color="warning">Atualizar</Button>
                    }

                </Form>
            </Container>
        </div>
    )
}