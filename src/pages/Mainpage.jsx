import React from 'react'
import Form from '../components/Form'
import Users from '../components/Users'

function Mainpage() {
  return (
   <div className="mainpage">
      <div className="main">
         <Users />
      </div>
      <div className="sidebar">
         <Form />
      </div>
   </div>

  )
}

export default Mainpage