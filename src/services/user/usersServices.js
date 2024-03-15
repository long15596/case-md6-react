import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
    'get/Users',
    async () => {
        let res = await axios.get('http://localhost:8080/admin/users');
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