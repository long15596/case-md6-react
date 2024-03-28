import Navbar from "../../components/Navbar";
import {Outlet} from "react-router";
import React from "react";
import SearchBar from "../../components/SearchBar";
import Footer from "../../components/Footer";

export default function Owner() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Navbar></Navbar>
                        <SearchBar/>
                        <Outlet></Outlet>
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    )
}