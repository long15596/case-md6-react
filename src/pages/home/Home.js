
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import {Outlet} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export default function Home() {


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <NavBar></NavBar>
                </div>
                <div className="row ">
                    <Outlet></Outlet>
                </div>
                <div className="row">
                    <Footer></Footer>
                </div>
            </div>
        </>
    )
}