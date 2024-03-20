import './css/style.css'
import './css/bootstrap.min.css'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/home/Home";
import UserProfile from "./pages/user/UserProfile";
import {useSelector} from "react-redux";
import Admin from "./pages/admin/Admin";
import Pagehome from "./pages/Pagehome";


function App() {
    let currentUser = useSelector(state => {
        console.log(state)
        return state.users.currentUser
    })
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <NavBar></NavBar>
                </div>
                <div className="row">
                    <Routes>
                        <Route path={''} element={<Home></Home>}></Route>
                        <Route path={`login`} element={<Login></Login>}/>
                        <Route path={"register"} element={<Register></Register>}/>
                        {currentUser !== null ?
                            <Route path={`home`} element={<Home></Home>}></Route>
                            :
                            <Route path={`login`} element={<Login></Login>}/>
                        }
                        <Route path={`user/:id`} element={<UserProfile></UserProfile>}></Route>
                        <Route path={`admin`} element={<Admin></Admin>}></Route>
                        <Route path={`pagehome`} element={<Pagehome></Pagehome>}></Route>
                    </Routes>
                </div>
                <div className="row">
                    <Footer></Footer>
                </div>
            </div>
        </>
    );
}

export default App;
