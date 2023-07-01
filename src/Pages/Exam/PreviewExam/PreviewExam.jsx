import { ToastContainer } from "react-toastify";

import { useLocation } from "react-router-dom";
const PreviewExam = () => {
    const location = useLocation();
    const {questions,idExam,token,solve} = location.state;
    let marks = 0;
    const result = questions.map((ele,index)=>{
        const type =  Object.keys(ele.questionType.typeQuestion)[0];
        const correctAnswer =  Object.values(ele.questionType.typeQuestion)[0];
        const userSolve = solve.find(e=>e.question === ele._id);
        marks +=userSolve.mark;
        switch (type) {
            case 'True False':
                return     <tr key={ele._id}>
                <th scope="row">{index}</th>
                <td>{ele.question}</td>
                <td>{correctAnswer}</td>
                <td>{userSolve.answer}</td>
                <td>{userSolve.mark}/{ele.mark}</td>
              </tr>
                break;
            
            case 'Multiple Choice':
                return     <tr key={ele._id}>
                <th scope="row">{index}</th>
                <td>{ele.question}</td>
                <td>{correctAnswer.rightSolution}</td>
                <td>{userSolve.answer}</td>
                <td>{userSolve.mark}/{ele.mark}</td>
              </tr>
                break;
            case 'Fill Gaps':
                return     (
                <tr key={ele._id}>
                <th scope="row">{index}</th>
                <td>{ele.question}</td>
                <td>{correctAnswer.gab}</td>
                <td>{userSolve.answer}</td>
                <td>{userSolve.mark}/{ele.mark}</td>
              </tr>
              )
                break;
            default:
                break;
        }
       
    });
return ( 
    
    <div className="container">
        <ToastContainer/>
        <table className="table table-striped mt-5 mb-4">
  <thead >
    <tr>
      <th scope="col">#</th>
      <th scope="col">question</th>
      <th scope="col">correct answer</th>
      <th scope="col">your answer</th>
      <th scope="col">mark</th>
    </tr>
  </thead>
  <tbody>
    {result}
  </tbody>
</table>
<h3 className="">Total Mark {marks}</h3>
</div>
 );
}
 
export default PreviewExam;