import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import {logOut} from "../services/user/usersServices";
import React, { useState, useEffect } from "react";
import img from '../img/icon-deal.png'

import "./Navbar.css"
// import {inforUserThunk} from "../redux/user/usersSlice";
import '../css/style.css'

export default function Navbar() {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    let currentUser = useSelector(state => {
        return state.users.currentUser
    })

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }
        // if (currentUser && currentUser.id) {
        //     dispatch(inforUserThunk(currentUser.id));
        // }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLogin = () => {
        navigate('/login');
    };


    const handleLogout = () => {
        localStorage.clear();
        dispatch(logOut());
        navigate('/');
    }

    return (
        <>
            <div className={`container-fluid nav-bar bg-transparent ${isSticky ? 'sticky-top' : ''}`} >
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                    <a href="index.html" className="navbar-brand d-flex align-items-center text-center">
                        <div className="icon p-2 me-2">
                            <img className="img-fluid" src={img} alt="Icon"
                                 style={{ width: "30px", height: "30px" }} />
                        </div>
                        <h1 className="m-0 text-primary">UHome</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <a href="index.html" className="nav-item nav-link active">Home</a>
                            <a href="about.html" className="nav-item nav-link">About</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <a className="dropdown-item">Property List</a>
                                    <a className="dropdown-item">Property Type</a>
                                    <a className="dropdown-item">Property Agent</a>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                    <a href="404.html" className="dropdown-item">404 Error</a>
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                        {(currentUser === null || currentUser === undefined) ?
                            <button className="btn btn-primary px-3 d-none d-lg-flex" onClick={handleLogin}>Login</button>
                            :
                            <div className="nav-item dropdown">
                                <a>
                                    <img src={"#"} alt="Avatar" className="avatar"  />
                                </a>
                                <div className="dropdown-menu rounded-0 m-0 custom-dropdown-menu">
                                    <div className="dropdown-item custom-dropdown-item">
                                        <div onClick={handleLogout}>
                                            <i className="bi bi-box-arrow-in-left"></i>
                                            Logout
                                        </div>
                                    </div>
                                    <div className="dropdown-item custom-dropdown-item"> <div>
                                        <i className="bi bi-person-circle"></i>
                                        Edit Profile
                                        </div>
                                    </div>
                                    <a className="dropdown-item custom-dropdown-item">Property Agent</a>
                                </div>
                            </div>
                        }
                    </div>
                </nav>
            </div>
        </>
    )
}
