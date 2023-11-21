import { useState, useEffect } from "react";
import { Row, Col, Form, Card, Button, Image } from "react-bootstrap";
import { Outlet } from "react-router";
import {
  labelStyle,
  inputStyle,
  buttonStyle,
  colors,
  titleStyle,
} from "../utils/global.js";
import { handleInputChange } from "../utils/EffectFunctions.jsx";
import { Link } from "react-router-dom";

// Componente reutilizable para un campo de entrada en el formulario de inicio de sesión
const LoginInput = (props) => {
  const {
    labelBP = "auto",
    lblStyle = labelStyle,
    label,
    inputType,
    inpStyle = inputStyle,
    value,
    fieldName,
    setFunction,
    onChange = (e) => handleInputChange(fieldName, setFunction)(e),
  } = props;

  return (
    <Row className="mb-2 align-items-center">
      <Form.Label xs={labelBP} column style={lblStyle}>
        {label}
      </Form.Label>
      <Col>
        <Form.Control
          size="sm"
          className="rounded-pill"
          type={inputType}
          style={inpStyle}
          value={value}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};

// Componente para el formulario de inicio de sesión
export const LoginForm = (props) => {
  const { actualForm, setActualForm, onSubmit } = props;

  return (
    <>
      <Card className="border-5 rounded-5 mx-auto col-7 col-md-6 col-lg-5 col-xl-4 col-xxl-3 mt-5">
        <Form.Label className="text-center my-2" style={titleStyle}>
          Login
        </Form.Label>
        <Form className="mx-3 mb-3">
          <LoginInput
            label="Correo"
            inputType="email"
            value={actualForm.email}
            fieldName="email"
            setFunction={setActualForm}
          />
          <LoginInput
            label="Contraseña"
            inputType="password"
            value={actualForm.password}
            fieldName="password"
            setFunction={setActualForm}
          />
          <Row className="justify-content-center">
            <Button
              as={Col}
              xs="auto"
              size="sm"
              className="rounded-pill px-4 button"
              style={buttonStyle(colors.lightBlue, colors.darkBlue)}
              onClick={onSubmit}
            >
              Ingresar
            </Button>
          </Row>
          <hr />
          <Row>
            <Form.Label className="text-center" style={labelStyle}>
              Ingreso con Fotografía
            </Form.Label>
          </Row>
          <Row xs="auto" className="justify-content-center">
            <Col>
              <Form.Control
                size="sm"
                className="rounded-pill"
                type="file"
                style={buttonStyle(colors.lightPurple, colors.darkPurple)}
              />
            </Col>
          </Row>
          <hr />
          <Row>
            <Form.Label className="text-center" style={labelStyle}>
              ¿No tienes una cuenta?
            </Form.Label>
          </Row>
          <Row className="justify-content-center">
            <Button
              as={Col}
              xs="auto"
              size="sm"
              className="rounded-pill px-4"
              style={buttonStyle(colors.lightOrange, colors.darkOrange)}
            >
              <Link
                to="/registro"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Registrarse
              </Link>
            </Button>
          </Row>
        </Form>
      </Card>
      <Outlet />
    </>
  );
};

// Componente para el formulario de registro
export const SignInForm = (props) => {
  const {
    actualForm,
    setActualForm,
    passwordConfirm,
    setPasswordConfirm,
    onSubmit,
  } = props;

  return (
    <>
      <Card className="border-5 rounded-5 mx-auto col-8 col-md-8 col-lg-8 mt-5">
        <Form.Label className="text-center my-2" style={titleStyle}>
          Registro
        </Form.Label>
        <Form className="mx-3 mb-3">
          <Row>
            {/* Left Section */}
            <Col className="mb-2">
              <LoginInput
                label="Nombre"
                inputType="text"
                value={actualForm.name}
                fieldName="name"
                setFunction={setActualForm}
              />
              <LoginInput
                label="Identificación"
                inputType="number"
                value={actualForm.employee_id}
                fieldName="employee_id"
                setFunction={setActualForm}
              />
              <LoginInput
                label="Teléfono"
                inputType="number"
                value={actualForm.phone}
                fieldName="phone"
                setFunction={setActualForm}
              />
              <LoginInput
                label="Correo"
                inputType="email"
                value={actualForm.email}
                fieldName="email"
                setFunction={setActualForm}
              />
              <LoginInput
                label="Contraseña"
                inputType="password"
                value={actualForm.password}
                fieldName="password"
                setFunction={setActualForm}
              />
              <LoginInput
                label="Confirmar Contraseña"
                inputType="password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
              <LoginInput
                label="Fotografía"
                inputType="file"
                inpStyle={buttonStyle(colors.lightPurple, colors.darkPurple)}
              />
            </Col>

            {/* Right Section */}
            <Col xs="auto">
              <Image
                src="http://placekitten.com/290/290"
                roundedCircle
                thumbnail
                fluid
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Button
              as={Col}
              xs="auto"
              size="sm"
              className="rounded-pill px-4"
              style={buttonStyle(colors.lightOrange, colors.darkOrange)}
              onClick={onSubmit}
            >
              Registrarse
            </Button>
          </Row>
        </Form>
      </Card>
      <Outlet />
    </>
  );
};
