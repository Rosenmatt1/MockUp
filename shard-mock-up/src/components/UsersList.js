import React from 'react'
import User from './User'

const UsersList = (props) => {
  return (
    props.remindersTable.map((reminder, idx) => {
      return (
        <User 
        // deleteReminder={props.deleteReminder} 
        key={idx} 
        // reminder={reminder} 
        />
      )
    })
  )
}

export default UsersList 