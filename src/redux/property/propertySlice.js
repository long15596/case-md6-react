import {createSlice} from "@reduxjs/toolkit";
import {addProperty, getByUserId, getProperties, updateProperty} from "../../services/property/propertyService";

let initialState = {
    properties: [],
    newProperty: {},
    error: '',
    propertiesUser:[],
}
let propertiesSlice = createSlice({
    name: 'property',
    initialState,
    extraReducers: builder => {
        builder.addCase(getProperties.fulfilled, (state, action) => {
            state.properties = action.payload
        });
        builder.addCase(addProperty.fulfilled, (state, action) => {
            state.properties.push(action.payload)
            state.newProperty = action.payload
        });
        builder.addCase(updateProperty.fulfilled, (state, action) => {
            let updatePropertyIndex = state.properties.findIndex(property => property.id === action.payload.id)
            if (updatePropertyIndex !== -1) state.properties[updatePropertyIndex] = action.payload;
        });
        builder.addCase(getByUserId.fulfilled, (state,action)=>{
            state.propertiesUser = action.payload
        })
    }
})
export default propertiesSlice.reducer