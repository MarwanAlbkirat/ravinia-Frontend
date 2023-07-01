import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestionExam } from '../../../Store';
import {  useParams } from "react-router-dom";
import Qusetions from "./Qusetions";
const QuestionList = ({setUpdate,update}) => {
    const disPatch = useDispatch();
    const {questionList} = useSelector(state=>state.question);
    const {user:{token}} = useSelector(state=>state.authentication);
    const {id}= useParams();
    useEffect(()=>{
       disPatch(getQuestionExam({token,id}));
    },[update]);
    let result =null;
    if(questionList){
        result = questionList.map((question,index)=>{
            return <Qusetions setUpdate={setUpdate} update={update} question={question} key={question._id} index={index} />
        });
    }
    return ( 
        <div className="mt-3 mb-3 p-4">
            {result ? result :<></>}
        </div>
     );
}
 
export default QuestionList;