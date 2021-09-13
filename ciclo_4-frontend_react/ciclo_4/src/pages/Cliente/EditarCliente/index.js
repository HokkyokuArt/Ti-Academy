
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Container, Form, FormGroup, Input, Label, Spinner } from 'reactstrap';
import { api, headers } from '../../../config';

export const EditarCliente = (props) => {

    const [id] = useState(props.match.params.id);
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''
    })

    const edtCliente = async e => {
        e.preventDefault();
        console.log("Editar")

        setStatus({
            formSave: true
        });

        await axios.put(api + "/editarcliente", { id, nome, endereco, cidade, uf, nascimento }, { headers })
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
        const getCliente = async () => {
            await axios.get(api + "/cliente/" + id)
                .then((response) => {
                    setNome(response.data.cliente.nome);
                    setEndereco(response.data.cliente.endereco);
                    setCidade(response.data.cliente.cidade);
                    setUf(response.data.cliente.uf);
                    setNascimento(response.data.cliente.nascimento)
                }).catch(() => {
                    console.log("Erro: Não foi possível conectar a API.")
                });
        }
        getCliente();
    }, [id]);

    return (
        <div className="p-3">
            <Container>
                <div className="d-flex">
                    <div className="mr-auto">
                        <h2>Editar Cliente</h2>
                    </div>

                </div>
                <hr />
                {status.type === 'error' ? <Alert color="danger">
                    {status.message}</Alert> : ""}

                {status.type === 'success' ? <Alert color="success">
                    {status.message}</Alert> : ""}

                <Form onSubmit={edtCliente}>
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome"
                            placeholder="Nome do cliente" value={nome}
                            onChange={e => setNome(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Endereço</Label>
                        <Input type="text" name="endereco"
                            placeholder="Endereço do cliente" value={endereco}
                            onChange={e => setEndereco(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Cidade</Label>
                        <Input type="text" name="cidade"
                            placeholder="Cidade" value={cidade}
                            onChange={e => setCidade(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>UF</Label>
                        <Input type="text" name="uf"
                            placeholder="Estado" value={uf}
                            onChange={e => setUf(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Nascimento</Label>
                        <Input type="text" name="nascimento"
                            placeholder="Data de nascimento" value={nascimento}
                            onChange={e => setNascimento(e.target.value)} />
                    </FormGroup>

                    <div className="p-1 pt-3">
                        {status.formSave ?
                            <Button className="m-1" size="sm" type="submit" outline color="warning" disabled>Salvando
                                <Spinner children="" size="sm" color="warning" /></Button> :
                            <Button className="m-1" size="sm" type="submit" outline color="warning">Atualizar</Button>
                        }
                        <Link to={"/cliente/" + id}
                            className="btn btn-outline-info btn-sm m-1">Consultar</Link>
                        <Link to={"/listadeclientes"}
                            className="btn btn-outline-primary btn-sm m-1">Voltar</Link>
                    </div>

                </Form>
            </Container>
        </div>
    )
}