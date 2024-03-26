
import Navbar from "../../components/Navbar";
import React from "react";
import {Outlet} from "react-router";

export default function Admin() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <Navbar></Navbar>
                </div>
                <div className="row">
                    <div className="col-2">

                    </div>
                    <div className="col-10"><Outlet></Outlet></div>
                </div>
            </div>
        </>
    )
}