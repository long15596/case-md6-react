import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {getAllUser, logOut} from "../services/user/usersServices";
import img from '../img/icon-deal.png'
import '../css/style.css'
import './Navbar.css'
import {faKey, faRightFromBracket, faUserTie} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Password from "../pages/user/Password";


export default function Navbar() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    let currentUser = useSelector(state => {
        return state.users.currentUser
    })

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        dispatch(getAllUser())

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
    const handleRegister = () => {
        navigate('/register');
    };

    const handleLogout = () => {
        localStorage.clear();
        dispatch(logOut());
        navigate('/');
    }

    return (
        <>

            <div className={`container-fluid nav-bar bg-transparent ${isSticky ? 'sticky-top' : ''}`}>
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                    <a href="index.html" className="navbar-brand d-flex align-items-center text-center">
                        <div className="icon p-2 me-2">
                            <img className="img-fluid" src={img} alt="Icon"
                                 style={{width: "30px", height: "30px"}}/>
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
                            {
                                (currentUser === null || currentUser === undefined) ?
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle"
                                           data-bs-toggle="dropdown">Property</a>
                                        <div className="dropdown-menu rounded-0 m-0">
                                            <a href="property-list.html" className="dropdown-item">Property List</a>
                                            <a href="property-type.html" className="dropdown-item">Property Type</a>
                                            <a href="property-agent.html" className="dropdown-item">Property Agent</a>
                                        </div>
                                    </div> :
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle"
                                           data-bs-toggle="dropdown">Pages</a>
                                        <div className="dropdown-menu rounded-0 m-0">
                                            <a href="testimonial.html" className="dropdown-item">Hồ Sơ</a>
                                            <a href="404.html" className="dropdown-item">Đăng Xuất</a>
                                        </div>
                                    </div>

                            }

                        </div>
                        {!currentUser ?
                            <div className="nav-item dropdown custom1">
                                <i className="bi bi-person-circle"></i>
                                <i className="bi bi-list"></i>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <a href="" className="dropdown-item login" onClick={handleLogin}>Login</a>
                                    <a href="" className="dropdown-item register" onClick={handleRegister}>Register</a>
                                </div>
                            </div>
                            : <div className="nav-item dropdown">
                                <a>
                                    {users && (
                                        <img src={users.avatar} alt="Avatar" className="avatar"/>
                                    )}
                                </a>
                                <div className="dropdown-menu rounded-0 m-0 custom-dropdown-menu">
                                    <div className="dropdown-item custom-dropdown-item">
                                        <div onClick={handleLogout}>
                                            <i><FontAwesomeIcon icon={faRightFromBracket} /></i>
                                            Logout
                                        </div>
                                    </div>
                                    <div className="dropdown-item custom-dropdown-item">
                                        <div onClick={() => {
                                            navigate(`user/edit/${currentUser.id}`)
                                        }}>
                                            <i><FontAwesomeIcon icon={faUserTie} /></i>
                                            Profile
                                        </div>
                                    </div>
                                    <div className="dropdown-item custom-dropdown-item">
                                        <div onClick={()=>{
                                                document.getElementById("idForm").style.display= "block"
                                        }}>
                                            <i><FontAwesomeIcon icon={faKey} /></i>
                                            Password
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
