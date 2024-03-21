import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Category from "../../components/Category";

export default function Home() {
    return (
        <>
            <div className="container-fluid bg-white">
                <div className="row">
                    <div className="col-12" >
                        <Navbar/>
                        <Category/>
                        <Footer/>

                    </div>
                </div>
            </div>

        </>
    )
}