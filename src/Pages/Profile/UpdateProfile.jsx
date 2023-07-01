import { useDispatch } from 'react-redux';
import Input from '../../Components/Input/Input';
import { editUser,uploadUserPhoto } from '../../Store';
import { useState } from 'react';
const UpdateProfile = ({isLodingPhoto,id,token,isLoding,data,handleUpdate,setHandleUpdate}) => {
    const disPatch = useDispatch()
    const [imageFile , setImageFile]           = useState(null);
    const [username , setUserName]             = useState(data.username);
    const [email , setEmail]                   = useState(data.email);
    const [password , setPassword]             = useState('');
    const [repeatPassword , setRepeatPassword] = useState('');
    function handleSubmit(event){
        event.preventDefault();
        const body = {
            username,
            email,
            password,
            repeatPassword,
        };
        disPatch(editUser({body,token,id})).then(e=> setHandleUpdate(!handleUpdate));
    }
    function handleSubmitPhoto(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append("image",imageFile);
        disPatch(uploadUserPhoto({formData,token})).then(e=> setHandleUpdate(!handleUpdate));
       
    }
return (         
    <div className="update-profile container">
        <form onSubmit={handleSubmitPhoto} className='mt-5'>
            <div className="image-update">
                <label htmlFor="ipload-image-user">
                <img src={imageFile ? URL.createObjectURL(imageFile) :data?.profilePhoto?.url} alt="user-img" />
                <input id='ipload-image-user' name='ipload-image-user' className="d-none user-image border w-100 p-3" type="file" onChange={(e)=>setImageFile(e.target.files[0])} />
                <button className='border-0'>{isLodingPhoto ? <span className="loaderProfile-image"></span> : <i className="fa-solid fa-image"></i>} </button>
                </label>
            </div>            
        </form>
        <form onSubmit={handleSubmit}>
            <Input name={"edit-input-username"} id={"edit-input-username"} type={"text"} state={username} stateFunction={setUserName} className={"form-control"} icon={"fa-solid fa-user"} label={"user name"}  classLabel={"text-dark"}   />
            <Input name={"edit-input-email"}    id={"edit-input-email"}    type={"text"} state={email}    stateFunction={setEmail}    className={"form-control"} icon={"fa-solid fa-envelope"} label={"email"} classLabel={"text-dark"}/>
            <Input password name={"edit-input-password"}    id={"edit-input-password"}   state={password}    stateFunction={setPassword}    className={"form-control"} label={"password"} classLabel={"text-dark"}/>
            <Input password name={"edit-input-repeatPassword"}    id={"edit-input-repeatPassword"}   state={repeatPassword}    stateFunction={setRepeatPassword}    className={"form-control"} label={"repeat Password"} classLabel={"text-dark"}/>
            <button className='btn btn-success w-100 mt-3 mb-3'>Update Profile {isLoding && <span className="loaderProfile"></span>}</button>
        </form>
    </div> 

);
}
 
export default UpdateProfile;