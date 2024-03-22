import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "../api";

export const getProperties = createAsyncThunk(
    `properties/getProperties`,
    async () => {
        let res = await customAxios.get(`properties`)
        return res.data
    }
)
