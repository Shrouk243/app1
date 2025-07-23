import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
export default function Error() {


const location = useLocation();

    

    useEffect(() => {
        document.title = '404';
    }, [location.pathname]);


  return (
    <>const location = useLocation();

    
    
    <div className="container w-75 min-vh-100 mt-5 pt-5"><h3>not-found works</h3></div>
    
    </>
  )
}
