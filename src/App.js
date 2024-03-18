import './css/style.css'
import './css/bootstrap.min.css'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ListUser from "./pages/admin/ListUser";
import ListOwner from "./pages/admin/ListOwner";

function App() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <NavBar></NavBar>
                </div>
                <div className="row">
                    <div className="offset-3 col-6">
                        <ListUser></ListUser>
                        <ListOwner></ListOwner>
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
