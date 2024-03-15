import {createSlice} from "@reduxjs/toolkit";
import {getOwners, getUsers} from "../../services/admin/adminsServices";
let initialState = {
    users : [],
    owners :[]
}
let adminsSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers:builder => {
        builder.addCase(getUsers.fulfilled , (state , action)=>{
            state.users = action.payload
        })
        builder.addCase(getOwners.fulfilled, (state,action)=>{
            state.owners = action.payload
        })
    }

})
export default adminsSlice.reducer