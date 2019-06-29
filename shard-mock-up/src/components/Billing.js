import React from 'react'

const Billing = (props) => {
  return (
    <div>
      <div className="row">

        <div className="col-4 bodyLeft">
          <p className="mt-4"> Billing </p>
          <p className="text"> Setup Your Billing Data and Payment Details </p>
        </div>

        <div className="col-8 bodyRight">
          <div className="rightContent">
            <div className="title my-2 ml-2"><p> Billing Information </p></div>
            <hr className="hrBoxes" />

            <div className="row">
              <div className="flexColumn ml-2">
                <div className="textBox"> Name </div>
                <div className="textBox my-4"> Phone </div>
                <div className="textBox"> Zip Code </div>
              </div>
              <div className="ml-2 flexColumn">
                <div className="textBox">
                  <input className="pl-2 inputStyle1" placeholder="Enter Name Here" value="Gregory Muryn-Mukha" />
                </div>
                <div className="textBox my-4">
                  <input
                    className="mr-1 inputStyle1"
                    placeholder="Enter Phone Here"
                    onChange={props.billingEdit} 
                  /> 
                </div>
                <div className="textBox">
                    <input className="pl-2 inputStyle1" placeholder="Enter Zip Here" />
                  </div>
                </div>
              </div>

              <hr className="hrBoxes" />

              {props.inputEdit
              ? <button className="btn btn-primary mr-1 floatButtonRight" href="/"> Save Changes </button>
              : <button className="btn btn-primary mr-1 floatButtonRight" href="/" disabled> Save Changes </button>
            }

            </div>
          </div>

        </div>
        <hr className="hrUnits" />
      </div>
      )
    }
    
export default Billing