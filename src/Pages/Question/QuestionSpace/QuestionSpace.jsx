import { useState } from "react";
import QuestionInformation from "./QuestionInformation/QuestionInformation";
import TypeQuestion from './TypeQuestion/TypeQuestion';
import { useDispatch, useSelector } from "react-redux";
import { createQuestion } from '../../../Store';
import {  useParams } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
const QuestionSpace = ({setUpdate,update}) => {
    const {id}= useParams();
    const {user:{token}} = useSelector(state=>state.authentication);
    const {isLoding} = useSelector(state=>state.question);
    const disPatch = useDispatch();
    // useState
    const [question , setQuestion ] = useState("Write your question here");
    const [mark     , setMark     ] = useState(1);
    const [questionKind , setQuestionKind] = useState('True False');
    const [trueFalseQuestion , setTrueFalseQuestion] = useState(false);
    const [blank , setBlank] = useState('');
    const [firstChoice , setFirstChoice] = useState('');
    const [secoundChoice , setSecoundChoice] = useState('');
    const [thirdChoice , setThirdChoice] = useState('');
    const [foruthChoice , setForuthChoice] = useState('');
    const [trueValue , setTrueValue] = useState('');
    // useState
    function handleSubmit(event){
        event.preventDefault();
        let questionType = null;
        if(questionKind === "True False"){
            questionType = {
                    typeQuestion:{
                        "True False":trueFalseQuestion
                    }
                }
        }
        else if(questionKind === "Multiple Choice"){
            questionType={
                typeQuestion:{
                    "Multiple Choice":{
                        "rightSolution":trueValue,
                        "possibilities":[
                            {possibility : firstChoice},
                            {possibility : secoundChoice},
                            {possibility : thirdChoice},
                            {possibility : foruthChoice},
                        ]
                    }
                }
            }
        }
        else if(questionKind === "Fill Blank"){
            questionType={
                typeQuestion:{
                    "Fill Gaps":{
                        "gab":blank,
                    }
                }
            }
        }
        const body ={
            question,
            mark,
            questionType,
        }
        disPatch(createQuestion({token,body,id})).then(e=>setUpdate(!update));
    }
return ( 
    <div className="question-space">
    <ToastContainer/>
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-6">
                <QuestionInformation question={question} setQuestion={setQuestion} mark={mark} setMark={setMark} questionKind={questionKind} setQuestionKind={setQuestionKind}/>
                </div>
                <div className="col-6">
                <TypeQuestion
                trueFalseQuestion={trueFalseQuestion} setTrueFalseQuestion={setTrueFalseQuestion}
                blank={blank} setBlank={setBlank}
                firstChoice={firstChoice} setFirstChoice={setFirstChoice}
                secoundChoice={secoundChoice} setSecoundChoice={setSecoundChoice}
                thirdChoice={thirdChoice} setThirdChoice={setThirdChoice}
                foruthChoice={foruthChoice} setForuthChoice={setForuthChoice}
                trueValue={trueValue} setTrueValue={setTrueValue}
                    questionKind={questionKind}  />
                </div>
            </div>
            <button className="loder-btn mt-4 btn btn-primary w-100 text-capitalize">create new question{isLoding && <span className="loaderProfile-image"></span>}</button>
        </form>
    </div>
)}
export default QuestionSpace;