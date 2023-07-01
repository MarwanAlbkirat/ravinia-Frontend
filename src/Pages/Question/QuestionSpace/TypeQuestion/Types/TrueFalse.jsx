const TrueFalse = ({trueFalseQuestion,setTrueFalseQuestion}) => {
    function trueFalseChange(event){
        setTrueFalseQuestion(event.target.value);
    }
return ( 
    <div className="true-false d-flex flex-column justify-content-between h-100">
        <h4 className=" text-capitalize text-center"> Select true false question</h4>
        <div className="">
            <input type="radio" name="trueFalse" value={false} id="false" onChange={trueFalseChange} />
            <label htmlFor="false">false</label>
        </div>
        <div className="">
            <input type="radio" name="trueFalse" value={true} id="true" onChange={trueFalseChange} />
            <label htmlFor="true">true</label>
        </div>
    </div>
 );
}
export default TrueFalse;