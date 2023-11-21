import React from "react";
import { Table, Button, Form } from "react-bootstrap";
import { colors, labelStyle, subTitleStyle } from "../utils/global.js";

const DataTable = (props) => {
  const { data, columns, rowKey, handleEditItem, handleDeleteItem } = props;

  // Styles for table header, body, and buttons
  const headerStyle = {
    color: "#171717",
    fontFamily: "Roboto Slab",
    fontWeight: 600,
    fontSize: 18,
  };

  const bodyStyle = {
    color: "#171717",
    fontFamily: "Roboto Slab",
    fontWeight: 400,
    fontSize: 16,
  };

  // Function to dynamically generate button styles
  const buttonStyle = (bg, bc) => ({
    color: "#FFFFFF",
    backgroundColor: bg,
    border: `3px solid ${bc}`,
    fontFamily: "Roboto Slab",
    fontWeight: 400,
  });

  // Function to render cell content based on data type
  const renderTableCell = (value) => {
    if (value instanceof Date) {
      return value.toLocaleDateString();
    } else if (typeof value === "boolean") {
      return value ? "Yes" : "No";
    } else {
      return String(value);
    }
  };

  return (
    <>
      <Form.Label className="mx-3" style={subTitleStyle}>
        Historial
      </Form.Label>
      {/* Table component from react-bootstrap */}
      <Table
        style={{ border: "#b6b8b6" }}
        responsive
        striped
        bordered
        hover
        size="sm"
        className="mx-3"
      >
        {/* Table header */}
        <thead>
          <tr style={headerStyle}>
            {/* Map through columns to create header cells */}
            {columns.map((columnTitle) => (
              <th key={columnTitle}>{columnTitle}</th>
            ))}
            <th>Opciones</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody style={bodyStyle}>
          {/* Map through data to create rows */}
          {data.map((item) => (
            <tr key={item[rowKey]}>
              {/* Map through columns to create cells */}
              {Object.values(item).map((value, index) => (
                <td key={index}>{renderTableCell(value)}</td>
              ))}
              {/* Options column with Edit and Delete buttons */}
              <td>
                <div className="d-flex justify-content-center">
                  {/* Edit button */}
                  <Button
                    style={buttonStyle(colors.lightBlue, colors.darkBlue)}
                    variant="primary"
                    size="sm"
                    className="me-2 rounded-pill"
                    onClick={() => handleEditItem(item)}
                  >
                    Editar
                  </Button>
                  {/* Delete button */}
                  <Button
                    style={buttonStyle(colors.lightOrange, colors.darkOrange)}
                    variant="danger"
                    size="sm"
                    className="me-2 rounded-pill"
                    onClick={() => handleDeleteItem(item[rowKey])}
                  >
                    Borrar
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default DataTable;
