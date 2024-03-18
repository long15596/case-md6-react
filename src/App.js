import './css/style.css'
import './css/bootstrap.min.css'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {Route, Router, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ListUser from "./page/user/ListUser";
import ListOwner from "./page/user/ListOwner";
import Home from "./pages/home/Home";

function App() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <NavBar></NavBar>
                </div>
                <div className="row">
                    <Routes>
                        <Route path={`home`} element={<Home></Home>}></Route>
                        <Route path={'login'} element={<Login></Login>}/>
                        <Route path={"register"} element={<Register></Register>}/>
                        <Route path={"listUser"} element={<ListUser></ListUser>}></Route>
                        <Route path={"listOwner"} element={<ListOwner></ListOwner>}></Route>
                    </Routes>
                    <div className="col-3">

                    </div>
                    <div className="col-6">
                    </div>
                    <div className="col-3">

                    </div>

                </div>
                <div className="row">
                    <Footer></Footer>
                </div>

            </div>
        </>
    );
}

export default App;
