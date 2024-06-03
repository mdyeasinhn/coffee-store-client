import { Outlet } from "react-router-dom";
import Headers from "../Components/Headers";

const Main = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;