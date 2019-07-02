import React from 'react'

const Reports = (props) => {
  return (
    <div>
      <div className="row">

        <div className="col-4 bodyLeft">
          <p className="mt-4"> Appsflyer reports </p>
          <p className="text"> Last Updated Jul 25, 2017 10:23AM </p>
        </div>

        <div className="col-8 bodyRight">
          <div className="rightContent">

            {props.progress
              ?
              <div className="row fullWidth userFlex">

                <div className="ml-2 cloudContainer">
                  <i className="fas fa-cloud-upload-alt fa-lg blueIcon darkerGray"></i>
                </div>

                <div className="progressContainer">
                  <div className="row spacer">
                    <div className="darkerGray"> Uploading report_file_Q32017.csv </div>
                    <p className="darkerGray"> 1 minute left </p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ "width": `${props.incrementor}%` }}
                      aria-valuemin="0"
                      aria-valuemax="100">
                      {props.incrementor} %
                    </div>
                  </div>
                </div>

              </div>
              :
              <div className="row ml-2 mt-4">
                <div className="cloudContainer">
                  <i className="fas fa-cloud-upload-alt fa-lg darkerGray"></i>
                </div>
                <div className="text progressContainer"> Drop .csv document here or <a
                  onClick={props.progressActivation} href="/">choose file</a> to upload Appsflyer statistics
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

export default Reports





