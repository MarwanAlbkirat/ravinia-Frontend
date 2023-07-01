import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png';
const Logo = () => {
    return (
       <Link to="/"> <div className="logo">
            <img className='img-fluid' src={logo} alt="logo" />
        </div>
        </Link>
    );
}
export default Logo;