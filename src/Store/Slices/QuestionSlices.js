import { createSlice } from "@reduxjs/toolkit";
import { createQuestion ,getQuestionExam,removeQestion} from "../Thunks/QuestionThunk";
const questionSlice = createSlice({
    name:"exam",
    initialState:{
        question:null,
        isLoding:null,
        questionList:null,
    },
    extraReducers(builder){
        builder.addCase(createQuestion.pending             ,   (state,action)=>{
            state.isLoding = true;
        });
        builder.addCase(createQuestion.fulfilled           ,   (state,action)=>{
            state.isLoding = false;
            state.question = action.payload;
        });
        builder.addCase(createQuestion.rejected   ,   (state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(getQuestionExam.pending             ,   (state,action)=>{
            state.isLoding = true;
            state.questionList = action.payload;
        });
        builder.addCase(getQuestionExam.fulfilled           ,   (state,action)=>{
            state.isLoding = false;
            state.questionList = action.payload;
        });
        builder.addCase(getQuestionExam.rejected   ,   (state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(removeQestion.pending             ,   (state,action)=>{
            state.isLoding = true;
        });
        builder.addCase(removeQestion.fulfilled           ,   (state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(removeQestion.rejected   ,   (state,action)=>{
            state.isLoding = false;
        });
    }
});
export const questionReducer = questionSlice.reducer;