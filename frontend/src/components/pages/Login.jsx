import { useState } from "react";
import { LoginForm } from "../forms/UserForms";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // Estructura predeterminada para los datos de inicio de sesión
  const defaultLogin = {
    // Datos de login
    email: "",
    password: "",
  };

  const [actualLogin, setActualLogin] = useState(defaultLogin);
  const API_URL = "http://localhost:3000/api/user/login";
  const navigate = useNavigate();

  // Función para manejar el envío del formulario de inicio de sesión
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("API");
    try {
      // Realizar la solicitud de inicio de sesión a la API
      const response = await axios.post(API_URL, actualLogin);
      console.log("Login response:", response.data);

       // Redirigir a la página deseada después de un inicio de sesión exitoso
      navigate("/analisis/foliar/qc");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    // Renderizar el formulario de inicio de sesión
    <LoginForm
      actualForm={actualLogin}
      setActualForm={setActualLogin}
      onSubmit={handleSubmit}
    />
  );
};

export default Login;
