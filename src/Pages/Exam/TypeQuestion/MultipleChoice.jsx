const multipleChoice = ({course,idExam,idUser,questions,setSolve,solve}) => {
    const {possibilities,rightSolution} = Object.values(questions.questionType.typeQuestion)[0];
    const result = possibilities.map((ele,index)=>{

        return      <div key={index} className="ans ml-2">
        <label className="radio">
            <input type="radio" name="radio" onChange={handleSolve} value= {ele.possibility}/>
            <span>
                {ele.possibility}
            </span>
        </label>  
    </div>
    });
    function handleSolve(event){
        let solveExsist = solve.find((e)=>e.question === questions._id);
        if(solveExsist){
            const updatedSolve = solve.map((ele)=>{
                if(ele.question === solveExsist.question){
                    return {
                        ...ele ,
                        answer:event.target.value,
                        mark : rightSolution === event.target.value ? questions.mark : 0
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
                answer:event.target.value,
                mark : rightSolution === event.target.value ? questions.mark : 0,
                user:idUser,
                exam:idExam,
                course:course
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
               {result}

</div>
   </div>
     );
}
 
export default multipleChoice;