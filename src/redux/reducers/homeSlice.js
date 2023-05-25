import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name:"homeSlice",
    initialState:{},
    reducers:{
        handleIncrement:(state,action)=>{
            console.log(action);
        }
    }
})

export const {handleIncrement} = homeSlice.actions

export default homeSlice.reducer;