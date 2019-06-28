import React, { Component } from 'react';
import Reports from './Reports'
import SearchAds from './SearchAds'

class MainBody extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
    }
  }

  render() {
    return (
      <div className="container-fluid mainBody" >
        <div className="row">

          <div className="col-4 bodyLeft">
            <p className="mt-4"> System </p>
            <p className="text">Configure external fees and email that will be used as default address for notifications</p>
            <div> <a href="/" rel="noopener noreferrer">How does Apple commission influence my statistic?</a> </div>
            <div> <a href="/" rel="noopener noreferrer">How do attribution tracking expenses mean?</a> </div>
          </div>

          <div className="col-8 bodyRight">
            <div className="rightContent">
              <div className="title my-2"><p> General Settings </p></div>
              <hr className="hrBoxes" />

              <div className="row">
                <div>
                  <div className="textBox mb-4"> Email </div>
                  <div className="textBox my-4"> Commission Charges </div>
                  <div className="textBox"> Tracking Expense </div>
                </div>
                <div className="ml-4 rightSetting">
                  <div className="textBox mb-4"> <input className="inputStyle1" placeholder="gregory.murynmukha@gmail.com" /> </div>
                  <div className="textBox my-4"><input className="inputStyle" type="checkbox" />  Take into account Apple commision charges (30%) </div>
                  <div className="textBox"> <input className="inputStyle" placeholder="$0.00" /> per each install </div>
                </div>
              </div>

              <hr className="hrBoxes" />
              <button className="btn btn-primary mr-1 floatButtonRight" href="/" disabled> Save Changes </button>
            </div>
          </div>

        </div>
        <hr className="hrUnits" />
        <Reports />
        <SearchAds />

      </div >
    )
  }
}


export default MainBody
