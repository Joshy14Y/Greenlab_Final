import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Outlet } from "react-router";
import {
  fetchData,
  handleAddEditItem,
  handleCancel,
  handleDelete,
  handleEdit,
} from "../utils/EffectFunctions.jsx";
import { FolCCForm, formLinks } from "../forms/AnalisysForms";
import DataTable from "../forms/DataTable";
import { FormButtons } from "../forms/ElementInputs";

const FoliarCC = () => {
    // Estructura predeterminada para los datos de análisis
  const defaultAnalisys = {
    // Datos de encabezado
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
    "K",
    "Ca",
    "Mg",
    "P",
    "Cu",
    "Mn",
    "Fe",
    "Zn",
  ];

  const API_URL = formLinks.foliarCC;

   // Efecto para cargar los datos iniciales al montar el componente
  useEffect(() => {
    fetchData(API_URL, setAnalisys);
  }, []);

    // Función para manejar la adición o edición de un elemento
  const fccHandleAddEditItem = () => {
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
  const fccHandleCancel = () => {
    handleCancel(
      () => setActualAnalisys(defaultAnalisys),
      () => setIsEditing(false)
    );
  };

    // Función para manejar la edición de un elemento
  const fccHandleEditItem = (item) => {
    handleEdit(item, setActualAnalisys, setIsEditing);
  };

    // Función para manejar la eliminación de un elemento
  const fccHandleDeleteItem = async (id) => {
    await handleDelete(API_URL, id, () => fetchData(API_URL, setAnalisys));
  };

    // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    fccHandleAddEditItem(actualAnalisys);
  };

  return (
    <>
      <Form className="mx-3" onSubmit={handleSubmit}>
        <FolCCForm
          actualForm={actualAnalisys}
          setActualForm={setActualAnalisys}
        />
        <FormButtons isEditing={isEditing} onCancel={fccHandleCancel} />
      </Form>
      <DataTable
        data={analisys}
        columns={columns}
        rowKey={"lab_id"}
        handleEditItem={fccHandleEditItem}
        handleDeleteItem={fccHandleDeleteItem}
      />
      <Outlet />
    </>
  );
};

export default FoliarCC;
