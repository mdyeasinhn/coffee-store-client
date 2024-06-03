import { NavLink } from "react-router-dom";


const Headers = () => {
    return (
        <div>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/signUp'>Sign UPp</NavLink>
            
        </div>
    );
};

export default Headers;