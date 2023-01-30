import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div>
            <div>Uh Oh!!! Page not found 😓😓</div>
            <p>Back to <Link to="/">Home Page</Link> </p>
        </div>
     );
}
 
export default NotFound;