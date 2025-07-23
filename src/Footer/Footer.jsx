import React from 'react'

export default function Footer() {
  return (
<>

<div className="footer text-light py-5 ">
<div className="row py-5 justify-content-center">
<div className="col-md-3">
    <h3>LOCATION</h3>
    <p>2215 John Daniel Drive</p>
    <p>Clark, MO 65243</p>
</div>

   <div className="col-md-3 ">
  <h3>AROUND THE WEB</h3>
  <div className="d-flex justify-content-center pt-2">
    <i className="fa-brands fa-facebook pe-3"></i>
    <i className="fa-brands fa-twitter pe-3 "></i>
    <i className="fa-brands fa-linkedin pe-3"></i>
    <i className="fa-solid fa-earth-americas"></i>
  </div>
</div>

<div className="col-md-3 ">
    <h3>ABOUT FREELANCER</h3>
    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
</div>

</div>

</div>
<div className="  py-4 footer-2 text-light ">Copyright © Your Website 2021

</div>


</>


  )
}
