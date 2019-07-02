import React, { Component } from 'react';
// import UsersList from './UsersList'

class SearchAds extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
  return (
    <div>
      <div className="row">

        <div className="col-4 bodyLeft">
          <p className="mt-4"> Search ads accounts </p>
          <p className="text"> Last Updated Jul 25, 2017 10:23AM </p>
        </div>

        <div className="col-8 bodyRight">
          <div className="rightContentChunk">

            <div className="row py-3 spacer rightContent">
              <div className="row ml-2 userFlex">
                {this.props.active
                  ? <i className="fas fa-circle fa-sm active"></i>
                  : <i className="fas fa-circle fa-sm lightIcon"></i>
                }
                <div className="ml-3">
                  <div className="textBox"> Joshua Moody </div>
                  <div className="lightText">Added May 21st 2017</div>
                </div>
              </div>
              <div>
                <button className="btn floatButtonRight grayButton" onClick={this.props.enableActive} href="/"> {!this.props.active ? "Enable" : "Disable"} </button>
              </div>
            </div>

            <div className="row mt-3 py-3 spacer rightContent">
              <div className="row ml-2 userFlex">
                {this.props.active2
                  ? <i className="fas fa-circle fa-sm active"></i>
                  : <i className="fas fa-circle fa-sm lightIcon"></i>
                }
                <div className="ml-3">
                  <div className="textBox"> Bernard Rhodes </div>
                  <div className="lightText">Added June 10th 2017</div>
                </div>
              </div>
              <div>
                <button className="btn floatButtonRight grayButton" onClick={this.props.enableActive2} href="/"> {!this.props.active2 ? "Enable" : "Disable"} </button>
              </div>
            </div>

            {/* <UsersList /> */}

            {/* {this.props.open
              ?
              <div className="row mt-3 py-3 spacer rightContent">
                <div className="row ml-2 userFlex">
                  {!this.props.active3
                    ? <i className="fas fa-circle fa-sm active"></i>
                    : <i className="fas fa-circle fa-sm lightIcon"></i>
                  }
                  <div className="ml-3">
                    <div className="textBox"> {this.props.name} </div>
                    <div className="lightText"> Added June 10th 2017 </div>
                  </div>
                </div>
                <div>
                  <button className="btn floatButtonRight grayButton" onClick={this.props.enableActive3} href="/"> {!this.props.active3 ? "Disable" : "Enable"} </button>
                </div>
              </div>
              : <div></div>
            } */}

            {this.props.progress2
              ?
              <div className="row fullWidth userFlex rightContent mt-3">

                <div className=" ml-2 cloudContainer">
                  <i className="fas fa-cloud-upload-alt fa-lg blueIcon darkerGray"></i>
                </div>

                <div className="progressContainer">
                  <div className="row spacer">
                    <div className="darkerGray"> Uploading api_certificates.zip </div>
                    <p className="darkerGray"> 1 minute left </p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ "width": `${this.props.incrementor2}%` }}
                      aria-valuemin="0"
                      aria-valuemax="100"> 
                      {this.props.incrementor2} % 
                    </div>
                  </div>
                </div>

              </div>
              : <div className="row mt-3 py-4 rightContent">
                <i className="ml-2 fas fa-cloud-upload-alt fa-lg darkerGray"></i>
                <div className="text ml-3"> Drop archive with API certificate here or choose <a onClick={this.props.openUser} href="/">choose file</a> to add new account </div>
              </div>
            }

          </div>
        </div>

      </div>
      <hr className="hrUnits" />
    </div>
  )
}
}



export default SearchAds