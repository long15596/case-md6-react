import {createSlice} from "@reduxjs/toolkit";
import {getOwners, getUsers, registerUser} from "../../services/user/usersServices";

let initialState = {
    users: [],
    owners: [],
    error: '',
}
let usersSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload
        });
        builder.addCase(getOwners.fulfilled, (state, action) => {
            state.owners = action.payload
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            if (action.payload.username == undefined  ) {
                state.error = action.payload
            } else {
                state.users.push(action.payload.data)
            }
        })
    }
})
export default usersSlice.reducer