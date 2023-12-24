import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import User from './User';
import { searchUsers } from '../store/usersSlice';

function Users() {
   const dispatch = useDispatch()
   const users = useSelector(state => state.users.filtredUsers)
   return (
      <div className="users">
         <input onChange={(e) => dispatch(searchUsers({text:e.target.value}))} type="text" placeholder='Поиск по имени' />
         {users.map(user => <User key={user.id} id={user.id} />)}
      </div>
   )
}

export default Users