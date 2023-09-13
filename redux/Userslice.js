import { createSlice } from "@reduxjs/toolkit";
import { UserList } from "../Data";

const Userslice = createSlice({
    name:'users',
    initialState:UserList,
    reducers:{
        adduser : (state , action) => {
            return [...state, action.payload];
        },
        deleteuser : (state , action) => {
            const {id} = action.payload
            const deleteuser = state.find(user =>  user.id == id)
            if(deleteuser){
                return state.filter(user => user.id !== id)
            }
        },
        updateuser : (state,action) => {
            const {userName,id,email} = action.payload
            const updateuser = state.find(user => user.id == id)
            if(updateuser){
                updateuser.userName = userName
                updateuser.email = email
            }
        }
    }
})
export const {adduser,deleteuser,updateuser} = Userslice.actions;
export default Userslice.reducer;