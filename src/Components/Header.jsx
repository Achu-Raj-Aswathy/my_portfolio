import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar expand="lg" className="position-fixed top-0 w-100 " style={{ zIndex: "1" }}>
                <Container>
                    {/* <Navbar.Brand href="#home" className='text-dark'>
                        <h2 style={{ fontWeight: "bolder" }}>PORTFOLIO</h2>
                    </Navbar.Brand> */}

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href='#about' className='me-4 text-dark' style={{ width: "100px" }}>
                                <h4 className='headerClass'>About</h4>
                            </Nav.Link>
                            <Nav.Link href='#skills' className='me-4 text-dark' style={{ width: "100px" }}>
                                <h4 className='headerClass'>Skills</h4>
                            </Nav.Link>
                            <Nav.Link href='#projects' className='me-4 text-dark' style={{ width: "100px" }}>
                                <h4 className='headerClass'>Projects</h4>
                            </Nav.Link>
                            <Nav.Link href='#contact' className='me-4 text-dark' style={{ width: "100px" }}>
                                <h4 className='headerClass'>Contact</h4>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header