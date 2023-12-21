import { createAsyncThunk } from "@reduxjs/toolkit";

export const showUser=createAsyncThunk("showUser",async()=>{
    const response= await fetch('https://65604a6483aba11d99d08b62.mockapi.io/curd');
        const result=await response.json();
        return result;
   
})