import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const AddUserForm = (props) => {
  const initData = { id: null, autor: "", descripcion: "" , nombre: "" , ejemplares: "" , costo: "" , fecha: "" };

  const [user, setUser] = useState(initData);

  const { add, users } = useContext(GlobalContext);


  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  //  if (user.name && user.username) {
      const newUser = {
        nombre: initData.nombre,
        descripcion: initData.descripcion,
        autor: initData.autor,
        fecha: initData.fecha,
        ejemplares: initData.ejemplares,
        costo: initData.costo
      };

      const resp = await add(newUser);
  
       if (resp.status) {
        alert("Guardado exitósamente");
      } else {
        alert("Error, intente de nuevo");
      }
     
  };

  return (
    <Container style={{ padding: 16 }}>
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <input
                className="u-full-width"
                type="text"
                value={user.nombre}
                name="nombre"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Autor</Form.Label>
              <input
                className="u-full-width"
                type="text"
                value={user.autor}
                name="autor"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Descripcion</Form.Label>
              <input
                className="u-full-width"
                type="text"
                value={user.descripcion}
                name="descripcion"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Fecha</Form.Label>
              <input
                className="u-full-width"
                type="text"
                value={user.fecha}
                name="fecha"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Ejemplares</Form.Label>
              <input
                className="u-full-width"
                type="text"
                value={user.ejemplares}
                name="ejemplares"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Costo</Form.Label>
              <input
                className="u-full-width"
                type="text"
                value={user.costo}
                name="costo"
                onChange={handleChange}
              />
            </Form.Group>

       
       

            <Form.Group>
              <Button
                className="button-primary"
                variant="primary"
                onClick={handleSubmit}
                type="submit"
              >
                Agregar usuario
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddUserForm;
