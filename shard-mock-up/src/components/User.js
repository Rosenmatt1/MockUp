import React from 'react'

const User = (props) => {
  return (
    < div >
      <div className="row mt-3 py-3 spacer rightContent">
        <div className="row ml-2 userFlex">
          {!props.active3
            ? <i className="fas fa-circle fa-sm active"></i>
            : <i className="fas fa-circle fa-sm lightIcon"></i>
          }
          <div className="ml-3">
            <div className="textBox"> {props.user} </div>
            <div className="lightText"> Added June 10th 2017 </div>
          </div>
        </div>
        <div>
          <button className="btn floatButtonRight grayButton" 
            onClick={() => props.enableActive3(props.id, props.user)} href="/"> {!props.active3 ? "Disable" : "Enable"} </button>
        </div>
      </div>
    </div >
  )
}

export default User