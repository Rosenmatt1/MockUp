import React, { Component } from 'react';
import Reports from './Reports'
import SearchAds from './SearchAds'
import Billing from './Billing'
import Access from './Access'

class MainBody extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      progress: false,
      active: false,
      active2: false,
      active3: false,
      active4: true,
      open: false,
      password: false,
      enteredPassword: "",
      passwordError: false,
      inputChange: false,
      newPhone: "",
      newZip: "",
      editCreditCard: false
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

  enableActive4 = (e) => {
    e.preventDefault()
    this.setState({
      active4: !this.state.active4,
    })
  }

  openUser = (e) => {
    e.preventDefault()
    console.log("Open User")
    this.setState({
      open: true,
    })
  }

  capturePhone = (e) => {
    this.setState({
      newPhone: e.target.value,
      phoneChange: true,
    })
    if (this.state.newPhone.length <= 0) {
      console.log("phone is 0!")
      this.setState({
        phoneChange: false,
      })
    }
    console.log(this.state.newPhone)
    console.log(this.state.newPhone.length)
  }

  captureZip = (e) => {
    this.setState({
      newZip: e.target.value,
      zipChange: true,
    })
    if (this.state.newZip.length <= 0) {
      console.log(this.state.newZip.length)
      this.setState({
        zipChange: false,
      })
    }
  }

  openCredit = () => {
    this.setState({
      editCreditCard: true
    })
  }

  passwordCurrent = (e) => {
    this.setState({
      enteredPassword: e.target.value,
      password: true,
    })
    if (this.state.enteredPassword <= 0) {
      this.setState({
        password: false,
      })
    }
  }

  passwordCheck = (e) => {
    e.preventDefault()
    if (this.state.enteredPassword < 6) {
      console.log("rejected password")
      this.setState({
        passwordError: true,
      })
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
              <div className="title my-2 ml-2"><p> General Settings </p></div>
              <hr className="hrBoxes" />

              <div className="row">
                <div className="flexColumn ml-2">
                  <div className="textBox"> Email </div>
                  <div className="textBox my-4"> Commission Charges </div>
                  <div className="textBox"> Tracking Expense </div>
                </div>
                <div className="ml-2 flexColumn">
                  <div className="textBox"> <input className="pl-2 inputStyle1" placeholder="gregory.murynmukha@gmail.com" /> </div>
                  <div className="textBox my-4"> <input className="mr-1 inputStyle" onClick={this.checkedSetting} type="checkbox" />  Take into account Apple commision charges (30%) </div>
                  <div className="textBox"> <input className="pl-2 inputStyle" placeholder="$0.00" /> per each install </div>
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
        <Billing
          inputChange={this.state.inputChange}
          capturePhone={this.capturePhone}
          captureZip={this.captureZip}
          active4={this.state.active4}
          enableActive4={this.enableActive4}
          editCreditCard={this.state.editCreditCard}
          openCredit={this.openCredit}
        />
        <Access
          password={this.state.password}
          passwordCurrent={this.passwordCurrent}
          passwordCheck={this.passwordCheck}
        />

      </div >
    )
  }
}


export default MainBody
