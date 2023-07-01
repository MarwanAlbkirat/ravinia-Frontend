import Input from '../../../../Components/Input/Input';
const QuestionInformation = ({questionKind,setQuestionKind,question,mark,setQuestion,setMark}) => {
    function handleSelect(event){
        setQuestionKind(event.target.value);
    }
return ( 
    <div className="question-information">
        <Input state={question} type="text" stateFunction={setQuestion} icon={"fa-solid fa-question"} label={"question"}  classLabel={"text-dark"} name="name-question" className="nameQuestion" id="name-question"/>
        <Input state={mark} type="text" stateFunction={setMark} icon={"fa-solid fa-check"} label={"Mark"}  classLabel={"text-dark"} name="mark" className="nameQuestion" id="name-mark"/>
        <select onChange={handleSelect} name="" id="" className='form-control mt-3 mb-3'>
            <option className='text-capitalize' value="True False">true false</option>
            <option className='text-capitalize' value="Multiple Choice">Multiple Choice</option>
            <option className='text-capitalize' value="Fill Blank">Fill in the blanks</option>
        </select>
    </div>
);
}
export default QuestionInformation;