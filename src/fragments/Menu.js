import React from 'react';
import "./Menu.css"
import {Navbar, Nav, Container} from 'react-bootstrap/'

var logged = true;

class Menu extends React.Component {


  render() {
 
  	return (
 
  			<Navbar className="barra-navegacion" variant="dark" expand="lg" fixed="top">
			<Container>
			<Navbar.Toggle aria-controls="basic-navbar-nav"/>
			<Navbar.Brand href="/">Home</Navbar.Brand>
	
			<Nav className="me-auto">
			<Nav.Link href="/productos">Listado Productos</Nav.Link>
            <Nav.Link href="/tiendas">Listado Tiendas</Nav.Link>
            <Nav.Link href="/usuarios">Listado Usuarios</Nav.Link>
			</Nav>
			<Nav>
		  
		  	<div className="navbar-nav ml-auto">
			<Navbar.Text>
        	Usuario:  <a>User</a>
      		</Navbar.Text>
          	</div>
        	
			</Nav>
			</Container>
			</Navbar>
 
  	)
    
  }
 
}
 
export default Menu;
 