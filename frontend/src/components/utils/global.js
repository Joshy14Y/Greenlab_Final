// Link de la API
export const APIlink = `http://localhost:3000/api`;

// Valores por defecto en estilos.
const defaultValues = {
  defaultBorderRadius: 16,
  defaultMarginBottom: 15,
  defaultMarginLeft: 12,
  defaultMarginRight: 4,
};

// Códigos de colores comunes.
export const colors = {
  turquoise: "#37949A",
  faintGrey: "rgba(216, 216, 216, 0.5)",
  //Codigo de denegar
  lightOrange: "#e69138",
  darkOrange: "#a16200",
  // Codigo de aceptar
  lightBlue: "#2098ae",
  darkBlue: "#104c57",
  // Código de tercera opción
  lightPurple: "#74448e",
  darkPurple: "#512F63",
};

// Nombres de títulos de análisis.
const analysisNames = {
  suelos: "de Suelos",
  foliar: "Foliar",
  quimicoCompleto: "Químico Completo",
  boro: " + B",
  azufre: " + S",
  txt: "TXT",
  materiaOrganica: " + MO",
};

// Tamaños y pesos de fuentes para formularios.
export const fontConstants = {
  formInputFontSize: 18,
  formInputFontWeight: 400,
  formLabelFontSize: 20,
  formLabelFontWeight: 400,
  formTitleFontSize: 35,
  formTitleFontWeight: 800,
  formSubTitleFontSize: 25,
  formSubTitleFontWeight: 600,
};

// Estilo predeterminado para títulos.
export const titleStyle = {
  fontFamily: "Roboto Slab",
  textDecoration: "none",
  fontWeight: fontConstants.formTitleFontWeight,
  fontSize: fontConstants.formTitleFontSize,
  color: "black",
};

// Estilo predeterminado para subtítulos.
export const subTitleStyle = {
  fontFamily: "Roboto Slab",
  textDecoration: "none",
  fontWeight: fontConstants.formSubTitleFontWeight,
  fontSize: fontConstants.formSubTitleFontSize,
  color: "black",
};

// Estilo predeterminado para labels.
export const labelStyle = {
  fontFamily: "Roboto Slab",
  textDecoration: "none",
  fontWeight: fontConstants.formLabelFontWeight,
  fontSize: fontConstants.formLabelFontSize,
};

// Estilo predeterminado para inputs.
export const inputStyle = {
  fontFamily: "Roboto Slab",
  textDecoration: "none",
  fontWeight: fontConstants.formInputFontWeight,
  fontSize: fontConstants.formInputFontSize,
  backgroundColor: colors.faintGrey,
};

// Estilo para botones con colores de fondo y borde personalizables.
export const buttonStyle = (bg, bc) => ({
  color: "#FFFFFF",
  backgroundColor: bg,
  border: `3px solid ${bc}`,
  borderRadius: 20,
  fontFamily: "Roboto Slab",
  fontWeight: 400,
  fontSize: 20,
});

// Función para verificar que el formulario se encuentre lleno.
export const isFormNotNull = (form) => {
  for (const key in form) {
    if (form[key].trim() === "") {
      console.log("Hay al menos un campo vacío.");
      return false;
    }
  }
  console.log("Todos los espacios están llenos.");
  return true;
};

export const GroundVerification = (groundAnalysis) => {
  let verification = false;

  if (
    (+groundAnalysis.pH > 5.5 &&
    +groundAnalysis.pH < 7) &&
    (+groundAnalysis.ext_acid < 0.5) &&
    (+groundAnalysis.calcium > 4 &&
    +groundAnalysis.calcium < 15) &&
    (+groundAnalysis.magnesium > 1 &&
    +groundAnalysis.magnesium < 6) &&
    (+groundAnalysis.potassium > 0.20 &&
    +groundAnalysis.potassium < 0.80) &&
    (+groundAnalysis.copper > 1 &&
    +groundAnalysis.copper < 20) &&
    (+groundAnalysis.manganese > 5 &&
    +groundAnalysis.manganese) < 50 &&
    (+groundAnalysis.iron > 5 &&
    +groundAnalysis.iron < 50) &&
    (+groundAnalysis.zinc > 3 &&
    +groundAnalysis.zinc < 10) &&
    (+groundAnalysis.phosphorus > 10 &&
    +groundAnalysis.phosphorus < 40)
  ) {
    verification = true;
  }

  return verification;
};
