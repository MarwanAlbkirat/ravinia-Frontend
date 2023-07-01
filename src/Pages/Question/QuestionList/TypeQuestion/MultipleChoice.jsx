const MultipleChoice = ({solution}) => {
    const {possibilities} = solution
    const result = possibilities.map((ele,index)=>{
        return <span key={index}>{ele.possibility} {solution.rightSolution === ele.possibility && <i className="fa-solid fa-check pr-3 pl-3"></i>} </span>
    });
return ( 
    <div className="d-flex justify-content-around align-items-center mt-2 mb-2">{result}</div>
)}
export default MultipleChoice;