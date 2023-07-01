import { useDispatch } from "react-redux";
import { insertUserToCourse, removeFromCourse } from "../../Store";
const JoinCourseList = ({followUpCourse,element,index,id,token,setOnUpdatit,onUpdait}) => {
    const disPatch = useDispatch();
    const courseId = element._id;
    const coutrseUser = followUpCourse.find(e=>e._id === element._id)
    function join(){
        if(coutrseUser){
            disPatch(removeFromCourse({token,courseId})).then(e=>setOnUpdatit(!onUpdait));
        }
        else{
            disPatch(insertUserToCourse({token,courseId})).then(e=>setOnUpdatit(!onUpdait));
        }
    }
    if(element.creator === id)return;
    return (    
            <tr className="course">
                <td>{element?.nameCourse}</td>
                <td><img src={element?.CoursePhoto?.url} alt="courseImage" /></td>
                <td>{coutrseUser ?<button onClick={join} className="btn btn-danger">Leave Now</button>:<button onClick={join} className="btn btn-success">Join Now</button>}</td>
            </tr>
     );
}
export default JoinCourseList;