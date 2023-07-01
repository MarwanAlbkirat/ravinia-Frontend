import { useDispatch } from "react-redux";
import {activationEmail} from '../../Store';
import { Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";
const ActiveEmail = () => {
    const params = useParams();
    const disPatch = useDispatch();
    useEffect(()=>{
        disPatch(activationEmail({params}));
    },[]);
    return ( <div className="">
        <Navigate to="/login" />
    </div> );
}
export default ActiveEmail;