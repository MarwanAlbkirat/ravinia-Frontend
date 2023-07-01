import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
const createQuestion = createAsyncThunk("question/create",async({id,token,body})=>{
    try {
        const headers = {
            'token': token,
            'Content-Type': 'application/json',
          };
        const response = await axios.post(`http://localhost:5000/api/question/${id}`,{...body},{ headers });
        return response.data;
    } catch (error) {
        if(error.response)toast.error(error.response.data.message);
        else toast.error(error.message);
    }
});
const getQuestionExam = createAsyncThunk("question/get",async({id,token})=>{
    try {
        const headers = {
            'token': token,
            'Content-Type': 'application/json',
          };
        const response = await axios.get(`http://localhost:5000/api/question/${id}`,{ headers });
        return response.data;
    } catch (error) {
        if(error.response)toast.error(error.response.data.message);
        else toast.error(error.message);
    }
});
const removeQestion = createAsyncThunk("question/remove",async({id,token})=>{
    try {
        const headers = {
            'token': token,
            'Content-Type': 'application/json',
          };
        const response = await axios.delete(`http://localhost:5000/api/question/${id}`,{ headers });
        toast.success(response.data.message);
    } catch (error) {
        if(error.response)toast.error(error.response.data.message);
        else toast.error(error.message);
    }
});
export {createQuestion,getQuestionExam,removeQestion};