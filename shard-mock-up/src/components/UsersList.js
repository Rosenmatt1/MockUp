import React from 'react'
import User from './User'

const UsersList = (props) => {
  return (
    props.users.map((user, idx) => {
      return (
        <User 
        userActive={props.userActive}
        active3={props.active3}
        key={idx} 
        user={user.name} 
        active={user.active}
        id={user.id}
        />
      )
    })
  )
}

export default UsersList 