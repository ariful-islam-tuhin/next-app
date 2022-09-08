
import Link from "next/link";
import React from 'react'



// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import {
    faGithub,
    faTwitter,
    faInstagram,
    faPinterest,
    faYoutube,
    faMedium,
    faLinkedin,
    faFacebook
} from '@fortawesome/free-brands-svg-icons'
library.add(
    faGithub,
    faTwitter,
    faInstagram,
    faPinterest,
    faYoutube,
    faMedium,
    faLinkedin,
    faFacebook
)

import Image from 'next/image'




export default function Footer() {
    // const width = 800;
    // const height = 800;
    return (
        <div >    
            <div className="row mt-4 pt-4 bg-dark text-white pb-4 col-lg-12">
                <div className="col-lg-3 col-md-6 ps-4">
                    <p className='pb-4 pt-4 footer-pera'>STUDY ABROAD GUIDE</p>
                    <Link href="/">
                        <a style={{ color: 'white', fontWeight: '600', fontSize: '16px' }} >University</a>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-6 ps-4">
                    <p className='footer-pera pb-4 pt-4'>POPULAR COURSES</p>
                    <div className='footer-course-link'>
                        <Link href="/">
                            <a >Masters</a>
                        </Link> <br />
                        <Link href="/#">
                            <a >Computer Science</a>
                        </Link> <br />
                        <Link href="/#">
                            <a >Computer Science</a>
                        </Link> <br />
                        <Link href="/#">
                            <a >MBA</a>
                        </Link> <br />
                        <Link href="/#">
                            <a >Data Science & Analytics</a>
                        </Link> <br />
                        <Link href="/#">
                            <a >Bachelors</a>
                        </Link> <br />
                        <Link href="/#">
                            <a >Business Administration</a>
                        </Link> <br />
                        <Link href="/#">
                            <a >Business Analytics</a>
                        </Link> <br />
                        <Link href="/#">
                            <a >Computer Engineering</a>
                        </Link> <br />
                    </div>
                    <Link href="/#">
                        <a style={{ color: '#f97316', textDecoration: 'underLine' }} href="#">see all course</a>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-6 ps-4">
                    <p className='footer-pera pb-4 pt-4'>TOP UNIVERSITIES</p>
                    <p >By Country</p>
                    <div className='footer-course-link'>
                        <Link href="/#">
                            <a >USA</a>
                        </Link> <br />
                        <Link href="/#">
                            <a >Canada</a>
                        </Link> <br />
                        <Link href="/#">
                            <a >UK</a>
                        </Link><br />
                        <Link href="/#">
                            <a >Australia</a>
                        </Link><br />
                        <Link href="/#">
                            <a >Germany</a>
                        </Link>
                    </div>
                    <p >By Course</p>
                    <div className='footer-course-link'>
                        <Link href="/#">
                            <a >MBA</a>
                        </Link> <br />
                        <Link href="/#">
                            <a >Industrial Engineering</a>
                        </Link> <br />
                        <Link href="/#">
                            <a style={{ color: '#f97316', textDecoration: 'underLine' }} href="#">See all universities</a>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 ps-4">
                    <p className='footer-pera pb-4 pt-4'>YOCKET TOOLS & SERVICES</p>
                    <div className='footer-course-link'>
                        <Link href="/#">
                            <a >Grad School Finder</a>
                        </Link> <br />
                        <Link href="/#">
                            <a >Undergrad College Finder</a>
                        </Link> <br />
                    </div>
                    <p className='footer-pera  pt-4'>OUR PARTNERS</p>
                    <div className='footer-course-link'>
                        <Link href="/#">
                            <a >Leap Scholar</a>
                        </Link> <br />
                        <Link href="/#">
                            <a >Leap Finance</a>
                        </Link> <br />
                    </div>
                </div>
            </div>



            <div className='row col-lg-12 text-center bg-dark text-white pt-2 pb-3 last-footer'>
                <hr />
                <div className='col-lg-2'> <span style={{ display: 'inline', fontWeight: '600', fontSize: '16px' }}>DownLoad app</span>
                    <img style={{ maxWidth: '30px', paddingLeft: '5px' }} src="https://d15gkqt2d16c1n.cloudfront.net/images/dashboard/playstore/google-play.png" alt="" />
                    <img style={{ maxWidth: '30px', paddingLeft: '5px' }} src="https://d15gkqt2d16c1n.cloudfront.net/images/dashboard/playstore/ios-play.png" alt="" />
                </div>
                <div className='col-lg-2'> <p style={{ fontSize: '16px', fontWeight: '600' }}> Copyright 2022</p> </div>
                <div className='col-lg-1'>
                    <Link href="/#">
                        <a className=' last-footer-a'>Abot Us</a>
                    </Link>
                </div>
                <div className='col-lg-2'>
                    <Link href="/#">
                        <a className=' last-footer-a'>Privacy Policy</a>
                    </Link>
                </div>
                <div className='col-lg-1'>
                    <Link href="/#">
                        <a className=' last-footer-a'>Careers</a>
                    </Link>
                </div>
                <div className='col-lg-2'>
                    <Link href="/#">
                        <a className=' last-footer-a'>Help Center</a>
                    </Link>
                </div>
                <div className='col-lg-2' style={{ display: 'inline', color: 'white' }}>
                    <Link href="/#">
                        <a href="" target='blank'><FontAwesomeIcon icon={faFacebook} style={{ color: '#2B3340', backgroundColor: 'white', cursor: 'pointer', padding: '7px', margin: '5px', borderRadius: '100px' }} /></a>
                    </Link>
                    
                    <Link href="/#">
                        <a href="" target='blank'>  <FontAwesomeIcon icon={faLinkedin} style={{ color: '#2B3340', backgroundColor: 'white', padding: '7px', margin: '5px', borderRadius: '100px' }} /></a>
                    </Link>
                    <Link href="/#">
                        <a href="" target='blank'> <FontAwesomeIcon icon={faTwitter} style={{ color: '#2B3340', backgroundColor: 'white', padding: '7px', margin: '5px', borderRadius: '100px' }} /></a>
                    </Link>
                    <Link href="/#">
                        <a href="" target='blank'>
                            <FontAwesomeIcon icon={faYoutube} style={{ color: '#2B3340', backgroundColor: 'white', padding: '7px', margin: '5px', borderRadius: '100px' }} /></a>
                    </Link>


                </div>
            </div>
            {/* 
                
              
                   */}
        </div>
    )
}
