import React, {useState} from 'react';
// import './Login.css';
import {Link,} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {Formik, Form, Field} from 'formik';
// import { loginUser } from '../services/userService';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const handleLogin = async (values) => {

    };

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4">
                        <div className="card border-0 shadow-sm rounded-4">
                            <div className="card-body p-3 p-md-4 p-xl-5">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-5">
                                            <h3>Log in</h3>
                                        </div>
                                    </div>
                                </div>
                                <form action="#!">
                                    <div className="row gy-3 overflow-hidden">
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input type="email" className="form-control" name="email" id="email"
                                                       placeholder="name@example.com" required/>
                                                <label htmlFor="email" className="form-label">Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input type="password" className="form-control" name="password"
                                                       id="password" value="" placeholder="Password" required/>
                                                <label htmlFor="password" className="form-label">Password</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value=""
                                                       name="remember_me" id="remember_me"/>
                                                <label className="form-check-label text-secondary"
                                                       htmlFor="remember_me">
                                                    Keep me logged in
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="d-grid">
                                                <button className="btn bsb-btn-2xl btn-primary" type="submit">Log in
                                                    now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="row">
                                    <div className="col-12">
                                        <hr className="mt-5 mb-4 border-secondary-subtle"/>
                                        <div
                                            className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                                            <Link to={'/register'} className="link-secondary text-decoration-none">Create new
                                                account</Link>
                                            <a href="#!" className="link-secondary text-decoration-none">Forgot
                                                password</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
