import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "../api";

export const getLocations = createAsyncThunk(
    `locations/getLocations`,
    async () => {
        let res = await customAxios.get(`locations`)
        return res.data
    }
)