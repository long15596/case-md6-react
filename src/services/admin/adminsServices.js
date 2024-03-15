import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
    'get/Users',
    async () => {
        console.log(2)
        let res = await axios.get('http://localhost:8080/admin/users');
        console.log(1, res);
        return res.data
    }
)
export const getOwners = createAsyncThunk(
    'get/Owner',
    async () => {
        let res = await axios.get('http://localhost:8080/admin/owners');
        return res.data
    }
)