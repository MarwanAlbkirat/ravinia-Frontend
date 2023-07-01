import './Input.css'
import { useState } from "react";
const Input = (information) => {
    const [lock , setLock] =useState(true);
    return ( 
        <div className="">
            {information.label && <label className={information.classLabel ? information.classLabel :"link"} htmlFor={information.name} >{information.label}</label>}
            <div className="input">
            <input
            type={information.type ? information.type :lock ? 'password' : "text"}
            name={information.name}
            id={information.id}
            value={information.state}
            className={information.className}
            onChange={(event)=>information.stateFunction(event.target.value)}
             />
             {information.password && <i onClick={()=> setLock(!lock) } className={lock ? 'pass fa-solid fa-lock' : "pass fa-solid fa-unlock" }></i>}
             {information.icon && <i className={information.icon}></i>}
        </div>
        </div>
     );
}
export default Input;