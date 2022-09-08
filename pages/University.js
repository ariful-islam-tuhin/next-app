import Link from "next/link";
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';


const University = () => {
    return (
        <>
            <div className="row p-2 mt-4">
                <div className="col-lg-8 pt-3">
                    <h1 className="university-header" >Explore: Top Universities & Colleges in USA</h1>
                    <p style={{ fontSize: '16px', fontWeight: '400' }} >All you need to know about university fees, courses, deadlines, scholarships and more.</p>
                </div>
                <div className="col-lg-4 pt-4">
                    <div className="search-box">
                        <button style={{ border: 'none', color: '#c7cacff6', backgroundColor: 'white', fontSize: '16px' }} type="submit"><i className="fa fa-search"></i></button>
                        <input style={{ border: 'none', outline: 'none', backgroundColor: 'white', fontSize: '16px' }} type="text" placeholder="Search.." name="search" />
                    </div>
                </div>
            </div>
            <hr />
            {/* =================================university 2nd div======================= */}
            <div>
                <Nav className="me-auto">
                    <NavDropdown style={{ fontSize: '14px' }} className="cource-bg" title="Degree &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" id="basic-nav-dropdown">
                        <div className='row col-lg-12 cource-button country-card'>
                            <div className="col-lg-6 ">
                                <button style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccd4e0b4', backgroundColor: 'white' }}>Bachelors</button>
                            </div>
                            <div className="col-lg-6">
                                <button style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccd4e0b4', backgroundColor: 'white' }}>Masters</button>
                            </div>
                            <br />
                            <br />
                            <br />
                            <hr className="ms-0" />
                            <div className='country-button'>
                                <button style={{ border: 'none', backgroundColor: 'white', color: '#6d6f72', fontSize: '16px', fontWeight: '400' }} >Clear</button>
                                <div ><button className=' button-navbar'> Apply </button></div>
                            </div>
                        </div>
                    </NavDropdown>
                    <NavDropdown style={{ fontSize: '14px' }} className="country-bg" title="Country &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" id="basic-nav-dropdown">
                        <div className='country-card pb-4 pt-3'>
                            <div className='row col-lg-12 '>
                                <p style={{ fontSize: '14px', fontWeight: '400' }} className='ms-4'>Country</p>
                                <div className=" search-box">
                                    <button style={{ border: 'none', color: '#c7cacff6', backgroundColor: 'white', fontSize: '16px' }} type="submit"><i className="fa fa-search"></i></button>
                                    <input style={{ border: 'none', outline: 'none', backgroundColor: 'white', fontSize: '16px' }} type="text" placeholder="Add up to 3 Country.." name="search" />
                                </div>
                            </div>

                            <br />
                            <br />

                            <div className='row col-lg-12'>
                                <p style={{ fontSize: '14px', fontWeight: '400' }} className='ms-4 '>Location</p>
                                <div className=" search-box">
                                    <button style={{ border: 'none', color: '#c7cacff6', backgroundColor: 'white', fontSize: '16px' }} type="submit"><i className="fa fa-search"></i></button>
                                    <input style={{ border: 'none', outline: 'none', backgroundColor: 'white', fontSize: '16px' }} type="text" placeholder="Search for state or city.." name="search" />
                                </div>
                            </div>
                            <br />
                            <hr />

                            <div className='country-button '>
                                <button style={{ border: 'none', backgroundColor: 'white', color: '#6d6f72' }} >Clear</button>
                                <button className='button-navbar'> Apply </button>
                            </div>
                        </div>
                    </NavDropdown>
                    <NavDropdown style={{ fontSize: '14px' }} className="cource-bg" title="Cource &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" id="basic-nav-dropdown">
                        <div className='country-card pb-4 pt-3'>
                            <div className='row col-lg-12'>
                                <p style={{ fontSize: '14px', fontWeight: '400' }} className='ms-4'>Course</p>
                                <div className=" search-box">
                                    <button style={{ border: 'none', color: '#c7cacff6', backgroundColor: 'white', fontSize: '16px' }} type="submit"><i className="fa fa-search"></i></button>
                                    <input style={{ border: 'none', outline: 'none', backgroundColor: 'white', fontSize: '16px' }} type="text" placeholder="Add up to 3 Courses.." name="search" />
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className='row col-lg-12'>
                                <h6 className='ms-4'>Avarage Cource Tution Fee (USD) </h6>
                                <div className='cource-button'>
                                    <div>
                                        <button>0-10k</button>
                                    </div>
                                    <div>
                                        <button>0-20k</button>
                                    </div>
                                    <div>
                                        <button>0-30k</button>
                                    </div>
                                    <div>
                                        <button>0-40k</button>
                                    </div>
                                    <div>
                                        <button>40k+</button>
                                    </div>
                                </div>
                                <hr className="ms-3" />
                                <div className='country-button'>
                                    <button style={{ border: 'none', backgroundColor: 'white', color: '#6d6f72' }} >Clear</button>
                                    <div ><button className=' button-navbar '> Apply </button></div>
                                </div>
                            </div>
                        </div>
                    </NavDropdown>
                    <NavDropdown style={{ fontSize: '14px' }} className="cource-bg" title="University Type " id="basic-nav-dropdown">
                        <div className='country-card pb-4 pt-3'>
                            <div className='ms-2 '>
                                <input type="radio" id="css" name="fav_language" value="CSS" />
                                <label >Public</label><br />
                                <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                                <label >Privet</label><br /><br />
                                <hr />
                                <div className='country-button'>
                                    <button style={{ border: 'none', backgroundColor: 'white', color: '#6d6f72' }} >Clear</button>
                                    <div> <button className=' button-navbar '> Apply </button></div>
                                </div>
                            </div>
                        </div>
                    </NavDropdown>
                    <NavDropdown style={{ fontSize: '14px' }} className="cource-bg" title="Rank &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" id="basic-nav-dropdown">
                        <div className='country-card pb-4 pt-3'>
                            <div className='row col-lg-12'>
                                <div className='cource-button'>
                                    <div>
                                        <button>Top 30</button>
                                    </div>
                                    <div>
                                        <button>Top 50</button>
                                    </div>
                                    <div>
                                        <button>Top 100</button>
                                    </div>
                                </div>
                                <hr className="ms-3" />
                                <div className='country-button'>
                                    <button style={{ border: 'none', backgroundColor: 'white', color: '#6d6f72' }} >Clear</button>
                                    <div ><button className=' button-navbar '> Apply </button></div>
                                </div>
                            </div>
                        </div>
                    </NavDropdown>
                </Nav>
            </div>
            <div className='mt-4 hr-width'>
            </div>
            {/* ====== United state======== */}
            <div className='united-state'>
                <div>
                    <p style={{ fontSize: '14px' }}>Showing 54 of 686 universities in</p>
                    <div >
                        <select className="united-stat" >
                            <option value="United State">United state </option>
                        </select>
                    </div>
                </div>
                <div>
                    <span style={{ fontSize: '14px', fontWeight: '600' }}> Sort By </span> &nbsp;&nbsp;
                    <select style={{ fontSize: '14px' }} className="p-2 rounded" name="select" id="select">
                        <option value="Popularity">Popularity</option>
                        <option value="Rank">Rank</option>
                        <option value="Tution Fee">Tution Fee (low to High)</option>
                    </select>
                </div>
            </div>
            {/* =========Card Area of Universityh=========== */}
            <div className='p-5'>
                <div className='row col-lg-12 mt-5 pb-2'>
                    <div className="col-lg-4">
                        <Link href="/SingleUniversity">
                            <a target="_blank" rel="noopener noreferrer" className='link-item'>
                                <div style={{ cursor: 'pointer' }} >
                                    <div className='card p-4' >
                                        <div className='cart-flex'>
                                            <div>
                                                <img style={{ width: '40px' }} src="https://d15gkqt2d16c1n.cloudfront.net/images/universities/logos/harvard_university_logo.jpg" alt="" />
                                                <button style={{ color: 'orange', backgroundColor: '#FFF4E3', border: 'none', borderRadius: '5px', fontSize: '14px' }}><img src="https://yocket.com/_nuxt/img/yocket-y.8b1a6e5.svg" alt="img" /> <span style={{ fontWeight: 'bold' }}>top 10</span> </button>
                                            </div>
                                            <div> <button style={{ color: 'black', backgroundColor: 'white', borderColor: '#F0F1F4', borderRadius: '5px', marginTop: '10px', fontSize: '14px' }}> Watch list </button></div>
                                        </div>
                                        <div className='card-body'>
                                            <div style={{ lineHeight: '20px' }}>
                                                <p className='card-title'> Havard University </p>
                                                <p style={{ color: '#697391' }} className='card-text'>Massachusetts, United States</p>
                                            </div>
                                            <hr />
                                            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}} >
                                                <div style={{ lineHeight: '25px' }}>
                                                    <p style={{ color: '#9E8086', fontSize: '14px', lineHeight: '5px' }}> Avarage Tution fee </p>
                                                    <span className='dollar-border'>$</span>
                                                    <span className='dollar-border'>$</span>
                                                    <span className='dollar-border'>$</span>
                                                    <span className='dollar-border'>$</span>
                                                    <span className='dollar-border'>$</span>
                                                    <br />
                                                    <span style={{ color: '#543340', fontSize: '14px', fontWeight: '600' }}>High end </span>
                                                </div>
                                                <div>
                                                    <div style={{ display: 'flex', marginBottom:'-15px', fontSize:'14px', fontWeight:'400' }} >
                                                        <img src="https://yocket.com/_nuxt/img/Scholarships.5ec0f21.svg" alt="" />
                                                        <p className="ps-2 mt-3"> scolarship </p>
                                                    </div>
                                                    <span style={{fontWeight:'600', fontSize:'14px',marginLeft:'25px'}} >Available</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="col-lg-4">
                        <Link href="/SingleUniversity">
                            <a target="_blank" rel="noopener noreferrer" className='link-item'>
                                <div style={{ cursor: 'pointer' }} >
                                    <div className='card p-4' >
                                        <div className='cart-flex'>
                                            <div>
                                                <img style={{ width: '40px' }} src="https://d15gkqt2d16c1n.cloudfront.net/images/universities/logos/mit_logo.jpg" alt="" />
                                                <button style={{ color: 'orange', backgroundColor: '#FFF4E3', border: 'none', borderRadius: '5px', fontSize: '14px' }}><img src="https://yocket.com/_nuxt/img/yocket-y.8b1a6e5.svg" alt="img" /> <span style={{ fontWeight: 'bold' }}>top 10</span> </button>
                                            </div>
                                            <div> <button style={{ color: 'black', backgroundColor: 'white', borderColor: '#F0F1F4', borderRadius: '5px', marginTop: '10px', fontSize: '14px' }}> Watch list </button></div>
                                        </div>
                                        <div className='card-body'>
                                            <div style={{ lineHeight: '20px' }}>
                                                <p className='card-title'> Havard University </p>
                                                <p style={{ color: '#697391' }} className='card-text'>Massachusetts, United States</p>
                                            </div>
                                            <hr />
                                            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}} >
                                                <div style={{ lineHeight: '25px' }}>
                                                    <p style={{ color: '#9E8086', fontSize: '14px', lineHeight: '5px' }}> Avarage Tution fee </p>
                                                    <span className='dollar-border'>$</span>
                                                    <span className='dollar-border'>$</span>
                                                    <span className='dollar-border'>$</span>
                                                    <span className='dollar-border'>$</span>
                                                    <span className='dollar-border'>$</span>
                                                    <br />
                                                    <span style={{ color: '#543340', fontSize: '14px', fontWeight: '600' }}>High end </span>
                                                </div>
                                                <div>
                                                    <div style={{ display: 'flex', marginBottom:'-15px', fontSize:'14px', fontWeight:'400' }} >
                                                        <img src="https://yocket.com/_nuxt/img/Scholarships.5ec0f21.svg" alt="" />
                                                        <p className="ps-2 mt-3"> scolarship </p>
                                                    </div>
                                                    <span style={{fontWeight:'600', fontSize:'14px',marginLeft:'25px'}} >Available</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="col-lg-4">
                        <Link href="/SingleUniversity">
                            <a target="_blank" rel="noopener noreferrer" className='link-item'>
                                <div style={{ cursor: 'pointer' }} >
                                    <div className='card p-4' >
                                        <div className='cart-flex'>
                                            <div>
                                                <img style={{ width: '40px' }} src="https://d15gkqt2d16c1n.cloudfront.net/images/universities/logos/stanford_university_logo.jpg" alt="" />
                                                <button style={{ color: 'orange', backgroundColor: '#FFF4E3', border: 'none', borderRadius: '5px', fontSize: '14px' }}><img src="https://yocket.com/_nuxt/img/yocket-y.8b1a6e5.svg" alt="img" /> <span style={{ fontWeight: 'bold' }}>top 10</span> </button>
                                            </div>
                                            <div> <button style={{ color: 'black', backgroundColor: 'white', borderColor: '#F0F1F4', borderRadius: '5px', marginTop: '10px', fontSize: '14px' }}> Watch list </button></div>
                                        </div>
                                        <div className='card-body'>
                                            <div style={{ lineHeight: '20px' }}>
                                                <p className='card-title'> Havard University </p>
                                                <p style={{ color: '#697391' }} className='card-text'>Massachusetts, United States</p>
                                            </div>
                                            <hr />
                                            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}} >
                                                <div style={{ lineHeight: '25px' }}>
                                                    <p style={{ color: '#9E8086', fontSize: '14px', lineHeight: '5px' }}> Avarage Tution fee </p>
                                                    <span className='dollar-border'>$</span>
                                                    <span className='dollar-border'>$</span>
                                                    <span className='dollar-border'>$</span>
                                                    <span className='dollar-border'>$</span>
                                                    <span className='dollar-border'>$</span>
                                                    <br />
                                                    <span style={{ color: '#543340', fontSize: '14px', fontWeight: '600' }}>High end </span>
                                                </div>
                                                <div>
                                                    <div style={{ display: 'flex', marginBottom:'-15px', fontSize:'14px', fontWeight:'400' }} >
                                                        <img src="https://yocket.com/_nuxt/img/Scholarships.5ec0f21.svg" alt="" />
                                                        <p className="ps-2 mt-3"> scolarship </p>
                                                    </div>
                                                    <span style={{fontWeight:'600', fontSize:'14px',marginLeft:'25px'}} >Available</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                   
               
                </div>
            </div>
        </>
    )
}

export default University;