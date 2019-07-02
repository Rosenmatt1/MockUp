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
          <div className="rightContentChunk">

            <div className="rightContent pb-5">
              <div className="row spacer negMargin">
                <div className="title ml-2"><p> Billing Information </p></div>
                <div className="title"><a href="/"><p> View Billing History </p> </a></div>
              </div>
              <hr className="hrBoxes" />

              <div className="row">
                <div className="flexColumn ml-2 leftBill">
                  <div className="textBox"> Name </div>
                  <div className="textBox my-4"> Phone </div>
                  <div className="textBox"> Zip Code </div>
                </div>
                <div className="flexColumn rightBill">
                  <div className="textBox ">
                    <input 
                      className="pl-2 inputStyle1" 
                      placeholder="Enter Name Here"
                      value={props.newName}
                      onChange={(e) => props.captureName(e)}
                    />
                  </div>
                  <div className="textBox my-4 rightBillsmall">
                    <input
                      className="pl-2 inputStyle1"
                      placeholder="Enter Phone Here"
                      value={props.newPhone}
                      onChange={(e) => props.capturePhone(e)}
                    />
                  </div>
                  <div className="textBox rightBillsmall">
                    <input
                      className="pl-2 inputStyle1"
                      placeholder="Enter Zip Here"
                      value={props.newZip}
                      onChange={(e) => props.captureZip(e)}
                    />
                  </div>
                </div>
              </div>

              <hr className="hrBoxes" />

              {props.newName || props.newPhone || props.newZip
                ? <button className="btn btn-primary mr-1 floatButtonRight negMar" href="/" onClick={props.billingSave}> Save Changes </button>
                : <button className="btn btn-primary mr-1 floatButtonRight negMar" href="/" disabled> Save Changes </button>
              }
            </div>

            {props.editCreditCard
              ?
              <div className="rightContent mt-3 pb-5">
                <div className="title ml-2"><p> Edit Card </p></div>
                <hr className="hrBoxes" />
                <div className="row">
                  <div className="flexColumn ml-2">
                    <div className="textBox mr-3"> Card Details </div>
                  </div>
                  <div className="ml-2 flexColumn">
                    <div className="textBox">
                      <div className="row">
                         <input className="pl-2 inputStyle" placeholder="0000 0000 0000 0000" /> 
                        <input className="pl-2 mx-1 inputStyle ccMonthWidth" placeholder="MM / YY" /> 
                        <input className="pl-2 inputStyle ccCodeWidth" placeholder="CVC" /> 
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="hrBoxes" />
                <div className="row floatButtonRight">
                  <button className="btn grayButton mr-2" 
                  onClick={props.openCredit} 
                  href="/">
                    Cancel
              </button>
                  <button className="btn btn-primary negMar" 
                    onClick={props.openCredit} 
                  href="/">
                    Save Changes
              </button>
                </div>
              </div>
              :
              <div className="row mt-3 py-3 spacer rightContent">
                <div className="row ml-2">
                   <i className="fas fa-circle fa-sm active"></i>
                  <div className="ml-3">
                    <div className="textBox"> Mastercard Ending in 4482 </div>
                    <div className="lightText mt-1"> 07/20 </div>
                  </div>
                </div>
                <div>
                  <button className="btn  floatButtonRight grayButton"
                    onClick={props.openCredit}
                    href="/">
                    Edit Card
                </button>
                </div>
              </div>
            }

          </div>
        </div>

      </div>
      <hr className="hrUnits" />
    </div>
  )
}

export default Billing