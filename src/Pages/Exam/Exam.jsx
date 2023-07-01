import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getExam } from "../../Store";
import Timer from "./Timer";
import TypeQustion from './TypeQuestion/TypeQustion';
const Exam = () => {
    const disPatch = useDispatch();
    const [update ,setUpdate] =useState(false);
    const {id}= useParams();
    const {user} = useSelector(state=>state.authentication);
    const {token ,_id:idUser} = user;
    const {exam} = useSelector(state=>state.exam);
    useEffect(()=>{
        disPatch(getExam({token,id}));
    },[]);
if(exam){
    const {_id:idExam,questions,startTime,terminationTime,course,userList} = exam;
    const {apply} = userList.find(e=>e.id === idUser);
    if(!exam.active || !apply)return(
        <div className="">finish exam</div>
    )
    else return ( 
    <div className="textExam pt-5">
        <div className="container">
            <TypeQustion token={token} course={course} idExam={idExam} idUser={idUser} update={update} questions={questions}/>
            <Timer update={update} setUpdate={setUpdate} startTime={startTime} terminationTime={terminationTime} />
        </div>
    </div>
);
}else return (
    <div className="loaderExam">
        <div className="loader-circle"></div>
        <span className="loader-text">Loading...</span>
    </div>
)
}
export default Exam;