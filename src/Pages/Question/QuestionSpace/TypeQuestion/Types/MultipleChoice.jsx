const MultipleChoice = ({firstChoice,setFirstChoice,secoundChoice,setSecoundChoice,thirdChoice,setThirdChoice,foruthChoice,setForuthChoice,setTrueValue}) => {
    function handlefirstChoice(event){
        setFirstChoice(event.target.value);
    }
    function handleSecoundChoice(event){
        setSecoundChoice(event.target.value);
    }
    function handleThirdChoice(event){
        setThirdChoice(event.target.value);
    }
    function handleForuthChoice(event){
        setForuthChoice(event.target.value);
    }
    function handleTrueValue(event){
        setTrueValue(event.target.value);
    }
return ( 
    <div className="multiple-choice h-100 d-flex justify-content-between flex-column">
        <h4 className="text-center">Fill in the fields and select the correct answer</h4>
            <div className="d-flex justify-content-around">
                <input onChange={handlefirstChoice} className="ml-2 mr-2 form-control" type="text" />
                <input onChange={handleTrueValue} value={firstChoice} className="ml-2 mr-2 " type="radio" name="multiple" />
            </div>
            <div className="d-flex justify-content-around">
                <input onChange={handleSecoundChoice} className="ml-2 mr-2 form-control" type="text" />
                <input onChange={handleTrueValue} value={secoundChoice} className="ml-2 mr-2 " type="radio" name="multiple" />
            </div>
            <div className="d-flex justify-content-around">
                <input onChange={handleThirdChoice} className="ml-2 mr-2 form-control" type="text" />
                <input onChange={handleTrueValue} value={thirdChoice} className="ml-2 mr-2 " type="radio" name="multiple" />
            </div>
            <div className="d-flex justify-content-around">
                <input onChange={handleForuthChoice} className="ml-2 mr-2 form-control" type="text" />
                <input onChange={handleTrueValue} value={foruthChoice} className="ml-2 mr-2 " type="radio" name="multiple" />
            </div>
    </div>
 );
}
export default MultipleChoice;