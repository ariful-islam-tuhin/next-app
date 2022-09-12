import { Button } from '@material-ui/core';
import React from 'react';
import Image from 'next/image'

// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import { faHighlighter } from '@fortawesome/free-solid-svg-icons';



const MyProfile = () => {
    return (
        <div style={{ backgroundColor: '#f6f5f2' }}>
            <div className='container'>
                <div className='border' >
                    <div>
                        <Image src="https://d15gkqt2d16c1n.cloudfront.net/images/dashboard/profile/default-bg-image-profile.jpg" alt=""
                            width={1130}
                            height={160}
                        />
                    </div>
                    <div className='ps-4 bg-white pb-4'>
                        <Button style={{ color: 'white', fontSize: '25px', borderRadius: '100px', marginTop: '-30px', backgroundColor: '#3F51B5' }} >E</Button>
                        <h2>Emon Ahmed</h2>
                        <h6>@Emon_LwzFW * Fall 2023</h6>
                    </div>
                </div>
                <div className='row col-lg-12'>
                    <div className=" col-lg-3 single-unv-nav mt-4 ps-3 ">
                        <ul>
                            <li ><a href="#AboutProfile-id">About Profile</a></li>
                            <li><a href="#FeedActivities-id">Feed Activities</a></li>
                        </ul>
                    </div>
                    <div className='col-lg-9'>
                        <div className="p-4 bg-white border mt-4" id="AboutProfile-id">
                            <h4> <span className='I-text'>|</span> We are excited to hear more!  </h4>
                            <p>&nbsp;&nbsp;&nbsp; Tell us by completing your profile.</p>
                            <hr />
                            <div className='row'>
                                <h5 className='col-lg-8'> Lets take one step at a time.</h5>
                                <h6 className='col-lg-4 text-danger ps-4'> Completed 1/8 </h6>
                            </div>
                            <br />
                            <div className='container border pt-4 pb-2'>
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div>
                                            <Image src="https://d15gkqt2d16c1n.cloudfront.net/images/dashboard/profile/school-college-details.png" alt="img"
                                                width={20}
                                                height={20}
                                            />
                                            <span style={{ fontSize: '24px', padding: '10px' }}>All about your undergrade</span>
                                            <p style={{ fontSize: '14px', paddingLeft: '30px' }}>Undergrade is our key to find universities that fit you </p>

                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div>
                                            <button className='btn button'> add details </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            <br />
                            <div className='border border-ronded p-5 '>
                                <div>
                                    <h4>Study Abroad Preferences</h4>
                                    <h6>Course Preferences (Upto 3)</h6>
                                    <button className='btn button'>computer Science</button>
                                </div>
                                <hr />
                                <div>
                                    <h4>Country Preferences (Upto 3)</h4>
                                </div>
                                <button className='btn button'> United State </button>

                            </div>
                            {/*  */}
                        </div>
                        {/* <div className='FeedActivities' id = 'FeedActivities-id'>

                    </div> */}
                    </div>




                </div >

                {/*  */}
            </div>


        </div >
    );
};

export default MyProfile;