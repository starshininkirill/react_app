import React from 'react'
import { filterUsers, setSortUsers } from '../store/usersSlice';
import { useSelector, useDispatch } from 'react-redux';
import { retranslate } from '../utils';
import MySelect from './MySelect';
import MySortSelect from './MySortSelect';


function Form() {
  const currentRole = useSelector(state => state.users.filters.role)
  const currentArchive = useSelector(state => state.users.filters.isArchive)

  const dispatch = useDispatch();
  const roleOptions = useSelector(state => state.users.roleOptions)
  const isArchiveOptions = useSelector(state => state.users.isArchiveOptions)

  const sortParams = [
    'name',
    '-name',
    'date',
    '-date'
  ]

  const changeRoleHandler = function(value){
    dispatch(filterUsers({role:value}))
  }
  const changeAchiveHandler = function(value){
    dispatch(filterUsers({isArchive:value}))
  }
  const sort = function(value){
    dispatch(setSortUsers({method:value}))
  }
   
  return (
    <div className='form-wrapper'>
      <MySortSelect selectLabel={'Сортировка'} options={sortParams} defaultName={"Выберите сортировку"} changeHandler={sort}/>
      <MySelect value={currentRole} selectLabel={'Фильтр по должности'} options={roleOptions} defaultName={'Все работники'} changeHandler={changeRoleHandler} />
      <MySelect value={currentArchive} selectLabel={'Фильтр по статусу'} options={isArchiveOptions} defaultName={'Все'} changeHandler={changeAchiveHandler} />
    </div>
  )
}

export default Form