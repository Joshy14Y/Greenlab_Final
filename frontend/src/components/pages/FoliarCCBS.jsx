import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Outlet } from "react-router";
import {
  fetchData,
  handleAddEditItem,
  handleEdit,
  handleCancel,
  handleDelete,
} from "../utils/EffectFunctions.jsx";
import { FolCCBSForm, formLinks } from "../forms/AnalisysForms";
import { FormButtons } from "../forms/ElementInputs";
import DataTable from "../forms/DataTable";

const FoliarCCBS = () => {
   // Definición de la estructura predeterminada para los datos de análisis
  const defaultAnalisys = {
    // Datos de encabezado,
    header_id: "",
    lab_id: "",
    field_id: "",
    // Datos de Análisis Foliar
    n_total: "",
    protein: "",
    // Datos de Químico Completo
    potassium: "",
    calcium: "",
    magnesium: "",
    phosphorus: "",
    copper: "",
    manganese: "",
    iron: "",
    zinc: "",
    // Datos de Boro
    boron: "",
    // Datos de Azufre
    carbon: "",
    sulfur: "",
  };

  const [analisys, setAnalisys] = useState([]);
  const [actualAnalisys, setActualAnalisys] = useState(defaultAnalisys);
  const [isEditing, setIsEditing] = useState(false);
  const columns = [
    "ID Encabezado",
    "ID Laboratorio",
    "ID Campo",
    "N-total",
    "Proteína",
    "C",
    "S",
    "K",
    "Ca",
    "Mg",
    "P",
    "Cu",
    "Mn",
    "Fe",
    "Zn",
    "B",
  ];

  
  const API_URL = formLinks.foliarCCBS;

    // Efecto para cargar los datos iniciales al montar el componente
  useEffect(() => {
    fetchData(API_URL, setAnalisys);
  }, []);

  
  // Función para manejar la adición o edición de un elemento
  const fccbsHandleAddEditItem = () => {
    handleAddEditItem(
      API_URL,
      actualAnalisys,
      isEditing,
      () => fetchData(API_URL, setAnalisys),
      () => setActualAnalisys(defaultAnalisys),
      () => setIsEditing(false)
    );
  };

    // Función para manejar la cancelación de la edición o adición
  const fccbsHandleCancel = () => {
    handleCancel(
      () => setActualAnalisys(defaultAnalisys),
      () => setIsEditing(false)
    );
  };

    // Función para manejar la edición de un elemento
  const fccbsHandleEditItem = (item) => {
    handleEdit(item, setActualAnalisys, setIsEditing);
  };

    // Función para manejar la eliminación de un elemento
  const fccbsHandleDeleteItem = async (id) => {
    await handleDelete(API_URL, id, () => fetchData(API_URL, setAnalisys));
  };

    // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    fccbsHandleAddEditItem(actualAnalisys);
  };

  return (
    <>
      <Form className="mx-3" onSubmit={handleSubmit}>
        <FolCCBSForm
          actualForm={actualAnalisys}
          setActualForm={setActualAnalisys}
        />
        <FormButtons isEditing={isEditing} onCancel={fccbsHandleCancel} />
      </Form>
      <DataTable
        data={analisys}
        columns={columns}
        rowKey={"lab_id"}
        handleEditItem={fccbsHandleEditItem}
        handleDeleteItem={fccbsHandleDeleteItem}
      />
      <Outlet />
    </>
  );
};

export default FoliarCCBS;
