import React, {useState} from 'react';
import './Register.css'
import {NavLink} from "react-router-dom";
import {Field, Form, Formik} from "formik";
const Register = () => {
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const handleregister = async (values) => {
        // await dispatch(loginUser(values));
        // history.push('/home'); // Chuyển hướng sau khi đăng nhập thành công
    };
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="black-bg" data-bs-theme="dark">
                                    <NavLink to="/" className="close-link" aria-label="Close">Close</NavLink>
                                </div>
                                <h2 className="card-title text-center">Responsive Registration</h2>
                                <br/>
                                <div className="mx-3 my-2 py-2 bordert">
                                    <div className="text-center py-3">
                                        <a href="https://wwww.facebook.com" target="_blank" className="px-2">
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
                                <Formik
                                    initialValues={{ username: '', password: '' }}
                                    onSubmit={(values) => handleregister(values)}
                                >
                                    <Form>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" style={{ fontSize: '1.5em' }}><i className="fa fa-envelope"></i></span>
                                                </div>
                                                <input type="email" className="form-control" name="email" placeholder="Email" required />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" style={{ fontSize: '1.5em' }}><i className="fa fa-lock"></i></span>
                                                </div>
                                                <Field type="password" className="form-control with-border" name="password" placeholder="Password" required />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" style={{ fontSize: '1.5em' }}><i className="fa fa-lock" ></i></span>
                                                </div>
                                                <Field type="password" className="form-control" name="password" placeholder="Re-type Password" required />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" style={{ fontSize: '1.5em' }}><i className="fa fa-phone" ></i></span>
                                                </div>
                                                <Field type="text" className="form-control" name="password" placeholder="Phone" required />
                                            </div>
                                        </div>
                                        <div className="form-group top-10px">
                                        </div>
                                        <div className="form-group text-center">
                                            <button type="submit" className="btn btn-primary">Register</button>
                                        </div>
                                    </Form>
                                </Formik>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;