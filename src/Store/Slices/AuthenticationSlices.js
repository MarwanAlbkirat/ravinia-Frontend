import { createSlice } from "@reduxjs/toolkit";
import { authenticationRegister,authenticationLogin,activationEmail,authenticationForgotPassword,authenticationReSetPassword } from '../Thunks/AuthenticationThunk';
const authenticationSlice = createSlice({
    name:"authentication",
    initialState:{
        user:localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null,
        isLoding:false,
        resetPasswordMessage :null,
    },
    reducers:{
        logout(state,action){
            state.user = null;
        }
    },
    extraReducers(builder){
        builder.addCase(authenticationLogin.pending             ,   (state,action)=>{
            state.isLoding = true;
        });
        builder.addCase(authenticationLogin.fulfilled           ,   (state,action)=>{
            state.user = action.payload;
            state.isLoding = false;
        });
        builder.addCase(authenticationLogin.rejected   ,   (state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(authenticationRegister.pending          ,   (state,action)=>{
            state.isLoding = true;
        });
        builder.addCase(authenticationRegister.fulfilled        ,   (state,action)=>{;
            state.isLoding = false;
        });
        builder.addCase(authenticationRegister.rejected   ,   (state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(authenticationForgotPassword.pending    ,   (state,action)=>{
            state.isLoding = true;
        });
        builder.addCase(authenticationForgotPassword.fulfilled  ,   (state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(authenticationForgotPassword.rejected   ,   (state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(authenticationReSetPassword.pending     ,   (state,action)=>{
            state.isLoding = true;
        });
        builder.addCase(authenticationReSetPassword.fulfilled   ,   (state,action)=>{;
            state.isLoding = false;
            state.resetPasswordMessage = action.payload;
        });
        builder.addCase(authenticationReSetPassword.rejected    ,   (state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(activationEmail.pending     ,   (state,action)=>{
            state.isLoding = true;
        });
        builder.addCase(activationEmail.fulfilled   ,   (state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(activationEmail.rejected    ,   (state,action)=>{
            state.isLoding = false;
        });
    }
});
export const authenticationReducer = authenticationSlice.reducer;
export const authenticationActions = authenticationSlice.actions;