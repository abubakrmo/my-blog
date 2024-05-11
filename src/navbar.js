import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div className="navbar">
            <h2>My blog</h2>
            <div className="links">
                <Link to={'/'}>Home</Link>
                <Link to={'/createblog'}>Create blog</Link>
            </div>
        </div>
    );
}
 
export default Navbar;