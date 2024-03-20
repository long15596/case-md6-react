import './css/style.css'
import './css/bootstrap.min.css'
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/home/Home";
import UserProfile from "./pages/user/UserProfile";
import {useSelector} from "react-redux";
import Admin from "./pages/admin/Admin";


function App() {
    let currentUser = useSelector(state => {
        return state.users.currentUser
    })
    return (
        <>
            <div className="container-fluid">
                <Routes>
                    <Route path={''} element={<Home></Home>}></Route>
                    <Route path={`login`} element={<Login></Login>}/>
                    <Route path={"register"} element={<Register></Register>}/>
                    {currentUser !== null ?
                        <Route path={``} element={<Home></Home>}></Route>
                        :
                        <Route path={`login`} element={<Login></Login>}/>
                    }
                    <Route path={`user/:id`} element={<UserProfile></UserProfile>}></Route>
                    <Route path={`admin`} element={<Admin></Admin>}></Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
