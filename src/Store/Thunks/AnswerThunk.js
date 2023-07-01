import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import {  } from "../Slices/AnswerSlices";
import { toast } from "react-toastify";
const solveExam = createAsyncThunk("answer/create",async({solve,token})=>{
    try {
        const header = {
            token,
            'Content-Type': 'application/json',
          };
        const response = await axios.post("http://localhost:5000/api/answer",{...solve},{headers:{...header}});
        toast.success(response.data.message);
    } catch (error) {
        if(error.response)toast.error(error.response.data.message);
        else toast.error(error.message);
    }
});
const getSolve = createAsyncThunk("answer/getSolve",async({token,idExam})=>{
    try {
        const header = {
            token,
            'Content-Type': 'application/json',
          };
        const response = await axios.get(`http://localhost:5000/api/answer/${idExam}`,{headers:{...header}});
        return response.data;
    } catch (error) {
        if(error.response)toast.error(error.response.data.message);
        else toast.error(error.message);
    }
});
export {solveExam,getSolve};