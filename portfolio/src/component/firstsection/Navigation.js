import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Nav ,Navbar} from 'react-bootstrap';
export const Navigation = () => {
  return (
<div>
<Navbar  className='mainnav' >
    <Container>
    <Navbar.Brand href="#home">Takwa</Navbar.Brand>
    <Nav className="linls">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">about me</Nav.Link>
      <Nav.Link href="#pricing">resume</Nav.Link>
    </Nav>
    </Container>
</Navbar>

</div>
  )
}
