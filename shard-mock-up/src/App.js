import React from 'react'
import './App.css'

function App() {
  return (
    <div className="container-fluid">

      <div className="row top">
        <p classname="my-2"> Settings </p>
        <a className="btn btn-primary my-2 logout" href="#" role="button"> Log Out </a>
      </div>

      <div className="col-2 leftNav"> Left Nav
        {/* <a href="#" rel="noopener noreferrer"/> */}
        <i className="fas fa-search"> </i> 
      </div>

      <div className="body"> Body </div>
    
      </div>

      )
    }
    
    export default App
