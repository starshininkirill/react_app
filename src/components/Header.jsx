import React from 'react'
import { resetUsers } from '../store/usersSlice';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'


function Header() {
   const dispatch = useDispatch();
   return (
      <div className="header">
         <Link onClick={dispatch(resetUsers())} className='header__link' to={'/'}>Главная</Link>
      </div>
   )
}

export default Header