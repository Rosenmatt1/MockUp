import React from 'react'
import LeftNav from './components/LeftNav'
import './App.css'

function App() {
  return (
    <div>

      <div className="row top">

        <div className="setting">
          <p className="my-auto"> Settings </p>
        </div>

        <div className="logout">
          <a className="btn btn-primary" href="/" role="button"> Log Out </a>
        </div>

      </div>


      <LeftNav />


      <div className="container-fluid mainBody">
        {/* <div className="container-fluid"> */}
          <div className="row">
            <div className="col-4 bodyLeft"> Left Body </div>
            <div className="col-8 bodyRight"> Right Body </div>
          </div>
        {/* </div> */}
      </div>

    </div>
  )
}

export default App
