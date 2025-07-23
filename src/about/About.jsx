import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
export default function About() {

const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/about') {
            document.title = 'about';
        }
    }, [location.pathname]);



  return (
    <>

<div className="about container min-vh-100 d-flex flex-column justify-content-center">
 <div><h2 className="text-uppercase text-light fw-bolder">  about component</h2></div>

    <div className="d-flex align-items-center justify-content-center my-3">
<div className="line me-3" style={{background:'#F8F9FA', height:'4px', width: '90px'}}></div>
<i className='fa-solid fa-star ' style={{color:'#F8F9FA'}}></i>
<div className="line ms-3" style={{background:'#F8F9FA', height:'4px' ,width: '90px' }}></div>
</div>

<div className="row pt-2">
  <div className="col-md-6">
    <p className='text-light'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
  </div>
  
  <div className="col-md-6">
    <p className='text-light'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
  </div>
</div>
 
</div>

    
    </>
  )
}
