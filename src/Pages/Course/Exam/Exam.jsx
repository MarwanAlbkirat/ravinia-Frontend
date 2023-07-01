import { Link } from 'react-router-dom';
import ExamList from './ExamList';
import { ToastContainer } from 'react-toastify';
const Exam = ({id,setUpdate,update,token,examList,idCourse,data}) => {
    let result = null;
    const owned = data.ownedCourse.find(e=>e._id === idCourse);
    if(examList.length >0){
        result = examList.map((exam, index)=>{
            return <ExamList id={id} setUpdate={setUpdate} update={update} token={token} owned={owned} exam={exam} key={exam._id} />
        });
    }
    if(owned){
        return(
            <div className=" text-center mt-5 mb-5 container">
            <Link className='btn btn-primary w-100  text-capitalize' to={`/create-exam/${idCourse}`}>create new exam</Link>
            {result ? result : <></>}
            </div>
        );
    }
    else return(
        <div className="ExamList mt-5">
        <ToastContainer/>
        <div className="container">
        <div className="row">
            {result ? result : <></>}
            </div>
            </div>
        </div>

    )
}
 
export default Exam;