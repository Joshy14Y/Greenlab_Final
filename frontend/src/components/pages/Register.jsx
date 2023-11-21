import { useState } from "react";
import { SignInForm } from "../forms/UserForms";
import axios from "axios";

const Register = () => {
  // Estructura predeterminada para los datos de registro
  const defaultRegistration = {
    name: "",
    employee_id: "",
    phone: "",
    email: "",
    password: "",
  };

  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [actualLogin, setActualLogin] = useState(defaultRegistration);

  const API_URL = "http://localhost:3000/api/user/register";

  // Función para manejar el envío del formulario de registro
  const handleFormSubmit = async () => {
    // Validar los datos del formulario antes de enviar
    if (actualLogin.password !== passwordConfirm) {
      alert("Password and password confirmation do not match");
      return;
    }

    try {
      // Enviar una solicitud al servidor para registrar al usuario usando Axios
      const response = await axios.post(API_URL, actualLogin);
      // Manejar la respuesta según sea necesario
      console.log(response.data);
      // Redirigir a la página deseada después de un registro exitoso
      navigate("/analisis/foliar/qc");
    } catch (error) {
      console.error("Error registering user:", error);
      // Manejar la retroalimentación de error al usuario, por ejemplo, mostrar un mensaje de error
    }
  };

  return (
    // Renderizar el formulario de registro
    <SignInForm
      actualForm={actualLogin}
      setActualForm={setActualLogin}
      passwordConfirm={passwordConfirm}
      setPasswordConfirm={setPasswordConfirm}
      onSubmit={handleFormSubmit}
    />
  );
};

export default Register;
