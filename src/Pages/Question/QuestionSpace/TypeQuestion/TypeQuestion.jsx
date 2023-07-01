import Blank from "./Types/Blank";
import MultipleChoice from "./Types/MultipleChoice";
import TrueFalse from "./Types/TrueFalse";
const TypeQestion = ({questionKind,trueFalseQuestion,setTrueFalseQuestion,firstChoice,setFirstChoice,secoundChoice,setSecoundChoice,thirdChoice,setThirdChoice,foruthChoice,setForuthChoice,setTrueValue,blank,setBlank}) => {

    if(questionKind === "True False"){
    return(<div className="type-question"> <TrueFalse trueFalseQuestion={trueFalseQuestion} setTrueFalseQuestion={setTrueFalseQuestion}  /> </div> );
    }
    else if(questionKind === "Multiple Choice"){
        return(<div className="type-question">
            <MultipleChoice 
                firstChoice={firstChoice}     setFirstChoice={setFirstChoice}
                secoundChoice={secoundChoice} setSecoundChoice={setSecoundChoice}
                thirdChoice={thirdChoice}     setThirdChoice={setThirdChoice}
                foruthChoice={foruthChoice}   setForuthChoice={setForuthChoice}
                setTrueValue={setTrueValue}
            />
        </div>);
    }
    else if(questionKind === "Fill Blank"){
        return(<div className="type-question">  <Blank blank={blank} setBlank={setBlank}/> </div>);
    }
    else{
        return(<div className="type-question">  please slecet the correct type</div> );
    }
}
export default TypeQestion;