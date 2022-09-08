import React from 'react'
import Link from "next/link";
import Image from 'next/image';
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


export default function SingleUniversity() {
    return (
        <div className='bg-white' >
            <div className='container'>
                {/* first div start  */}
                <div className="row bg-white mb-4 mt-5 pt-4 border">
                    <div className='image-and-head-flex' >
                        <div>
                            <Image style={{ borderRadius: '100px' }}
                                src="https://yocket.com/_ipx/f_webp/https://d15gkqt2d16c1n.cloudfront.net/images/universities/logos/harvard_university_logo.jpg"
                                width={95}
                                height={80}
                            />
                        </div>
                        <div>
                            <h1 style={{ fontSize: '24px', fontWeight: '700', display: 'inline' }}> Harvard University </h1>
                            <button style={{ color: 'orange', backgroundColor: '#FFF4E3', border: 'none', borderRadius: '5px', fontSize: '14px' }}><img src="https://yocket.com/_nuxt/img/yocket-y.8b1a6e5.svg" alt="img" /> <span style={{ fontWeight: 'bold' }}>top 10</span> </button>
                            <p className='text-muted '> Massachusetts, United States. Private University. Established in 1636</p>
                        </div>
                    </div>
                    <div className='line-height text-muted'>
                        <div className="row pt-4 mb-4">
                            <div className="col-lg-9">
                                <span className='m-2' >
                                    <span style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccd4e0b4', outline: 'none' }}>
                                        <img src="https://yocket.com/_nuxt/img/UsersGroupLight.71aa1b3.svg" alt="img" />
                                        <span style={{ color: 'black', fontSize: '14', fontWeight: '700' }} className='p-4'>Join group</span>
                                    </span>
                                </span>
                                <span className='m-2'>
                                    <span style={{ padding: '12px', borderRadius: '5px', border: '.1px solid #ccd4e0b4', outline: 'none' }}>
                                        <img src="https://yocket.com/_nuxt/img/Star.e77c258.svg" alt="img" />
                                        <span style={{ color: 'black', fontSize: '14', fontWeight: '700' }} className='p-4'>Watch List</span>
                                    </span>
                                </span>
                            </div>

                            <div className="col-lg-3">
                                <button className='mt-3 btn button text-white me-auto'> Ask Our Expertise </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* first div end */}
                <div className='row col-lg-12'>
                    <div className=" col-lg-3   mt-4">
                        <div className="single-unv-nav">
                            <div className="test-clas">
                                <a href="#about-id">About</a>
                                <a href="#skill-id">Coast</a>
                                <a href="#contuct-id">Ranking</a>
                                <a href="#admission-id"> Admission </a>
                                <a href="#cources-id"> Cources </a>
                                <a href="#student-id"> Student </a>
                                <a href="#contact-id"> contact </a>
                                <a href="#similaruniversity-id"> Similar University </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className='mt-4 mb-4 p-4 bg-white border' id="about-id">
                            <h2 className='single-unv-header'> <span className='I-text'>|</span> About  </h2>
                            <hr />
                            <p style={{ lineHeight: '28px', fontSize: '16px', fontWeight: '400' }} className='ms-4 ps-4'>Harvard University is a private Ivy League research university in Cambridge, Massachusetts, established 1636. Its history, influence and wealth have made it one of the most prestigious universities in the world.</p>
                        </div>
                        <div className='mb-4  p-4 bg-white border' id="skill-id">
                            <h2 className='single-unv-header'><span className='I-text'>|</span> Cost of Studying at Harvard University</h2>
                            <div className='ms-4 ps-4'>
                                <p style={{ color: '#737373', fontSize: '16px' }} >Avarage Tution fee</p>
                                <p className='single-university-sub-header' >High end </p>
                                <span className='dollar-border'>$</span>
                                <span className='dollar-border'>$</span>
                                <span className='dollar-border'>$</span>
                                <span className='dollar-border'>$</span>
                                <span className='dollar-border'>$</span>
                                <hr />
                                <p className='single-university-sub-header'>Living expenses</p>
                                <div className='row col-lg-12 '>
                                    <div className='col-lg-6'>
                                        <p style={{ color: '#737373', fontSize: '16px', fontWeight: '400' }}>Average living expenses (Bechelor)</p><p style={{ color: '#477857', fontWeight: '700', fontSize: '16px' }}>$83,463</p>
                                        <p style={{ color: '#737373', fontSize: '16px', fontWeight: '400' }}>Average living expenses (Masters)</p><p style={{ color: '#477857', fontWeight: '700', fontSize: '16px' }}>$83,463</p>
                                    </div>
                                    <div className='col-lg-6'>
                                        <p style={{ color: '#737373', fontSize: '16px', fontWeight: '400' }}>Average on-campus living expenses</p> <p style={{ color: '#477857', fontWeight: '700', fontSize: '16px' }}>$76,763</p>
                                    </div>
                                </div>
                                {/* <div className='coast-last-flex'>
                                    <div>
                                        <div className='sub-div-coast'>
                                            <img style={{ height: '50px', paddingTop: '20px' }} src="https://yocket.com/_nuxt/img/request-call-banner.80d4f12.svg" alt="" />
                                            <h6 className='mt-4'>Tuition fee + Living expenses all in one loan!</h6>
                                        </div>
                                        <p className='ms-4 ps-4'>Get 100% of your expenses covered by reputed banks with our assitance!</p>
                                    </div>
                                    <div>
                                        <div> <button style={{ color: 'black', backgroundColor: 'white', borderColor: '#F0F1F4', borderRadius: '5px', marginTop: '20px', padding: '6px' }}> Request a Call</button></div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        {/* Ranking of the university */}
                        <div className='mb-4 p-4 bg-white border' id="contuct-id">
                            <h2 className='single-unv-header'><span className='I-text'>|</span> Rankings for The Harvard University  </h2>
                            <hr />
                            <div className="container" >
                                {/* ============== */}
                                <div className="row bg-white mb-4  ">
                                    <div className='col-lg-6 col-md-6'>
                                        <div className='image-and-head-flex' >
                                            <div>
                                                <Image style={{ borderRadius: '100px' }}
                                                    src="https://yocket.com/_nuxt/img/TheWorldUniRanking.8c2cfd4.svg"
                                                    width={50}
                                                    height={50}
                                                />
                                            </div>
                                            <div className='ms-4'>
                                                <h1 className='ranking-for-the-01' > #1 </h1>
                                                <p className='text-muted '> US World and News Report</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6'>
                                        <div className='image-and-head-flex' >
                                            <div>
                                                <Image style={{ borderRadius: '100px' }}
                                                    src="https://yocket.com/_nuxt/img/TheWorldUniRanking.8c2cfd4.svg"
                                                    width={50}
                                                    height={50}
                                                />
                                            </div>
                                            <div className='ms-4'>
                                                <h1 className='ranking-for-the-01'> #2 </h1>
                                                <p className='text-muted '> The World University Rankings</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6'>
                                        <div className='image-and-head-flex' >
                                            <div>
                                                <Image style={{ borderRadius: '100px' }}
                                                    src="https://yocket.com/_nuxt/img/TheWorldUniRanking.8c2cfd4.svg"
                                                    width={50}
                                                    height={50}
                                                />
                                            </div>
                                            <div className='ms-4'>
                                                <h1 className='ranking-for-the-01'> #3 </h1>
                                                <p className='text-muted '> US World and News Report</p>
                                            </div>
                                        </div>
                                    </div>


                                    {/* ==================== */}
                                </div>

                            </div>

                        </div>
                        {/* =====Admission area====== */}
                        <div className='mb-4 p-4 bg-white border' id="admission-id">
                            <h2 className='single-unv-header'><span className='I-text'>|</span> Admissions at The Harvard University  </h2>
                            <hr />
                            <div className='row col-lg-12'>
                                <div className='col-lg-6'>
                                    <p style={{ fontSize: '16px', fontWeight: '400' }}>Avg acceptance rate (Bachelors)</p>
                                    <p className='single-university-sub-header'>5%</p>
                                </div>
                                <div className='col-lg-6'>
                                    <p style={{ fontSize: '16px', fontWeight: '400' }} className='text-muted'> Application Fee</p>
                                    <p style={{ color: '#008744', fontWeight: '700', fontSize: '20px' }}> $25-$250 </p>
                                </div>
                            </div>
                            {/* <p className='ms-4 ps-4'>Application Fee</p>
                            <h4 className='ms-4 ps-4' style={{ color: '#477857' }}>$25 - $250</h4>
                            <div className='coast-last-flex'>
                                <div>
                                    <div className='sub-div-coast'>
                                        <img style={{ height: '50px', paddingTop: '20px' }} src="https://yocket.com/_nuxt/img/request-call-banner.80d4f12.svg" alt="" />
                                        <h6 className='mt-4'>Tuition fee + Living expenses all in one loan!</h6>
                                    </div>
                                    <p className='ms-4 ps-4'>Get 100% of your expenses covered by reputed banks with our assitance!</p>
                                </div>
                                <div>
                                    <div> <button style={{ color: 'black', backgroundColor: 'white', borderColor: '#F0F1F4', borderRadius: '5px', marginTop: '20px', padding: '6px' }}> Request a Call</button></div>
                                </div>
                            </div> */}
                        </div>
                        <div className='mt-4 p-4 many-features-area border'>
                            <div className='row col-lg-12'>

                                <div className='col-lg-4 col-md-4 col-md-4 '>
                                    <div className='image-and-head-flex' >
                                        <div>
                                            <Image style={{ borderRadius: '100px' }}
                                                src="https://yocket.com/_nuxt/img/CollegeFinderLogo.0065048.svg"
                                                width={35}
                                                height={35}
                                            />
                                        </div>
                                        <div className='ms-4'>
                                            <h1 className='college-finder'> College Finder</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-5 col-md-5'>
                                    <p className='single-university-sub-header' >Know universities that fit you best!</p>
                                    <p>Take us through your profile, study preferences, strengths, and weaknesses and we’d find you universities that are tailor made for you, instantly!</p>
                                </div>
                                <div className='col-lg-3 col-lg-3'>
                                    <button className='btn button-s'> Find University</button>
                                </div>
                            </div>
                        </div>
                        {/* ======= main cources area start ========== */}
                        <div className='cources-area border bg-white mt-4' id='cources-id'>
                            <h2 className='single-unv-header ms-4 ps-4 pt-4' ><span className='I-text'>|</span> Courses at the Harvard University </h2>
                            <div className='course-flex p-4'>
                                <Link href="/SingleSubject">
                                    <a target="_blank" rel="noopener noreferrer" className='course-of-university'>MS in Electrical And Electronics Engineering </a>
                                </Link>
                                <Link href="/">
                                    <a target="_blank" rel="noopener noreferrer" className='view-profile-link ps-5 mt-2'> View details  </a>
                                </Link>
                            </div>
                            {/* sub course area start */}
                            <div className='container'>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div>
                                            <img src="https://yocket.com/_nuxt/img/CalanderGray.4477e38.svg" alt="img" />
                                            <span className='text-muted about-course1 p-1'>Application deadline</span>
                                            <h6 className=' about-course p-4'>Rolling</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div>
                                            <img src="https://yocket.com/_nuxt/img/DegreeGray.314f0fc.svg" alt="img" />
                                            <span className='text-muted about-course1 p-1 '>Degree</span>
                                            <h6 className='about-course p-4'>Masters</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='container'>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div>
                                            <img src="https://yocket.com/_nuxt/img/TuitionGray.4529446.svg" alt="img" />
                                            <span className='text-muted about-course1 p-1'>Duration</span>
                                            <h6 className='about-course p-4'>24 Months</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div>
                                            <img src="https://yocket.com/_nuxt/img/CalanderGray.4477e38.svg" alt="img" />
                                            <span className='text-muted about-course1 p-1'>Tuition fee</span>
                                            <h6 style={{ color: '#008744', fontSize: '16px', fontWeight: '700' }} className=' p-4'>$50,928/yr</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* sub course area end */}
                            <div style={{ backgroundColor: '#ECFDF5' }} className="container mt-3 pt-4" >
                                <div className="row col-lg-12 ">
                                    <div className="col-lg-9 col-md-9">
                                        <div className='image-and-head-flex'>
                                            <Image style={{ borderRadius: '100px' }}
                                                src="https://yocket.com/_nuxt/img/LightBulbIconGreen.2c7e973.svg"
                                                width={50}
                                                height={50}
                                            />
                                            <div className='ms-4'>
                                                <Link href="/">
                                                    <a><h5>
                                                        Admit Predictor
                                                    </h5></a>
                                                </Link>
                                                <p className='text-muted'> Get to know a close estimation of your admit chances for this course.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
                                        <Link href="/">
                                            <a target="_blank" rel="noopener noreferrer"  style={{ color: 'green' }} className='view-responsive'>View details  </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            {/* ===sub course area==== */}
                            <div className='course-flex p-4'>
                                <Link href="/SingleSubject">
                                    <a className='course-of-university'> MS in Health Data Science </a>
                                </Link>
                                <Link href="/">
                                    <a target="_blank" rel="noopener noreferrer" className='view-profile-link'>View details  </a>
                                </Link>
                            </div>
                            {/* === course-sub-div area start==== */}
                            {/* inside of course-sub-div start */}
                            {/* sub course area start */}
                            <div className='container'>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div>
                                            <img src="https://yocket.com/_nuxt/img/CalanderGray.4477e38.svg" alt="img" />
                                            <span className='text-muted about-course1 p-1'>Application deadline</span>
                                            <h6 className=' about-course p-4'>Fall, 01/12/2022</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div>
                                            <img src="https://yocket.com/_nuxt/img/DegreeGray.314f0fc.svg" alt="img" />
                                            <span className='text-muted about-course1 p-1 '>Degree</span>
                                            <h6 className='about-course p-4'>Masters</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='container'>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div>
                                            <img src="https://yocket.com/_nuxt/img/TuitionGray.4529446.svg" alt="img" />
                                            <span className='text-muted about-course1 p-1'>Duration</span>
                                            <h6 className='about-course p-4'>16 Months</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div>
                                            <img src="https://yocket.com/_nuxt/img/CalanderGray.4477e38.svg" alt="img" />
                                            <span className='text-muted about-course1 p-1'>Tuition fee</span>
                                            <h6 style={{ color: '#008744', fontSize: '16px', fontWeight: '700' }} className=' p-4'>$50,928/yr</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* inside of course-sub-div end */}
                            <div style={{ backgroundColor: '#ECFDF5' }} className="container mt-3 pt-4" >
                                <div className="row col-lg-12 ">
                                    <div className="col-lg-9 col-md-9">
                                        <div className='image-and-head-flex'>
                                            <Image style={{ borderRadius: '100px' }}
                                                src="https://yocket.com/_nuxt/img/LightBulbIconGreen.2c7e973.svg"
                                                width={50}
                                                height={50}
                                            />
                                            <div className='ms-4'>
                                                <Link href="/">
                                                    <a><h5>
                                                        Admit Predictor
                                                    </h5></a>
                                                </Link>
                                                <p className='text-muted'> Get to know a close estimation of your admit chances for this course.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
                                        <Link href="/">
                                        <a target="_blank" rel="noopener noreferrer" style={{ color: 'green' }} className="view-responsive" >View admit chances </a>
                                       
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="center">
                                <button> View all course </button>
                            </div>
                            {/* === course-sub-div area end==== */}
                        </div>

                        {/*========== main course area end ========== */}

                        {/* ====== main Students area start  ======= */}
                        <div id='student-id' className='bg-white mt-4 border p-4'>
                            <h2 className='single-unv-header'> <span className='I-text'>|</span> Student  </h2>
                            <hr />
                            <div className='row col-lg-12'>
                                <div className='col-lg-4 col-md-6' >
                                    <h4>117</h4>
                                    <p>Yocketers applied</p>
                                    <Link href="/">
                                        <a target="_blank" rel="noopener noreferrer" className='view-profile-link'>View details  </a>
                                    </Link>
                                </div>
                                <div className='col-lg-4 col-md-6' >
                                    <h4>30</h4>
                                    <p>Yocketers applied</p>
                                    <Link href="/">
                                        <a target="_blank" rel="noopener noreferrer" className='view-profile-link'>View details  </a>
                                    </Link>
                                </div>
                                <div className='col-lg-4 col-md-6 mb-4' >
                                    <h4>4,032</h4>
                                    <p>Yocketers applied</p>
                                    <Link href="/">
                                        <a target="_blank" rel="noopener noreferrer" className='view-profile-link'>View details  </a>
                                    </Link>
                                </div>
                                <hr />
                            </div>
                            {/* sub div oc student */}
                            <p className='single-university-sub-header'> Yocketer profiles </p>
                         
                            <div className="row col-lg-12 mb-3">
                                <div className="col-lg-9 col-md-9">
                                    <div className='image-and-head-flex' >
                                        <div>
                                            <Image style={{ borderRadius: '100px' }}
                                                src="https://yocket.com/_nuxt/img/CollegeFinderLogo.0065048.svg"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <div className='ms-4'>
                                            <Link href="/">
                                                <a target="_blank" rel="noopener noreferrer" className='yocket-name'> Gurvir Singh Ratan </a>
                                            </Link>
                                            <p className='text-muted'>Electrical And Electronics Engineering
                                                <span style={{ fontSize: '20px', fontWeight: 'bold' }} > . </span> Fall 2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 view-responsive">
                                    <div className='mt-4'>
                                        <Link href="/">
                                            <a target="_blank" rel="noopener noreferrer" className='view-profile-link'>View details  </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row col-lg-12 mb-3">
                                <div className="col-lg-9 col-md-9">
                                    <div className='image-and-head-flex' >
                                        <div>
                                            <Image style={{ borderRadius: '100px' }}
                                                src="https://yocket.com/_nuxt/img/CollegeFinderLogo.0065048.svg"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <div className='ms-4'>
                                            <Link href="/">
                                                <a target="_blank" rel="noopener noreferrer" className='yocket-name'> Gurvir Singh Ratan </a>
                                            </Link>
                                            <p className='text-muted'>Electrical And Electronics Engineering
                                                <span style={{ fontSize: '20px', fontWeight: 'bold' }} > . </span> Fall 2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 view-responsive">
                                    <div className='mt-4'>
                                        <Link href="/">
                                            <a target="_blank" rel="noopener noreferrer" className='view-profile-link'>View details  </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="row col-lg-12 mb-3">
                                <div className="col-lg-9 col-md-9">
                                    <div className='image-and-head-flex' >
                                        <div>
                                            <Image style={{ borderRadius: '100px' }}
                                                src="https://yocket.com/_nuxt/img/CollegeFinderLogo.0065048.svg"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <div className='ms-4'>
                                            <Link href="/">
                                                <a target="_blank" rel="noopener noreferrer" className='yocket-name'> Gurvir Singh Ratan </a>
                                            </Link>
                                            <p className='text-muted'>Electrical And Electronics Engineering
                                                <span style={{ fontSize: '20px', fontWeight: 'bold' }} > . </span> Fall 2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 view-responsive">
                                    <div className='mt-4'>
                                        <Link href="/">
                                            <a target="_blank" rel="noopener noreferrer" className='view-profile-link'>View details  </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='row col-lg-12'>
                                <div className='col-lg-6'>
                                    <p className='single-university-sub-header'>International Students</p>
                                    <p className='text-muted'>% of international students in the university</p>
                                    <p style={{ fontWeight: '600', fontSize: '16px' }}>15</p>
                                </div>
                                <div className='col-lg-6 mt-4 pt-3'>
                                    <p className='text-muted'>Total International Students in the university</p>
                                    <p style={{ fontWeight: '600', fontSize: '16px' }}>294</p>
                                </div>
                            </div>
                        </div>
                        {/* ====== main Students area end  ======= */}
                        {/* ====== main contact area start  ======= */}
                        <div id='contact-id' className='bg-white mt-4 border p-4'>
                            <h2 className='single-unv-header'> <span className='I-text'>|</span> Contact  </h2>
                            <hr />
                            <h5>Links</h5>
                            <br />
                            <Link href="/">
                                <a>
                                    <span style={{ color: '#EA8C12', fontSize: '17px', fontWeight: '600' }} > University Website </span>
                                    <img src="https://yocket.com/_nuxt/img/ExternalLinkOrange.a50eb9d.svg" alt="" />
                                </a>
                            </Link>
                            <br />
                            <br />
                            <Link href="/">
                                <a>
                                    <span style={{ color: '#EA8C12', fontSize: '17px', fontWeight: '600' }} >International University Website </span>
                                    <img src="https://yocket.com/_nuxt/img/ExternalLinkOrange.a50eb9d.svg" alt="" />
                                </a>
                            </Link>
                            <br />
                            <br />
                            <Link href="/">
                                <a>
                                    <span style={{ color: '#EA8C12', fontSize: '17px', fontWeight: '600' }} > University Brochure </span>
                                    <img src="https://yocket.com/_nuxt/img/ExternalLinkOrange.a50eb9d.svg" alt="" />
                                </a>
                            </Link>
                            <hr />
                            <div className='row col-lg-12'>
                                <div className='col-lg-6'>
                                    <h5>Email</h5>
                                    <p>oue@fas.harvard.edu</p>

                                </div>
                                <div className='col-lg-6'>
                                    <h5>Address</h5>3
                                    <p>86 Brattle Street Cambridge, MA 02138</p>
                                </div>
                            </div>
                            <hr />
                            <h5 className='p-2'>Social Media</h5>
                            {/* <img className='p-2' src="https://yocket.com/_nuxt/img/InstagramRoundedGray.e0133b9.svg" alt="" />
                            <img className='p-2' src="https://yocket.com/_nuxt/img/TwitterRoundedGray.44cd8fb.svg" alt="" />
                            <img className='p-2' src="https://yocket.com/_nuxt/img/YoutubeRoundedGray.d725a5e.svg" alt="" />
                            <img className='p-2' src="https://yocket.com/_nuxt/img/FacebookRoundedGray.24c41d0.svg" alt="" /> */}
                            <Link href="/#">
                                <a href="" target='blank'>
                                    <FontAwesomeIcon icon={faFacebook} className="socia-media-icon" /></a>
                            </Link>
                            <Link href="/#">
                                <a href="" target='blank'>
                                    <FontAwesomeIcon icon={faInstagram} className="socia-media-icon" /></a>
                            </Link>

                            <Link href="/#">
                                <a href="" target='blank'>
                                    <FontAwesomeIcon icon={faTwitter} className="socia-media-icon" /></a>
                            </Link>
                            <Link href="/#">
                                <a href="" target='blank'>
                                    <FontAwesomeIcon icon={faYoutube} className="socia-media-icon" /></a>
                            </Link>
                        </div>
                        {/* ====== main contact area end  ======= */}

                        {/* ====== main Similar University start   ======= */}
                        <div id='similaruniversity-id' className='bg-white mt-4 border p-4'>
                            <h2 className='single-unv-header'> <span className='I-text'>|</span> Similar University </h2>
                            <hr />
                            <div className="row p-2 col-lg-12">
                                <div className="col-lg-9 col-md-9">
                                    <div className='image-and-head-flex' >
                                        <div>
                                            <Image style={{ borderRadius: '100px' }}
                                                src="https://ui-avatars.com/api/?background=ff9800&color=fff&name=Gurvir%20Singh%20Ratan"
                                                width={30}
                                                height={30}
                                            />
                                        </div>
                                        <div className='ms-4'>
                                            <Link href="/">                                            
                                                <a target="_blank" rel="noopener noreferrer" className='similar-unv-header'> Massachusetts Institute of Technology </a>
                                            </Link>
                                            <p className='text-muted similar-unv-pera'> Massachusetts, United States
                                                <span style={{ fontSize: '16px', fontWeight: 'bold' }} > . </span> Fall 2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 view-details-similar-unv">
                                    <div>
                                        <Link href="/">
                                            <a><h6 className='view-profile-link ' > View Details </h6></a>
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
                                                src="https://d15gkqt2d16c1n.cloudfront.net/images/universities/logos/stanford_university_logo.jpg"
                                                width={30}
                                                height={30}
                                            />
                                        </div>
                                        <div className='ms-4'>
                                            <Link href="/">                                            
                                                <a target="_blank" rel="noopener noreferrer" className='similar-unv-header'> Stanford University</a>
                                            </Link>
                                            <p className='text-muted similar-unv-pera'> Massachusetts, United States
                                                <span style={{ fontSize: '16px', fontWeight: 'bold' }} > . </span> Fall 2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 view-details-similar-unv">
                                    <div>
                                        <Link href="/">
                                            <a><h6 className='view-profile-link ' > View Details </h6></a>
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
                                                src="https://d15gkqt2d16c1n.cloudfront.net/images/universities/logos/stanford_university_logo.jpg"
                                                width={30}
                                                height={30}
                                            />
                                        </div>
                                        <div className='ms-4'>
                                            <Link href="/">                                            
                                                <a target="_blank" rel="noopener noreferrer" className='similar-unv-header'> Stanford University</a>
                                            </Link>
                                            <p className='text-muted similar-unv-pera'>  Massachusetts, United States
                                                <span style={{ fontSize: '16px', fontWeight: 'bold' }} > . </span> Fall 2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 view-details-similar-unv">
                                    <div>
                                        <Link href="/">
                                            <a><h6 className='view-profile-link ' > View Details </h6></a>
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
                                                src="https://d15gkqt2d16c1n.cloudfront.net/images/universities/logos/california_berkeley_logo.jpg"
                                                width={30}
                                                height={30}
                                            />
                                        </div>
                                        <div className='ms-4'>
                                            <Link href="/">                                            
                                                <a target="_blank" rel="noopener noreferrer" className='similar-unv-header'> University of California , Berkeley</a>
                                            </Link>
                                            <p className='text-muted similar-unv-pera'>   
                                                <span style={{ fontSize: '16px', fontWeight: 'bold' }} > . </span> Fall 2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 view-details-similar-unv">
                                    <div>
                                        <Link href="/">
                                            <a><h6 className='view-profile-link ' > View Details </h6></a>
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
                                                src="https://d15gkqt2d16c1n.cloudfront.net/images/universities/logos/University_of_oxford_logo.jpg"
                                                width={30}
                                                height={30}
                                            />
                                        </div>
                                        <div className='ms-4'>
                                            <Link href="/">                                            
                                                <a target="_blank" rel="noopener noreferrer" className='similar-unv-header'> University of Oxford </a>
                                            </Link>
                                            <p className='text-muted similar-unv-pera'>   
                                                <span style={{ fontSize: '16px', fontWeight: 'bold' }} > . </span> Fall 2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 view-details-similar-unv">
                                    <div>
                                        <Link href="/">
                                            <a><h6 className='view-profile-link ' > View Details </h6></a>
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
                                                <a target="_blank" rel="noopener noreferrer" className='similar-unv-header'> Colombia University </a>
                                            </Link>
                                            <p className='text-muted similar-unv-pera'>   
                                                <span style={{ fontSize: '16px', fontWeight: 'bold' }} > . </span> Fall 2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 view-details-similar-unv">
                                    <div>
                                        <Link href="/">
                                            <a><h6 className='view-profile-link ' > View Details </h6></a>
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
                                                src="https://d15gkqt2d16c1n.cloudfront.net/images/universities/logos/California_Institute_Of_Technology_Logo"
                                                width={30}
                                                height={30}
                                            />
                                        </div>
                                        <div className='ms-4'>
                                            <Link href="/">                                            
                                                <a target="_blank" rel="noopener noreferrer" className='similar-unv-header'> California Institute Of Technology </a>
                                            </Link>
                                            <p className='text-muted similar-unv-pera'>   
                                                <span style={{ fontSize: '16px', fontWeight: 'bold' }} > . </span> Fall 2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 view-details-similar-unv">
                                    <div>
                                        <Link href="/">
                                            <a><h6 className='view-profile-link ' > View Details </h6></a>
                                        </Link>
                                    </div>
                                </div>
                                <hr />
                            </div>
                

                        </div>
                        {/* ====== main similar university end  ======= */}
                    </div>
                </div>
            </div>
        </div>
    )
}
