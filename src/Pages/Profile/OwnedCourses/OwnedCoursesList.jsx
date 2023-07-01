import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { deleteCourse } from "../../../Store";
const OwnedCourseList = ({onUpdait,element,token,setHandleUpdate,handleUpdate}) => {
    const disPatch = useDispatch();
    const {_id:courseId} = element;
    function handleDelete(){
        swal({
            title: "Are you sure?",
            text: "do you want leave this course!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                disPatch(deleteCourse({token,courseId})).then(e=>setHandleUpdate(!handleUpdate));
        } else {
              swal("you still in this course !");
            }
          });
    }
    let result = null;
    function handleUpdatee(){
        onUpdait(element);
    }
    return ( 
                <div className=" col-md-3 col-sm-4 col-6 mb-5 mt-5 border-0">
                    <div className="icons">
                        <i onClick={handleDelete} className="fa-solid fa-trash"></i>
                        <i onClick={handleUpdatee} data-toggle="modal" data-target="#updateCoursee" className="fa-solid fa-pen-nib"></i>
                    </div>
                    <Link to={`/course/${element._id}`} >
                    <img className="card-img-top" src={element?.CoursePhoto.url} alt="Card" />
                    <div className="card-body border-1 border-black border">
                        <p className="card-text">{element.nameCourse}</p>
                    </div>
                    </Link>
                    {result ? result : <></>}
                </div>
     );
}
 
export default OwnedCourseList;