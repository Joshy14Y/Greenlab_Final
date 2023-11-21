import React from "react";
import {
  NavDropdown,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarOffcanvas,
  NavbarToggle,
  NavLink,
  OffcanvasBody,
  OffcanvasHeader,
  OffcanvasTitle,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const NavMenu = () => {
  // Style for the navbar
  const navMenuStyle = {
    backgroundColor: "#50A85E",
    color: "#50A85E",
  };

  // Style for the title in the navbar
  const titleStyle = {
    color: "#000000",
    fontFamily: "Roboto Slab",
    fontWeight: 800,
    fontSize: 25,
  };

  // Style for the navigation links
  const navLinkStyle = {
    color: "#000000",
    fontFamily: "Roboto Slab",
    fontWeight: 400,
    fontSize: 20,
  };

  const navMenuTitle = "Laboratorio de Análisis Agroquímicos";
  const size = "lg";

  return (
    <>
      {/* Navigation bar */}
      <Navbar key={size} expand={size} className="mb-3" style={navMenuStyle}>
        <Container fluid>
          {/* Navbar brand */}
          <NavbarBrand href="#" style={titleStyle}>
            {navMenuTitle}
          </NavbarBrand>
          {/* Navbar toggle button for small screens */}
          <NavbarToggle aria-controls={`offcanvasNavbar-expand-${size}`} />
          {/* Offcanvas component for the offcanvas navigation */}
          <NavbarOffcanvas
            id={`offcanvasNavbar-expand-${size}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${size}`}
            placement="start"
            style={navMenuStyle}
          >
            {/* Offcanvas header with close button */}
            <OffcanvasHeader closeButton>
              <OffcanvasTitle
                id={`offcanvasNavbarLabel-expand-${size}`}
                style={titleStyle}
              >
                {navMenuTitle}
              </OffcanvasTitle>
            </OffcanvasHeader>
            {/* Offcanvas body containing navigation links */}
            <OffcanvasBody>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/login" style={navLinkStyle}>Login</Nav.Link>
                <NavDropdown title="Formularios" id="basic-nav-dropdown" style={navLinkStyle}>
                  <NavDropdown.Item href="/analisis/foliar/qc">Foliar QC</NavDropdown.Item>
                  <NavDropdown.Item href="/analisis/foliar/qcbs">Foliar QC + B + S</NavDropdown.Item>
                  <NavDropdown.Divider/>
                  <NavDropdown.Item href="/analisis/suelos/qc">Suelos QC</NavDropdown.Item>
                  <NavDropdown.Item href="/analisis/suelos/qcmo">Suelos QC + MO</NavDropdown.Item>
                  <NavDropdown.Item href="/analisis/suelos/qctxt">Selos QC + TXT</NavDropdown.Item>                
                </NavDropdown>
              </Nav>
            </OffcanvasBody>
          </NavbarOffcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavMenu;
