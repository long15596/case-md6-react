import UserTable from "./UserTable";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function Admin() {
    return (
        <>
            <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavBar></NavBar>
            </div>
            <div className="container-fluid">
                <div className="offset-2 col-10 pt-5">
                    <UserTable></UserTable>
                </div>
            </div>
            <div className="bg-dark text-white text-center py-3">
                <Footer></Footer>
            </div>
        </>
    )
}