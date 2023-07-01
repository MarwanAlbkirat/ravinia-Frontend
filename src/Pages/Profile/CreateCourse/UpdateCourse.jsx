import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCourse, uploadCoursePhoto } from "../../../Store";
import Input from "../../../Components/Input/Input";
const UpdateCourse = ({course,token,setHandleUpdate,handleUpdate}) => {
    const [imageFile , setImageFile]           = useState(null);
    const [nameCourse , setNameCourse] = useState(course.nameCourse);
    const disPatch = useDispatch();
    const {_id:courseId} =course;
    function handleSubmit(event){
        event.preventDefault();
        if(nameCourse)disPatch(updateCourse({token,courseId,nameCourse})).then((e)=>{setHandleUpdate(!handleUpdate);});
    }
    function handleSubmitPhoto(event){
        event.preventDefault();
        const formData = new FormData()
        formData.append("image",imageFile);
        disPatch(uploadCoursePhoto({courseId,token,formData})).then((e)=>{setHandleUpdate(!handleUpdate);});
        setImageFile(null);
    }
    const isLodingPhoto = false;
    return (          
        <div className="modal fade" id="updateCoursee" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmitPhoto}>
                    <div className="image-update">
                <label htmlFor="pload-image-user">
                <img src={imageFile ? URL.createObjectURL(imageFile) : course?.CoursePhoto?.url } alt="course-img" />
                <input id='pload-image-user' name='pload-image-user' className="d-none user-image border w-100 p-3" type="file" onChange={(e)=>setImageFile(e.target.files[0])} />
                <button className='border-0'>{isLodingPhoto ? <span className="loaderProfile-image"></span> : <i className="fa-solid fa-image"></i>} </button>
                </label>
            </div> 
                    </form>
                <form onSubmit={handleSubmit}>
 
                    <Input name={"updatecourse-input"} id={"updatecourse-input"} type={"text"} state={nameCourse} stateFunction={setNameCourse} className={"form-control"} icon={"fa-regular fa-bookmark"} label={"course name"} classLabel={"text-dark"}    />
                    <button className="btn btn-primary w-100 mt-3 mb-3">send</button>
                </form>
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default UpdateCourse;