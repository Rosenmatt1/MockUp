import React, { Component } from 'react';
import Reports from './Reports'
import SearchAds from './SearchAds'

class MainBody extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      progress: false,
      active: false,
      active2: false,
      active3: false,
      open: false
    }
  }

  checkedSetting = () => {
    this.setState({
      checked: !this.state.checked,
    })
  }

  progressActivation = (e) => {
    e.preventDefault()
    console.log("Progress")
    this.setState({
      progress: !this.state.progress,
    })
  }

  enableActive = (e) => {
    e.preventDefault()
    this.setState({
      active: !this.state.active,
    })
  }

  enableActive2 = (e) => {
    e.preventDefault()
    this.setState({
      active2: !this.state.active2,
    })
  }

  enableActive3 = (e) => {
    e.preventDefault()
    this.setState({
      active3: !this.state.active3,
    })
  }

  openUser = (e) => {
    e.preventDefault()
    console.log("Open User")
    this.setState({
      open: true,
    })
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
                <div className="flexColumn">
                  <div className="textBox"> Email </div>
                  <div className="textBox my-4"> Commission Charges </div>
                  <div className="textBox"> Tracking Expense </div>
                </div>
                <div className="ml-4 flexColumn">
                  <div className="textBox"> <input className="inputStyle1" placeholder="gregory.murynmukha@gmail.com" /> </div>
                  <div className="textBox my-4"> <input className="inputStyle" onClick={this.checkedSetting} type="checkbox" />  Take into account Apple commision charges (30%) </div>
                  <div className="textBox"> <input className="inputStyle" placeholder="$0.00" /> per each install </div>
                </div>
              </div>

              <hr className="hrBoxes" />

              {this.state.checked 
                ? <button className="btn btn-primary mr-1 floatButtonRight" href="/"> Save Changes </button>
                : <button className="btn btn-primary mr-1 floatButtonRight" href="/" disabled> Save Changes </button>
              }

            </div>
          </div>

        </div>
        <hr className="hrUnits" />

        <Reports 
          progressActivation={this.progressActivation}
          progress={this.state.progress}
        />
        <SearchAds 
          enableActive={this.enableActive}
          active={this.state.active}
          enableActive2={this.enableActive2}
          active2={this.state.active2}
          openUser={this.openUser}
          active3={this.state.active3}
          enableActive3={this.enableActive3}
          open={this.state.open}
        />

      </div >
    )
  }
}


export default MainBody
