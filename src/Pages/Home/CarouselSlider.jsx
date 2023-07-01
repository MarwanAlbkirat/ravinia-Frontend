import { useState } from "react";
import { Link } from 'react-router-dom';
const SliderHome = ({slides}) => {
  const [currentIndex,setCurrentIndex] = useState(0);
  function previous(){
    const isFirstSlide = currentIndex===0;
    const newIndex = isFirstSlide ?slides.length -1 : currentIndex -1;
    setCurrentIndex(newIndex);
  }
  function next(){
    const isLastSlide =currentIndex=== slides.length -1;
    const newIndex = isLastSlide ?0 : currentIndex +1;
    setCurrentIndex(newIndex);
  }
  function goToSlide(slideIndex){
    setCurrentIndex(slideIndex);
  }
  const slideStyle = {
    width:"100%",
    height:"100%",
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundImage:`url(${slides[currentIndex].image})`,
  };
  const sliderStyle = {
    height:"100%",
    
    position:"relative",

  };
return (            
      <div style={sliderStyle}>
        <div className="leftArrowStyles" onClick={previous}><i className="fa-solid fa-arrow-left"></i></div>
        <div className="RightArrowStyles" onClick={next}><i className="fa-solid fa-arrow-right"></i></div>
        <div style={slideStyle} className="">
          <div style={{width:"80%",display:"flex",margin:"0 auto",padding:"1rem"}} className="">
          <Link className="btn btn-primary" to="/register" style={{padding:"7px", margin:"0 1rem", color:"white",textDecoration:"none"}}>Register<i className="fa-solid fa-user-plus"></i></Link>
          <Link className="btn btn-primary" to="/login" style={{padding:"7px", margin:"0 1rem", color:"white",textDecoration:"none"}}>Login<i className="fa-solid fa-right-to-bracket"></i></Link>
          </div>

        </div>
        <div className="parent-dotsSlider">
          {slides.map((slide,index)=>(

            <div key={index} onClick={()=> goToSlide(index)} className="dotSlider"><i className="fa-solid fa-circle"></i></div>
            ))}
        </div>
      </div>
)}
export default SliderHome;