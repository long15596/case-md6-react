import {Outlet} from "react-router";
import Navbar from "../../components/Navbar";
import React from "react";
export default function User(){
    return <>
        <div className="container-fluid bg-white">
            <div className="row">
                <div className="col-12" >
                   <Navbar></Navbar>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    </>
}