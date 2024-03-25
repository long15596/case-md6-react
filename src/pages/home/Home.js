import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Category from "../../components/Category";
import ShowAllProperty from "./ShowAllProperty";
import SearchBar from "../../components/SearchBar";
import Password from "../user/Password";

export default function Home() {
    return (
        <>
            <div className="container-fluid bg-white">
                <div className="row">
                    <div className="col-12" >
                        <div>
                            <Navbar/>
                            <Category/>
                            <SearchBar/>
                            <ShowAllProperty/>
                            <Footer/>
                            <div id="idForm" style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", display:"none"}}>
                                <Password />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}