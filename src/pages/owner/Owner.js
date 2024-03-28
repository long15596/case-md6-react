import Navbar from "../../components/Navbar";
import {Outlet} from "react-router";
import React from "react";
import SearchBar from "../../components/SearchBar";
import Footer from "../../components/Footer";
import './Owner.css'
export default function Owner() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12" style={{backgroundColor: "white"}}>
                        <div className="row">
                                <Navbar ></Navbar>
                        </div>
                        <div className='row' style={{backgroundColor: "white", height: "50px"}}></div>
                        <div className="row">
                                <SearchBar/>
                        </div>
                        <Outlet></Outlet>
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    )
}