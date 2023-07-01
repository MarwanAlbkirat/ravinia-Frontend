import { Link ,useLocation} from "react-router-dom";
import Logo from "../Logo/Logo";
const Header = () => {
    const location = useLocation();
    if(location.pathname !== "/"){
        return(
            <header className="header">
            <Logo/>
            <ul>
                <Link className="link" to="/register">register</Link>
                <Link className="link" to="/login"   >login   </Link>
            </ul>
        </header>
        )
    }

}
export default Header;