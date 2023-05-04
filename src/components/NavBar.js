import { NavLink } from "react-router-dom";
import "../css/NavBar.css"
function NavBar() {

    //I passed <a> tag to the NavLink className because I had already styled the <a> tag
    return (
        <>
            <nav id="nav" className="container">
                <NavLink className={"a"} to="/students" end>
                    Students
                </NavLink>
                <NavLink className={"a"} to="/response" end>
                    Response
                </NavLink>
                <NavLink className={"a"} to="/settings" end>
                    Settings
                </NavLink>
                {/* <a href="">Students</a>
                <a href="">Responses</a>
                <a href="">Settings</a> */}
            </nav>

        </>
    )
}
export default NavBar;