import React from 'react'
import LeftNav from './components/LeftNav'
import './App.css'

function App() {
  return (
    <div>

      <div className="top">
        <p className="my-auto ml-3"> Settings </p>
        <a className="btn btn-primary mr-3" href="/" role="button"> Log Out </a>
      </div>

      <LeftNav />

      <div className="container-fluid mainBody">
          <div className="row">
            <div className="col-4 bodyLeft"> Left Body </div>
            <div className="col-8 bodyRight"> Right Body </div>
          </div>
      </div>

    </div>
  )
}

export default App
