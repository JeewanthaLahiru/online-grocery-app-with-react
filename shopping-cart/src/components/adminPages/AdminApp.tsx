import React from "react";
import { Route} from "react-router-dom"
import AdminProfile from "./adminProfile/AdminProfile";
import AdminHeader from "./adminHeader/AdminHeader";

const AdminApp:React.FC = () => {
    return(
        <React.Fragment>
            <AdminHeader/>
            <Route path={"/"} exact component={AdminProfile} />
        </React.Fragment>
    )
}

export default AdminApp;