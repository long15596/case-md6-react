import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getUsers, register, login, logOut, updateUser, inforUser} from "../../services/user/usersServices";


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
        builder.addCase(logOut.fulfilled, (state, action) => {
            state.currentUser = null
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.currentUser = action.payload
            localStorage.setItem('currentUser', JSON.stringify(action.payload));
            inforUserThunk(action.payload.id);;
        });
        builder.addCase(inforUser.fulfilled, (state, action) => {
            console.log(state);
            state.users = action.payload;
        });
        builder.addCase(register.fulfilled, (state, action) => {
            if (action.payload.username === undefined) {
                state.error = action.payload
            } else {
                state.users.push(action.payload.data)
            }
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            const updatedUserIndex = state.users.findIndex(user => user.id === action.payload.id);
            if (updatedUserIndex !== -1) {
                state.users[updatedUserIndex] = action.payload;
            }
        })
    }
})
export const inforUserThunk = (id) => async dispatch => {
    try {
        await dispatch(inforUser({ id }));
    } catch (error) {
        console.error('Error fetching user information:', error);
    }
};
export const { reducer, actions } = usersSlice;
export default usersSlice.reducer