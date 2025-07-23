import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'


export default function Layout() {
  return (
<>
<Navbar/>

<div className="container pt-5">
<Outlet/>
</div>


<Footer/>
</>
)
}
