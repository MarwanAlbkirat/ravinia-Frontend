import { Link } from "react-router-dom";
import { activeExam, deleteExam, startExamForUser } from "../../../Store";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
const ExamList = ({id:idUser ,token,setUpdate,update,exam,owned}) => {
  const disPatch = useDispatch();
  const {_id:id,userList} = exam;
  const check = userList?.find(e=>e.id === idUser);
  function setStart(){
    // add user to exam 
    if(check)return toast.error("you have already taken the exam");
    if(!exam.active)return toast.error("Wait for the moment to activate the exam");
      disPatch(startExamForUser({token,id})).then(e=>setUpdate(!update));
      localStorage.setItem("startExam",JSON.stringify(new Date().getTime() + ( new  Date(exam.terminationTime).getTime() -new  Date(exam.startTime).getTime() )));
  }
  function removeExam(){
    disPatch(deleteExam({token,id})).then(e=>setUpdate(!update));
  }
  function handleActive(){
    disPatch(activeExam({token,id})).then(e=>setUpdate(!update));
  }
    if(owned){
      return ( 
        <div className="card-exam border mt-2 mb-2 p-4">
          <ToastContainer/>
          <div className="row">
            <div className="image-exam col-4">
              <img src={exam?.examPhoto?.url} style={{width:"100%",height:"250px"}} alt="exam-pic"/>
            </div>
            <div style={{textAlign:"start"}} className="exam-detailes col-8">
              <div className="exam-name mt-1 mb-1 d-flex justify-content-between">
                <h6>Exam Name : {exam.name}</h6>
                <div className="actions d-felx align-items-center">
                <Link style={{textDecoration:"none"}} to={`/update-exam/${exam._id}`}> <i className="pl-2 pr-2 fa-solid fa-pen-nib"></i> </Link>
                  <i onClick={removeExam} style={{cursor:"pointer",color:"#007bff"}} className="pl-2 pr-2 fa-solid fa-trash"></i>
                  <label  className="pl-2 pr-2 switch">
                    <input onClick={handleActive} type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                </div>
                </div>
              <div className=" p-1 start-time d-flex align-items-center"      >
                <h6 style={{minWidth:"200px"}}>Start Time</h6>
                <h6>{new Date(exam.startTime).toLocaleDateString()}  - {new Date(exam.startTime).toLocaleTimeString()}</h6>
              </div>
              <div className=" p-1 termination-time d-flex align-items-center">
                <h6 style={{minWidth:"200px"}}>Termination Time</h6>
                <h6>{new Date(exam.terminationTime).toLocaleDateString()}  -  {new Date(exam.terminationTime).toLocaleTimeString()}</h6>
              </div>
              <div className="p-1 active"><h6>Status  :{exam.active ? "active" : "inactive"}</h6></div>
              <Link to={`/question/${exam._id}`} className="btn btn-success w-100">Create Questions <i className="fa-solid fa-question"></i></Link>
            </div>
          </div>
        </div>
     );
    }
    
    else {
      return ( 
        <Link onClick={setStart} className="col-4" to={exam.active && exam.questions.length > 0 && !check ? `/exam/${exam._id}` : "#"} >
            <div  className="flip-card ">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="d-flex justify-content-around align-items-center">
                          <h3 style={{backgroundColor:"white",color:"black",margin:"0",padding:"12px",width:"100%",textTransform:"capitalize"}} className="">{exam.name} </h3>
                          <h3 style={{padding:"12px"}} className={!exam.active ? "bg-danger text-white m-0" : "bg-primary text-white m-0" }>Active</h3>
                      </div>
                      <img src={exam?.examPhoto?.url} style={{width:"100%",height:"250px"}} alt="Avatar" />
                    </div>
                    <div className="flip-card-back h-100">
                    <h1>{exam.name}</h1> 
                      <div className="d-flex align-items-center justify-content-around">
                        <p>Start Time  {new Date(exam.startTime).toLocaleDateString()} : {new Date(exam.startTime).toLocaleTimeString()}</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-around">
                        <p>Termination Time  {new Date(exam.terminationTime).toLocaleDateString()} : {new Date(exam.terminationTime).toLocaleTimeString()}</p>
                      </div>
                      <p>{exam.active ? "Active" : "Inactive"}</p>
                      <div className="">Count Of Questions : {exam.questions.length}</div>
                    </div>
                  </div>
                </div>
            </Link>
     );
    }
}
 
export default ExamList;