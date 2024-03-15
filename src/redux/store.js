import {configureStore} from "@reduxjs/toolkit";
import adminsReducer from "./admin/usersSlice";

export let store = configureStore({
    reducer:{
        users:adminsReducer,
        owners: adminsReducer
    },
})