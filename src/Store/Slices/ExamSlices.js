import { createSlice } from "@reduxjs/toolkit";
import { createExam,getExam,editExam,deleteExam,activeExam,startExamForUser,endExamForUser} from "../Thunks/ExamThunk";
const examSlice = createSlice({
    name:"exam",
    initialState:{
        isLoding:null,
        exam:null
    },
    extraReducers(builder){
        builder.addCase(createExam.pending             ,   (state,action)=>{
            state.isLoding = true;
        });
        builder.addCase(createExam.fulfilled           ,   (state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(createExam.rejected   ,   (state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(getExam.pending             ,   (state,action)=>{
            state.isLoding = true;
        });
        builder.addCase(getExam.fulfilled           ,   (state,action)=>{
            state.isLoding = false;
            state.exam = action.payload;
        });
        builder.addCase(getExam.rejected   ,   (state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(editExam.pending             ,   (state,action)=>{
            state.isLoding = true;
        });
        builder.addCase(editExam.fulfilled           ,   (state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(editExam.rejected   ,   (state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(deleteExam.pending             ,   (state,action)=>{
            state.isLoding = true;
        });
        builder.addCase(deleteExam.fulfilled           ,   (state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(deleteExam.rejected   ,   (state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(activeExam.pending             ,   (state,action)=>{
            state.isLoding = true;
        });
        builder.addCase(activeExam.fulfilled           ,   (state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(activeExam.rejected   ,   (state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(startExamForUser.pending             ,   (state,action)=>{
            state.isLoding = true;
        });
        builder.addCase(startExamForUser.fulfilled           ,   (state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(startExamForUser.rejected   ,   (state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(endExamForUser.pending             ,   (state,action)=>{
            state.isLoding = true;
        });
        builder.addCase(endExamForUser.fulfilled           ,   (state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(endExamForUser.rejected   ,   (state,action)=>{
            state.isLoding = false;
        });
    }
});
export const examReducer = examSlice.reducer;