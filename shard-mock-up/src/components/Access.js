import React from 'react'

const Access = (props) => {
  return (
    <div>
      <div className="row">

        <div className="col-4 bodyLeft">
          <p className="mt-4"> Access </p>
          <p className="text"> Do not use simple password.  It must contain at least 6 characters. </p>
        </div>

        <div className="col-8 bodyRight">
          <div className="rightContent">
            <div className="title my-2 ml-2"><p> General Settings </p></div>
            <hr className="hrBoxes" />

            <div className="row rightHeight">
              <div className="pl-2 flexColumnSpace left">
                <div className="colThird">
                  <div className="textBox"> Current password </div>
                </div>
                <div className="colThird">
                  <div className="textBox"> New password </div>
                </div>
                <div className="colThird">
                  <div className="textBox"> Confirm password </div>
                </div>
              </div>

              <div className="flexColumnSpace right">
                <div className="colThird">
                  <div className="row textBox input-icons flexer">
                    <i className="fas fa-eye icon-input lightIcon ml-3" onClick={props.showPassword}></i>
                    <input
                      className="pl-2 input-field inputStyle1"
                      onChange={(e) => props.passwordCurrent(e)}
                      placeholder="Enter Current Password"
                      value={props.enteredPassword}
                      type={props.hidden ? "password" : "text"}
                      required
                    />
                  </div>
                  {props.passwordError
                    ?
                    <div className="error mb-1">
                      Incorrect Password.
                  </div>
                    : <div></div>
                  }
                </div>


                <div className="colThird">
                  <div className="textBox">

                    <div className="row textBox input-icons flexer">
                      <i className="fas fa-eye icon-input lightIcon ml-3" onClick={props.showPassword}></i>
                      <input
                        className="pl-2 input-field inputStyle1"
                        onChange={(e) => props.captureNewPassword(e)}
                        placeholder="Enter New Password"
                        value={props.newPassword}
                        type={props.hidden ? "password" : "text"}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="colThird">
                  <div className="textBox">

                    <div className="row textBox input-icons flexer">
                      <i className="fas fa-eye icon-input lightIcon ml-3" onClick={props.showPassword}></i>
                      <input
                        className="pl-2 input-field inputStyle1"
                        onChange={(e) => props.captureConfirmPassword(e)}
                        placeholder="Enter New Password"
                        value={props.confirmPassword}
                        type={props.hidden ? "password" : "text"}
                        required
                      />
                    </div>
                  </div>
                  {props.passwordNotMatch
                    ?
                    <div className="error mt-1">
                      New passwords did not match.
                    </div>
                    : <div></div>
                  }
                  {props.passwordSame
                    ?
                    <div className="error mt-1">
                      New password can not be the same as the old password
                    </div>
                    : <div></div>
                  }
                </div>

              </div>
            </div>

            <hr className="hrBoxes" />

            {props.password
              ? <button className="btn btn-primary floatButtonRight" onClick={props.passwordCheck} href="/"> Change Password </button>
              : <button className="btn btn-primary floatButtonRight" onClick={props.passwordCheck} href="/" disabled> Save Changes </button>
            }

            <div>

              {props.passwordChanged
                ?
                <div className="active mt-1 ml-2">
                  Password Successfully Changed
                  </div>
                : <div></div>
              }
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Access