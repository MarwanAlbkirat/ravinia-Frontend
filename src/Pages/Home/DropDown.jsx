import { useState } from 'react';
import { useDispatch } from "react-redux";
import {deleteUser, logoutUser } from '../../Store';
import { Link } from 'react-router-dom';
const DropDown = ({token,id,data}) => {
    const [dropdown , setDropDown] = useState(true);
    const disPatch = useDispatch();
    function toggleDropDown(){
        setDropDown(!dropdown);
    }
    function logout(){
        disPatch(logoutUser());
    }
    function deleteAcoount(){
        disPatch(deleteUser({token,id}));
        logout();
    }
return (
    <ul className='position-relative'>
        <div className=" position-absolute dropdown text-capitalize">
            <div onClick={toggleDropDown} className="text-white d-flex align-items-center mt-1 mb-1">
                <i className="pl-2 pr-2 fa-solid fa-arrow-down"></i>
                <div className="name-user">welcome {data?.username}</div>
                <div className="img-user pl-2 pr-2"><img src={data?.profilePhoto?.url} alt="user-img" /></div>
            </div>
            <div className="childbox ">
                <Link to={`/profile/${id}`}  className={dropdown ? " d-none" : "d-block text-white pt-1 pb-1 pl-5"}> profile</Link>
                <div  className={dropdown ? " d-none" : "d-block text-white pt-1 pb-1 pl-5"}  onClick={deleteAcoount}>delete account</div>
                <div  className={dropdown ? " d-none" : "d-block text-white pt-1 pb-1 pl-5"}  onClick={logout}>logout</div>
            </div>
        </div>
    </ul>
);
}
export default DropDown;