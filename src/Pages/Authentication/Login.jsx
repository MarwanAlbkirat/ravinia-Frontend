import { useState } from "react";
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {  toast ,ToastContainer } from 'react-toastify';
import { validation } from "../../Utils/Validation";
import {authenticationLogin} from '../../Store';
import Loder from './Loder/Loder';
import Input from "../../Components/Input/Input";
const Login = () => {
    const [email , setEmail]                   = useState('');
    const [password , setPassword]             = useState('');

    const disPatch = useDispatch();

    const {isLoding} = useSelector(state=> state.authentication);
   
    function handleSubmit(event){
        
        event.preventDefault();
        // validation
        const objValidate = [
            { name:"Email"           , input:email          ,min:5 , max:100 },
            { name:"Password"        , input:password       ,min:8 , max:100 }
        ];
        try {
            validation(objValidate);
        } catch (error) {
            return toast.error(error.message);
        }
        // validation
        disPatch(authenticationLogin({email, password}));
        setPassword('');
        setEmail('');
    }
return (
    <div className="container">
        <ToastContainer/>
        <div className="formAuth">
            <form onSubmit={handleSubmit}>
                {isLoding && (<Loder/>)}
                <h2 className="text-capitalize text-center text-white">login now</h2>
                <Input name={"Login-input-email"}    id={"Login-input-email"}    type={"text"} state={email}    stateFunction={setEmail}    className={"form-control"} icon={"fa-solid fa-envelope"} label={"email"}/>
                <Input password name={"Login-input-password"}    id={"Login-input-password"}   state={password}    stateFunction={setPassword}    className={"form-control"} label={"password"}/>
                <button className="text-capitalize btn btn-primary w-100 mt-3 mb-3">login</button>
            </form>
            <div className="linksLogin d-flex flex-column pt-2">
                <Link className="link text-capitalize p-1" to="/forgot-password" >forgot your password?</Link>
                <Link className="link text-capitalize p-1" to="/register" >do you not have account? register now</Link>
            </div>
        </div>
    </div>
);
}
export default Login;