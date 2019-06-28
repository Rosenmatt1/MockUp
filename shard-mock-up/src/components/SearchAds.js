import React from 'react'

const SearchAds = (props) => {
  return (
    <div>
      <div className="row">

        <div className="col-4 bodyLeft">
          <p className="mt-4"> Search Ads Accounts </p>
          <p className="text"> Last Updated Jul 25, 2017 10:23AM </p>
        </div>

        <div className="col-8 bodyRight">
          <div className="rightContentChunk">

            <div className="row py-3 spacer rightContent">
              <div className="row">
                {props.active
                  ? <i className="fas fa-circle fa-sm active"></i>
                  : <i className="fas fa-circle fa-sm lightIcon"></i>
                }
                <div className="ml-3">
                  <div className="textBox"> Joshua Moody </div>
                  <div className="lightText">Added May 21st 2017</div>
                </div>
              </div>
              <div>
                <button className="btn btn-primary floatButtonRight" onClick={props.enableActive} href="/"> Enable </button>
              </div>
            </div>

            <div className="row mt-3 py-3 spacer rightContent">
              <div className="row">
                {props.active2
                  ? <i className="fas fa-circle fa-sm active"></i>
                  : <i className="fas fa-circle fa-sm lightIcon"></i>
                }
                <div className="ml-3">
                  <div className="textBox"> Bernard Rhodes </div>
                  <div className="lightText">Added June 10th 2017</div>
                </div>
              </div>
              <div>
                <button className="btn btn-primary floatButtonRight" onClick={props.enableActive2} href="/"> Enable </button>
              </div>
            </div>

            {props.open
              ?
              <div className="row mt-3 py-3 spacer rightContent">
                <div className="row">
                  {props.active3
                    ? <i className="fas fa-circle fa-sm active"></i>
                    : <i className="fas fa-circle fa-sm lightIcon"></i>
                  }
                  <div className="ml-3">
                    <div className="textBox"> Eugene McCarthy </div>
                    <div className="lightText"> Added June 10th 2017 </div>
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary floatButtonRight" onClick={props.enableActive3} href="/"> Enable </button>
                </div>
              </div>
              : <div></div>
            }



            <div className="row mt-3 py-4 rightContent">
              <i className="fas fa-cloud-upload-alt fa-lg darkerGray"></i>
              <div className="text ml-3"> Drop archive with API certificate here or choose <a onClick={props.openUser} href="/">choose file</a> to add new account </div>
            </div>

          </div>
        </div>

      </div>
      <hr className="hrUnits" />
    </div>
  )
}

export default SearchAds