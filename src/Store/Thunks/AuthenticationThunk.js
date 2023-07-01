import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { authenticationActions } from "../Slices/AuthenticationSlices";
import swal from 'sweetalert';
import { toast } from "react-toastify";
const authenticationRegister = createAsyncThunk("authentication/register",async(user)=>{
    try {
        
        const response = await axios.post("http://localhost:5000/api/authentication/register",{
            ...user
        });
        swal({
            title:response.data.message,
            icon:"success", 
        });
    } catch (error) {
        if(error.response)toast.error(error.response.data.message);
        else toast.error(error.message);
    }
});
const authenticationLogin = createAsyncThunk("authentication/login",async(user)=>{
    try {
        
        const response = await axios.post("http://localhost:5000/api/authentication/login",{
            ...user
        });
        localStorage.setItem("userInfo",JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        if(error.response)toast.error(error.response.data.message);
        else toast.error(error.message);
    }
});
const activationEmail = createAsyncThunk("authentication/activationEmail",async({params})=>{
    try {
        const response = await axios.patch("http://localhost:5000/api/authentication/verifyEmail",{},{
            headers:{
                ...params
            },
        });
        toast.success(response.data.message);
    } catch (error) {
        if(error.response)toast.error(error.response.data.message);
        else toast.error(error.message);
    }
});
const authenticationForgotPassword = createAsyncThunk("authentication/forgotPassword",async(email)=>{
    try {
        const response = await axios.post("http://localhost:5000/api/authentication/forgot-password",{
            ...email
        });
        swal({
            title:response.data.message,
            icon:"success", 
        });
    } catch (error) {
        if(error.response)toast.error(error.response.data.message);
        else toast.error(error.message);
    }
});
const authenticationReSetPassword = createAsyncThunk("authentication/reSetPassword",async({passwords,params})=>{
    try {
        const response = await axios.patch("http://localhost:5000/api/authentication/reset-password",{
            ...passwords
        },{
            headers:{
                ...params
            },
        });
        return response.data;
    } catch (error) {
        if(error.response)toast.error(error.response.data.message);
        else toast.error(error.message);
    }
});
function logoutUser(){
    return (disPatch)=>{
        disPatch(authenticationActions.logout());
        localStorage.removeItem("userInfo");
    }
}
export {authenticationRegister,authenticationLogin,logoutUser,activationEmail,authenticationReSetPassword,authenticationForgotPassword};