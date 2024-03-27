import {createSlice} from "@reduxjs/toolkit";
import {
    getUsers,
    register,
    login,
    logOut,
    updateUser,
    getAllUser,
} from "../../services/user/usersServices";

let localStorageUser = () => {
    if (JSON.parse(localStorage.getItem(`currentUser`))) {
        return JSON.parse(localStorage.getItem(`currentUser`))
    }
    return null;
}
let initialState = {
    currentUser: localStorageUser(),
    users: [],
    error: '',
}
let usersSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload
        });
        builder.addCase(getAllUser.fulfilled, (state, action) => {
            state.users = action.payload
        });
        builder.addCase(logOut.fulfilled, (state, action) => {
            state.currentUser = null
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.currentUser = action.payload
            console.log(action.payload)
            localStorage.setItem('currentUser', JSON.stringify(action.payload))
        });
        builder.addCase(register.fulfilled, (state, action) => {
            if (action.payload.username === undefined) {
                state.error = action.payload
            } else {
                state.users.push(action.payload)
            }
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            const updatedUserIndex = state.users.findIndex(user => user.id === action.payload.id);
            if (updatedUserIndex !== -1) {
                state.users[updatedUserIndex] = action.payload;
            }
        });
    }
})
export default usersSlice.reducer