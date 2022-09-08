import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import Button from './Button';

const SingleSubject = () => {



    return (
        <div className='single-subject-page ' >
            <br />
            <div className='bg-white'>
                {/* first div start  */}
                <div className="container mb-4 border pt-4 ">
                    <div className='image-and-head-flex' >
                        <div>
                            <Image style={{ borderRadius: '100px' }}
                                src="https://yocket.com/_ipx/f_webp/https://d15gkqt2d16c1n.cloudfront.net/images/universities/logos/harvard_university_logo.jpg"
                                width={50}
                                height={50}
                            />
                        </div>
                        <div>
                            <h1 style={{ fontSize: '24px', fontWeight: '700', display: 'inline' }}> MBA in Master Of Business Administration </h1>
                            <p className='text-muted'> Haverd University </p>
                        </div>
                    </div>
                    <div className='line-height text-muted'>
                        <Link href="/University">
                            <a><h6 style={{ color: '#f97316', fontSize: '14px', fontWeight: '700' }} > View University > </h6></a>
                        </Link>
                        <br />
                        <p>Masters Program</p>
                        <p> Master Of Business Administration Department of MBA </p>
                        <hr />
                        <button style={{ color: 'black', backgroundColor: 'white', borderColor: '#F0F1F4', borderRadius: '5px', padding: '10px 20px 10px 20px' }}> Shortlist </button>
                        &nbsp; <button className='btn button-s mb-4'>Ask our Expert</button>
                    </div>
                </div>
                {/* first div end */}
                {/* course highlight area start */}

                
                <div className='row col-lg-12'>
                    <div className=" col-lg-3 single-unv-nav mt-4 ps-3 ">
                      <ul>
                        <li ><a href="#coursehighlight-id">Course Highlights</a></li>
                        <li><a href="#Pre-Requisites-id">Pre-Requisites</a></li>
                        <li><a href="#Similarcourse-id">Similarcourse</a></li>
                      </ul> 
                    </div>
                    <div className='col-lg-9'>
                        <div className='mt-4 mb-4 p-4 bg-white border' id="about-id">
                            <h2 className='single-unv-header'> <span className='I-text'>|</span> Overview  </h2>
                            <hr />
                            <p style={{ lineHeight: '28px', fontSize: '16px', fontWeight: '400' }} className='ms-4 ps-4'><span className='bold-pera'>MBA in Master Of Business Administration</span> MBA in Master Of Business Administration at the prestigious<span className='bold-pera'>University of Cambridge is an opportunity</span> University of Cambridge is an opportunity for students to enhance their knowledge, skills, and career through innovation and research. Being a renowned university, University of Cambridge receives enough funds to ensure the best education facilities for its students across all programs..This post-graduate program offered on a full time basis has a well-designed curriculum that perfectly blends theory and practical learning. It prepares the students for their professional life to reach new heights of success.<span className='bold-pera'>MBA in Master Of Business Administration </span> at is ranked globally by estimated organisations. Such recognition speaks volumes about the course’s importance and effectiveness in the present scenario <span className='bold-pera'>MBA in Master Of Business Administration at University of Cambridge</span> The top-notch faculty, modern facilities, and the aura of creativity and innovation in the campus is a life-changing experience for the students looking forward to kickstarting or upgrading their careers. Overall, a MBA in Master Of Business Administration at University of Cambridge is an excellent opportunity to grow into a learned professional and bring new developments in the world..</p>
                        </div>
                        {/* == course highlight start === */}
                        <div className="p-4 bg-white border mt-4" id="coursehighlight-id">
                            <h2 className='single-unv-header'> <span className='I-text'>|</span> Course Highlight  </h2>
                            <hr />
                            <div className="container" >
                                <div className="row col-lg-12">
                                    <div className="col-lg-6 col-md-6 mt-2">
                                        <div>
                                            <img src="https://yocket.com/_nuxt/img/stopWatch.0ec410e.svg" alt="img" />
                                            <span className='text-muted about-course1 p-1'>US World and News Report.</span>
                                            <h6 className=' about-course p-4'>12 Months </h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mt-2">
                                        <div>
                                            <img src="https://yocket.com/_nuxt/img/medalBatch.533e814.svg" alt="img" />
                                            <span className='text-muted about-course1 p-1'>The World University Rankings</span>
                                            <h6 className=' about-course p-4'>MBA </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="row col-lg-12">
                                    <div className="col-lg-5 text-start  ">
                                        <Link href="/">
                                            <a target="_blank" rel="noopener noreferrer" className='view-profile-link ms-4'> University Website  <img src="https://yocket.com/_nuxt/img/ExternalLinkOrange.a50eb9d.svg" alt="" /> </a>
                                        </Link>
                                    </div>
                                    <div className="col-lg-7 ">
                                    </div>
                                    <hr className='mt-4' />
                                    <div style={{ display: 'inline' }}>
                                        <span className='text-muted'>Delivery medium</span>
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        <span style={{ fontSize: '20px' }}>On Campus</span>
                                    </div>
                                    <hr className='mt-4' />
                                    <h5 style={{ fontSize: '16px', fontWeight: '700' }}>Tuition fee</h5>
                                    <p style={{ width: '100%' }} className='bg-light p-2 ms-2'>Fees mentioned may differ from the actual amount.</p>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div>
                                                <img src="https://yocket.com/_nuxt/img/stopWatch.0ec410e.svg" alt="img" />
                                                <span className='text-muted about-course1 p-1'>Annual tuition fees</span>
                                                <h6 className=' about-course p-4'> £61,000 </h6>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div>
                                                <img src="https://yocket.com/_nuxt/img/medalBatch.533e814.svg" alt="img" />
                                                <span className='text-muted about-course1 p-1'>Full course fees (12 months)</span>
                                                <h6 className=' about-course p-4'>£61,000 </h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row col-lg-12">
                                        <div className="col-lg-5 text-start  ">
                                            <Link href="/">
                                                <a target="_blank" rel="noopener noreferrer" className='view-profile-link ms-4'> View tuition fees  <img src="https://yocket.com/_nuxt/img/ExternalLinkOrange.a50eb9d.svg" alt="" /> </a>
                                            </Link>
                                        </div>
                                        <div className="col-lg-7 ">
                                        </div>
                                        <hr className='mt-4' />
                                    </div>
                                    <div className="row col-lg-12 mb-3 coast-last-flex">
                                        <div className="col-lg-9 col-md-9">
                                            <div className='image-and-head-flex' >
                                                <div>
                                                    <Image style={{ borderRadius: '100px' }}
                                                        src="https://yocket.com/_nuxt/img/request-call-banner.80d4f12.svg"
                                                        width={30}
                                                        height={30}
                                                    />
                                                </div>
                                                <div className='ms-4'>
                                                    <Link href="/">
                                                        <p className='yocket-name'> Tuition fee + Living expenses all in one loan! </p>
                                                    </Link>
                                                    <p className='text-muted'>Get 100% of your expenses covered by reputed banks with our assitance! </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 view-responsive">
                                            <div className='mt-4'>
                                                <Link href="/">
                                                    <a style={{ marginLeft: '-25px', color: "#f97316", fontWeight: '600' }}> Request a Call </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className=' mt-4'>
                                        <div>
                                            <div className='sub-div-coast'>                                     
                                                <img style={{ height: '50px', paddingTop: '20px' }} src="https://yocket.com/_nuxt/img/request-call-banner.80d4f12.svg" alt="" />
                                                <h5 className='mt-4 font-weight-bold'>Tuition fee + Living expenses all in one loan!</h5>
                                            </div>
                                            <p className='ms-4 ps-4'>Get 100% of your expenses covered by reputed banks with our assitance!</p>
                                        </div>
                                        <div>
                                            <div> <button style={{ color: 'black', backgroundColor: 'white', borderColor: '#F0F1F4', borderRadius: '5px', marginTop: '20px', padding: '6px' }}> Request a Call</button></div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        {/* course highlight area end   */}

                        {/* Admition area start   */}
                        <div className='total-area-admission bg-white border mt-4'>
                            <div className='admission-flex p-2'>
                                <div>
                                    <h3 style={{ fontWeight: '700' }}> Admission </h3>
                                </div>
                                <div>
                                    <Link href="/">
                                        <a target="_blank" rel="noopener noreferrer" className='view-profile-link ms-4'> Link to Admission  <img src="https://yocket.com/_nuxt/img/ExternalLinkOrange.a50eb9d.svg" alt="" /> </a>
                                    </Link>
                                </div>
                            </div>
                            <hr />
                            <div className='ps-4'>
                                <p className='text-muted'></p>
                                <span className='text-muted about-course1 p-1'>Application Fee</span>
                                <h6 className=' about-course p-4'> £150</h6>
                                <Link href="/">
                                    <a target="_blank" rel="noopener noreferrer" className='view-profile-link ms-4'> Go to application page  <img src="https://yocket.com/_nuxt/img/ExternalLinkOrange.a50eb9d.svg" alt="" /> </a>
                                </Link>
                            </div>
                            <hr />
                            <div className='start-and-dadline ms-4'>
                                <span><img src="https://yocket.com/_nuxt/img/StarFourGray.ddbbe00.svg" alt="" /></span>
                                <span style={{ fontSize: '20px', fontWeight: 'bold', marginLeft: '20px' }}>Dadline</span>
                            </div>
                            <div className='application-dadline row ms-4 p-4 '>
                                <div className='col-lg-6'> <p className='text-muted'>Application Deadline Fall (Round 2)</p></div>
                                <div className='col-lg-6'><h5>Oct 18, 2022</h5></div>
                            </div>
                        </div>
                        {/* Admition area  end   */}
                        {/* pre-requesties area start*/}
                        <div className='total-area-admission bg-white border mt-4' id='Pre-Requisites-id'>
                            <h2 className='single-unv-header'> <span className='I-text'>|</span> Pre-Requisities  </h2>
                            <hr />
                            <div className='ps-4 ms-4'>
                                <h4 className='single-university-sub-header'> Application pre-requisites </h4>
                                <p>Undergraduate degree Work experience A GMAT/GRE score A reference The ability to finance your MBA A visa Essay questions on the form English language requirement</p>
                            </div>
                            <hr />
                            <h4 className='ps-4 ms-4 single-university-sub-header'> Test score requirements</h4>
                            <p className='ps-4 ms-4'>Minimum English Scores</p>
                            <div className='ps-4 ms-4'>
                                <span >TOEFL</span>
                                <span >110</span> <br />
                                <span >IELTS</span>
                                <span >7.5</span> <br />
                            </div>
                            <div className='ps-4'>
                                <Link href="/">                                
                                        <a target="_blank" rel="noopener noreferrer" className='view-profile-link ms-4'> Go to application page <img src="https://yocket.com/_nuxt/img/ExternalLinkOrange.a50eb9d.svg" alt="" /> </a>
                                 </Link>
                            </div>
                        </div>
                        {/* pre-requesties area end*/}
                        {/* Similar course start here*/}
                        <div className='total-area-admission bg-white border mt-4' id='Similarcourse-id'>
                            <h2 className='single-unv-header'> <span className='I-text'>|</span> Similar Courses  </h2>
                            <hr />
                            <hr />
                            <div className="row p-2 col-lg-12">
                                <div className="col-lg-9 col-md-9">
                                    <div className='image-and-head-flex' >
                                        <div>
                                            <Image style={{ borderRadius: '100px' }}
                                                src="https://d15gkqt2d16c1n.cloudfront.net/images/universities/logos/Columbia_University_Logo"
                                                width={30}
                                                height={30}
                                            />
                                        </div>
                                        <div className='ms-4'>
                                            <Link href="/">
                                                <a target="_blank" rel="noopener noreferrer" className='similar-unv-header'>  Masters in MBA</a>
                                            </Link>
                                            <p className='text-muted similar-unv-pera'>
                                                <span style={{ fontSize: '16px', fontWeight: 'bold' }} ></span> Massachusetts, United States</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 view-details-similar-unv">
                                    <div>
                                        <Link href="/">
                                            <a><h6 className='view-profile-link ' > View Details > </h6></a>
                                        </Link>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div className="row p-2 col-lg-12">
                                <div className="col-lg-9 col-md-9">
                                    <div className='image-and-head-flex' >
                                        <div>
                                            <Image style={{ borderRadius: '100px' }}
                                                src="https://d15gkqt2d16c1n.cloudfront.net/images/universities/logos/Columbia_University_Logo"
                                                width={30}
                                                height={30}
                                            />
                                        </div>
                                        <div className='ms-4'>
                                            <Link href="/">
                                                <a target="_blank" rel="noopener noreferrer" className='similar-unv-header'>  Masters in MBA</a>
                                            </Link>
                                            <p className='text-muted similar-unv-pera'>
                                                <span style={{ fontSize: '16px', fontWeight: 'bold' }} ></span> Massachusetts, United States</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 view-details-similar-unv">
                                    <div>
                                        <Link href="/">
                                            <a><h6 className='view-profile-link ' > View Details > </h6></a>
                                        </Link>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div className="row p-2 col-lg-12">
                                <div className="col-lg-9 col-md-9">
                                    <div className='image-and-head-flex' >
                                        <div>
                                            <Image style={{ borderRadius: '100px' }}
                                                src="https://d15gkqt2d16c1n.cloudfront.net/images/universities/logos/Columbia_University_Logo"
                                                width={30}
                                                height={30}
                                            />
                                        </div>
                                        <div className='ms-4'>
                                            <Link href="/">
                                                <a target="_blank" rel="noopener noreferrer" className='similar-unv-header'>  Masters in MBA</a>
                                            </Link>
                                            <p className='text-muted similar-unv-pera'>
                                                <span style={{ fontSize: '16px', fontWeight: 'bold' }} ></span> Massachusetts, United States</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 view-details-similar-unv">
                                    <div>
                                        <Link href="/">
                                            <a><h6 className='view-profile-link ' > View Details > </h6></a>
                                        </Link>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div className="row p-2 col-lg-12">
                                <div className="col-lg-9 col-md-9">
                                    <div className='image-and-head-flex' >
                                        <div>
                                            <Image style={{ borderRadius: '100px' }}
                                                src="https://d15gkqt2d16c1n.cloudfront.net/images/universities/logos/Columbia_University_Logo"
                                                width={30}
                                                height={30}
                                            />
                                        </div>
                                        <div className='ms-4'>
                                            <Link href="/">
                                                <a target="_blank" rel="noopener noreferrer" className='similar-unv-header'>  Masters in MBA</a>
                                            </Link>
                                            <p className='text-muted similar-unv-pera'>
                                                <span style={{ fontSize: '16px', fontWeight: 'bold' }} ></span> Massachusetts, United States</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 view-details-similar-unv">
                                    <div>
                                        <Link href="/">
                                            <a><h6 className='view-profile-link ' > View Details > </h6></a>
                                        </Link>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            {/* ================================ */}
                        </div>
                        {/* Similar course end here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleSubject;