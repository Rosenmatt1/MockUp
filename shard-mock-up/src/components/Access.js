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

            <div className="row">
              <div className="flexColumn ml-2">
                <div className="textBox"> CurrentPassword </div>
                <div className="textBox my-4"> New password </div>
                <div className="textBox"> Confirm Password </div>
              </div>
              <div className="ml-4 flexColumn">
                <div className="textBox">
                  <input
                    className="pl-2 inputStyle1 eye"
                    onChange={(e) => props.passwordCurrent(e)}
                    placeholder="&#xf06e;"
                    type="text"
                  />
                </div>

                <div className="textBox my-4"> <input className="pl-2 inputStyle1" placeholder="Enter New Password" /> </div>
                <div className="textBox"> <input className="pl-2 inputStyle1" placeholder="Enter New Password" /> </div>
              </div>
            </div>

            <hr className="hrBoxes" />

            {props.password
              ? <button className="btn btn-primary mr-1 floatButtonRight" onClick={props.passwordCheck} href="/"> Change Password </button>
              : <button className="btn btn-primary mr-1 floatButtonRight" onClick={props.passwordCheck} href="/" disabled> Save Changes </button>
            }

          </div>
        </div>

        <div className="toasts p-2">
          Appsflyer statistics has been updated.
        </div>

      </div>
    </div>
  )
}

export default Access