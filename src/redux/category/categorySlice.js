import {createSlice} from "@reduxjs/toolkit";
import {getCategories} from "../../services/category/categoryService";

let initialState = {
    categories: [],
    error: '',
}
let categoriesSlice = createSlice({
    name: `category`,
    initialState,
    extraReducers: builder => {
        builder.addCase(getCategories.fulfilled, (state, action) =>{
            state.categories = action.payload
        });
    }
})
export default categoriesSlice.reducer