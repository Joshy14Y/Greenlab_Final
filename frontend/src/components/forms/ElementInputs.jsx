import { Row, Col, Form, Button, InputGroup, Container } from "react-bootstrap";
import {
  colors,
  inputStyle,
  labelStyle,
  subTitleStyle,
  buttonStyle,
} from "../utils/global.js";
import { handleInputChange } from "../utils/EffectFunctions.jsx";

export const FormInput = (props) => {
  const {
    label,
    form,
    type = "number",
    fieldName,
    setFunction,
    value = form[fieldName],
    onChange = (e) => handleInputChange(fieldName, setFunction)(e),
    readOnly = false,
  } = props;

  return (
    <InputGroup size="sm" as={Col} className="mb-1">
      <InputGroup.Text style={labelStyle}>{label}</InputGroup.Text>
      <Form.Control
        type={type}
        style={inputStyle}
        readOnly={readOnly}
        value={value}
        onChange={onChange}
      />
    </InputGroup>
  );
};

export const FormButtons = (props) => {
  const { isEditing, onCancel } = props;

  return (
    <>
      <Row xs="auto" lg="auto" className="justify-content-center my-3">
        <Button
          style={buttonStyle(colors.lightBlue, colors.darkBlue)}
          className="mx-5 px-5 rounded-pill"
          type="submit"
        >
          {isEditing ? "Actualizar" : "Agregar"}
        </Button>
        {isEditing && (
          <Button
            style={buttonStyle(colors.lightPurple, colors.darkPurple)}
            className="mx-5 px-5 rounded-pill"
            onClick={onCancel}
          >
            Cancelar
          </Button>
        )}
      </Row>
    </>
  );
};

// Complete Chemical Elements
export const KInput = ({ actualForm, setActualForm }) => (
  <FormInput
    label="K"
    form={actualForm}
    fieldName="potassium"
    setFunction={setActualForm}
  />
);
export const CaInput = ({ actualForm, setActualForm }) => (
  <FormInput
    label="Ca"
    form={actualForm}
    fieldName="calcium"
    setFunction={setActualForm}
  />
);
export const MgInput = ({ actualForm, setActualForm }) => (
  <FormInput
    label="Mg"
    form={actualForm}
    fieldName="magnesium"
    setFunction={setActualForm}
  />
);
export const PInput = ({ actualForm, setActualForm }) => (
  <FormInput
    label="P"
    form={actualForm}
    fieldName="phosphorus"
    setFunction={setActualForm}
  />
);
export const CuInput = ({ actualForm, setActualForm }) => (
  <FormInput
    label="Cu"
    form={actualForm}
    fieldName="copper"
    setFunction={setActualForm}
  />
);
export const MnInput = ({ actualForm, setActualForm }) => (
  <FormInput
    label="Mn"
    form={actualForm}
    fieldName="manganese"
    setFunction={setActualForm}
  />
);
export const ZnInput = ({ actualForm, setActualForm }) => (
  <FormInput
    label="Zn"
    form={actualForm}
    fieldName="zinc"
    setFunction={setActualForm}
  />
);
export const FeInput = ({ actualForm, setActualForm }) => (
  <FormInput
    label="Fe"
    form={actualForm}
    fieldName="iron"
    setFunction={setActualForm}
  />
);

// Foliar Elements
export const NTotalInput = ({ actualForm, setActualForm }) => (
  <FormInput
    label="N-total"
    form={actualForm}
    fieldName="n_total"
    setFunction={setActualForm}
  />
);
export const ProteinInput = ({ actualForm, setActualForm }) => (
  <FormInput
    label="Proteína"
    form={actualForm}
    fieldName="protein"
    setFunction={setActualForm}
  />
);

// Ground Elements
export const PHInput = ({ actualForm, setActualForm }) => (
  <FormInput
    label="pH"
    fieldName="pH"
    form={actualForm}
    setFunction={setActualForm}
  />
);
export const AcidExtInput = ({ actualForm, setActualForm }) => (
  <FormInput
    label="Acidez ext."
    form={actualForm}
    fieldName="ext_acid"
    setFunction={setActualForm}
  />
);

// Organic Matter (Nitrogen)
export const NInput = ({ actualForm, setActualForm }) => (
  <FormInput
    label="N"
    form={actualForm}
    fieldName="nitrogen"
    setFunction={setActualForm}
  />
);

// Sulfur Elements
export const CInput = ({ actualForm, setActualForm }) => (
  <FormInput
    label="C"
    form={actualForm}
    fieldName="carbon"
    setFunction={setActualForm}
  />
);
export const SInput = ({ actualForm, setActualForm }) => (
  <FormInput
    label="S"
    form={actualForm}
    fieldName="sulfur"
    setFunction={setActualForm}
  />
);

// Boron Elements
export const BInput = ({ actualForm, setActualForm }) => (
  <FormInput
    label="B"
    form={actualForm}
    fieldName="boron"
    setFunction={setActualForm}
  />
);

// Texture Elements
export const SandInput = ({ actualForm, setActualForm }) => (
  <FormInput
    label="Arena"
    form={actualForm}
    fieldName="sand"
    setFunction={setActualForm}
  />
);
export const ClayInput = ({ actualForm, setActualForm }) => (
  <FormInput
    label="Arcilla"
    form={actualForm}
    fieldName="clay"
    setFunction={setActualForm}
  />
);
export const SiltInput = ({ actualForm, setActualForm }) => (
  <FormInput
    label="Limo"
    form={actualForm}
    fieldName="silt"
    setFunction={setActualForm}
  />
);
export const TexturalNameInput = ({ actualForm, setActualForm }) => (
  <FormInput
    label="Nombre Textural"
    type="text"
    form={actualForm}
    fieldName="txt_name"
    setFunction={setActualForm}
  />
);

// ID Elements
export const HeaderIDInput = ({ actualForm, setActualForm }) => (
  <FormInput
    label="Encabezado"
    form={actualForm}
    type="text"
    fieldName="header_id"
    setFunction={setActualForm}
  />
);
export const FieldIDInput = ({ actualForm, setActualForm }) => (
  <FormInput
    label="Campo"
    form={actualForm}
    type="text"
    fieldName="field_id"
    setFunction={setActualForm}
  />
);
export const LabIDInput = ({ actualForm, setActualForm }) => (
  <FormInput
    label="Laboratorio"
    form={actualForm}
    type="text"
    fieldName="lab_id"
    setFunction={setActualForm}
  />
);

// Form Operations

// Ground CC Ops
export const CaMgOp = ({ actualForm }) => {
  return (
    <FormInput
      label="Ca/Mg"
      readOnly={true}
      value={(+actualForm.calcium / (+actualForm.magnesium || 1)).toFixed(3)}
    />
  );
};
export const CaKOp = ({ actualForm }) => {
  return (
    <FormInput
      label="Ca/K"
      readOnly={true}
      value={(+actualForm.calcium / (+actualForm.potassium || 1)).toFixed(3)}
    />
  );
};
export const MgKOp = ({ actualForm }) => {
  return (
    <FormInput
      label="Mg/K"
      readOnly={true}
      value={(+actualForm.magnesium / (+actualForm.potassium || 1)).toFixed(3)}
    />
  );
};
export const CaMgKOp = ({ actualForm }) => {
  return (
    <FormInput
      label="(Ca+Mg)/K"
      readOnly={true}
      value={(
        +actualForm.calcium +
        +actualForm.magnesium / (+actualForm.potassium || 1)
      ).toFixed(3)}
    />
  );
};
export const CICEOp = ({ actualForm }) => {
  return (
    <FormInput
      label="C.I.C.E"
      readOnly={true}
      value={(
        +actualForm.ext_acid +
        +actualForm.calcium +
        +actualForm.magnesium +
        +actualForm.potassium
      ).toFixed(3)}
    />
  );
};
export const AcidSatOp = ({ actualForm }) => {
  return (
    <FormInput
      label="% Sat. Acidez"
      readOnly={true}
      value={(
        (+actualForm.ext_acid /
          (+actualForm.ext_acid +
            +actualForm.calcium +
            +actualForm.magnesium +
            +actualForm.potassium || 1)) *
        100
      ).toFixed(3)}
    />
  );
};
export const GroCCOps = ({ actualForm }) => (
  <>
    <Row className="mb-1">
      <CaMgOp actualForm={actualForm} />
      <CaKOp actualForm={actualForm} />
      <MgKOp actualForm={actualForm} />
      <CaMgKOp actualForm={actualForm} />
    </Row>
    <Row className="mb-1">
      <CICEOp actualForm={actualForm} />
      <AcidSatOp actualForm={actualForm} />
    </Row>
  </>
);

// Organic Matter Ops
export const CNROp = ({ actualForm }) => {
  return (
    <FormInput
      label="Relación C/N"
      readOnly={true}
      value={(+actualForm.carbon / (+actualForm.nitrogen || 1)).toFixed(3)}
    />
  );
};
export const OMOp = ({ actualForm }) => {
  return (
    <FormInput
      label="Materia Orgánica"
      readOnly={true}
      value={(+actualForm.nitrogen * 1.724).toFixed(3)}
    />
  );
};
export const OMOps = ({ actualForm }) => (
  <>
    <Row className="mb-1">
      <CNROp actualForm={actualForm} />
      <OMOp actualForm={actualForm} />
    </Row>
  </>
);
