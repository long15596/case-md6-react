import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./user/usersSlice";
import propertyReducer from "./property/propertySlice";
import categoryReducer from "./category/categorySlice";
import locationReducer from "./location/locationSlice";
import imageReducer from "./image/imageSlice";

export let store = configureStore({
    reducer:{
        users:usersReducer,
        properties: propertyReducer,
        categories: categoryReducer,
        locations: locationReducer,
        images: imageReducer
    },
})