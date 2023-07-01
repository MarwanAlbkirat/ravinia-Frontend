const Blank = ({Blank,setBlank}) => {
    function handleChange(event){
        setBlank(event.target.value)
    }
return ( 
    <div className="blank-question">
        <h4 className="text-center mt-2 mb-2">Please write the correct answer, knowing that letters and spaces are sensitive</h4>
        <input name="blankq" id="blankq" className="form-control " type="text" onChange={handleChange} value={Blank} />
    </div>
);
}
export default Blank;