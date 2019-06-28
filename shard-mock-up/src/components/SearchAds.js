import React from 'react'

const SearchAds = () => {
  return (
    <div>
      <div className="row">

        <div className="col-4 bodyLeft">
          <p className="mt-4"> Search Ads Accounts </p>
          <p className="text"> Last Updated Jul 25, 2017 10:23AM </p>
        </div>

        <div className="col-8 bodyRight">
          <div className="rightContent">

            <div className="row py-1">
              <i className="fas fa-circle fa-sm lightIcon"></i>
              <div>
                <div className="textBox"> Joshua Moody </div>
                <div className="lightText">Added May 21st 2017</div>
              </div>
              <button className="btn btn-primary floatButtonRight" href="/"> Enable </button>
            </div>

            <div className="row py-1">
              <i className="fas fa-circle fa-sm lightIcon"></i>
              <div>
                <div className="textBox"> Bernard Rhodes </div>
                <div className="lightText"> Added June 10th 2017 </div>
              </div>
              <button className="btn btn-primary floatButtonRight" href="/"> Enable </button>
            </div>

            <div className="row py-1">
              <i className="fas fa-circle fa-sm lightIcon"></i>
              <div>
                <div className="textBox"> Eugene mcCarthy </div>
                <div className="lightText"> Added Aug 12th, 2017 </div>
              </div>
              <button className="btn btn-primary floatButtonRight" href="/"> Disable </button>
            </div>

            <div className="row py-1">
              <i className="fas fa-cloud-upload-alt fa-lg darkerGray"></i>
              <div className="text ml-3"> Drop archive with API certificate here or choose <a href="/">choose file</a> to add new account </div>
            </div>

          </div>
        </div>

      </div>
      <hr className="hrUnits" />
    </div>
  )
}

export default SearchAds