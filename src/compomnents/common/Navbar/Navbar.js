
import Button from 'react-bootstrap/Button';

// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
  <div className='mainleft'>
    <div className='appbar'>
    <Navbar  bg="" expand="lg">
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href=""><b>Delivery</b></Nav.Link>
            <Nav.Link href=""><b>Pick-Up</b></Nav.Link>
         
         
          </Nav>
          <div className='search'>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
                   <Button className='search123'  variant="outline-info">Search</Button>{' '}


          </Form>

          </div>
        </Navbar.Collapse>
      </Container>

    </Navbar>
    

    
    </div>
 
    </div>
  );
}

export default NavScrollExample;