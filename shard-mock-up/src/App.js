import React, { Component } from 'react';
import LeftNav from './components/LeftNav'
import TopNav from './components/TopNav'
import MainBody from './components/MainBody'
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
        <MainBody />


        {/* <div className="col-8 bodyRight">
          <div className="rightContent">
            <div className="textBox my-2"><p> General Settings </p></div>
            <hr className="hrBoxes" />
            <div className="textBox my-4"> Email <input className="inputStyle" placeholder="gregory.murynmukha@gmail.com" /> </div>
            <div className="textBox my-4"> Commission Charges <input className="inputStyle" type="checkbox" />  Take into account Apple commision charges (30%) </div>
            <div className="textBox"> Tracking Expense <input className="inputStyle" placeholder="$0.00" /> per each install </div>
            <hr className="hrBoxes" />
            <button className="btn btn-primary mr-1 floatButtonRight" href="/" role="button" disabled> Save Changes </button>
          </div>
        </div> */}


      </div>
    )
  }
}

export default App
