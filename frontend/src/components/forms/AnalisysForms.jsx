import { Row, Col, Form } from "react-bootstrap";
import { APIlink, labelStyle, subTitleStyle } from "../utils/global.js";
import {
  KInput,
  CaInput,
  MgInput,
  PInput,
  CuInput,
  MnInput,
  ZnInput,
  FeInput,
  NTotalInput,
  ProteinInput,
  PHInput,
  AcidExtInput,
  CInput,
  SInput,
  BInput,
  SandInput,
  ClayInput,
  SiltInput,
  NInput,
  HeaderIDInput,
  FieldIDInput,
  LabIDInput,
  GroCCOps,
  OMOps,
  TexturalNameInput,
} from "./ElementInputs";

export const formLinks = {
  foliarCC: `${APIlink}/analisis/foliar/qc`,
  foliarCCBS: `${APIlink}/analisis/foliar/qcbs`,
  groundCC: `${APIlink}/analisis/suelos/qc`,
  groundCCOM: `${APIlink}/analisis/suelos/qcmo`,
  groundCCTXT: `${APIlink}/analisis/suelos/qctxt`,
};

// ID Form
export const IDForm = (props) => {
  const { actualForm, setActualForm } = props;

  return (
    <>
      <Form.Label as={Col} style={labelStyle}>
        IDs
      </Form.Label>
      <Row className="mb-3">
        <HeaderIDInput actualForm={actualForm} setActualForm={setActualForm} />
        <FieldIDInput actualForm={actualForm} setActualForm={setActualForm} />
        <LabIDInput actualForm={actualForm} setActualForm={setActualForm} />
      </Row>
    </>
  );
};

// Foliar Chemical Complete Form
export const FolCCForm = (props) => {
  const { actualForm, setActualForm } = props;

  return (
    <>
      <Form.Label as={Col} style={subTitleStyle}>
        Análisis Foliar QC
      </Form.Label>
      <IDForm actualForm={actualForm} setActualForm={setActualForm} />
      <Form.Label as={Col} style={labelStyle}>
        %m/m
      </Form.Label>
      <Row className="mb-1">
        <NTotalInput actualForm={actualForm} setActualForm={setActualForm} />
        <ProteinInput actualForm={actualForm} setActualForm={setActualForm} />
      </Row>
      <Form.Label as={Col} style={labelStyle}>
        %m/v
      </Form.Label>
      <Row className="mb-1">
        <KInput actualForm={actualForm} setActualForm={setActualForm} />
        <CaInput actualForm={actualForm} setActualForm={setActualForm} />
        <MgInput actualForm={actualForm} setActualForm={setActualForm} />
        <PInput actualForm={actualForm} setActualForm={setActualForm} />
      </Row>
      <Form.Label as={Col} style={labelStyle}>
        mg/L
      </Form.Label>
      <Row className="mb-1">
        <CuInput actualForm={actualForm} setActualForm={setActualForm} />
        <MnInput actualForm={actualForm} setActualForm={setActualForm} />
        <FeInput actualForm={actualForm} setActualForm={setActualForm} />
        <ZnInput actualForm={actualForm} setActualForm={setActualForm} />
      </Row>
    </>
  );
};

// Foliar Chemical Complete + B + S Form
export const FolCCBSForm = (props) => {
  const { actualForm, setActualForm } = props;

  return (
    <>
      <Form.Label as={Col} style={subTitleStyle}>
        Análisis Foliar QC + B+ S
      </Form.Label>
      <IDForm actualForm={actualForm} setActualForm={setActualForm} />
      <Form.Label style={labelStyle}>%m/m</Form.Label>
      <Row className="mb-1">
        <NTotalInput actualForm={actualForm} setActualForm={setActualForm} />
        <ProteinInput actualForm={actualForm} setActualForm={setActualForm} />
        <CInput actualForm={actualForm} setActualForm={setActualForm} />
        <SInput actualForm={actualForm} setActualForm={setActualForm} />
      </Row>
      <Form.Label style={labelStyle}>%m/v</Form.Label>
      <Row className="mb-1">
        <KInput actualForm={actualForm} setActualForm={setActualForm} />
        <CaInput actualForm={actualForm} setActualForm={setActualForm} />
        <MgInput actualForm={actualForm} setActualForm={setActualForm} />
        <PInput actualForm={actualForm} setActualForm={setActualForm} />
      </Row>
      <Form.Label style={labelStyle}>mg/L</Form.Label>
      <Row className="mb-1">
        <CuInput actualForm={actualForm} setActualForm={setActualForm} />
        <MnInput actualForm={actualForm} setActualForm={setActualForm} />
        <FeInput actualForm={actualForm} setActualForm={setActualForm} />
        <ZnInput actualForm={actualForm} setActualForm={setActualForm} />
        <BInput actualForm={actualForm} setActualForm={setActualForm} />
      </Row>
    </>
  );
};

// Ground Chemical Complete Form
export const GroCCForm = (props) => {
  const { actualForm, setActualForm } = props;

  return (
    <>
      <Form.Label as={Col} style={subTitleStyle}>
        Análisis Suelos QC
      </Form.Label>
      <IDForm actualForm={actualForm} setActualForm={setActualForm} />
      <PHInput actualForm={actualForm} setActualForm={setActualForm} />
      <Form.Label style={labelStyle}>cmol(+)/L</Form.Label>
      <Row className="mb-1">
        <AcidExtInput actualForm={actualForm} setActualForm={setActualForm} />
        <CaInput actualForm={actualForm} setActualForm={setActualForm} />
        <MgInput actualForm={actualForm} setActualForm={setActualForm} />
        <KInput actualForm={actualForm} setActualForm={setActualForm} />
      </Row>
      <Form.Label style={labelStyle}>mg/L</Form.Label>
      <Row className="mb-1">
        <CuInput actualForm={actualForm} setActualForm={setActualForm} />
        <MnInput actualForm={actualForm} setActualForm={setActualForm} />
        <FeInput actualForm={actualForm} setActualForm={setActualForm} />
        <ZnInput actualForm={actualForm} setActualForm={setActualForm} />
        <PInput actualForm={actualForm} setActualForm={setActualForm} />
      </Row>
      <Form.Label style={labelStyle}>Cálculos</Form.Label>
      <GroCCOps actualForm={actualForm} />
    </>
  );
};

// Ground Chemical Complete + Organic Matter Form
export const GroCCOMForm = (props) => {
  const { actualForm, setActualForm } = props;

  return (
    <>
      <Form.Label as={Col} style={subTitleStyle}>
        Análisis Suelos QC + MO
      </Form.Label>
      <IDForm actualForm={actualForm} setActualForm={setActualForm} />
      <PHInput actualForm={actualForm} setActualForm={setActualForm} />
      <Form.Label style={labelStyle}>cmol(+)/L</Form.Label>
      <Row className="mb-1">
        <AcidExtInput actualForm={actualForm} setActualForm={setActualForm} />
        <CaInput actualForm={actualForm} setActualForm={setActualForm} />
        <MgInput actualForm={actualForm} setActualForm={setActualForm} />
        <KInput actualForm={actualForm} setActualForm={setActualForm} />
      </Row>
      <Form.Label style={labelStyle}>mg/L</Form.Label>
      <Row className="mb-1">
        <CuInput actualForm={actualForm} setActualForm={setActualForm} />
        <MnInput actualForm={actualForm} setActualForm={setActualForm} />
        <FeInput actualForm={actualForm} setActualForm={setActualForm} />
        <ZnInput actualForm={actualForm} setActualForm={setActualForm} />
        <PInput actualForm={actualForm} setActualForm={setActualForm} />
      </Row>
      <Form.Label style={labelStyle}>%m/m</Form.Label>
      <Row className="mb-1">
        <NInput actualForm={actualForm} setActualForm={setActualForm} />
        <CInput actualForm={actualForm} setActualForm={setActualForm} />
        <SInput actualForm={actualForm} setActualForm={setActualForm} />
      </Row>
      <Form.Label style={labelStyle}>Cálculos</Form.Label>
      <GroCCOps actualForm={actualForm} />
      <OMOps actualForm={actualForm} />
    </>
  );
};

// Ground Chemical Complete + Texture Form
export const GroCCTXTForm = (props) => {
  const { actualForm, setActualForm } = props;

  return (
    <>
      <Form.Label as={Col} style={subTitleStyle}>
        Análisis Suelos QC + TXT
      </Form.Label>
      <IDForm actualForm={actualForm} setActualForm={setActualForm} />
      <PHInput actualForm={actualForm} setActualForm={setActualForm} />
      <Form.Label style={labelStyle}>cmol(+)/L</Form.Label>
      <Row className="mb-1">
        <AcidExtInput actualForm={actualForm} setActualForm={setActualForm} />
        <CaInput actualForm={actualForm} setActualForm={setActualForm} />
        <MgInput actualForm={actualForm} setActualForm={setActualForm} />
        <KInput actualForm={actualForm} setActualForm={setActualForm} />
      </Row>
      <Form.Label style={labelStyle}>mg/L</Form.Label>
      <Row className="mb-1">
        <CuInput actualForm={actualForm} setActualForm={setActualForm} />
        <MnInput actualForm={actualForm} setActualForm={setActualForm} />
        <FeInput actualForm={actualForm} setActualForm={setActualForm} />
        <ZnInput actualForm={actualForm} setActualForm={setActualForm} />
        <PInput actualForm={actualForm} setActualForm={setActualForm} />
      </Row>
      <Form.Label style={labelStyle}>%</Form.Label>
      <Row className="mb-1">
        <SandInput actualForm={actualForm} setActualForm={setActualForm} />
        <ClayInput actualForm={actualForm} setActualForm={setActualForm} />
        <SiltInput actualForm={actualForm} setActualForm={setActualForm} />
      </Row>
      <Row className="mb-1">
        <TexturalNameInput
          actualForm={actualForm}
          setActualForm={setActualForm}
        />
      </Row>
      <Form.Label style={labelStyle}>Cálculos</Form.Label>
      <GroCCOps actualForm={actualForm} />
    </>
  );
};
