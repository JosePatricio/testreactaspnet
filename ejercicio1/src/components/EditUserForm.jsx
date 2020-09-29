import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const EditUserForm = (props) => {
  const { edit } = useContext(GlobalContext);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const [user, setUser] = useState(props.currentUser);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      const resp = await edit(user);
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
          <Form.Label>
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
                Actualizar
              </Button>
              <Button
                className="button-primary"
                variant="primary"
                onClick={() => props.setEditing(false)}
                type="submit"
              >
                Cancelar
              </Button>
            </Form.Group>
          </Form.Label>
        </Col>
      </Row>
    </Container>
  );
};

export default EditUserForm;
