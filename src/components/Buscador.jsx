
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const Buscador = ({ onChange }) => {
    const [buscarpalabra, setbuscarpalabra] = useState("");

    const onSearch = () => {
        onChange(buscarpalabra);
    };

    return (
        <>
            <div className="d-flex justify-content-center mt-5 ">
                <div>
                    <h1>
                        <img
                            style={{ width: "25rem" }}
                            src="https://upload.wikimedia.org/wikipedia/commons/c/c0/The_Simpsons_logo_-_Yellow.svg"
                            alt="Logo"
                        /> </h1>
                </div>
            </div>
            <Form >
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Ingresa el nombre de Simpsons favorito"
                        onChange={(ev) => {
                            setbuscarpalabra(ev.currentTarget.value);
                            console.log("onchage", ev.currentTarget.value);
                        }}
                    />
                </Form.Group>
                <Button
                    className="d-flex justify-content-center"
                    onClick={onSearch}
                    style={{ background: "#d63384", borderColor: "#d63384" }}>
                    Buscar
                </Button>
            </Form>
        </>
    );
};

export default Buscador;