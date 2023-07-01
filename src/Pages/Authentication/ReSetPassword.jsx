import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loder from "./Loder/Loder";
import { ToastContainer,toast } from "react-toastify";
import { validation } from "../../Utils/Validation";
import { authenticationReSetPassword } from "../../Store";
import swal from "sweetalert";
import Input from "../../Components/Input/Input";
const ResetPassword = () => {
    const navigate = useNavigate();
    const params = useParams();
    const {isLoding,resetPasswordMessage} = useSelector(state=> state.authentication);
    const disPatch = useDispatch();
    const [password , setPassword]= useState('');
    const [repeatPassword , setRepeatPassword]= useState('');
    function handleSubmit(event){
        event.preventDefault();
        const passwords = {
            repeatPassword,
            password,
        }
        const objValidate = [
            { name:"password"       , input:password       ,min:8 , max:100 },
            { name:"repeatPassword" , input:repeatPassword ,min:8 , max:100 }
        ];
        try {
            validation(objValidate);
        } catch (error) {
            return toast.error(error.message);
        }
        disPatch(authenticationReSetPassword({passwords,params}));
        setPassword('');
        setRepeatPassword('');
    }
    if(resetPasswordMessage){
        swal({
            title:resetPasswordMessage.message,
            icon:"success",
        }).then(isOk=>{
            navigate("/login");
        })
    }
return (
    <div className="container">
        <ToastContainer/>
        <div className="formAuth">
            <form onSubmit={handleSubmit}>
                {isLoding && (<Loder/>)}
                <h2 className="text-capitalize text-center text-white">reset password</h2>
                <Input password name={"ResetPassword-input-password"}    id={"ResetPassword-input-password"}   state={password}    stateFunction={setPassword}    className={"form-control"} label={"password"}/>
                <Input password name={"ResetPassword-input-repeatPassword"}    id={"ResetPassword-input-repeatPassword"}   state={repeatPassword}    stateFunction={setRepeatPassword}    className={"form-control"} label={"repeat Password"}/>
                <button className="text-capitalize btn btn-primary w-100 mt-3 mb-3">reset</button>
            </form>
        </div>
    </div>
);
}
export default ResetPassword;