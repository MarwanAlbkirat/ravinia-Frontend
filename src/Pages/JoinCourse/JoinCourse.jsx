import {useSelector, useDispatch } from "react-redux";
import {  getAllCourse, getSpecificUser } from '../../Store';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import JoinCourseList from "./JoinCourseList";
const JoinCourse = () => {
    const {user} = useSelector(state=>state.authentication);
    const {isLoding,course} = useSelector(state=>state.course);
    const {data:{followUpCourse}} = useSelector(state=>state.users);
    const [onUpdait , setOnUpdatit ] = useState(false);
    const disPatch = useDispatch();
    const {token ,_id:id } = user;
    useEffect(()=>{
        disPatch(getAllCourse({token}));
        disPatch(getSpecificUser({token,id}));
      },[onUpdait]);
      let result = null;
      if(course && followUpCourse){
       result = course.map((element,index)=>{
            return <JoinCourseList setOnUpdatit={setOnUpdatit} onUpdait={onUpdait} followUpCourse={followUpCourse} id={id} element={element} token={token} index={index} key={element._id} />
        });
      }
    return ( 
        <div className="container">
            <ToastContainer/>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">name</th>
                        <th scope="col">picture</th>
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody>
                    {result ? result : <></>}
                </tbody>
            </table>
        </div>
     );
}
 
export default JoinCourse;