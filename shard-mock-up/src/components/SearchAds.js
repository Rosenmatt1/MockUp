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

            <div className="row">
              <div className="textBox my-4"> Icon </div>
              <div className="textBox my-4"> Joshua Moody </div>
            </div>
            <div className="textBox">Added May 21st 2017</div>

            <div className="row">
              <div className="textBox my-4"> Icon </div>
              <div className="textBox my-4"> Bernard Rhodes </div>
            </div>
            <div className="textBox">Added June 10th 2017</div>

            <div className="row">
              <div className="textBox my-4"> Icon </div>
              <div className="textBox my-4"> Drop archive with API certificate here or choose <a>choose file</a> to add new account </div>
            </div>
          </div>
        </div>

      </div>
      <hr className="hrUnits" />
    </div>
  )
}

export default SearchAds