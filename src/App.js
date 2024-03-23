import './css/style.css'
import './css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/home/Home";
import UserProfile from "./pages/user/UserProfile";
import {useSelector} from "react-redux";
import Admin from "./pages/admin/Admin";
import UserTable from "./pages/admin/UserTable";
import CreateForm from "./pages/property/CreateForm";
import UserDetail from "./pages/user/UserDetail";
import PropertyDetail from "./pages/property/PropertyDetail";

function App() {
    let currentUser = useSelector(state => {
        return state.users.currentUser
    })
    return (
        <>
            <Routes>
                <Route path={''} element={<Home/>}/>
                <Route path={`login`} element={<Login/>}/>
                <Route path={"register"} element={<Register/>}/>
                {currentUser && currentUser.roles ? (
                    currentUser.roles[0].authority === "ROLE_ADMIN" ? (
                        <Route path={`admin`} element={<Admin/>}>
                            <Route path={''} element={<UserTable></UserTable>}/>
                            <Route path={`user/:id`} element={<UserProfile/>}/>
                        </Route>
                    ) : (
                        <Route path={``} element={<Home/>}/>
                    )
                ) : (
                    <Route path={`login`} element={<Login/>}/>
                )}
                <Route path={`createProperty`} element={<CreateForm/>}/>
                <Route path={`userDetail`} element={<UserDetail/>}/>
                <Route path={`propertyDetail/:id`} element={<PropertyDetail/>}/>
            </Routes>
        </>
    );
}
export default App;
