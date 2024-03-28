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
        await customAxios.post(`images`, values);
        return values
    }
)
export const deleteImages = createAsyncThunk(
    `images/deleteImages`,
    async ({id}) => {
        await customAxios.delete(`images?propertyId=${id}`)
    }
)