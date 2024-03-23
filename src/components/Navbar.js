import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {getUsers, logOut} from "../services/user/usersServices";
import img from '../img/icon-deal.png'
import '../css/style.css'
import './Navbar.css'
import {getCategories} from "../services/category/categoryService";
import {Link} from "react-router-dom";
export default function Navbar() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    let currentUser = useSelector(state => {
        return state.users.currentUser
    })
    let categories = useSelector(state => {
        return state.categories.categories
    })
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        dispatch(getUsers())
        dispatch(getCategories)
        function handleScroll() {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    let users = useSelector(state => {
        if (currentUser !== null && currentUser !== undefined) {
            let filteredUsers = state.users.users.filter((user) => user.id == currentUser.id);
            if (filteredUsers.length > 0) {
                return filteredUsers[0];
            }
        }
        return null;
    });
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
                            <Link to={``} className="nav-item nav-link active">Home</Link>
                            <a href="about.html" className="nav-item nav-link">About</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    {categories.map((category) => (
                                        <Link to={``} className="dropdown-item">{category.name}</Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {(currentUser === null || currentUser === undefined) ?
                            <button className="btn btn-primary px-3 d-none d-lg-flex"
                                    onClick={handleLogin}>Login</button>
                            :
                            <div className="nav-item dropdown">
                                <div>
                                    {users && (
                                        <img src={users.avatar} alt="Avatar" className="avatar"/>
                                    )}
                                </div>
                                <div className="dropdown-menu rounded-0 m-0 custom-dropdown-menu">
                                <div className="dropdown-item custom-dropdown-item">
                                        <div onClick={handleLogout}>
                                            <i className="bi bi-box-arrow-in-left"></i>
                                            Logout
                                        </div>
                                    </div>
                                    <div className="dropdown-item custom-dropdown-item"> <div>
                                        <i className="bi bi-person-circle"></i>
                                        Profile
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </nav>
            </div>
        </>
    )
}
