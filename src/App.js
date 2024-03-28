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
import React from "react";
import PropertyDetail from "./pages/property/PropertyDetail";
import CreateForm from "./pages/property/CreateForm";
import EditForm from "./pages/property/EditForm";
import Owner from "./pages/owner/Owner";
import ShowAllProperty from "./pages/home/ShowAllProperty";
import Body from "./pages/user/Body";

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
                                <Route path={'edit/:id'} element={<UserDetail></UserDetail>}></Route>

                            </Route>
                        ) :  currentUser.roles[0].authority === "ROLE_OWNER" ? (
                            <Route path={`owner`} element={<Owner></Owner>}>
                                <Route path={``} element={<ShowAllProperty></ShowAllProperty>}></Route>
                                <Route path={`property-detail/:id`} element={<PropertyDetail/>}/>
                                <Route path={`edit-property/:id`} element={<EditForm/>}/>
                                <Route path={`create-form`} element={<CreateForm/>}/>
                            </Route>
                        ) :currentUser.roles[0].authority === "ROLE_USER" ? (
                            <Route path={`user`} element={<User/>}>
                                <Route path={''} element={<Body></Body>}></Route>
                                <Route path={'edit/:id'} element={<UserDetail></UserDetail>}></Route>
                                <Route path={`property-detail/:id`} element={<PropertyDetail/>}/>
                            </Route>
                        ) : (
                            <Route path={``} element={<Home/>}/>
                        )
                        }
                    </>
                ) : (
                    <Route path={`login`} element={<Login/>}/>
                )}

                <Route path={`edit-property/:id`} element={<EditForm/>}/>
                <Route path={`property-detail/:id`} element={<PropertyDetail/>}/>
            </Routes>
        </>
    );
}

export default App;
