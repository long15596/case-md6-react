import {createSlice} from "@reduxjs/toolkit";
import {getLocations} from "../../services/location/locationService";

let initialState = {
    locations: [],
    error: '',
}
let locationsSlice = createSlice({
    name: `location`,
    initialState,
    extraReducers: builder => {
        builder.addCase(getLocations.fulfilled, (state, action) => {
            state.locations = action.payload
        });
    }
})
export default locationsSlice.reducer