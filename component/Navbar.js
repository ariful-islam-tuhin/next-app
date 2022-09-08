import React from 'react'
import Link from "next/link";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
// =====================


export default function NavBar() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 pb-4"
                            style={{ maxHeight: '600px' }}
                            navbarScroll
                        >
                            <NavDropdown title="Explore" id="navbarScrollingDropdown">
                                <NavDropdown.Item className='width-of-dropnav1'>
                                    <div className='row col-lg-12  nav-a-link'>
                                        <div className='col-lg-4'>
                                            <Link href="/">
                                                <p style={{ fontSize: '18px', fontWeight: '500' }}> Universities </p>
                                            </Link><br />
                                            <a style={{ color: '#f97316' }}> By Country </a> <br />
                                            <Link href="/University">
                                                <a >United State</a>
                                            </Link> <br />
                                            <Link href="/sticky">
                                                <a>Germany</a>
                                            </Link><br />
                                            <Link href="/">
                                                <a>United Kigndom</a>
                                            </Link><br />
                                            <Link href="/">
                                                <a>Canada</a>
                                            </Link><br />
                                            <Link href="/">
                                                <a>Australia</a>
                                            </Link>
                                            <br />
                                            <br />

                                            <Link href="/#">
                                                <a style={{ textDecoration: 'underline', color: '#f97316' }} target='blank'> Explore other University  </a>
                                            </Link>
                                        </div>
                                        <div className='col-lg-8'>
                                            <p style={{ fontSize: '18px', fontWeight: '500' }}>University dadline</p>
                                            <p style={{ fontSize: '16px', fontWeight: '400', overflow: 'hidden' }}>Get to know the application dadline of all <br /> course across university</p>
                                        </div>
                                    </div>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Resourse" id="navbarScrollingDropdown">
                                <NavDropdown.Item className='width-of-dropnav'>
                                    <div className='row col-lg-12  nav-a-link'>
                                        <div className='col-lg-3 ps-4'>
                                            <p style={{ fontSize: '18px', fontWeight: '500' }} className='mt-4'>Country</p>
                                            <div className='resource-study-guid' style={{ marginTop: '10px' }}>
                                                <p >United State</p>
                                                <div className='duble-link'>
                                                    <Link href="/">
                                                        <a style={{ color: '#f97316' }}>Study guide</a>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='resource-study-guid' style={{ marginTop: '10px' }}>
                                                <p>Canada</p>
                                                <div className='duble-link'>
                                                    <Link href="/">
                                                        <a style={{ color: '#f97316' }}>Study guide</a>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className='resource-study-guid' style={{ marginTop: '10px' }}>
                                                <p >Australia</p>
                                                <div className='duble-link'>
                                                    <Link href="/">
                                                        <a style={{ color: '#f97316' }}>Study guide</a>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='resource-study-guid' style={{ marginTop: '10px' }}>
                                                <p >United Kingdom</p>
                                                <div className='duble-link'>
                                                    <Link href="/">
                                                        <a style={{ color: '#f97316' }}>Study guide</a>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='resource-study-guid' style={{ marginTop: '10px' }}>
                                                <p >Germany</p>
                                                <div className='duble-link'>
                                                    <Link href="/">
                                                        <a style={{ color: '#f97316' }}>Study guide</a>
                                                    </Link>
                                                </div>
                                            </div>
                                            <br />
                                            <div className='resource-study-guid' style={{ marginTop: '10px' }}>
                                                <Link href="/">
                                                    <a style={{ textDecoration: 'underline', color: '#f97316' }} className="ms-1"> View All country guide </a>
                                                </Link>
                                            </div>
                                        </div>
                                        {/* ==================== */}
                                        <div className='col-lg-3 ps-4'>
                                            <p style={{ fontSize: '18px', fontWeight: '500' }} className='mt-4'>Courses</p>
                                            <div className='resource-study-guid' style={{ marginTop: '20px' }}>
                                                {/* <Link href="/">
                                                    <a style={{ color: '#f97316' }}>Masters</a>
                                                </Link> */}
                                                <p style={{ color: '#f97316' }}>Masters</p>
                                                <p>Computer Science </p>
                                                <div className='duble-link'>
                                                    <Link href="/">
                                                        <a style={{ color: '#f97316' }}>University</a>
                                                    </Link>
                                                    <span style={{ marginTop: '-20px', color: '#f97316' }}>|</span>
                                                    <Link href="/">
                                                        <a style={{ color: '#f97316' }}>Guide</a>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='resource-study-guid' style={{ marginTop: '10px' }}>
                                                <p>MBA </p>
                                                <div className='duble-link'>
                                                    <Link href="/">
                                                        <a style={{ color: '#f97316' }}>University</a>
                                                    </Link>
                                                    <span style={{ marginTop: '-20px', color: '#f97316' }}>|</span>
                                                    <Link href="/">
                                                        <a style={{ color: '#f97316' }}>Guide</a>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='resource-study-guid' style={{ marginTop: '10px' }}>
                                                <p>Electrical Engineering </p>
                                                <div className='duble-link'>
                                                    <Link href="/">
                                                        <a style={{ color: '#f97316', }}>University</a>
                                                    </Link>
                                                    <span style={{ marginTop: '-20px', color: '#f97316' }}>|</span>
                                                    <Link href="/">
                                                        <a style={{ color: '#f97316', }}>Guide</a>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='resource-study-guid' style={{ marginTop: '10px' }}>
                                                <p>Automotive Engineering </p>
                                                <div className='duble-link'>
                                                    <Link href="/">
                                                        <a style={{ color: '#f97316' }}>University</a>
                                                    </Link>
                                                    <span style={{ marginTop: '-20px', color: '#f97316' }}>|</span>
                                                    <Link href="/">
                                                        <a style={{ color: '#f97316' }}>Guide</a>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='resource-study-guid' style={{ marginTop: '10px' }}>
                                                <p>Aerospace Engineering </p>
                                                <div className='duble-link'>
                                                    <Link href="/">
                                                        <a style={{ color: '#f97316' }}>University</a>
                                                    </Link>
                                                    <span style={{ marginTop: '-20px', color: '#f97316' }}>|</span>
                                                    <Link href="/">
                                                        <a style={{ color: '#f97316' }}>Guide</a>
                                                    </Link>
                                                </div>
                                            </div>
                                            <br />
                                            <div className='resource-study-guid' style={{ marginTop: '10px' }}>
                                                <Link href="/">
                                                    <a style={{ textDecoration: 'underline', color: '#f97316' }} className="ms-1"> View All course guide </a>
                                                </Link>
                                            </div>
                                        </div>
                                        {/* ====================== */}
                                        <div className='col-lg-3 ps-4'>
                                            <div className='resource-study-guid' style={{ marginTop: '70px' }}>
                                                {/* <Link href="/">
                                                    <a style={{ color: '#f97316' }}>Bechelor</a>
                                                </Link> */}
                                                <p style={{ color: '#f97316' }}>Bechelor</p>
                                                <p>Computer Science</p>
                                                <div className='duble-link'>
                                                    <Link href="/">
                                                        <a style={{ color: '#f97316' }}>University</a>
                                                    </Link>
                                                    <span style={{ marginTop: '-20px', color: '#f97316' }}>|</span>
                                                    <Link href="/">
                                                        <a style={{ color: '#f97316' }}>Guide</a>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className='resource-study-guid' style={{ marginTop: '10px' }}>
                                                <p>Aerospace Engineering </p>
                                                <div className='duble-link'>
                                                    <Link href="/">
                                                        <a style={{ color: '#f97316' }}>University</a>
                                                    </Link>
                                                    <span style={{ marginTop: '-20px', color: '#f97316' }}>|</span>
                                                    <Link href="/">
                                                        <a style={{ color: '#f97316' }}>Guide</a>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className='resource-study-guid' style={{ marginTop: '10px' }}>
                                                <p>Aerospace Engineering </p>
                                                <div className='duble-link'>
                                                    <Link href="/">
                                                        <a style={{ color: '#f97316' }}>University</a>
                                                    </Link>
                                                    <span style={{ marginTop: '-20px', color: '#f97316' }}>|</span>
                                                    <Link href="/">
                                                        <a style={{ color: '#f97316' }}>Guide</a>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className='resource-study-guid' style={{ marginTop: '10px' }}>
                                                <p>Aerospace Engineering </p>
                                                <div className='duble-link'>
                                                    <Link href="/">
                                                        <a style={{ color: '#f97316' }}>University</a>
                                                    </Link>
                                                    <span style={{ marginTop: '-20px', color: '#f97316' }}>|</span>
                                                    <Link href="/">
                                                        <a style={{ color: '#f97316' }}>Guide</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-3 ps-4'>
                                            <br />
                                            <p style={{ fontSize: '18px', fontWeight: '500' }}  > Blogs </p>
                                            <p style={{ fontSize: '14px', fontWeight: '400' }}>Get to know the application dadline of all <br /> course across university</p>
                                            <br />
                                            <p style={{ fontSize: '18px', fontWeight: '500' }} >ScolarShip</p>
                                            <p style={{ fontSize: '14px', fontWeight: '400' }} >Get to know the application dadline of <br /> all course across university Get to know the <br /> application  dadline of all course across university</p>
                                        </div>
                                    </div>
                                </NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href="#action2">College Finder</Nav.Link>
                            <Nav.Link href="#action2">Connect</Nav.Link>


                        </Nav>
                        <Form className="d-flex">
                            <div className=" search-box me-4">
                                <button style={{ border: 'none', color: '#c7cacff6', backgroundColor: 'white', fontSize: '16px' }} type="submit"><i className="fa fa-search"></i></button>
                                <input style={{ border: 'none', outline: 'none', backgroundColor: 'white', fontSize: '16px' }} type="text" placeholder="Find Universities, people and more" name="search" />

                            </div>
                            <Nav.Link className='ms-auto navigation-button' href="#link">LogIn</Nav.Link>
                            <NavDropdown title="E" className='E-button' style={{ borderRadius: '100px', width: '40px', Height: '47px', backgroundColor: '#456f9e' }} >
                                <div style={{ marginLeft: '-60px', backgroundColor: 'white', padding: '0px' }} className='p-2'>
                                    <Link className='dropdown-menu' href="/MyProfile">
                                        <span> <img src="https://yocket.com/_nuxt/img/profile-icon.7285168.svg" alt="image" /> My Profile </span>
                                    </Link>
                                </div>
                            </NavDropdown>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    )
}




