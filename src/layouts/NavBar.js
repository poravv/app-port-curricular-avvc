
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';

const NavBarV1 = () => {
    return (
        <>
            <header>
                <Navbar fixed="absolute" className='navBg' variant='dark' expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to='/'>Inicio</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">

                            <Nav className="me-auto">
                                <Nav.Link as={Link} to='/SobreMi' >Sobre mi</Nav.Link>
                                <Nav.Link as={Link} to='/Experiencias' >Experiencias</Nav.Link>
                                <Nav.Link as={Link} to='/Conocimientos' >Conocimientos</Nav.Link>
                                <Nav.Link as={Link} to='/Estudios' >Estudios</Nav.Link>
                                <Nav.Link as={Link} to='/Capacitaciones' >Capacitaciones</Nav.Link>
                                <Nav.Link as={Link} to='/Contactos' >Contactos</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            <Outlet></Outlet>
        </>
    );
}

export default NavBarV1;