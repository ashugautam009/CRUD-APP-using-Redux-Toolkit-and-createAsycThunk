import { createAsyncThunk } from "@reduxjs/toolkit";

//create action
export const deleteUser=createAsyncThunk('deleteUser',async(id,{rejectWithValue})=>{
    const response= await fetch (`https://65604a6483aba11d99d08b62.mockapi.io/curd/${id} ` ,{
        method:'DELETE'
    });
        
    try {
        const result=await response.json()
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})