import { marcas } from '../data/data.js';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function NavbarComponente() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">NovaTech Mobile</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto d-flex align-items-center gap-3">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/quienessomos">Quienes Somos</Nav.Link>
            <NavDropdown title="Productos" id="productos-dropdown">
              <NavDropdown.Item
                key={0}
                as={Link}
                to={`/productos`}
              >
                Ver todos
              </NavDropdown.Item>
              {marcas.map((marca) => (
                <NavDropdown.Item
                  key={marca.id}
                  as={Link}
                  to={`/productos/${marca.id}`}
                >
                  {marca.nombre}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponente;
