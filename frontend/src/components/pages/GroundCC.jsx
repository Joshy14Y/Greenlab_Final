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
import { GroCCForm, formLinks } from "../forms/AnalisysForms";
import { FormButtons } from "../forms/ElementInputs";
import DataTable from "../forms/DataTable";
import { GroundVerification } from "../utils/global.js";

const GroundCC = () => {
  // Estructura predeterminada para los datos de análisis
  const defaultAnalisys = {
    // Datos de encabezado
    header_id: "",
    lab_id: "",
    field_id: "",
    // Datos de Análisis de Suelos
    pH: "",
    ext_acid: "",
    // Datos de Químico Completo
    calcium: "",
    magnesium: "",
    potassium: "",
    copper: "",
    manganese: "",
    iron: "",
    zinc: "",
    phosphorus: "",
  };

  const [analisys, setAnalisys] = useState([]);
  const [actualAnalisys, setActualAnalisys] = useState(defaultAnalisys);
  const [isEditing, setIsEditing] = useState(false);
  const columns = [
    "ID Encabezado",
    "ID Laboratorio",
    "ID Campo",
    "pH",
    "Acidez ext.",
    "Ca",
    "Mg",
    "K",
    "Cu",
    "Mn",
    "Fe",
    "Zn",
    "P",
  ];

  const API_URL = formLinks.groundCC;

  // Efecto para cargar los datos iniciales al montar el componente
  useEffect(() => {
    fetchData(API_URL, setAnalisys);
  }, []);

  // Función para manejar la adición o edición de un elemento
  const gccHandleAddEditItem = () => {
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
  const gccHandleCancel = () => {
    handleCancel(
      () => setActualAnalisys(defaultAnalisys),
      () => setIsEditing(false)
    );
  };

  // Función para manejar la edición de un elemento
  const gccHandleEditItem = (item) => {
    handleEdit(item, setActualAnalisys, setIsEditing);
  };

  // Función para manejar la eliminación de un elemento
  const gccHandleDeleteItem = async (id) => {
    await handleDelete(API_URL, id, () => fetchData(API_URL, setAnalisys));
  };

// Función para manejar el envío del formulario
const handleSubmit = (e) => {
  e.preventDefault();
  if (GroundVerification(actualAnalisys)) {
    gccHandleAddEditItem(actualAnalisys);
  } else {
    console.error("Ground analysis parameters are not within the specified range");
  }
};

  return (
    <>
      <Form className="mx-3" onSubmit={handleSubmit}>
        <GroCCForm
          actualForm={actualAnalisys}
          setActualForm={setActualAnalisys}
        />
        <FormButtons isEditing={isEditing} onCancel={gccHandleCancel} />
      </Form>
      <DataTable
        data={analisys}
        columns={columns}
        rowKey={"lab_id"}
        handleEditItem={gccHandleEditItem}
        handleDeleteItem={gccHandleDeleteItem}
      />
      <Outlet />
    </>
  );
};

export default GroundCC;
