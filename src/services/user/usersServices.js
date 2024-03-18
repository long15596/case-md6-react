import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk('get/Users', async () => {
    let res = await axios.get('http://localhost:8080/admin/users');
    return res.data
})
export const getOwners = createAsyncThunk('get/Owners', async () => {
    let res = await axios.get('http://localhost:8080/admin/owners');
    return res.data
})

export const registerUser = createAsyncThunk(
    'register/Users',
    async ({values}) => {
        let res = await axios.post(`http://localhost:8080/register/2`, values);
        if (res.status === 201) {
            return values
        } else {
            return res.data
        }
    });