import React from 'react'

const LeftNav = (props) => {
  return (
    <div className="leftNav">

      <div className="sideNavSearch">
        <i className="fas fa-search fa-lg icon"> </i>
      </div>

      <div 
        onClick={props.selectBox}
        className={props.selectedBox ? "sideNavItemSelected" : "sideNavItem"} 
      >
        <i className="fab fa-delicious fa-lg icon"> </i>
      </div>

      <div 
        onClick={props.selectAnalytics}
        className={props.selectedAnalytics? "sideNavItemSelected" : "sideNavItem"} 
      >
        <i className="fas fa-bars fa-lg icon"> </i>
      </div>
      

      <div 
        onClick={props.selectUser}
        className={props.selectedUser ? "sideNavItemSelected" : "sideNavItem"} 
      >
        <i className="fas fa-user-circle fa-lg icon"> </i>
      </div>

      <div 
        onClick={props.selectAlerts}
        className={props.selectedAlerts ? "sideNavItemSelected" : "sideNavItem"} 
        >
        <i className="fas fa-bell fa-lg icon"> </i>
      </div>
      
    </div>
  )
}

export default LeftNav



