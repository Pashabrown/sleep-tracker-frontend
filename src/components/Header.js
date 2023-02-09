import {Link} from "react-router-dom"
import image1 from "./Depositphotos_188910560_XL.jpg"
function Header(props){
    return <nav className="nav">
        <Link to="/">
            <div>Sleep-Tracker App</div>
        </Link>
        <div><img style={{ width: 500, height: 300 }} src={image1} alt="sleepimage" /></div>
    </nav>
}
export default Header