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
              <div className="flexColumn ml-2">
                <div className="textBox"> Name </div>
                <div className="textBox my-4"> Phone </div>
                <div className="textBox"> Zip Code </div>
              </div>
              <div className="ml-2 flexColumn">
                <div className="textBox">
                  <input className="pl-2 inputStyle1" placeholder="Enter Name Here"
                  // value="Gregory Muryn-Mukha" 
                  />
                </div>
                <div className="textBox my-4">
                  <input
                    className="pl-2 inputStyle1"
                    placeholder="Enter Phone Here"
                    onChange={(e) => props.capturePhone(e)}
                  />
                </div>
                <div className="textBox">
                  <input
                    className="pl-2 inputStyle1"
                    placeholder="Enter Zip Here"
                    onChange={(e) => props.captureZip(e)}
                  />
                </div>
              </div>
            </div>

            <hr className="hrBoxes" />

            {props.inputChange
              ? <button className="btn btn-primary mr-1 floatButtonRight negMar" href="/"> Save Changes </button>
              : <button className="btn btn-primary mr-1 floatButtonRight negMar" href="/" disabled> Save Changes </button>
            }
            </div>

            
            <div className="row mt-3 py-3 spacer rightContent">
              <div className="row ml-2">
                {props.active4
                  ? <i className="fas fa-circle fa-sm active"></i>
                  : <i className="fas fa-circle fa-sm lightIcon"></i>
                }
                <div className="ml-3">
                  <div className="textBox"> Mastercard Ending in 4482 </div>
                  <div className="lightText"> 07/20 </div>
                </div>
              </div>
              <div>
                <button className="btn  floatButtonRight grayButton"
                  onClick={props.enableActive4} 
                  href="/">
                  Edit Card
                </button>
              </div>
            </div>
         

          </div>
        </div>

        

      </div>
      <hr className="hrUnits" />
    </div>
  )
}

export default Billing