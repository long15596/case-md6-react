import {configureStore} from "@reduxjs/toolkit";
import adminsReducer from "./admin/adminsSlice";

export let store = configureStore({
    reducer:{
        users:adminsReducer,
        owners: adminsReducer
    },
})