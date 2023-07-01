import { useState } from "react";
import Input from '../../../Components/Input/Input';
import { useDispatch } from "react-redux";
import { createCourse } from "../../../Store";
const CreateCourse = ({setHandleUpdate,handleUpdate,token,id}) => {
    const disPatch = useDispatch();
    const [nameCourse , setNameCourse] = useState('');
    function handleSubmit(event){
        event.preventDefault();
        disPatch(createCourse({token,nameCourse})).then((e)=>setHandleUpdate(!handleUpdate));
    }
return (
    <div className="modal fade" id="createcourse" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                <form onSubmit={handleSubmit}>
                    <Input name={"createcourse-input"} id={"createcourse-input"} type={"text"} state={nameCourse} stateFunction={setNameCourse} className={"form-control"} icon={"fa-regular fa-bookmark"} label={"course name"} classLabel={"text-dark"}    />
                    <button className="btn btn-primary w-100 mt-3 mb-3">send</button>
                </form>
                </div>
            </div>
        </div>
    </div>
);
}
export default CreateCourse;