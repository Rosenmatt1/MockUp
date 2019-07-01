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
      progress2: false,
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
      editCreditCard: false,
      reportsToast: false,
      searchToast: false,
      accountToast: false,
      incrementor: 0,
      incrementor2: 0,
      hidden: true
    }
  }

  checkedSetting = () => {
    this.setState({
      checked: !this.state.checked,
    })
  }

  progressActivation = (e) => {
    e.preventDefault()
    this.setState({
      progress: true,
    })
    this.theIncrementor()
  }

  theIncrementor = () => {
    setInterval(() => {
      this.setState({
        incrementor: this.state.incrementor + 3,
      })
    }, 100)
    console.log("The Incrementor")

    if (this.state.incrementor >= 100) {
      console.log("cleared at 100")
      clearInterval(this.theIncrementor)
      this.setState({
        reportsToast: true,
      })
      setTimeout(() => {
        this.setState({
          reportsToast: false,
          progress: false,
        })
      }, 2500)
    }
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

  searchToastActivate = () => {
    this.setState({
      searchToast: true,
    })
  }

  // searchToastActivate = () => {
  //   console.log("Search Toast!")
    
  // }

  openUser = (e) => {
    e.preventDefault()
    console.log("Search Toast!")
    this.setState({
      progress2: true,
      searchToast: true,
    })
    setInterval(() => {
      this.setState({
        incrementor2: this.state.incrementor2 + 3,
      })
    }, 100)

    if (this.state.incrementor >= 100) {
      console.log("triggered at 100")
      clearInterval(this.searchToastActivate)
      this.setState({
        progress2: false,
        searchToast: false,
        accountToast: true,
        open: true,
      })

      setTimeout(() => {
        this.setState({
          accountToast: false
        })
      }, 2500)
    }
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
      editCreditCard: !this.state.editCreditCard
    })
  }

  passwordCurrent = (e) => {
    this.setState({
      enteredPassword: e.target.value,
      password: true,
    })
    if (this.state.enteredPassword.length <= 0) {
      console.log("enteredPassword.length", this.state.enteredPassword.length)
      this.setState({
        password: false,
      })
    }
  }

  passwordCheck = (e) => {
    e.preventDefault()
    if (this.state.enteredPassword.length < 6) {
      console.log("rejected password triggered")
      this.setState({
        passwordError: true,
      })
    }
  }

  closeToast = () => {
    this.setState({
      reportsToast: false,
      searchToast: false,
      accountToast: false,
    })
  }

  showPassword = () => {
    console.log(this.state.hidden)
    this.setState({
      hidden: !this.state.hidden
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
              <div className="title my-2 ml-2"><p> General Settings </p></div>
              <hr className="hrBoxes" />

              <div className="row">
                <div className="flexColumn ml-4">
                  <div className="textBox"> Email </div>
                  <div className="textBox my-4"> Commission Charges </div>
                  <div className="textBox"> Tracking Expense </div>
                </div>
                <div className="ml-3 flexColumn">
                  <div className="textBox"> <input className="pl-2 inputStyle1" placeholder="gregory.murynmukha@gmail.com" /> </div>
                  <div className="textBox my-4"> <input className="mr-1 inputStyle" onClick={this.checkedSetting} type="checkbox" />  Take into account Apple commision charges (30%) </div>
                  <div className="textBox"> <input className="pl-2 mr-2 inputStyle" placeholder="$0.00" /> per each install </div>
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
          incrementor={this.state.incrementor}
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
          progress2={this.state.progress2}
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
          hidden={this.state.hidden}
          showPassword={this.showPassword}
          enteredPassword={this.state.enteredPassword}
      />

        {this.state.reportsToast
          ?
          <div className="toasts spacer p-3">
            <div> Appsflyer statistics has been updated. </div>
            <i className="fas fa-times" onClick={this.closeToast}> </i>
          </div>
          :
          <div></div>
        }

        {this.state.searchToast
          ?
          <div className="toasts spacer p-3">
            <div> Account hasn't been added because of invalid API certificates. </div>
            <i className="fas fa-times" onClick={this.closeToast}> </i>
          </div>
          :
          <div></div>
        }

        {this.state.accountToast
          ?
          <div className="toasts spacer p-3">
            <div> Account has been added successfully. </div>
            <i className="fas fa-times" onClick={this.closeToast}> </i>
          </div>
          :
          <div></div>
        }

      </div >
    )
  }
}


export default MainBody
