import TrueFalse from  './TrueFalse';
import MultipleChoice from  './MultipleChoice';
import Blank from  './Blank';
import { useEffect, useState } from 'react';
import { solveExam , endExamForUser} from '../../../Store';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
const TypeQustion = ({token,course,idExam,update,questions,idUser}) => {
    const navigate =   useNavigate();
    const disPatch = useDispatch();
    const [solve , setSolve] = useState([]);
    const [counter,setCounter] = useState(0);
    const [type,setType] = useState('');
    if(update){
        disPatch(solveExam({solve,token})).then(e=>{
            disPatch(endExamForUser({idExam,token}))
        }).then(e=>{
            navigate(`/preview-exam/${idUser}`,{
                state: {
                    token: token,
                    idExam:idExam,
                    questions:questions,
                    solve:solve,
                }
              });
        });
    }
    useEffect(()=>{
        setType(Object.keys(questions[counter].questionType.typeQuestion)[0]);
    },[]);
    function handleSubmit(event){
        event.preventDefault();
        swal({
            title: "Are You Sure?",
            text: "Do You Want Finish This Exam Now!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willSubmite) => {
            if (willSubmite) {
                disPatch(solveExam({solve,token})).then(e=>{
                    disPatch(endExamForUser({idExam,token}))
                }).then(e=>{
                    navigate(`/preview-exam/${idUser}`,{
                        state: {
                            token: token,
                            idExam:idExam,
                            questions:questions,
                            solve:solve,
                        }
                      });
                });
        } else {
              swal("you still in the exam !");
            }
          });
        
    }
    function next(){
        if(counter === questions.length -1)return;
        setCounter(counter + 1);
        setType(Object.keys(questions[counter +1].questionType.typeQuestion)[0]);
    }
    function previous(){
        if(counter < 1)return;
        setCounter(counter - 1);
        setType(Object.keys(questions[counter -1].questionType.typeQuestion)[0]);
    }
    return ( 
        <div className="">

<div className="d-flex justify-content-center row">
        <div className="col-md-10 col-lg-10">
            <div className="border">
                <div className="question bg-white p-3 border-bottom">
                    <div className="d-flex flex-row justify-content-between align-items-center mcq">
                        <h4>Quiz</h4><span>({questions[counter].mark} of 20)</span></div>
                </div>
                <form onSubmit={handleSubmit}>
                {type === "True False" ? <TrueFalse course={course} idExam={idExam} idUser={idUser} solve={solve} setSolve={setSolve} questions={questions[counter]} /> :
                type === "Multiple Choice" ? <MultipleChoice course={course} idExam={idExam} idUser={idUser} solve={solve} setSolve={setSolve} questions={questions[counter]}/> :
                type === "Fill Gaps" ?<Blank course={course} idExam={idExam} idUser={idUser} solve={solve} setSolve={setSolve} questions={questions[counter]}/> :
                <></>
                }
                <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
                    <button onClick={previous} className="btn btn-primary d-flex align-items-center btn-danger" type="button"><i className="fa fa-angle-left mt-1 mr-1"></i>&nbsp;previous</button>
                    <button onClick={next} className="btn btn-primary border-success align-items-center btn-success" type="button">Next<i className="fa fa-angle-right ml-2"></i></button>
                </div>
                <button className='w-100 btn btn-primary'>submit</button>
                </form>
            </div>
        </div>
    </div>
        </div>
     );
}
 
export default TypeQustion;