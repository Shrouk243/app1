import React, { useEffect } from 'react'
import Image from 'react-bootstrap/cjs/Image'
import { useLocation } from 'react-router-dom';

export default function Portfolio() {



const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/portfolio') {
            document.title = 'portfolio';
        }
    }, [location.pathname]);


  return (
    <>
<h2 className='fw-bolder text-uppercase mt-5 pt-5 title'>portfolio component</h2>

<div className="d-flex align-items-center justify-content-center mt-4">
<div className="line me-3" style={{background:'#2c3e50', height:'4px', width: '90px'}}></div>
<i className='fa-solid fa-star'></i>
<div className="line ms-3" style={{background:'#2c3e50', height:'4px' ,width: '90px' }}></div>
</div>

    <div className="container text-center w-100 ms-5 mb-5">

 <div className="row mt-5 gap-5 ">
      
<div className="col-md-3 me-4">
    <div className="imgi position-relative">
        <img 
            src="imgi_1_poert1.png" 
            alt="Avatar"
            className="avatar-img border rounded-3"
        />
        <div className="image-overlay position-absolute d-flex justify-content-center align-items-center border rounded-3">
            <i className="fa-solid fa-plus fa-2xl text-white"></i>
        </div>
    </div>
</div>

<div className="col-md-3 me-4">
    <div className="imgi position-relative">
        <img 
            src="imgi_2_port2.png" 
            alt="Avatar"
            className="avatar-img border rounded-3"
        />
        <div className="image-overlay position-absolute d-flex justify-content-center align-items-center border rounded-3">
            <i className="fa-solid fa-plus fa-2xl text-white"></i>
        </div>
    </div>
</div>

<div className="col-md-3 me-4">
    <div className="imgi position-relative">
        <img 
            src="imgi_3_port3.png" 
            alt="Avatar"
            className="avatar-img border rounded-3"
        />
        <div className="image-overlay position-absolute d-flex justify-content-center align-items-center border rounded-3">
            <i className="fa-solid fa-plus fa-2xl text-white"></i>
        </div>
    </div>
</div>

      <div className="col-md-3 me-4">
    <div className="imgi position-relative">
        <img 
            src="imgi_1_poert1.png" 
            alt="Avatar"
            className="avatar-img border rounded-3"
        />
        <div className="image-overlay position-absolute d-flex justify-content-center align-items-center border rounded-3">
            <i className="fa-solid fa-plus fa-2xl text-white"></i>
        </div>
    </div>
</div>
     

<div className="col-md-3 me-4">
    <div className="imgi position-relative">
        <img 
            src="imgi_2_port2.png" 
            alt="Avatar"
            className="avatar-img border rounded-3"
        />
        <div className="image-overlay position-absolute d-flex justify-content-center align-items-center border rounded-3">
            <i className="fa-solid fa-plus fa-2xl text-white"></i>
        </div>
    </div>
</div>
     

      <div className="col-md-3 me-4">
    <div className="imgi position-relative">
        <img 
            src="imgi_3_port3.png" 
            alt="Avatar"
            className="avatar-img border rounded-3"
        />
        <div className="image-overlay position-absolute d-flex justify-content-center align-items-center border rounded-3">
            <i className="fa-solid fa-plus fa-2xl text-white"></i>
        </div>
    </div>
</div>
    </div>

    </div>
   
    



    </>
  )
}
