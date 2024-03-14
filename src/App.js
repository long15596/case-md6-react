import './style.css'
import './bootstrap.min.css'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import UserProfile from "./pages/UserProfile";
function App() {
  return (
      <>
          <div className="container-fluid">
              <div className="row">
                  <NavBar></NavBar>
              </div>
              <div className="row">
                  <UserProfile></UserProfile>
              </div>
              <div className="row">
                  <Footer></Footer>
              </div>
          </div>
      </>
  );
}

export default App;
