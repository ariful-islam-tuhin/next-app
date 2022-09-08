import Link from "next/link";
import { Button } from "react-bootstrap"
import useStyles from "../utils/styles";
// import Image from 'next/image';
import Image from "next/image";



const Home = () => {
  // const classes = useStyles();
  return (
    <>
      {/* first div of home page*/}
      <div className='home-first-div'>
        <div className="container pt-4">
          <div className="row p-4 m-4">
            <div className="col-lg-8 col-md-6">
              <h3 className='header'>If studying abroad is your dream, <span className='header-span'> making it simple </span> is ours!</h3>
              <p style={{ fontSize: '20px', marginTop: '30px', fontWeight: '400' }}>Share your study abroad aspirations with us. We’ll make it happen.</p>
              <button className='btn button mt-3'>Get Started</button>
            </div>
            <div className="col-lg-4 col-md-6">
              <Image
                src="https://yocket.com/_ipx/s_562x563/https://d15gkqt2d16c1n.cloudfront.net/images/dashboard/homepage/study-abroad-dream-original.png"
                width={300}
                height={270}
              // objectFit='contain'
              />

            </div>
          </div>
        </div>
      </div>
      {/* Do it the Yocket  way */}
      <div className="container pb-5 mb-2" >
        <h2 style={{ marginTop: '80px', color: 'black', fontSize: '28px', fontWeight: '700' }} className="text-center">Do It the Yocket Way!</h2>
        <p className="do-it-pera text-center">Though we have all the information necessary for the study abroad journey, it’s our four pillars of guidance that set us apart. The pillars that make the journey easy for you!</p>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className=" row col-lg-12">
              <div className="col-lg-4  text-center">
                <Image
                  src="https://d15gkqt2d16c1n.cloudfront.net/images/dashboard/homepage/fellow-dreamer.png"
                  width={100}
                  height={100}
                />
              </div>
              <div className="col-lg-8 ">
                <h5 className="do-it-sub-header">The Council of Counsel</h5>
                <p className="do-it-sub-pera" >A group of experienced and enthusiastic people bringing their best counsel to you to fulfill their sole aim of making your overseas education journey simple and effective.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className=" row col-lg-12">
              <div className="col-lg-4  text-center">
                <Image
                  src="https://d15gkqt2d16c1n.cloudfront.net/images/dashboard/homepage/fellow-dreamer.png"
                  width={100}
                  height={100}
                />
              </div>
              <div className="col-lg-8">
                <h5 className="do-it-sub-header">The Council of Counsel</h5>
                <p className="do-it-sub-pera" >A group of experienced and enthusiastic people bringing their best counsel to you to fulfill their sole aim of making your overseas education journey simple and effective.</p>
              </div>
            </div>
          </div>

        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className=" row col-lg-12">
              <div className="col-lg-4  text-center">
                <Image
                  src="https://d15gkqt2d16c1n.cloudfront.net/images/dashboard/homepage/fellow-dreamer.png"
                  width={100}
                  height={100}
                />
              </div>
              <div className="col-lg-8 ">
                <h5 className="do-it-sub-header">The Council of Counsel</h5>
                <p className="do-it-sub-pera" >A group of experienced and enthusiastic people bringing their best counsel to you to fulfill their sole aim of making your overseas education journey simple and effective.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className=" row col-lg-12">
              <div className="col-lg-4  text-center">
                <Image
                  src="https://d15gkqt2d16c1n.cloudfront.net/images/dashboard/homepage/fellow-dreamer.png"
                  width={100}
                  height={100}
                />
              </div>
              <div className="col-lg-8">
                <h5 className="do-it-sub-header">The Council of Counsel</h5>
                <p className="do-it-sub-pera" >A group of experienced and enthusiastic people bringing their best counsel to you to fulfill their sole aim of making your overseas education journey simple and effective.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* ==========One platform. Many features.================ */}
      <div className="many-features-area">
        <div className="container ">
          <h2 style={{ paddingTop: '100px', fontWeight: '700', fontSize: '28px' }} className="text-center">One platform. Many features.</h2>
          <p style={{ fontSize: '18px', fontWeight: '400' }} className="text-center">All of our special features serve only one. You!</p>

          <div className=" row col-lg-12 pt-5 pb-4">
            <div className="col-lg-6 col-md-6 text-center">
              <Image
                src="https://d15gkqt2d16c1n.cloudfront.net/images/dashboard/homepage/college-finder.png"
                width={360}
                height={330}
              />

            </div>
            <div className="col-lg-6 col-md-6  mt-4 ">
              <h2 className="one-platform-header">Know universities that fit you right!</h2>
              <p className="text-left one-platform-pera">Know universities that fit you right!
                Your preferences, your profile and your grades. That’s all IT needs. Yes! We use an algorithm equipped with our experience and expertise to tailor-make a list of ideal universities for your abroad education.</p>
              <div className="text-center-class">
                <button className='btn button-many-feture'>Find Universities</button>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* ===========Connect with aspirants like you!=================== */}
      <div className=" many-features-area">
        <div className="container">
          <div className=" row col-lg-12 pt-5 pb-4">
            <div className="col-lg-6 col-md-6 mt-4 ">
              <h2 className="one-platform-header">Connect with aspirants like you!</h2>
              <p className="text-left one-platform-pera">We like to bring people of similar interests together. Yocket Connect is a community of help and guidance formed by the aspirants, alumni and counsellors. So, start networking and find someone with who shares your aspiration..</p>
              <div className="text-center-class">
              <button className='btn button-many-feture'>connect</button>
            </div>
            </div>
            <div className="col-lg-6 col-md-6 text-center">

              <Image
                src="https://d15gkqt2d16c1n.cloudfront.net/images/dashboard/homepage/my-community.png"
                width={360}
                height={330}
              />
            </div>
          
          </div>
        </div>
      </div>
      {/* ==== Keep track of======= */}
      <div className="many-features-area">
        <div className="container ">
          <div className="row col-lg-12 pt-5 pb-4">
            <div className="col-lg-6 col-md-6 text-center">
              <Image
                src="https://d15gkqt2d16c1n.cloudfront.net/images/dashboard/homepage/dashboard.png"
                width={360}
                height={330}
              />
            </div>
            <div className="col-lg-6 col-md-6 mt-4">
              <h2 className="one-platform-header">Keep track of your aspirations</h2>
              <p className="text-left one-platform-pera">A place where we give you some space! Space for you to apply for universities, track your applications, add task reminders, upload all your documents and even plan your finances for overseas education.</p>
              <div className="text-center-class">
                <button className='btn button-many-feture'>Get Dashboard</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =======Country? College? University? Course?========== */}
      <div className="text-center mt-4 pt-4 bg-white">
        <h2 style={{ fontWeight: '600', fontSize: '24px' }}>Country? College? University? Course?</h2>
        <p style={{ fontSize: '16px', fontWeight: '400' }}>Our experts know it all. Get instant guidance from the beginning!</p>
        <button style={{ fontSize: '16px', width: '300px', letterSpacing: '1px' }} className='btn button m-4 p-2'>Ask our Experts</button>
      </div>
      <div className="text-center m-4 p-4">
        <h2 className="call-doesnot-header" >Call doesn’t feel enough?</h2>
        <p className="call-doesnot-pera">Let’s chat face-to-face! Drop by our office for expert consultation.</p>
      </div>
      {/* ===== mumbai - pune ==== */}
      <div className="center">
        <div className='flex-call-doesnot'>
          <div className="m-4">
            <h2 className="mumbai-header m-5" >Mumbai - Vidyavihar</h2>
            <div className="text-center">
              <img className="pune-img" src="https://d15gkqt2d16c1n.cloudfront.net/images/Vidyavihar.png" alt="" />
            </div>
            <div className="transprnt-color">
              <img className="y-img" src="https://d15gkqt2d16c1n.cloudfront.net/images/logos/yocket_logo_32x32.svg" alt="" />
              <h3 className="text-start ps-1">Yocket, Neelkanth Business Park</h3>
              <p className="text-start ps-1" >Vidyavihar station skywalk, Sadguru Nagar, Vidyavihar, Mumbai, Maharashtra 400086 </p>
            </div>
          </div>
          <div className="m-4">
            <h2 className="mumbai-header m-5">Pune</h2>
            <div className="text-center">
              <img className="pune-img" src="https://d15gkqt2d16c1n.cloudfront.net/images/Vidyavihar.png" alt="" />
            </div>
            <div className="transprnt-color" >
              <img className="y-img" src="https://d15gkqt2d16c1n.cloudfront.net/images/logos/yocket_logo_32x32.svg" alt="" />
              <h3 className="text-start ps-1">Yocket, Corner Stone Premises</h3>
              <p className="text-start ps-1">No- 601/603, Kashinath Shastri Abhyankar Rd, Deccan Gymkhana, Pune - 411004 </p>
            </div>
          </div>
        </div>
      </div>
      {/* ===== mumbai - pune ==== */}
      {/* =======know more card ========= */}
      <div className="text-center m-4 p-4">
        <h2 style={{ fontWeight: '700', fontSize: '28px' }}>What’s happening with overseas education</h2>
        <p style={{ fontSize: '18px', fontWeight: '400' }}>Stay up-to-date with the latest updates on overseas education, student life, rules, COVID -19, and many more!</p>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="">
              <Image
                src="https://yocket.com/_ipx/w_640,f_webp/https://d15gkqt2d16c1n.cloudfront.net/images/events/1658845454925_Verbal%20%20Quants%20GRE%20Live_Event%20Listing%20Cover.png"
                width={360}
                height={80}
              />
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <div className="text-center-class">
                  <Link href="/#">
                    <button href="#" className="know-more-button ps-5 pe-5">Know More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="">
              <Image
                src="https://yocket.com/_ipx/w_640,f_webp/https://d15gkqt2d16c1n.cloudfront.net/images/events/1658845454925_Verbal%20%20Quants%20GRE%20Live_Event%20Listing%20Cover.png"
                width={360}
                height={80}
              />
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <div className="text-center-class">
                  <Link href="/#">
                    <button href="#" className="know-more-button ps-5 pe-5">Know More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="">
              <Image
                src="https://yocket.com/_ipx/w_640,f_webp/https://d15gkqt2d16c1n.cloudfront.net/images/events/1658845454925_Verbal%20%20Quants%20GRE%20Live_Event%20Listing%20Cover.png"
                width={360}
                height={80}
              />
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <div className="text-center-class">
                  <Link href="/#">
                    <button href="#" className="know-more-button ps-5 pe-5">Know More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <button style={{border:'none', color:'#f97f29'}} className=" p-3  my-auto">View All</button>
        </div>
      </div>
      {/* ========= primium div wave background ====== */}
      <div className=" primium-background pt-5">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6">
              <h3 className="premium-header pb-4">Premium for a reason!</h3>
              <p style={{ fontSize: '20px', fontWeight: '400' }}>Just when you thought we have nothing more to offer. Take a look at our range of premium plans and find the one that fits your dream. With added features and allround guidance, our premium plans are not something to be missed.</p>
              <button className="btn button ps-5 pe-5"> Get Premium</button>
            </div>
            <div className="col-lg-6">
              <Image
                src="https://d15gkqt2d16c1n.cloudfront.net/images/dashboard/homepage/premium-counselling.png"
                width={380}
                height={350}
              />
            </div>
          </div>
        </div>
      </div>
      {/* ===our milestone==== */}
      <div className="container">
        <div className="row text-center  mt-4 pt-4">
          <h2 className="p-4 m-4 our-milestone">Our MileStone</h2>
          <div className="col-lg-3 col-md-6  text-muted">
            <p className="our-milestone-num">5L+</p>
            <p className="our-milestone-p">Total number of users</p>
          </div>
          <div className="col-lg-3 col-md-6 text-muted">
            <p className="our-milestone-num">100%+</p>
            <p className="our-milestone-p">Success Rate</p>
          </div>
          <div className="col-lg-3 col-md-6 text-muted">
            <p className="our-milestone-num">1400+</p>
            <p className="our-milestone-p">No. of Universities</p>
          </div>
          <div className="col-lg-3 col-md-6 text-muted">
            <p className="our-milestone-num">20K+</p>
            <p className="our-milestone-p">No. of Active discussion threads</p>
          </div>
        </div>
      </div>
      {/* ======= People can’t stop talking about us. ===== */}
      <div className="container">

        <div className="row col-lg-12 m-4 p-4">
          <h2 style={{ fontWeight: '700', fontSize: '28px', color: 'black', paddingTop: '120px', paddingBottom: '100px' }} className="text-center"> People can’t stop talking about us. </h2>
          <div className="col-lg-4 col-md-6">
            <div className="cart pt-4 pb-4">
              <p className="people-div-pera">"They surely made my application process a lot easier, from shortlisting universities according to my profile, improving my resume and SOP drafts to reviewing applications. I'm really glad that I chose Yocket."</p>
            </div>
            <div className="people-div-name">
              <p className="mt-4 pt-4 ">krithika madabhooshi</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="cart pt-4 pb-4">
              <p className="people-div-pera"> dditional content. A quick brown fox jump over the lazy dog dhaka is the capital of balngaldesh balngladesh is a small country</p>
            </div>
            <div className="people-div-name">
              <p className="mt-4 pt-4 ">Harshit Mittal</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="cart pt-4 pb-4">
              <p className="people-div-pera"> "I had the best experience with yocket as they have given me the best opportunity and which was hassle free and very fast "</p>
            </div>
            <div className="people-div-name">
              <p className="mt-4 pt-4 ">Vanshika Rai</p>
            </div>
          </div>

        </div>
      </div>

      {/* ======Start your Study Abroad Journey Now!===== */}
      <div>
        <div style={{ marginTop: '120px' }} className="p-4 text-center">
          <h3 style={{ fontSize: '28px', fontWeight: '400', }}>Start your Study Abroad Journey Now!</h3>
          <Link href="/#">
            <button href="#" className="btn button mt-2">Sign  Up</button>
          </Link>
        </div>
      </div>
      <div className="total-image">
      </div>
    </>
  )
}

export default Home