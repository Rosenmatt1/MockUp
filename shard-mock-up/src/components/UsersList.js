import React from 'react'
import User from './User'

const UsersList = (props) => {
  return (
    props.users.map((user, idx) => {
      return (
        <User 
        enableActive3={props.enableActive3}
        active3={props.active3}
        key={idx} 
        user={user} 
        id={idx}
        />
      )
    })
  )
}

export default UsersList 