import React from "react";
import { useState } from "react";
import "./location.css";
import useFetch from "../../hooks/useFetch";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Location() {
    const [cepInput, setCepInput] = useState(null);
    const [dados, error, loading] = useFetch(cepInput);

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target)
        const input = formData.get("cepInput")
        setCepInput(input);
    }

    return (
        <>
            <Form className="custom-form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control name="cepInput" type="text" placeholder="Insira seu cep" />
                    <Form.Text className="text-muted">
                        Não usaremos seus dados de localização para demais objetivos. Confia.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Pesquisar
                </Button>
            </Form>
            {dados && <h1>{dados.localidade}</h1>}
            {dados && <h1>{dados.estado}</h1>}
            {error && <h1>Error</h1>}
            {loading && <h1>Carregando...</h1>}
        </>
    )
}

export default Location