import {createSlice} from "@reduxjs/toolkit";
import {getProperties} from "../../services/property/propertyService";

let initialState = {
    properties: [],
    error: '',
}
let propertiesSlice = createSlice({
    name: 'property',
    initialState,
    extraReducers: builder => {
        builder.addCase(getProperties.fulfilled, (state, action) => {
            state.properties = action.payload
        });
    }
})
export default propertiesSlice.reducer