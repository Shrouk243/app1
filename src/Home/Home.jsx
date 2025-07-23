import React, { useEffect } from 'react'
import Image from './../../node_modules/react-bootstrap/cjs/Image.d';
import { useLocation } from 'react-router-dom';
export default function Home() {


const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            document.title = 'home';
        }
    }, [location.pathname]);




  return (
    <>
  


<div className="home min-vh-100  d-flex flex-column align-items-center justify-content-center">
  <img 
    src="avataaars[1].svg" 
    alt="Avatar"
    className="avatar-img"
    style={{ width: '250px', height: '250px' }}
  />
  <h2 className="text-uppercase text-light fw-bolder mt-5 tm">Start Framework</h2>

 <div className="d-flex align-items-center justify-content-center my-3">
<div className="line me-3" style={{background:'#F8F9FA', height:'4px', width: '90px'}}></div>
<i className='fa-solid fa-star ' style={{color:'#F8F9FA'}}></i>
<div className="line ms-3" style={{background:'#F8F9FA', height:'4px' ,width: '90px' }}></div>
</div>

  <p className="text-light">Graphic Artist - Web Designer - Illustrator</p>
</div>
   
    </>
  )
}






