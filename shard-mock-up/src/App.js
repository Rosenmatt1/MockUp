import React from 'react'
import './App.css'

function App() {
  return (
    <div>

      <div className="top">
        <p className="my-2"> Settings </p>
        <a className="btn btn-primary logout" href="/" role="button"> Log Out </a>
      </div>

      <div className="leftNav">
        <div className="sideNavItem">
          <i className="fas fa-search"> </i>
        </div>
        {/* <a href="#" rel="noopener noreferrer"/> */}
      </div>




      <div className="mainBody">

        <div className="container-fluid">
          <div className="row">
            <div className="col-4 bodyLeft"> Left Body </div>
            <div className="col-8 bodyRight"> Right Body </div>
          </div>
        </div>


      </div>



    </div>
  )
}

export default App
