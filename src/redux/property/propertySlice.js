import {createSlice} from "@reduxjs/toolkit";
import {addProperty, getProperties} from "../../services/property/propertyService";

let initialState = {
    properties: [],
    newProperty: {},
    error: '',
}
let propertiesSlice = createSlice({
    name: 'property',
    initialState,
    extraReducers: builder => {
        builder.addCase(getProperties.fulfilled, (state, action) => {
            state.properties = action.payload
        });
        builder.addCase(addProperty.fulfilled, (state, action) => {
            console.log(action.payload)
            state.properties.push(action.payload.data)
            state.newProperty = action.payload
            console.log(state.newProperty)
        })
    }
})
export default propertiesSlice.reducer