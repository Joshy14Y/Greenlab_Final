import axios from "axios";
import moment from "moment/moment";

// Función genérica para obtener datos
export const fetchData = async (apiUrl, setFunction) => {
  try {
    const response = await axios.get(apiUrl);
    setFunction(response.data);
  } catch (error) {
    console.error(`Error al obtener datos de ${apiUrl}`, error);
  }
};

// Función genérica para agregar o editar un elemento
export const handleAddEditItem = async (apiUrl, item, isEditing, fetchFunction, setFunction, editFlagFunction,) => {
  try {
    if (isEditing) {
      await axios.put(`${apiUrl}/${item.lab_id}`, item);
    } else {
      await axios.post(apiUrl, item);
    }
    fetchFunction();
    setFunction();
    editFlagFunction();
  } catch (error) {
    console.error(`Error al agregar o actualizar el elemento: `, error);
  }
};

// Función para manejar la edición de un elemento
export const handleEdit = (item, setActualItem, setIsEditing) => {
  setActualItem(item);
  setIsEditing(true);
};

// Función para manejar la eliminación de un elemento
export const handleDelete = async (apiUrl, id, fetchFunction) => {
  try {
    await axios.delete(`${apiUrl}/${id}`);
    fetchFunction();
  } catch (error) {
    console.error(`Error al eliminar el elemento con ID ${id}`, error);
  }
};

// Función para manejar la cancelación de la operación actual
export const handleCancel = (setActualItem, setIsEditing, defaultItem) => {
  setActualItem(defaultItem);
  setIsEditing(false);
};

export const handleInputChange = (fieldName, setState) => (e) => {
  const {value, type, checked} = e.target;

  setState((prevForm) => {

    const updatedForm = {
      ...prevForm, [fieldName]: type === 'checkbox' ? checked : value,
    };
    console.log(updatedForm)
    return updatedForm;  // Devuelve el formulario actualizado
  });
};

// Función para dar formato a los datos de un elemento
export const formatItemData = (item) => ({
  ...item, date: moment(item.date).format('YYYY-MM-DD'),
});