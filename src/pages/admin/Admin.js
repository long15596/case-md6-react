import UserTable from "./UserTable";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function Admin() {
    return (
        <>
            <NavBar></NavBar>
            <div className="container-fluid pt-2">
                <div className="offset-2 col-10">
                    <UserTable></UserTable>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}