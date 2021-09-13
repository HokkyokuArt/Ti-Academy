import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { api } from "../../../config";

export const Pedido = (props) => {
    console.log(props.match.params.id)

    const [data, setData] = useState([]);
    const [id] = useState(props.match.params.id);

    useEffect(() => {
        const getPedido = async () => {
            await axios.get(api + "/pedido/" + id)
                .then((response) => {
                    console.log(response.data.pedido);
                    setData(response.data.pedido);
                }).catch(() => {
                    console.log("Erro: Não foi possível conectar a Api.")
                })
        }
        getPedido();
    }, [id]);

    return (
        <div className="p-3">
            <Container>
                <div className="d-flex">
                    <div className="mr-auto">
                        <h2>Informações do Pedido</h2>
                    </div>
                </div>
                <hr />
                <div className="m-1">
                    <dl className="row pt-2">
                        <dt className="col-sm-3">Id Cliente</dt>
                        <dd className="col-sm-9">{data.ClienteId}</dd>
                    </dl>
                    <dl className="row">
                        <dt className="col-sm-3">Id Serviço</dt>
                        <dd className="col-sm-9">{data.ServicoId}</dd>
                    </dl>
                    <dl className="row">
                        <dt className="col-sm-3">Valor</dt>
                        <dd className="col-sm-9">{data.valor}</dd>
                    </dl>
                    <dl className="row">
                        <dt className="col-sm-3">Data</dt>
                        <dd className="col-sm-9">{data.data}</dd>
                    </dl>
                </div>
                <hr />
                <div className="pt-2">
                    <Link to={"/editarpedido/" + data.id}
                        className="btn btn-outline-warning btn-sm m-1 ">Editar</Link>
                    <Link to="/listadepedidos"
                        className="btn btn-outline-primary btn-sm m-1">Voltar
                    </Link>
                </div>

            </Container>
        </div>
    );
}