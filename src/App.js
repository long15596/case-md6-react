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
import User from "./pages/user/User";
import UserDetail from "./pages/user/UserDetail";
import Password from "./pages/user/Password";
import React from "react";
import PropertyDetail from "./pages/property/PropertyDetail";
import CreateForm from "./pages/property/CreateForm";

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
                                <Route path={'edit/:id'} element={<UserDetail></UserDetail>}></Route>
                            </Route>
                        ) : (
                            <Route path={``} element={<Home/>}/>
                        )}
                    </>
                ) : (
                    <Route path={`login`} element={<Login/>}/>
                )}
                <Route path={`property-detail/:id`} element={<PropertyDetail/>}/>
                <Route path={`create-form`} element={<CreateForm/>}/>
            </Routes>
        </>
    );
}

export default App;
