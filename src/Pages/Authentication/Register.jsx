import { useState } from "react";
import Input from '../../Components/Input/Input';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {  toast ,ToastContainer } from 'react-toastify';
import { validation } from "../../Utils/Validation";
import {authenticationRegister} from '../../Store';
import Loder from './Loder/Loder';
const Register = () => {
    const [username , setUserName]             = useState('');
    const [email , setEmail]                   = useState('');
    const [password , setPassword]             = useState('');
    const [repeatPassword , setRepeatPassword] = useState('');

    const disPatch = useDispatch();

    const {isLoding} = useSelector(state=> state.authentication);
   
    function handleSubmit(event){
        
        event.preventDefault();
        // validation
        const objValidate = [
            { name:"User Name"       , input:username       ,min:3 , max:60  },
            { name:"Email"           , input:email          ,min:5 , max:100 },
            { name:"Password"        , input:password       ,min:8 , max:100 },
            { name:"Repeat Password" , input:repeatPassword ,min:8 , max:100 }
        ];
        try {
            validation(objValidate);
        } catch (error) {
            return toast.error(error.message);
        }
        // validation
        disPatch(authenticationRegister({username, email, password,repeatPassword}));
        setRepeatPassword('');
        setPassword('');
        setEmail('');
        setUserName('');
    }
return (
    <div className="container">
        <ToastContainer/>
        <div className="formAuth">
            <form onSubmit={handleSubmit}>
                {isLoding && (<Loder/>)}
                <h2 className="text-capitalize text-center text-white">register now</h2>
                <Input name={"register-input-username"} id={"register-input-usernamee"} type={"text"} state={username} stateFunction={setUserName} className={"form-control"} icon={"fa-solid fa-user"} label={"user name"}    />
                <Input name={"register-input-email"}    id={"register-input-email"}    type={"text"} state={email}    stateFunction={setEmail}    className={"form-control"} icon={"fa-solid fa-envelope"} label={"email"}/>
                <Input password name={"register-input-password"}    id={"register-input-password"}   state={password}    stateFunction={setPassword}    className={"form-control"} label={"password"}/>
                <Input password name={"register-input-repeatPassword"}    id={"register-input-repeatPassword"}   state={repeatPassword}    stateFunction={setRepeatPassword}    className={"form-control"} label={"repeat Password"}/>
                <button className="text-capitalize btn btn-primary w-100 mt-3 mb-3">register</button>
            </form>
            <div className="linksLogin d-flex flex-column pt-2">
                <Link className="link text-capitalize p-1" to="/login" >do you have already account? login now</Link>
            </div>
        </div>
    </div>
    );
}
export default Register;