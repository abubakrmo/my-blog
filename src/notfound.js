import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="notfound">
            <h1>Page not found</h1>
            <Link to={'/'}>Back to homepage...</Link>
        </div>
     );
}
 
export default NotFound;