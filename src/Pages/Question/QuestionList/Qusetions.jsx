import { removeQestion } from "../../../Store/Thunks/QuestionThunk";
import Blank from "./TypeQuestion/Blank";
import MultipleChoice from "./TypeQuestion/MultipleChoice";
import TrueFalse from "./TypeQuestion/TrueFalse";
import { useDispatch, useSelector } from "react-redux";
const Qusetions = ({setUpdate,update,question,index}) => {
    const {user:{token}} = useSelector(state=>state.authentication);
    const disPatch = useDispatch();
    function removeQuestion(){
        const {_id:id} = question;
        disPatch(removeQestion({token,id})).then(e=>setUpdate(!update));
    }
    const type = Object.keys(question.questionType.typeQuestion)[0];
    let showQustion = null;
    const solution = Object.values(question.questionType.typeQuestion)[0];
    if(type === "True False"){
        showQustion =<TrueFalse solution={solution}/> 
    }
    else if(type === "Multiple Choice"){
        showQustion = <MultipleChoice solution={solution}/>
    }
    else if(type === "Fill Gaps"){
        showQustion = <Blank solution={solution}/>
    }
return ( 
    <div className="border mt-3 mb-3 p-2">
        <div className="  d-flex align-items-center ">
            <div className=" border h-100 p-3">
                <h6 className=" text-capitalize">question : {++index}  </h6>
                <h6 className=" text-capitalize">mark : {question.mark}  </h6>
            </div>
            <div className=" d-flex question-show p-4 w-100 justify-content-between">
                <h3 className="name">{question.question} ?</h3>
                <div className="">
                <i style={{cursor:"pointer"}} onClick={removeQuestion} className="fa-solid fa-trash pl-1 pr-1"></i>
                <i style={{cursor:"pointer"}}  className="fa-solid fa-pen pl-1 pr-1"></i>
                </div>
            </div>
        </div>
        <div className=" ">
            {showQustion}
        </div>
    </div>
 );
}
export default Qusetions;