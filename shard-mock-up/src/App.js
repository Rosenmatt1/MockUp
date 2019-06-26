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

            <div className="col-4 bodyLeft">
              <p className="mt-5"> System </p>
              <p className="text">Configure external fees and email that will be used as default address for notifications</p>
              <a href="/" rel="noopener noreferrer"><p>How does Apple commission influence my statistic?</p></a>
              <a href="/" rel="noopener noreferrer"><p>How do attribution tracking expenses mean?</p></a>
            </div>

            <div className="col-8 bodyRight">
              <div className="rightContent">
                <div className="text my-4"><p> General Settings </p></div>
                <hr className="hrBoxes"/>
                <div className="text my-4"> Email <input /> </div>
                <div className="text my-4"> Commission Charges <input type="checkbox" />  Take into account apple commision charges (30%) </div>
                <div className="text"> Tracking Expense <input /> per each install </div>
                <a className="btn btn-primary floatButtonRight" href="/" role="button"> Save Changes </a>
              </div>
            </div>

          </div>
          <hr className="hrUnits"/>
        </div>

        

      </div>
    )
  }
}

export default App
