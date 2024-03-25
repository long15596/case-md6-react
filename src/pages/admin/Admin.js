
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
                    <div>
                        <Outlet></Outlet>

                    </div>
                </div>
            </div>
        </>
    )
}