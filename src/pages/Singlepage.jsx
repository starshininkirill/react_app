import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { retranslate } from '../utils'

function Singlepage() {
   const params = useParams()
   const user = useSelector(state => state.users.users.find(user => user.id == params.id))
   return (
      <div className='single-page'>
         <h1 className="single-name">
            {user.name}
         </h1>
         <div className="single-info">
            <p>Должность: {retranslate(user.role)}</p>
            <p>Статус: {user.isArchive ? 'В архиве' : 'Не в архиве'}</p>
            <p>Телефон: <a href={'tel:' + user.phone}>{user.phone}</a></p>
            <p>Дата рождения: {user.birthday}</p>
         </div>
      </div>
   )
}

export default Singlepage