import { createAsyncThunk } from "@reduxjs/toolkit";

//create action
export const createUser=createAsyncThunk('createUser',async(data,{rejectWithValue})=>{
    const response= await fetch ("https://65604a6483aba11d99d08b62.mockapi.io/curd " ,{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data),
    });
        
    try {
        const result=await response.json()
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})