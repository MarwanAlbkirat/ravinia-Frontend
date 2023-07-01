import React, { useEffect, useState } from 'react';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import DateTimePicker from 'react-datetime-picker';
import Input from '../../../Components/Input/Input';
import { useDispatch, useSelector } from "react-redux";
import { editExam, getExam } from '../../../Store';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
const EditExam = () => {
    const {user:{token}}=useSelector(state=>state.authentication);
    const {isLoding,exam}=useSelector(state=>state.exam);
    const {id} = useParams();
    const disPatch = useDispatch();
    useEffect(()=>{
        disPatch(getExam({id,token}))
    },[]);
    const [imageFile , setImageFile]           = useState(exam?.examPhoto?.url);
    const [startTime, setStartTime] = useState(exam?.startTime);
    const [terminationTime, setTerminationTime] = useState(exam?.terminationTime);
    const [name , setName]             = useState(exam?.name);
    function handleChangeTerminationTime(event){
        setTerminationTime(event);
  }
  function handleChangestartTime(event){
      setStartTime(event)
  }
  function handleSubmit(event){
    event.preventDefault();
    // validation
    const exam1 ={
        startTime : startTime === exam.startTime ? false : startTime ,
        terminationTime : terminationTime === exam.terminationTime ? false : terminationTime ,
        name : name === exam.name? false : name,
    }
    const asArray = Object.entries(exam1);
    let result =asArray.filter(([key, value])=>{
        return value !== false;
    });
    result = Object.fromEntries(result);
    if(Object.keys(result).length===0){return toast.error("please make at least one edit");}
    const formData = new FormData();
    formData.append("image",imageFile);
    formData.append('data', JSON.stringify(result));
    disPatch(editExam({token,formData,id}));
}
if(isLoding && !exam)return( 
    <div className="loaderExam">
    <div className="loader-circle"></div>
    <span className="loader-text">Loading...</span>
</div>
)
if(exam){
    return ( 
        <div className="CreateExam container">
        <ToastContainer/>
        <form onSubmit={handleSubmit}>

        <div className="image-update">
        <label htmlFor="ipload-image-user">
        <img src={imageFile} alt="exam-img" />
        <input id='ipload-image-user' name='ipload-image-user' className="d-none user-image border w-100 p-3" type="file" onChange={(e)=>setImageFile(e.target.files[0])} />
        </label>
    </div>            

        <Input name={"exam-name"} id={"exam-name"} type={"text"} state={name} stateFunction={setName} className={"form-control"} icon={"fa-solid fa-user"} label={"exam name"}  classLabel={"text-dark"}   />
        <div className="d-flex justify-content-between align-items-center mt-3 mb-3">
       <div className="time-start d-flex flex-column w-50 p-2">
            <label htmlFor="time-start  ">time start</label>
            <DateTimePicker onChange={handleChangestartTime} value={startTime} />
        </div>
        <div className="TerminationTime d-flex flex-column w-50 p-2">
            <label htmlFor="TerminationTime  ">TerminationTime</label>
            <DateTimePicker onChange={handleChangeTerminationTime} value={terminationTime} />
        </div>
       </div>
            <button className='loder-btn btn btn-primary w-100 mt-3 mb-3'>send {isLoding && <span className="loaderProfile-image"></span>}</button>
        </form>
    </div>
     );
}}
 
export default EditExam;