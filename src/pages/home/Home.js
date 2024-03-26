import React, {useEffect} from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Category from "../../components/Category";
import ShowAllProperty from "./ShowAllProperty";
import SearchBar from "../../components/SearchBar";
import Password from "../user/Password";
import {useSelector} from "react-redux";

export default function Home() {
    let currentUser = useSelector(state => {
        return state.users.currentUser
    })
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
                        { currentUser ?
                            <div id="idForm" style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", display:"none"}}>
                                <Password />
                            </div> :
                            <div></div>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}