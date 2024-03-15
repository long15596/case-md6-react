import React, { useState } from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
// import { loginUser } from '../services/userService';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const handleLogin = async (values) => {
        // await dispatch(loginUser(values));
        // history.push('/home'); // Chuyển hướng sau khi đăng nhập thành công
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="offset-md-2 col-lg-5 col-md-7 offset-lg-4 offset-md-3">
                        <div className="panel border bg-white position-relative">
                            <div className="black-bg" data-bs-theme="dark">
                                <NavLink to="/" className="close-link" aria-label="Close">
                                    Close
                                </NavLink>
                            </div>
                            <div className="panel-heading">
                                <h3 className="pt-3 font-weight-bold">Đăng nhập</h3>
                            </div>
                            <div className="panel-body p-3">
                                <Formik
                                    initialValues={{ username: '', password: '' }}
                                    onSubmit={(values) => handleLogin(values)}
                                >
                                    <Form>
                                        <div className="form-group py-2">
                                            <div className="input-field">
                                                <span className="far fa-user p-2"></span>
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    name="username"
                                                    placeholder="Username or Email"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group py-1 pb-2">
                                            <div className="input-field">
                                                <span className="fas fa-lock px-2"></span>
                                                <Field
                                                    type={showPassword ? 'text' : 'password'}
                                                    className="form-control"
                                                    name="password"
                                                    placeholder="Enter your Password"
                                                    required
                                                />
                                                <button
                                                    type="button"
                                                    className="btn bg-white text-muted"
                                                    onClick={togglePasswordVisibility}
                                                >
                                                    <span className={showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'}></span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="form-inline">
                                            <input type="checkbox" name="remember" id="remember" />
                                            <label htmlFor="remember" className="text-muted">
                                                Remember me
                                            </label>
                                            <a href="#" id="forgot" className="font-weight-bold">
                                                Forgot password ?
                                            </a>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <button type="submit" className="btn btn-primary btn-block mt-3 Login-btn">
                                                Login
                                            </button>
                                        </div>
                                        <div className="text-center pt-4 text-muted">
                                            Don't have an account?{' '}
                                            <NavLink to="/register" style={{ color: '#007BFF' }}>
                                                Sign up
                                            </NavLink>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                            <div className="mx-3 my-2 py-2 bordert">
                                <div className="text-center py-3">
                                    <a href="https://www.facebook.com" target="_blank" className="px-2">
                                        <img src="https://www.dpreview.com/files/p/articles/4698742202/facebook.jpeg" alt="" />
                                    </a>
                                    <a href="https://www.google.com" target="_blank" className="px-2">
                                        <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" />
                                    </a>
                                    <a href="https://www.github.com" target="_blank" className="px-2">
                                        <img src="https://www.freepnglogos.com/uploads/512x512-logo-png/512x512-logo-github-icon-35.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
