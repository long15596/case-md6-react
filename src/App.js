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
import UpdateProfile from "./pages/user/UpdateProfile";
import User from "./pages/user/User";

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
                    <>
                        {currentUser.roles[0].authority === "ROLE_ADMIN" ? (
                            <Route path={`admin`} element={<Admin/>}>
                                <Route path={''} element={<UserTable></UserTable>}/>
                                <Route path={`user/:id`} element={<UserProfile/>}/>
                            </Route>
                        ) : currentUser.roles[0].authority === "ROLE_USER" ? (
                            <Route path={`user`} element={<User/>}>
                                <Route path={''} element={<Home></Home>}></Route>
                                <Route path={'edit/:id'} element={<UpdateProfile></UpdateProfile>}></Route>
                            </Route>
                        ) : (
                            <Route path={``} element={<Home/>}/>
                        )}
                    </>
                ) : (
                    <Route path={`login`} element={<Login/>}/>
                )}
            </Routes>

        </>
    );
}

export default App;
