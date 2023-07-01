import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { removeFromCourse } from "../../../Store";
const TrainingCourseList = ({handleUpdate,setHandleUpdate,token,element}) => {
const courseId = element._id;
const {id} =  useParams();
    const {leaveCourse,isLoding} = useSelector(state=>state.course)
    const disPatch = useDispatch();
    async function removeUser(){
        swal({
            title: "Are you sure?",
            text: "do you want leave this course!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
          disPatch(removeFromCourse({courseId,token})).then(e=>setHandleUpdate(!handleUpdate));
        } else {
              swal("you still in this course !");
            }
          });
    }
    if(element.creator !== id){
        return ( 
            <div className="col-md-3">
                <i onClick={removeUser} className="fa-solid fa-arrow-right-from-bracket"></i>
            <Link className="" to={`/course/${element._id}`} >
            <img className="card-img-top" src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE-1200x800.jpg" alt="Card" />
            <div className="card-body border-1 border-black border">
                <p className="card-text">{element.nameCourse}</p>
            </div>
            </Link>
            </div>
 );
    }else return <></>
 
}
 
export default TrainingCourseList;