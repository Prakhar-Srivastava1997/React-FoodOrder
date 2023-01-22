import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    mealsArray:[]
}

export const fetchAsyncMeals = createAsyncThunk("meals/fetchAsyncMeals", async()=>{
    const response = await axios.get("http://localhost:4000/meals").catch((err)=>{alert(err.message)})
    return response.data
})

const foodSlice = createSlice({
    name:"meals",
    initialState,
    reducers:{},
    extraReducers:{
        [fetchAsyncMeals.pending]:()=>{
            console.log("pending")
        },
        [fetchAsyncMeals.fulfilled]:(state, {payload})=>{
            console.log("fulfilled");
            return {...state, mealsArray:payload}
        },
        [fetchAsyncMeals.rejected]:()=>{
            console.log("rejected")
        }
    }
})

export const getAllMeals = (state)=>state.meals.mealsArray;
export default foodSlice.reducer;