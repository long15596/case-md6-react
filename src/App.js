import './style.css'
import './bootstrap.min.css'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {Route, Router, Routes} from "react-router-dom";
import Login from "./pages/loginPage/Login";
import Register from "./pages/loginPage/Register";
function App() {
  return (
      <>
          <div className="container-fluid">
              <div className="row">
                  <NavBar></NavBar>
              </div>
              <div className="row">
                  <Routes>
                      <Route path="login" element={<Login></Login>} />
                      <Route path="register" element={<Register></Register>} />
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
