import React from 'react'
import { useSelector } from 'react-redux'
import {retranslate} from '../utils'
import { Link } from 'react-router-dom'

function User({id}) {
   const user = useSelector(state => state.users.users.find(user => user.id === id))

  return (
    <Link to={'/user/' + user.id} className='user'>
      <div className="user__name">
         {user.name}
      </div>
      <div className="user__role">
         {retranslate(user.role)}
      </div>
      <a href={'tel:' + user.phone} className="user__phone">
         {user.phone}
      </a>
    </Link>
  )
}

export default User