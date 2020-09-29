import React, { useContext, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalState";

const BookTable = (props) => {
  const { setAll, users, remove } = useContext(GlobalContext);
  const [userList, setUserList] = useState(props.users);

  useEffect(() => {
    setAll(userList);
  }, []);

  const handleDelete = async (id) => {
    const resp = await remove(id);
    if (resp.status) {
      alert("Eliminado exitósamente");
    } else {
      alert("Error, intente de nuevo");
    }
  };

  useEffect(() => {
    if (users) {
      setUserList(users);
    }
  }, [users]);

  return (
    <Container>
      <table>
        <thead>
          <tr>
          <th>Id</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Autor</th>
            <th>fecha</th>
            <th>Ejemplares</th>
            <th>Costo</th>
          </tr>
        </thead>
        <tbody>
          {userList && userList.length > 0 ? (
            userList.map((user) => {
              const { id, name, username } = user;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{username}</td>
                  <td>
                    <Button onClick={() => handleDelete(id)}>Eliminar</Button>
                    <Button onClick={() => props.editUser(id, user)}>
                      Editar
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={4}>No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  );
};

export default BookTable;
