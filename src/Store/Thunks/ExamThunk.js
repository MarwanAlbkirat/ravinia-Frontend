import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import swal from 'sweetalert';
import { toast } from "react-toastify";
const createExam = createAsyncThunk("exam/create",async({id,formData,token})=>{
    try {
        const header = {
            token,
            'Content-Type': 'multipart/form-data',
          };
        const response = await axios.post(`http://localhost:5000/api/exam/${id}`,formData,{headers:{...header}});
        toast.success(response.data.message);
    } catch (error) {
        if(error.response)toast.error(error.response.data.message);
        else toast.error(error.message);
    }
});
const getExam = createAsyncThunk("exam/get",async({id,token})=>{
    try {
        const header = {
            token,
            'Content-Type': 'application/json',
          };
        const response = await axios.get(`http://localhost:5000/api/exam/${id}`,{headers:{...header}});
        return response.data;
    } catch (error) {
        if(error.response)toast.error(error.response.data.message);
        else toast.error(error.message);
    }
});
const editExam = createAsyncThunk("exam/edit",async({id,formData,token})=>{
    try {
        const header = {
            token,
            'Content-Type': 'multipart/form-data',
          };
        const response = await axios.put(`http://localhost:5000/api/exam/${id}`,formData,{headers:{...header}});
        toast.success(response.data.message);
    } catch (error) {
        if(error.response)toast.error(error.response.data.message);
        else toast.error(error.message);
    }
});
const activeExam = createAsyncThunk("exam/active",async({id,token})=>{
    try {
        const header = {
            token,
            'Content-Type': 'application/json',
          };
        const response = await axios.patch(`http://localhost:5000/api/exam/${id}`,{},{headers:{...header}});
        toast.success(response.data.message);
    } catch (error) {
        if(error.response)toast.error(error.response.data.message);
        else toast.error(error.message);
    }
});
const deleteExam = createAsyncThunk("exam/delete",async({id,token})=>{
    try {
        const header = {
            token,
            'Content-Type': 'application/json',
          };
        const response = await axios.delete(`http://localhost:5000/api/exam/${id}`,{headers:{...header}});
        toast.success(response.data.message);
    } catch (error) {
        if(error.response)toast.error(error.response.data.message);
        else toast.error(error.message);
    }
});
const startExamForUser = createAsyncThunk("exam/startExamForUser",async({id,token})=>{
    try {
        const header = {
            token,
            'Content-Type': 'application/json',
          };
        const response = await axios.patch(`http://localhost:5000/api/exam/start-exam-user/${id}`,{},{headers:{...header}});
        toast.success(response.data.message);
    } catch (error) {
        if(error.response)toast.error(error.response.data.message);
        else toast.error(error.message);
    }
});
const endExamForUser = createAsyncThunk("exam/endExamForUser",async({idExam,token})=>{
    try {
        const header = {
            token,
            'Content-Type': 'application/json',
          };
        const response = await axios.patch(`http://localhost:5000/api/exam/end-exam-user/${idExam}`,{},{headers:{...header}});
        toast.success(response.data.message);
    } catch (error) {
        if(error.response)toast.error(error.response.data.message);
        else toast.error(error.message);
    }
});
export {createExam,getExam,editExam,deleteExam,activeExam,startExamForUser,endExamForUser};