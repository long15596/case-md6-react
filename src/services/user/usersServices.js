import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "../api";

export const getUsers = createAsyncThunk('get/Users', async () => {
    let res = await customAxios.get('admin/users');
    return res.data
})

export const register = createAsyncThunk(
    'user/register',
    async ({values}) => {
        let res = await customAxios.post(`register/2`, values);
        if (res.status === 201) {
            return values
        } else {
            return res.data
        }
    });
export const login = createAsyncThunk(
    'user/login',
    async (values) => {
        try {
            const res = await customAxios.post(`login`, values)
            return res.data
        } catch (error){
            console.log(error)
            throw error
        }

    }
)