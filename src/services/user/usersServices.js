import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "../api";

export const getUsers = createAsyncThunk(
    'get/users',
    async () => {
        let res = await customAxios.get('admin/users');
        return res.data
    })

export const register = createAsyncThunk(
    'user/register',
    async ({values}) => {
        let res = await customAxios.post(`register/2`, values);
        if (res.status === 201) {
            return res.data
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
        } catch (error) {
            throw error
        }
    }
)

export const logOut = createAsyncThunk(
    'user/logOut',
    async () => {
    }
)
export const updateUser = createAsyncThunk(
    `user/updateUser`,
    async ({id, values}) => {
        await customAxios.put(`users/${id}`, values)
        return values
    }
)
export const getAllUser = createAsyncThunk(
    'user/getAll',
    async  ()=>{
       let res =  await customAxios.get('users');
        return res.data
    }
)
export const editPassword = createAsyncThunk(
    'user/editPassword',
    async ({id,values})=>{
      let res =  await customAxios.put(`updatePass/${id}`, values)
        return res
    }
)