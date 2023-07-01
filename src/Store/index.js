import {configureStore} from '@reduxjs/toolkit';
import {authenticationReducer} from './Slices/AuthenticationSlices';
import { usersReducer } from './Slices/UsersSlices';
import { courseReducer } from './Slices/CourseSlices';
import { examReducer } from './Slices/ExamSlices';
import { questionReducer } from './Slices/QuestionSlices';
import { answerReducer } from './Slices/AnswerSlices';
const store = configureStore({
    reducer:{
        authentication:authenticationReducer,
        users:usersReducer,
        course:courseReducer,
        exam:examReducer,
        question:questionReducer,
        answer:answerReducer,
    }
});
export {store};
export * from './Thunks/AuthenticationThunk';
export * from './Thunks/UsersThunk';
export * from './Thunks/CourseThunk';
export * from './Thunks/ExamThunk';
export * from './Thunks/QuestionThunk';
export * from './Thunks/AnswerThunk';