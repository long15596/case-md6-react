import './css/style.css'
import './css/bootstrap.min.css'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/home/Home";
import ListUser from "./pages/user/ListUser";
import ListOwner from "./pages/user/ListOwner";
import UserProfile from "./pages/user/UserProfile";
import {useSelector} from "react-redux";
import Register from "./pages/Register";


function App() {
    let currentUser = useSelector(state => {
        console.log(state)
        return state.users.currentUser
    })
    if (!currentUser) {
        return <Home/>;
    }
    if (!currentUser.roles || currentUser.roles.length === 0) {
        return <Home/>;
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {/*<NavBar></NavBar>*/}
                </div>
                <div className="row">
                    <Routes>
                        <Route path={`home`} element={<Home></Home>}>
                            <Route path="listUser" element={<ListUser></ListUser>}></Route>
                            <Route path="listOwner" element={<ListOwner></ListOwner>}></Route>
                            <Route path="userProfile" element={<UserProfile></UserProfile>}></Route>
                        </Route>
                        <Route path={'register'} element={<Register></Register>}></Route>
                        <Route path={`login`} element={<Login></Login>}/>
                        {currentUser === undefined || currentUser.roles[0].authority === undefined ?
                            <Route path={`login`} element={<Login></Login>}/>
                            : currentUser.roles[0].authority === "ROLE_ADMIN" ?
                                <Route path={`home`} element={<Home></Home>}></Route>
                                : currentUser.roles[0].authority === "ROLE_USER" ?
                                    <Route path={`home`} element={<Home></Home>}></Route>
                                    : currentUser.roles[0].authority === "ROLE_OWNER" ?
                                        <Route path={`home`} element={<Home></Home>}></Route>
                                        :
                                        <Route path={'login'} element={<Login></Login>}></Route>}

                    </Routes>
                </div>
                <div className="row">
                    {/*<Footer></Footer>*/}
                </div>
            </div>
        </>

    );
}

export default App;
