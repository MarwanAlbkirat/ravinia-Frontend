import { useState } from "react";
const Blank = ({course,idExam,solve,setSolve,questions,idUser}) => {
    const [blank , setBlank] = useState('');
    function handleChange(event){
        setBlank(event.target.value);
    }
    function handleSolve(){
        let solveExsist = solve.find((e)=>e.question === questions._id);
        if(solveExsist){
            const updatedSolve = solve.map((ele)=>{
                if(ele.question === solveExsist.question){
                    return {
                        ...ele ,
                        answer:blank,
                        mark : Object.values(questions.questionType.typeQuestion)[0].gab === blank ? questions.mark : 0
                    }
                }
                return ele;
            });
            setSolve(updatedSolve);
        }
    
        else{
            const solveTrueFalse = 
            {
                question:questions._id,
                answer:blank,
                mark : Object.values(questions.questionType.typeQuestion)[0].gab === blank ? questions.mark : 0,
                user:idUser,
                exam:idExam,
                course:course,
            }
        
            setSolve([
                ...solve,
                solveTrueFalse,
            ]);
        }
    }
    return ( 
        <div className="">
        <div className="question bg-white p-3 border-bottom">
               <div className="d-flex flex-row align-items-center question-title">
                   <h3 className="text-danger">Q.</h3>
                   <h5 className="mt-1 ml-2">{questions.question}?</h5>
               </div>
               <div className="d-flex">
                
               <input className="form-control" type="text" onChange={handleChange} value={blank} />
            <div onClick={handleSolve} className="btn btn-success">Approval</div>
               </div>
</div>
   </div>
     );
}
 
export default Blank;