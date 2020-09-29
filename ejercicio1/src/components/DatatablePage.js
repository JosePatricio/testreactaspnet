import React, { useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
const DatatablePage = ({books}) => {

    
  const data = {
    columns: [
      {
        label: 'Id',
        field: 'id_libro',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Autor',
        field: 'autor',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Descripcion',
        field: 'descripcion',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Ejemplares',
        field: 'ejemplares',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Fecha',
        field: 'fecha',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Costo',
        field: 'costo',
        sort: 'asc',
        width: 100
      }
    ],
    rows:
    books
  };

  return (
    <MDBDataTable
      striped
      bordered
      data={data}
      paging={true}
      sortable={true}
      
    />
  );
}

export default DatatablePage;