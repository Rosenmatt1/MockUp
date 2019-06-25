import React, { Component } from 'react';
import LeftNav from './components/LeftNav'
import TopNav from './components/TopNav'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedUser: false,
      selectedAlerts: false,
      selectedAnalytics: false,
      selectedBox: false
    }
  }

  selectUser = () => { 
    this.setState({
      selectedUser: true,
      selectedAlerts: false,
      selectedAnalytics: false,
      selectedBox: false
    }) 
  }

  selectAlerts = () => { 
    this.setState({ 
      selectedUser: false,
      selectedAlerts: true,
      selectedAnalytics: false,
      selectedBox: false
    }) 
  }

  selectAnalytics = () => { 
    this.setState({ 
      selectedUser: false,
      selectedAlerts: false,
      selectedAnalytics: true,
      selectedBox: false
    }) 
  }

  selectBox = () => { 
    this.setState({ 
      selectedUser: false,
      selectedAlerts: false,
      selectedAnalytics: false,
      selectedBox: true
    }) 
  }

  render() {
    return (
      <div>
        <TopNav />
        <LeftNav 
          selectedUser={this.state.selectedUser}
          selectUser={this.selectUser}
          selectedAlerts={this.state.selectedAlerts}
          selectAlerts={this.selectAlerts}
          selectedAnalytics={this.state.selectedAnalytics}
          selectAnalytics={this.selectAnalytics}
          selectedBox={this.state.selectedBox}
          selectBox={this.selectBox}
        />

        <div className="container-fluid mainBody">
          <div className="row">
            <div className="col-4 bodyLeft"> Left Body </div>
            <div className="col-8 bodyRight"> Right Body </div>
          </div>
        </div>

        {/* <a href="#" rel="noopener noreferrer"/> */}

      </div>
    )
  }
  }

  export default App
