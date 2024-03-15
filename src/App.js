import './css/style.css'
import './css/bootstrap.min.css'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import UserProfile from "./page/user/UserProfile";
import {Route, Routes} from "react-router";
import ListUser from "./page/user/ListUser";
import ListOwner from "./page/user/ListOwner";

function App() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <NavBar></NavBar>
                </div>
                <div className="row">
                    <Routes>
                        <Route path={`user/:id`} element={<UserProfile></UserProfile>}></Route>
                    </Routes>
                    {/*<div className="offset-3 col-6">*/}
                    {/*    <ListUser></ListUser>*/}
                    {/*    <ListOwner></ListOwner>*/}
                    {/*</div>*/}
                </div>
                <div className="row">
                    <Footer></Footer>
                </div>
            </div>
        </>
    );
}

export default App;
