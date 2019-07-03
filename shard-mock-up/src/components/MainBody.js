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
      reportsToast: false,
      searchToast: false,
      accountToast: false,
      incrementor: 0,
      incrementor2: 0,
      hidden: true,
      timesClicked: 0,
      namesArray: [
        { name: "Machelle Greiner", active: false, id: 0 },
        { name: "Carleen Braden", active: false, id: 1 },
        { name: "Shon Poyner", active: false, id: 2 },
        { name: "Kourtney Calcote", active: false, id: 3 },
        { name: "Briana Byfield", active: false, id: 4 },
        { name: "Lyndon Vera", active: false, id: 5 },
        { name: "Gwen Keasler", active: false, id: 6 },
        { name: "Tim Alcott", active: false, id: 7 },
        { name: "Almeta Malizia", active: false, id: 8 },
        { name: "Veronique Borne", active: false, id: 9 },
        { name: "John Linch", active: false, id: 10 },
        { name: "Fay Durgha", active: false, id: 11 }
      ],
      users: [],
      newPhone: "",
      newZip: "",
      newName: "",
      email: "",
      emailActive: false,
      editCreditCard: false,
      password: false,
      enteredPassword: "",
      passwordError: false,
      passwordNotMatch: false,
      passwordChanged: false,
      passwordSame: false,
      newPassword: "",
      confirmPassword: "",
    }
  }

  captureEmail = (e) => {
    this.setState({
      email: e.target.value
    }, () => {
      if (this.state.email.length > 0) {
        this.setState({
          emailActive: true
        })
      } else {
        this.setState({
          emailActive: false
        })
      }
    })
  }

  checkedSetting = () => {
    this.setState({
      checked: !this.state.checked
    })
  }

  saveSystem = () => {
    this.setState({
      email: "",
      checked: false,
      emailActive: false
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
    let setter = setInterval(() => {
      this.setState({
        incrementor: this.state.incrementor + 5,
      })
      if (this.state.incrementor >= 100) {
        clearInterval(setter)
        this.setState({
          reportsToast: true,
          incrementor: 0,
          progress: false,
        })
        setTimeout(() => {
          this.setState({
            reportsToast: false,
          })
        }, 2500)
      }
    }, 100)
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

  userActive = (id) => {
    let mappedUsers = this.state.users.map(user => {
      if (id === user.id) {
        user.active = !user.active
      }
      return user
    })
    this.setState({
      users: mappedUsers,
    })
  }

  searchToastActivate = () => {
    this.setState({
      searchToast: true,
    })
  }

  theIncrementor2 = () => {
    let interval = setInterval(() => {
      this.setState({
        incrementor2: this.state.incrementor2 + 5,
      })
      if (this.state.timesClicked > 1) {
        if (this.state.incrementor2 >= 100) {
          clearInterval(interval)
          this.setState({
            accountToast: true,
            progress2: false,
            open: true,
            timesClicked: 0
          })
          setTimeout(() => {
            this.setState({
              accountToast: false
            })
          }, 2500)
          this.generateName()
        }
      } else {
        if (this.state.incrementor2 >= 100) {
          clearInterval(interval)
          this.setState({
            searchToast: true,
            progress2: false,
            incrementor2: 0,
          })
          setTimeout(() => {
            this.setState({
              searchToast: false
            })
          }, 2500)
        }
      }
    }, 100)
  }

  generateName = () => {
    let randomName = this.state.namesArray[Math.floor(Math.random() * this.state.namesArray.length)]
    this.setState({
      users: [...this.state.users, randomName]
    })
  }

  openUser = (e) => {
    e.preventDefault()
    this.setState({
      progress2: true,
      timesClicked: this.state.timesClicked + 1,
    }, () => {
      this.theIncrementor2()
    })
  }

  captureName = (e) => {
    this.setState({
      newName: e.target.value,
      nameChange: true,
    }, () => {
      if (this.state.newName.length <= 0) {
        this.setState({
          nameChange: false,
        })
      }
    })
  }

  capturePhone = (e) => {
    this.setState({
      newPhone: e.target.value,
      phoneChange: true,
    }, () => {
      if (this.state.newPhone.length <= 0) {
        this.setState({
          phoneChange: false,
        })
      }
    })
  }

  captureZip = (e) => {
    this.setState({
      newZip: e.target.value,
      zipChange: true,
    }, () => {
      if (this.state.newZip.length <= 0) {
        this.setState({
          zipChange: false,
        })
      }
    })
  }

  billingSave = () => {
    this.setState({
      newName: "",
      newPhone: "",
      newZip: ""
    })
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
    }, () => {
      if (this.state.enteredPassword.length > 0 || this.state.newPassword.length > 0 || this.state.confirmPassword.length > 0) {
        this.setState({
          password: true,
        })
      } else {
        this.setState({
          password: false,
        })
      }
    })
  }

  passwordCheck = (e) => {
    e.preventDefault()

    if (this.state.enteredPassword.length < 6) {
      this.setState({
        passwordError: true,
        enteredPassword: "",
        newPassword: "",
        confirmPassword: ""
      })
    }

    if (this.state.newPassword !== this.state.confirmPassword) {
      console.log("Passwords don't match!")
      this.setState({
        passwordNotMatch: true,
        enteredPassword: "",
        newPassword: "",
        confirmPassword: ""
      })
      console.log(this.state.passwordNotMatch)
    }

    if (this.state.newPassword === this.state.confirmPassword && this.state.enteredPassword === this.state.newPassword) {
      console.log("New password can not be the same as the old password")
      this.setState({
        passwordSame: true,
        enteredPassword: "",
        newPassword: "",
        confirmPassword: ""
      })
      console.log(this.state.passwordNotMatch)
    }

    if (this.state.newPassword.length !== 0 && this.state.newPassword.length >= 6 && this.state.newPassword === this.state.confirmPassword && this.state.enteredPassword.length >= 6 && this.state.enteredPassword !== this.state.newPassword) {
      this.setState({
        passwordChanged: true,
        enteredPassword: "",
        newPassword: "",
        confirmPassword: ""
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
    this.setState({
      hidden: !this.state.hidden
    })
  }

  captureNewPassword = (e) => {
    this.setState({
      newPassword: e.target.value,
      password: true,
    }, () => {
      if (this.state.enteredPassword.length > 0 || this.state.newPassword.length > 0 || this.state.confirmPassword.length > 0) {
        this.setState({
          password: true,
        })
      } else {
        this.setState({
          password: false,
        })
      }
    })
  }

  captureConfirmPassword = (e) => {
    this.setState({
      confirmPassword: e.target.value,
      password: true,
    }, () => {
      if (this.state.enteredPassword.length > 0 || this.state.newPassword.length > 0 || this.state.confirmPassword.length > 0) {
        this.setState({
          password: true,
        })
      } else {
        this.setState({
          password: false,
        })
      }
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
                <div className="flexColumn pl-2 left">
                  <div className="textBox"> Email </div>
                  <div className="textBox my-4"> Commission Charges </div>
                  <div className="textBox"> Tracking Expense </div>
                </div>
                <div className="flexColumn right">
                  <div className="textBox">
                    <input
                      className="pl-2 inputStyle1"
                      onChange={(e) => this.captureEmail(e)}
                      value={this.state.email}
                      placeholder="gregory.murynmukha@gmail.com" />
                  </div>
                  <div className="textBox my-4">

                    <input
                      className="mr-1 inputStyle"
                      onChange={this.checkedSetting}
                      checked={this.state.checked}
                      type="checkbox"
                    />

                    Take into account Apple commision charges (30%)
                  </div>
                  <div className="textBox">
                    <input className="pl-2 mr-2 inputStyle" placeholder="$0.00" /> per each install
                  </div>
                </div>
              </div>

              <hr className="hrBoxes" />

              {this.state.checked || this.state.emailActive
                ? <button className="btn btn-primary floatButtonRight" href="/" onClick={() => this.saveSystem()} > Save Changes </button>
                : <button className="btn btn-primary floatButtonRight" href="/" disabled> Save Changes </button>
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
          userActive={this.userActive}
          open={this.state.open}
          progress2={this.state.progress2}
          incrementor2={this.state.incrementor2}
          namesArray={this.state.namesArray}
          users={this.state.users}
        />
        <Billing
          newPhone={this.state.newPhone}
          newZip={this.state.newZip}
          newName={this.state.newName}
          capturePhone={this.capturePhone}
          captureZip={this.captureZip}
          captureName={this.captureName}
          enableActive4={this.enableActive4}
          editCreditCard={this.state.editCreditCard}
          openCredit={this.openCredit}
          billingSave={this.billingSave}
        />
        <Access
          password={this.state.password}
          passwordCurrent={this.passwordCurrent}
          passwordCheck={this.passwordCheck}
          passwordError={this.state.passwordError}
          passwordNotMatch={this.state.passwordNotMatch}
          passwordChanged={this.state.passwordChanged}
          passwordSame={this.state.passwordSame}
          hidden={this.state.hidden}
          showPassword={this.showPassword}
          captureNewPassword={this.captureNewPassword}
          captureConfirmPassword={this.captureConfirmPassword}
          enteredPassword={this.state.enteredPassword}
          newPassword={this.state.newPassword}
          confirmPassword={this.state.confirmPassword}
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
