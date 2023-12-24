import { createSlice } from "@reduxjs/toolkit";
import { getUserOptions, sortUsers, base_users } from "../utils";

const {roleOptions, isArchiveOptions} = getUserOptions(base_users)

const usersSlice = createSlice({
   name: 'users',
   initialState: {
      users: sortUsers(base_users, 'name'),
      filtredUsers: base_users,
      filters: {
         'role': 'all',
         'isArchive': 'all',
      },
      sort: 'name',
      roleOptions: roleOptions,
      isArchiveOptions: isArchiveOptions,
   },
   reducers: {
      searchUsers(state, action){
         state.filtredUsers = state.users.filter(user =>user.name.toLowerCase().includes(action.payload.text))
         state.filters.role = 'all'
         state.filters.isArchive = 'all'
      },
      resetUsers(state, action){
         state.filtredUsers = state.users;
      },
      filterUsers(state, action) {
         if(action.payload.role != undefined){
            state.filters.role = action.payload.role
         }
         if(action.payload.isArchive != undefined){
            state.filters.isArchive = action.payload.isArchive
         }

         if (state.filters.role == 'all' && state.filters.isArchive =='all') {
            state.filtredUsers = state.users
         } else if (state.filters.role == 'all') {
            state.filtredUsers = state.users.filter(user => String(user.isArchive) == state.filters.isArchive)
         } else if(state.filters.isArchive == 'all'){
            state.filtredUsers = state.users.filter(user => user.role == state.filters.role)
         } else{
            state.filtredUsers = state.users.filter(user => user.role == state.filters.role && String(user.isArchive) == state.filters.isArchive)
         }

         sortUsers(state.filtredUsers, state.sort)
      },
      setSortUsers(state, action){
         if (action.payload.method != undefined && action.payload.method != '') {
            state.sort = action.payload.method
         }

         state.filtredUsers = sortUsers(state.filtredUsers, action.payload.method)
      },
   }
})


export const { filterUsers, setSortUsers,resetUsers, searchUsers } = usersSlice.actions;
export default usersSlice.reducer;