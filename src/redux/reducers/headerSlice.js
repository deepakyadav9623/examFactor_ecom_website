import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name:"headerSlice",
    initialState:{userInfo:{}},
    reducers:{
        handleSignUp:(state,action)=>{
            console.log('comng');
            state.userInfo=action.payload
        }
    }
})

export const {handleSignUp} = headerSlice.actions

export default headerSlice.reducer;