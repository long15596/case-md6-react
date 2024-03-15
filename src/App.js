import './css/style.css'
import './css/bootstrap.min.css'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {Route, Router, Routes} from "react-router-dom";
import Login from "./pages/loginPage/Login";
import Register from "./pages/loginPage/Register";
import ListUser from "./page/admin/ListUser";
import ListOwner from "./page/admin/ListOwner";

function App() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <NavBar></NavBar>
                </div>
                <div className="row">
                    <Routes>
                        <Route path="login" element={<Login></Login>}/>
                        <Route path="register" element={<Register></Register>}/>
                        <Route path="listUser" element={<ListUser></ListUser>}></Route>
                    </Routes>
                    <div className="col-3">

                    </div>
                    <div className="col-6">
                        {/*<ListOwner></ListOwner>*/}
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
