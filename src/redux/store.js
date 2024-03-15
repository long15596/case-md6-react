import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./user/usersSlice";

export let store = configureStore({
    reducer:{
        users: usersReducer,
        owners: usersReducer
    },
})