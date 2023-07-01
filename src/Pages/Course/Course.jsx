import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSpecificCourse, getSpecificUser} from '../../Store';
import Exam from './Exam/Exam';
const Course = () => {
    const [update,setUpdate] = useState(false);
    const {user} = useSelector(state=>state.authentication);
    const { specificCourse} = useSelector(state=>state.course);
    const { data} = useSelector(state=>state.users);

    const {token,_id:id} = user;
    const {id:idCourse} = useParams();
    const disPatch = useDispatch();
    useEffect(()=>{
        disPatch(getSpecificCourse({idCourse,token}));
    },[update]);
    useEffect(()=>{
        disPatch(getSpecificUser({id,token}))
    },[]);
    if(specificCourse !== null && data.length !==0){
            const {examList} = specificCourse;
    return ( 
        <div className="">
            <Exam id={id} setUpdate={setUpdate} update={update} token={token} data={data} idCourse={specificCourse._id} examList={examList}/>
        </div>
     );
}
}
export default Course;