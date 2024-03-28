import Navbar from "../../components/Navbar";
import {Outlet} from "react-router";
import React from "react";

export default function Owner(){
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <Navbar></Navbar>
                </div>
                <div className="row">
                    <div className="col-10"><Outlet></Outlet></div>
                </div>
            </div>
        </>
    )
}