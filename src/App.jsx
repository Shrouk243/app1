import { useState } from 'react'
import './App.css'
import Home from './Home/Home'
import About from './about/About'
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom'
import Layout from './Layout/Layout'
import Contact from './Contact/Contact'
import Portfolio from './Portfolio/Portfolio'
import Error from './error/Error'



let x = createBrowserRouter([
  {path: "" , element: <Layout/> ,children:[

    {index : true, element: <Home/>},
{path: "About" , element: <About/>},
{path: "Portfolio" , element: <Portfolio/>},
{path: "Contact" , element: <Contact/>},
{path: "*" , element: <Error/>},

  ]},



])




function App() {
  const [count, setCount] = useState(0)
  return (
    <>
   

      <RouterProvider router={x}  ></RouterProvider>
    </>
  )
}

export default App
