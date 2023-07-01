import QuestionSpace from './QuestionSpace/QuestionSpace';
import QuestionList from './QuestionList/QuestionList';
import { useState } from 'react';
const Question = () => {
    const [update, setUpdate] = useState(false);
return ( 
    <div className="question container">
        <QuestionSpace setUpdate={setUpdate} update={update} />
        <QuestionList  setUpdate={setUpdate} update={update} />
    </div>
)}
export default Question;