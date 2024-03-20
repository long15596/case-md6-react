
import NavBar from "../../components/NavBar";
import React from "react";
import {Outlet} from "react-router";

export default function Admin() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <NavBar></NavBar>
                </div>
                <div className="row">
                    <div className="offset-2 col-10 pt-5">
                        <Outlet></Outlet>

                    </div>
                </div>
            </div>
        </>
    )
}