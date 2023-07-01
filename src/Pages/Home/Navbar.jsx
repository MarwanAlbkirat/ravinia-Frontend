import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {  getSpecificUser } from './../../Store/';
import { useEffect, useState } from 'react';
import Logo from '../../Components/Logo/Logo';
import DropDown from './DropDown';
const Navber = () => {
    const disPatch = useDispatch();
    const {user} = useSelector(state=>state.authentication);
    const {isLoding,data} = useSelector(state=>state.users);
    const {token , _id:id} = user;
    useEffect(()=>{
      disPatch(getSpecificUser({token,id}));
    },[]);
return (
    <header className="header-profile">
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-7">
                    <ul className="d-flex justify-content-between align-items-center">
                       <Logo/>
                        <Link className='profile-links text-white' to={`/join-course`} >join course</Link>
                    </ul>
                </div>
                <div className="col-5">
                    <DropDown token={token} id={id} data={data}/>
                </div>
            </div>
        </div>
    </header>
);
}
export default Navber;