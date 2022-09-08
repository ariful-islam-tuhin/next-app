import React from 'react'
import Footer from './Footer'
import NavBar from './Navbar'


export default function Layout({children}) {
  return (
    <div className=''>
        <NavBar></NavBar>   
        {children}
        <Footer></Footer>
    </div>
  )
}