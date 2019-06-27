import React from 'react'

const Reports = () => {
  return (
    <div>
      <div className="row">

        <div className="col-4 bodyLeft">
          <p className="mt-4"> Appsflyer reports </p>
          <p className="text"> Last Updated Jul 25, 2017 10:23AM </p>
        </div>

        <div className="col-8 bodyRight">
          <div className="rightContent">
            <div className="row">
              <i className="fas fa-cloud-upload-alt textBox my-4"></i>
              <div className="textBox my-4"> Drop .csv document here or <a>choose file</a> to upload Appsflyer statistics </div>
            </div>
          </div>
        </div>

      </div>
      <hr className="hrUnits" />
    </div>
  )
}

export default Reports





