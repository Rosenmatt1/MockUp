import React, { Component } from 'react';
import LeftNav from './components/LeftNav'
import TopNav from './components/TopNav'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <TopNav />
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
  }

  export default App
