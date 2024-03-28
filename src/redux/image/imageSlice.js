import {createSlice} from "@reduxjs/toolkit";
import {addImages, getImages} from "../../services/image/imageService";

let initialState = {
    images: [],
    error: '',
}
let imagesSlice = createSlice({
    name: `image`,
    initialState,
    extraReducers: builder => {
        builder.addCase(getImages.fulfilled, (state, action) => {
            state.images = action.payload
        });
        builder.addCase(addImages.fulfilled, (state, action) =>{
            state.images.push(action.payload)
        });

    }
})
export default imagesSlice.reducer