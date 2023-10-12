import React from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  return (

    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>CRUD in Redux-ToolKit with Redux-Thunk!</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button variant="success" onClick={() => { navigate('/add') }}>AddUser</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default Header