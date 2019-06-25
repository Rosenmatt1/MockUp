import React from 'react'

const LeftNav = (props) => {
  return (
    <div className="leftNav">

      <div className="sideNavSearch">
        <i className="fas fa-search fa-lg icon"> </i>
      </div>

      <div className="sideNavItem">
        <i className="fab fa-delicious fa-lg icon"> </i>
      </div>

      <div className="sideNavItem">
        <i className="fas fa-bars fa-lg icon"> </i>
      </div>
      {/* <a href="#" rel="noopener noreferrer"/> */}

      <div className="sideNavItem">
        <i className="fas fa-user-circle fa-lg icon"> </i>
      </div>

      <div className="sideNavItem">
        <i className="fas fa-bell fa-lg icon"> </i>
      </div>
      
    </div>
  )
}

export default LeftNav



