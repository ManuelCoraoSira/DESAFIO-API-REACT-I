
import axios from "axios";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import Buscador from "./Buscador";

const MiApi = () => {
    const [simpsons, setsimpsons] = useState("bart");
    const [dataSimpsons, setdatasimpsons] = useState([]);

    const serchSimpsons = () => {
        const urlApi = `https://apisimpsons.fly.dev/api/personajes/find/${simpsons}`;
        axios
            .get(urlApi)
            .then((response) => {
                setdatasimpsons(response.data.result);
                console.log(response.data.result);
            })
            .catch((err) => {
                console.log("Error api", err);
            });
    };

    useEffect(() => {
        serchSimpsons();
    }, [simpsons]);

    return (
        <>
            <Buscador
                onChange={(value) => {
                    setsimpsons(value);
                }}
            />
            <div className="d-flex flex-wrap justify-content-center gap-5 mt-5 ps-4">
                {dataSimpsons.length > 0 ? (
                    dataSimpsons.map((item) => (
                        <Card className="mb-5" key={item.id} style={{ width: "18rem", height: "auto" }}>
                            <div className="d-flex justify-content-center">
                                <Card.Img
                                    variant="top"
                                    src={item.Imagen}
                                    style={{ width: "10rem", height: "10rem" }}
                                />
                            </div>
                            <Card.Body>
                                <Card.Title>{item.Nombre}</Card.Title>
                                <Card.Text style={{ width: "auto", height: "auto" }}>
                                    {item.Historia}
                                    <br /> <strong>Genero: </strong> {item.Genero}
                                    <br />
                                    <strong>Estado: </strong>{item.Estado}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                ) : (
                    <h1>Not found</h1>
                )}
            </div>
        </>
    );
};
export default MiApi;