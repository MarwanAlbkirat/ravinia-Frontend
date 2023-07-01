const TrueFalse = ({solution}) => {
return ( 
    <div className="">
        <div className="d-flex justify-content-around align-items-center ">
                    
                    <div className="">
                        {solution === 'true' && <i className="fa-solid fa-check pr-3 pl-3"></i>}
                        <label htmlFor="truefalse">true</label>
                        <input type="radio" name="truefalse" value={true}  />
                    </div>
                    <div className="">
                        {solution === 'false' && <i className="fa-solid fa-check pr-3 pl-3"></i>}
                        <label htmlFor="truefalse">false</label>
                        <input type="radio" name="truefalse" value={false}  />
                    </div>
                </div>
    </div>
 );
}
 
export default TrueFalse;