import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "../api";

export const getProperties = createAsyncThunk(
    `properties/getProperties`,
    async () => {
        let res = await customAxios.get(`properties`)
        return res.data
    }
)
export const addProperty = createAsyncThunk(
    `properties/addProperties`,
    async ({values}) => {
        let res = await customAxios.post(`properties`, values)
        return res.data
    }
)
