import { NavLink, Outlet } from "react-router-dom";
const HelpLayout = () => {
    return ( 
        <div className="help-layout">
            <h2>Website Help</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, velit?</p>
            <nav>
                <NavLink to="faq">View the FAQ's</NavLink>
                <NavLink to="contact">Contact</NavLink>
            </nav>
            <Outlet />
        </div>
     );
}
 
export default HelpLayout;