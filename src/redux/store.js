import { combineReducers, configureStore } from "@reduxjs/toolkit";
import headerSlice from "./reducers/headerSlice";
import homeSlice from "./reducers/homeSlice";
import userReducer from "./reducers/loginSlice";
import navigationSlice from "./reducers/navigationSlice";
import loginSlice from "./reducers/loginSlice";
import cartSlice from "./reducers/cartSlice"

const rootReducer = combineReducers({homeSlice,headerSlice,navigationSlice,userReducer,loginSlice,cartSlice});

const store = configureStore({
    reducer: {rootReducer}
});

export default store;