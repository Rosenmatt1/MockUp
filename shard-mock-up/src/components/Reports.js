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
            <div className="row ml-2">

              {props.progress
                ?
                <div className="fullWidth">
                  <i className="fas fa-cloud-upload-alt fa-lg mt-4 darkerGray"></i>
                  

                  <div className="row spacer">
                    <div className="darkerGray"> Uploading report_file_Q32017.csv </div>
                    <p className="darkerGray"> 1 minute left </p>
                  </div>

                  <div className="progress fullWidth">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ "width": props.incrementor }}
                      aria-valuemin="0"
                      aria-valuemax="100"> {props.incrementor}
                    </div>
                  </div>
                
                </div>
                :
                <div className="row">
                  <div>
                    <i className="fas fa-cloud-upload-alt fa-lg mt-4 darkerGray"></i>
                  </div>
                  <div className="text mt-4 ml-3"> Drop .csv document here or <a
                    onClick={props.progressActivation} href="/">choose file</a> to upload Appsflyer statistics
                  </div>
                </div>
              }

            </div>
          </div>
        </div>

      </div>
      <hr className="hrUnits" />
    </div>
  )
}

export default Reports





