import {Link,} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {login} from "../services/user/usersServices";
import {useNavigate} from "react-router";
import * as Yup from 'yup';
import './login.css';
import React, {useState} from "react";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required('Username is required')
            .matches(/^[A-Z][a-zA-Z0-9]*$/, 'Username must start with an uppercase letter')
            .min(2, 'Username must be at least 2 characters')
            .max(32, 'Username must not exceed 32 characters'),
        password: Yup.string()
            .required('Password is required')
            .matches(/^[a-zA-Z0-9]*$/, 'Password must contain only alphanumeric characters')
            .min(6, 'Password must be at least 6 characters')
            .max(32, 'Password must not exceed 32 characters'),
    });
    let [check, setCheck] = useState(true)

    const handleLogin = async (values) => {
        await dispatch(login(values)).then(user => {
            if (user.payload === undefined) {
                showError('Wrong Username or Password Check it out!');
            } else {
                const userRoles = user.payload.roles.map(role => role.authority);
                if (userRoles.includes("ROLE_USER")) {
                    showSuccess('Login successful');
                    setTimeout(() => {
                        hideMessage();
                        navigate(`/`);
                    }, 2000);
                } else if (userRoles.includes("ROLE_ADMIN")) {
                    showSuccess('Login successful');
                    setTimeout(() => {
                        hideMessage();
                        navigate(`/admin`);
                    }, 2000);
                }
            }
        })
    };
    const showError = (errorMessage) => {
        const errorElement = document.getElementById(`error-title`);
        errorElement.innerHTML = errorMessage;
        errorElement.style.display = 'block';
        document.getElementById(`background`).style.display = 'block';
        setCheck(false)
    };
    const showSuccess = (successMessage) => {
        const successElement = document.getElementById(`error-title`);
        successElement.innerHTML = successMessage;
        successElement.style.display = 'block';
        document.getElementById(`background`).style.display = 'block';
        setCheck(true)
    };

    const hideMessage = () => {
        document.getElementById(`error-title`).style.display = 'none';
        document.getElementById("background").style.display = "none"
        setCheck(true)
    };

    return (
        <>
            <div className={`alert ${check ? "alert-success" : "alert-danger"}`} role="alert" id="background"
                 style={{display: "none"}}>
                <div id="error-title"></div>
            </div>

            <div className="container pt-5 pb-5 mt-5">
                <div className="row justify-content-center">
                    <div className="col-4" style={{width: "40.33333%"}}>
                        <div className="card border-0 shadow-sm rounded-4">
                            <div className="card-body p-3 p-md-4 p-xl-5">
                                <div className="row">
                                    <div className="col-12" id={"header"}>
                                        <div id={"icons"}>
                                            <Link to={'/'} className={`btn-close`} aria-label={`Close`}></Link>
                                        </div>
                                        <div className="mb-5" id={"signIn"}>
                                            <h3 style={{
                                                marginLeft: "13px",
                                                marginTop: "0px"
                                            }}>Sign In</h3>
                                        </div>
                                    </div>
                                    <hr id={"hr"}/>
                                </div>
                                <Formik initialValues={{
                                    username: '',
                                    password: ''
                                }}
                                        validationSchema={validationSchema}
                                        onSubmit={(values) => {
                                            handleLogin(values).then()
                                        }}>
                                    <Form>
                                        <div className="row gy-3 overflow-hidden">
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <Field type="text" className="form-control" name={`username`}
                                                           id="email"
                                                           placeholder="Username" required/>
                                                    <label htmlFor="email" className="form-label">Username</label>
                                                    <ErrorMessage
                                                        name="username"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                    <p id={`error-title`}></p>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <Field type="password" className="form-control" name={`password`}
                                                           id="password" placeholder="Password" required/>
                                                    <label htmlFor="password" className="form-label">Password</label>
                                                    <ErrorMessage
                                                        name="password"
                                                        component="div"
                                                        className="text-danger"
                                                    />
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
                                                    <button className="btn bsb-btn-2xl btn-primary"
                                                            type="submit">Login
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Form>
                                </Formik>
                                <div className="row">
                                    <div className="col-12">
                                        <hr className="mt-5 mb-4 border-secondary-subtle"/>
                                        <div
                                            className="d-flex gap-2 gap-md-4 justify-content-center">
                                            <Link to={'/register'} className="link-secondary text-decoration-none"
                                            >Register
                                                Here</Link>
                                            <Link href="#!" className="link-secondary text-decoration-none">Forgot
                                                password</Link>
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
