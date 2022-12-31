import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
name:'auth',
initialState:{isloggedIn :false ,name:'maram'},
reducers:{
    logInOut :(state) =>{
state.isloggedIn = !state.isloggedIn;
    }
}
});
export const {logInOut} = authSlice.actions;

export default authSlice.reducer;