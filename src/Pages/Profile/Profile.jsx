import {useSelector, useDispatch } from "react-redux";
import {  getSpecificUser } from '../../Store';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import UpdateProfile from "./UpdateProfile";
import OwnedCourse from "./OwnedCourses/OwnedCourses";
import TrainingCourse from "./TrainingCourses/TrainingCourses";
import CreateCourse from "./CreateCourse/CreateCourse";
import UpdateCourse from "./CreateCourse/UpdateCourse";

const Profilee = () => {
    const [handleUpdate , setHandleUpdate ]= useState(false);
    const [course , setCourse ]= useState({});
    const {isLoding,data,isLodingPhoto} = useSelector(state=>state.users);
    const {user:{token,_id:id}} = useSelector(state=>state.authentication);
    const disPatch = useDispatch();
    function onUpdait(course){
        setCourse(course);
    }
    useEffect(()=>{
      disPatch(getSpecificUser({token,id}));
    },[handleUpdate]);
    if(data){
        return ( 
            <div className="profile">
                <ToastContainer/>
                    <UpdateProfile isLodingPhoto={isLodingPhoto} token={token} id={id} data={data} handleUpdate={handleUpdate} setHandleUpdate={setHandleUpdate} isLoding={isLoding} />
                    <OwnedCourse onUpdait={onUpdait} handleUpdate={handleUpdate} setHandleUpdate={setHandleUpdate} isLoding={isLoding} token={token} data={data}/>
                    <TrainingCourse handleUpdate={handleUpdate} setHandleUpdate={setHandleUpdate} token={token} data={data}/>
                    <CreateCourse id={id} token={token} handleUpdate={handleUpdate} setHandleUpdate={setHandleUpdate}/>                    
                    <UpdateCourse course={course} token={token} handleUpdate={handleUpdate} setHandleUpdate={setHandleUpdate}/>
            </div>
        );
    }else return(<>loding.......</>)

}
 
export default Profilee;