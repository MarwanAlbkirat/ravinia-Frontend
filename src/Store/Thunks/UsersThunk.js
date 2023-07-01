import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import swal from "sweetalert";

// const getAllUsers = createAsyncThunk("get/users",async({token,filter })=>{
//     try {
//         const response = await axios.get(`http://localhost:5000/api/users?filter=${filter}`,{
//             headers:{
//                 ...token,
//             },
//         });
//         return response.data;
//     } catch (error) {
//         if(error.response)toast.error(error.response.data.message);
//         else toast.error(error.message);
//     }
// });
// const editUser = createAsyncThunk("edit/user",async({body,token,id})=>{
//     try {
//         const response = await axios.put(`http://localhost:5000/api/users/${id}`,{

//                 ...body
//         },{
//             headers:{
//                 token,
                
//             },
//         });
//         return response.data;
//     } catch (error) {
//         if(error.response)toast.error(error.response.data.message);
//         else toast.error(error.message);
//     }
// });
const deleteUser = createAsyncThunk("delete/user",async({id,token})=>{
    try {
        const headers = {
            'token': token,
            'Content-Type': 'application/json',
          };
        const response = await axios.delete(`http://localhost:5000/api/users/${id}`,{ headers });
        swal({
            timer:"2s",
            title:response.data.message
        });
        return response.data;
    } catch (error) {
        if(error.response)toast.error(error.response.data.message);
        else toast.error(error.message);
    }
});
const getSpecificUser = createAsyncThunk("getSpecific/user",async({id,token})=>{
    try {
        const headers = {
            'token': token,
            'Content-Type': 'application/json',
          };
        const response = await axios.get(`http://localhost:5000/api/users/${id}`,{ headers });
        return response.data;
    } catch (error) {
        if(error.response)toast.error(error.response.data.message);
        else toast.error(error.message);
    }
});
const editUser = createAsyncThunk("edit/user",async({body,token,id})=>{

    try {
        const header = {
            token,
            'Content-Type': 'application/json',
          };
        const response = await axios.put(`http://localhost:5000/api/users/${id}`,{ ...body},{headers:{...header}});
        toast.success(response.data.message);
    } catch (error) {
        if(error.response)toast.error(error.response.data.message);
        else toast.error(error.message);
    }
});
const uploadUserPhoto = createAsyncThunk("uploadPhoto/user",async({formData,token})=>{
    try {
        const header = {
            token,
            'Content-Type': 'multipart/form-data',
          };
        const response = await axios.post(`http://localhost:5000/api/users/profile-photo-upload/`,formData,{headers:{...header}});
        toast.success(response.data.message);
    } catch (error) {
        if(error.response)toast.error(error.response.data.message);
        else toast.error(error.message);
    }
});
// const setAdmin = createAsyncThunk("set/permission",async({ele,token})=>{
//     try {
//         const response = await axios.patch(`http://localhost:5000/api/users/permission/${ele._id}`,{},{
//             headers:{
//                 ...token,
//             },
//         });
//         return response.data;
//     } catch (error) {
//         if(error.response)toast.error(error.response.data.message);
//         else toast.error(error.message);
//     }
// });
export {deleteUser,getSpecificUser,editUser,uploadUserPhoto};
