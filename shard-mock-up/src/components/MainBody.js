import React from 'react'

const MainBody = (props) => {
  return (
    < div className="container-fluid mainBody" >
      <div className="row">

        <div className="col-4 bodyLeft">
          <p className="mt-4"> System </p>
          <p className="text">Configure external fees and email that will be used as default address for notifications</p>
          <a href="/" rel="noopener noreferrer">How does Apple commission influence my statistic?</a>
          <a href="/" rel="noopener noreferrer">How do attribution tracking expenses mean?</a>
        </div>

        <div className="col-8 bodyRight">
          <div className="rightContent">
            <div className="textBox my-2"><p> General Settings </p></div>
            <hr className="hrBoxes" />
            <div className="textBox my-4"> Email <input /> </div>
            <div className="textBox my-4"> Commission Charges <input type="checkbox" />  Take into account Apple commision charges (30%) </div>
            <div className="textBox"> Tracking Expense <input /> per each install </div>
            <hr className="hrBoxes" />
            <button className="btn btn-primary mr-1 floatButtonRight" href="/" role="button" disabled> Save Changes </button>
          </div>
        </div>

      </div>
      <hr className="hrUnits" />
    </div > 
  )
}

export default MainBody
