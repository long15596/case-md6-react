import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "../api";

export const getImages = createAsyncThunk(
    `images/getImages`,
    async ({id}) => {
        let res = await customAxios.get(`images?propertyId=${id}`)
        return res.data
    }
)
export const addImages = createAsyncThunk(
    `images/addImages`,
    async ({values}) => {
        console.log(values)
        await customAxios.post(`images`, values);
        return values
    }
)
export const getImagesByProperty = createAsyncThunk(
    `images/getImagesPro`,
    async ({id}) => {
        let res = await customAxios.get(`images?propertyId=${id}`)
        return res.data
    }
)
