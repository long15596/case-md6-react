import './css/style.css'
import './css/bootstrap.min.css'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/home/Home";
import ListUser from "./pages/user/ListUser";
import ListOwner from "./pages/user/ListOwner";
import UserProfile from "./pages/user/UserProfile";
import {useSelector} from "react-redux";


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
                        <Route path={`login`} element={<Login></Login>}/>
                        <Route path={"register"} element={<Register></Register>}/>
                        {currentUser !== null ?
                            <Route path={`home`} element={<Home></Home>}></Route>
                            :
                            <Route path={`login`} element={<Login></Login>}/>
                        }
                    <Route path="listUser" element={<ListUser></ListUser>}></Route>
                    <Route path="listOwner" element={<ListOwner></ListOwner>}></Route>
                    <Route path="userProfile" element={<UserProfile></UserProfile>}></Route>
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
