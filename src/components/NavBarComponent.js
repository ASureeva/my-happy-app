import React from "react";
import '../style.css'
import {Container} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';


const NavBarComponent = (() => {
    return (
        <Container>
        <Navbar  fixed="top" expand='lg' className="bg-body-tertiary" bg="myColor"> 
          <Container>
            <Navbar.Brand href="#"><div className="navText">Домик</div></Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
)
});

export default NavBarComponent;