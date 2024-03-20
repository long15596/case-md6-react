import React from 'react';
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import {Outlet} from "react-router";
export default function Home() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <NavBar></NavBar>
                </div>
                <div className="row">
                    <Outlet></Outlet>
                </div>
                {/*<div className="row">*/}
                {/*    <Footer></Footer>*/}
                {/*</div>*/}
            </div>
        </>
    )
}