import { marcas } from '../data/data.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavbarComponente() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">📱 MiTienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/quienessomos">Quienes Somos</Nav.Link>
            <NavDropdown title="Productos" id="productos-dropdown">
                {marcas.map((marca) => (
                <NavDropdown.Item  key={marca.id} as={Link} to="/productos?marca=apple">{marca.nombre}</NavDropdown.Item> ))}
              <NavDropdown.Item as={Link} to="/productos?marca=apple">Apple</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos?marca=samsung">Samsung</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos?marca=xiaomi">Xiaomi</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos?marca=motorola">Motorola</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <ul>
      
    </ul>
    </>
  );
}

export default NavbarComponente;
