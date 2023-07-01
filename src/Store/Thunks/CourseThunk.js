import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { toast } from "react-toastify";
const createCourse = createAsyncThunk("course/create",async({token,nameCourse})=>{
    try {
        const response = await axios.post("http://localhost:5000/api/course",{
            nameCourse
        },{
            headers:{
                token,
            }
        });
        toast.success(response.data.message);
    } catch (error) {
        if(error.response)toast.error(error.response.data.message);
        else toast.error(error.message);  
    }
});
const getAllCourse = createAsyncThunk("course/getAll",async({token})=>{
    try {
        const response = await axios.get("http://localhost:5000/api/course",{
            headers:{
                token,
            }
        });
        return response.data;
    } catch (error) {
        if(error.response)toast.error(error.response.data.message);
        else toast.error(error.message);  
    }
});
const getSpecificCourse = createAsyncThunk("course/getSpecificCourse",async({idCourse,token})=>{
    try {
        const response = await axios.get(`http://localhost:5000/api/course/${idCourse}`,{
            headers:{
                token,
            }
        });
        return response.data;
    } catch (error) {
        if(error.response)toast.error(error.response.data.message);
        else toast.error(error.message);  
    }
});
const updateCourse = createAsyncThunk("course/update",async({courseId,token,nameCourse})=>{
    try {
        const header = {
            token,
            'Content-Type': 'application/json',
          };
        const response = await axios.put(`http://localhost:5000/api/course/${courseId}`,{nameCourse},{headers:{...header}});
        toast.success(response.data.message);
    } catch (error) {
        if(error.response)toast.error(error.response.data.message);
        else toast.error(error.message);  
    }
});
const insertUserToCourse = createAsyncThunk("course/joinUser",async({token,courseId})=>{
    try {
        const response = await axios.patch(`http://localhost:5000/api/course/add-user-course/${courseId}`,{},{
            headers:{
                token,
            }
        });
        toast.success(response.data.message);
    } catch (error) {
        if(error.response)toast.error(error.response.data.message);
        else toast.error(error.message);  
    }
});
const removeFromCourse = createAsyncThunk("course/removeUser",async({token,courseId})=>{
    const header = {
        token,
        'Content-Type': 'application/json',
      };
    try {
        const response = await axios.delete(`http://localhost:5000/api/course/remove-user-course/${courseId}`,{headers:{...header}});
        toast.success(response.data.message);
    } catch (error) {
        if(error.response)toast.error(error.response.data.message);
        else toast.error(error.message);  
    }
});
const deleteCourse = createAsyncThunk("course/delete",async({token,courseId})=>{
    const header = {
        token,
        'Content-Type': 'application/json',
      };
    try {
        const response = await axios.delete(`http://localhost:5000/api/course/${courseId}`,{headers:{...header}});
        toast.success(response.data.message);
    } catch (error) {
        if(error.response)toast.error(error.response.data.message);
        else toast.error(error.message);  
    }
});
const uploadCoursePhoto = createAsyncThunk("course/addPhoto",async({token,courseId,formData})=>{
    const header = {
        token,
        'Content-Type': 'multipart/form-data',
      };
    try {
        const response = await axios.post(`http://localhost:5000/api/course/course-photo-upload/${courseId}`,formData,{headers:{...header}});
        toast.success(response.data.message);
    } catch (error) {
        if(error.response)toast.error(error.response.data.message);
        else toast.error(error.message);  
    }
});
export {createCourse,getAllCourse,insertUserToCourse,getSpecificCourse,removeFromCourse,deleteCourse,uploadCoursePhoto,updateCourse};