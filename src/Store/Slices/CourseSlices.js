import { createSlice } from "@reduxjs/toolkit";
import { createCourse,getAllCourse,getSpecificCourse,removeFromCourse,deleteCourse,uploadCoursePhoto,updateCourse } from "../Thunks/CourseThunk";
const courseSlice = createSlice({
    name:"course",
    initialState:{
        course:[],
        specificCourse:null,
        isLoding:false,
        deleteMessage:null,
        editUserMessage:null,
        joinMessage:null,
    },
    extraReducers(builder){
        builder.addCase(createCourse.pending   ,(state,action)=>{
            state.isLoding = true;
        });
        builder.addCase(createCourse.fulfilled ,(state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(createCourse.rejected  ,(state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(getAllCourse.pending   ,(state,action)=>{
            state.isLoding = true;
        });
        builder.addCase(getAllCourse.fulfilled ,(state,action)=>{
            state.isLoding = false;
            state.course = action.payload;
        });
        builder.addCase(getAllCourse.rejected  ,(state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(getSpecificCourse.pending   ,(state,action)=>{
            state.isLoding = true;
        });
        builder.addCase(getSpecificCourse.fulfilled ,(state,action)=>{
            state.isLoding = false;
            state.specificCourse = action.payload;
        });
        builder.addCase(getSpecificCourse.rejected  ,(state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(removeFromCourse.pending   ,(state,action)=>{
            state.isLoding = true;
        });
        builder.addCase(removeFromCourse.fulfilled ,(state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(removeFromCourse.rejected  ,(state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(deleteCourse.pending   ,(state,action)=>{
            state.isLoding = true;
        });
        builder.addCase(deleteCourse.fulfilled ,(state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(deleteCourse.rejected  ,(state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(uploadCoursePhoto.pending   ,(state,action)=>{
            state.isLoding = true;
        });
        builder.addCase(uploadCoursePhoto.fulfilled ,(state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(uploadCoursePhoto.rejected  ,(state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(updateCourse.pending   ,(state,action)=>{
            state.isLoding = true;
        });
        builder.addCase(updateCourse.fulfilled ,(state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(updateCourse.rejected  ,(state,action)=>{
            state.isLoding = false;
        });
        // builder.addCase(insertUserToCourse.pending   ,(state,action)=>{
        //     state.isLoding = true;
        //     state.joinMessage =null;
        // });
        // builder.addCase(insertUserToCourse.fulfilled ,(state,action)=>{
        //     state.isLoding = false;
        //     state.joinMessage = action.payload;
        // });
        // builder.addCase(insertUserToCourse.rejected  ,(state,action)=>{
        //     state.isLoding = false;
        // });
        // builder.addCase(editUser.pending   ,(state,action)=>{
        //     state.isLoding = true;
        // });
        // builder.addCase(editUser.fulfilled ,(state,action)=>{
        //     state.isLoding = false;
        //     state.editUserMessage = action.payload;
        // });
        // builder.addCase(editUser.rejected  ,(state,action)=>{
        //     state.isLoding = false;
        // });
    }
});
export const courseReducer = courseSlice.reducer;