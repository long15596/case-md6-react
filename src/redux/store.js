import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./admin/usersSlice";

export let store = configureStore({
    reducer:{
        users:usersReducer,
        owners: usersReducer,
    },
})