import { useState, useEffect } from "react";
import {
  Row,
  Col,
  Form,
  FormGroup,
  FormSelect,
  InputGroup,
} from "react-bootstrap";
import { Outlet } from "react-router";
import { fontConstants, subTitleStyle, labelStyle } from "../utils/global.js";

const Header = () => {
  return (
    <>
      <Form.Group className="mb-1">
        <Form.Label style={subTitleStyle}>Datos del Cliente</Form.Label>

        <Row>
          <Form.Label sm="1" column style={labelStyle}>
            Cliente:
          </Form.Label>
          <Col sm="3">
            <Form.Control plaintext readOnly />
          </Col>
          <Form.Label sm="1" column style={labelStyle}>
            Empleado:
          </Form.Label>
          <Col sm="3">
            <Form.Control plaintext readOnly />
          </Col>
          <Form.Label sm="1" column style={labelStyle}>
            Fecha:
          </Form.Label>
          <Col sm="3">
            <Form.Control plaintext readOnly />
          </Col>
        </Row>

        <Row>
          <Form.Label sm="1" column style={labelStyle}>
            Provincia:
          </Form.Label>
          <Col sm="3">
            <Form.Control plaintext readOnly />
          </Col>
          <Form.Label sm="1" column style={labelStyle}>
            Cantón:
          </Form.Label>
          <Col sm="3">
            <Form.Control plaintext readOnly />
          </Col>
          <Form.Label sm="1" column style={labelStyle}>
            Empleado:
          </Form.Label>
          <Col sm="3">
            <Form.Control plaintext readOnly />
          </Col>
        </Row>

        <Row>
          <Form.Label sm="2" column style={labelStyle}>
            ID de Encabezado:
          </Form.Label>
          <Col sm="2">
            <Form.Control />
          </Col>
          <Form.Label sm="2" column style={labelStyle}>
            ID de Laboratorio:
          </Form.Label>
          <Col sm="2">
            <Form.Control />
          </Col>
          <Form.Label sm="2" column style={labelStyle}>
            ID de Campo:
          </Form.Label>
          <Col sm="2">
            <Form.Control />
          </Col>
        </Row>
      </Form.Group>

      <Outlet />
    </>
  );
};

export default Header;
