import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import customAxios from "../api";

export const getUsers = createAsyncThunk('get/Users', async () => {
    let res = await axios.get('http://localhost:8080/admin/users');
    return res.data
})
export const getOwners = createAsyncThunk('get/Owners', async () => {
    let res = await axios.get('http://localhost:8080/admin/owners');
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
    async ({values}) => {
        const res = await customAxios.post(`login`, values)
        if (res.status === 200)
            return values
        else {
            return res.data
        }

    }
)