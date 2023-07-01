import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer,toast } from "react-toastify";
import Loder from './Loder/Loder';
import { validation } from "../../Utils/Validation";
import { authenticationForgotPassword } from "../../Store";
import Input from "../../Components/Input/Input";
const ForgotPassword = () => {
    const disPatch = useDispatch();
    const {isLoding} = useSelector(state=> state.authentication);
    const [email , setEmail]= useState('');
    function handleSubmit(event){
        event.preventDefault();
        try {
            validation([{name:"email",input:email,min:5,max:100}]);
        } catch (error) {
            return toast.error(error.message);
        }
        disPatch(authenticationForgotPassword({email}));
        setEmail('');
    }
return (
    <div className="container">
        <ToastContainer/>
        <div className="formAuth">
            <form onSubmit={handleSubmit}>
                {isLoding && (<Loder/>)}
                <h2 className="text-capitalize text-center text-white">forgot password</h2>
                <Input name={"ForgotPassword-input"}    id={"ForgotPassword-inputl"}    type={"text"} state={email}    stateFunction={setEmail}    className={"form-control"} icon={"fa-solid fa-envelope"} label={"email"}/>
                <button className="text-capitalize btn btn-primary w-100 mt-3 mb-3">send</button>
            </form>
        </div>
    </div>
);
}
export default ForgotPassword;