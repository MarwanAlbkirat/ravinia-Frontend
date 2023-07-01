import { createSlice } from "@reduxjs/toolkit";
import { solveExam,getSolve} from '../Thunks/AnswerThunk';
const answerSlice = createSlice({
    name:"answer",
    initialState:{
        answers:[],
    },
    extraReducers(builder){
        builder.addCase(solveExam.pending             ,   (state,action)=>{
            state.isLoding = true;
        });
        builder.addCase(solveExam.fulfilled           ,   (state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(solveExam.rejected   ,   (state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(getSolve.pending             ,   (state,action)=>{
            state.isLoding = true;
        });
        builder.addCase(getSolve.fulfilled           ,   (state,action)=>{
            state.answers = action.payload;
            state.isLoding = false;
        });
        builder.addCase(getSolve.rejected   ,   (state,action)=>{
            state.isLoding = false;
        });
    }
});
export const answerReducer = answerSlice.reducer;