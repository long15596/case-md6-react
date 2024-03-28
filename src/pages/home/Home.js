import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Category from "../../components/Category";
import ShowAllProperty from "./ShowAllProperty";
import SearchBar from "../../components/SearchBar";
export default function Home() {
    return (
        <>
            <div className="container-fluid bg-white">
                <div className="row">
                    <div className="col-12" >
                            <Navbar/>
                            <Category/>
                            <SearchBar/>
                            <ShowAllProperty/>
                            <Footer/>
                    </div>
                </div>
            </div>
        </>
    )
}