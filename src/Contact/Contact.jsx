import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import { useLocation } from 'react-router-dom';

export default function Contact() {

const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/contact') {
            document.title = 'contact';
        }
    }, [location.pathname]);



  return (

<>
<h2 className='text-uppercase mt-5 pt-5 title'>conatct section</h2>

<div className="d-flex align-items-center justify-content-center mt-4">
<div className="line me-3" style={{background:'#2c3e50', height:'4px', width: '90px'}}></div>
<i className='fa-solid fa-star'></i>
<div className="line ms-3" style={{background:'#2c3e50', height:'4px' ,width: '90px' }}></div>
</div>

<div className='pt-5 mb-5'>
<Form className='d-flex flex-column align-items-center'>
      <Form.Group className="mb-3 w-75 " controlId="exampleForm.ControlInput1">
        <Form.Control className='  label p-2' type="text" placeholder="UserName" />
      </Form.Group>
      <Form.Group className="mb-3 w-75" controlId="exampleForm.ControlInput1">
        <Form.Control className='  label p-2' type="text" placeholder="UserAge" />
      </Form.Group>
      <Form.Group className="mb-3 w-75" controlId="exampleForm.ControlInput1">
        <Form.Control className='  label p-2' type="email" placeholder="UserEmail" />
      </Form.Group>
      <Form.Group className="mb-3 w-75" controlId="exampleForm.ControlInput1">
        <Form.Control className='  label p-2' type="password" placeholder="UserPassword" />
      </Form.Group>
    </Form>
     <div className="text-start mt-2">
     <button className=' btn'>send Message</button>
      </div>
</div>

</>



  )
}



