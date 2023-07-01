import { useLocation } from 'react-router-dom'
import SliderImage from '../../Images/slider.webp';
const Slider = () => {
    const location = useLocation();
    if(location.pathname !== "/"){
        return(
            <div  className='slider'>
            <img alt='slider' src={SliderImage}/>
        </div>
        )
    }

}
export default Slider;