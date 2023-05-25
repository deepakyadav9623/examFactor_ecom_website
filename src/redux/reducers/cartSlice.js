import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import cartItems from "../../assets/jsonData/cartItems.json"
import CouponCode from "../../assets/jsonData/CouponCode.json"

const cartSlice = createSlice({
    name:"cartSlice",
    initialState:{
        cartItems:[...cartItems],
        applyedCoupon:{"title":''},
        isCouponValid:true,
    },
    reducers:{
        handleAddToCart:(state,action)=>{
            console.log('adding',action.payload);
            state.cartItems=state.cartItems.concat(action.payload)
        },
        handleRemoveFromCart:(state,action)=>{
            state.cartItems=state.cartItems.filter(item=>item.id!==action.payload)
        },
        handleApplyCoupon:(state,action)=>{
            state.applyedCoupon=CouponCode.filter(item=>item.id===action.payload)[0];
        },
        handleApplyCouponManually :(state,action)=>{
            if(CouponCode.some(item=>item.title.toLowerCase()===action.payload.toLowerCase())){
                state.applyedCoupon=CouponCode.filter(item=>item.title.toLowerCase()===action.payload.toLowerCase())[0];
            }
            else{
                state.applyedCoupon.title=action.payload;
                state.applyedCoupon.discount=0;
            }
        },
        handleRemoveCoupon:(state,action)=>{
            state.applyedCoupon.title="";
        },
        handleCouponCodeValidation:(state,action)=>{
            if(CouponCode.some(item=>item.title.toLowerCase()===state.applyedCoupon.title.toLowerCase()) || action.payload=="delete"){
              state.isCouponValid=true
            }
            
            else{
              state.isCouponValid=false;
            }
            
          }
    }
}
);

export const {handleAddToCart,handleRemoveFromCart,handleApplyCoupon,handleRemoveCoupon,handleApplyCouponManually,handleCouponCodeValidation} = cartSlice.actions

export default cartSlice.reducer;