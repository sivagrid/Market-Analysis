import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import './SiteHeader.scss';

const SiteHeader = () => {
  return (
    <div className="global-header bg-light">
      <div className="global-nav-content">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Market Analysis</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">SGX Nifty</Nav.Link>
                <Nav.Link href="#link">Nifty Features</Nav.Link>
                <Nav.Link href="#link">DOW Features</Nav.Link>
                <Nav.Link href="#link">S&P Features</Nav.Link>
                <Nav.Link href="#link">DAX Features</Nav.Link>
                <Nav.Link href="#link">News</Nav.Link>
                <Nav.Link href="#link">Reports</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  )
}

export default SiteHeader;