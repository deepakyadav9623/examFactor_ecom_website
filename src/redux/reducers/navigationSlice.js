import { createSlice } from "@reduxjs/toolkit";

const navigateSlice = createSlice({
    name:"navigateSlice",
    initialState:{activeTab: 'home'},
    reducers:{
        handleActiveTab:(state,action)=>{
            state.activeTab=action.payload
        }
    }
})

export const {handleActiveTab} = navigateSlice.actions

export default navigateSlice.reducer;