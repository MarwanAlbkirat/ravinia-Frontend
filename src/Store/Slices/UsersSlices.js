import { createSlice } from "@reduxjs/toolkit";
import { deleteUser,getSpecificUser,editUser,uploadUserPhoto } from "../Thunks/UsersThunk";

const userSlices = createSlice({
    name:"users",
    initialState:{
        data:[],
        updatedData:null,
        isLoding:false,
        deleteMessage:null,
        setAdminMessage:null,
        editUserMessage:null,
        isLodingPhoto :null
    },
    extraReducers(builder){
        // builder.addCase(getAllUsers.pending   ,(state,action)=>{
        //     state.isLoding = true;
        //     state.deleteMessage = null;
        //     state.setAdminMessage = null
        // });
        // builder.addCase(getAllUsers.fulfilled ,(state,action)=>{
        //     state.isLoding = false;
        //     state.data = action.payload;
        // });
        // builder.addCase(getAllUsers.rejected  ,(state,action)=>{
        //     state.isLoding = false;
        // });
        builder.addCase(getSpecificUser.pending   ,(state,action)=>{
            state.isLoding = true;
        });
        builder.addCase(getSpecificUser.fulfilled ,(state,action)=>{
            state.isLoding = false;
            state.data = action.payload;
        });
        builder.addCase(getSpecificUser.rejected  ,(state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(deleteUser.pending   ,(state,action)=>{
            state.isLoding = true;
        });
        builder.addCase(deleteUser.fulfilled ,(state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(deleteUser.rejected  ,(state,action)=>{
            state.isLoding = false;
        });
        // builder.addCase(setAdmin.pending   ,(state,action)=>{
        //     state.isLoding = true;
        // });
        // builder.addCase(setAdmin.fulfilled ,(state,action)=>{
        //     state.isLoding = false;
        //     state.setAdminMessage = action.payload;
        // });
        // builder.addCase(setAdmin.rejected  ,(state,action)=>{
        //     state.isLoding = false;
        // });
        builder.addCase(editUser.pending   ,(state,action)=>{
            state.isLoding = true;
            // state.data = null;
        });
        builder.addCase(editUser.fulfilled ,(state,action)=>{
            state.isLoding = false;
            // state.data = action.payload;
        });
        builder.addCase(editUser.rejected  ,(state,action)=>{
            state.isLoding = false;
        });
        builder.addCase(uploadUserPhoto.pending   ,(state,action)=>{
            state.isLodingPhoto = true;
        });
        builder.addCase(uploadUserPhoto.fulfilled ,(state,action)=>{
            state.isLodingPhoto = false;
        });
        builder.addCase(uploadUserPhoto.rejected  ,(state,action)=>{
            state.isLodingPhoto = false;
        });
    }
});
export const usersReducer = userSlices.reducer;