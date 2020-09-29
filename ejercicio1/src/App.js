import React, { useEffect, useState } from "react";
import AddUserForm from "./components/AddUserForm";
import BookTable from "./components/BookTable";
import EditUserForm from "./components/EditUserForm";
import { GlobalProvider } from "./context/GlobalState";
import services from "./services/services";
import DatatablePage from "./components/DatatablePage";



const App = () => {
  const [data, setData] = useState([]);

  const [editing, setEditing] = useState(false);


  const initialData = { id: null, name: "", username: "" };

  const [currentUser, setCurrentUser] = useState(initialData);


  const [loading, setLoading] = useState(false);


  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const fetchUsers = async () => {
    try {
      const resp = await services.getAll();

      console.log('resp  ',resp.data);
      if(resp.data && resp.data.length>0){
        setData(resp.data);
    }
    } catch (error) {
      console.log('VIEW ERROR ',error);
      alert("Error en los datos.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  

  return (
    <GlobalProvider>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Ejercicio 1</h1>
        <div className="row">
          <div>
            {editing ? (
              <div>
                <h2>Editar usuario</h2>
                <EditUserForm
                  currentUser={currentUser}
                  setEditing={setEditing}
                />
              </div>
            ) : (
              <div>
                <h2>Agregar </h2>
                <AddUserForm />
              </div>
            )}
          </div>
          <div>
            <h2>Libros  </h2>
          {data.length > 0 && (
             
             <DatatablePage
             books={data}
             
           />

            )}
 

           
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
};

export default App;
