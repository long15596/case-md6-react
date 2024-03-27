import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Field, Form, Formik, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../services/user/usersServices';
import './login.css'

export default function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const err = useSelector((state) => {
        return state.users.error;
    });

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
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        phone: Yup.string().required('Phone is required'),
    });

    const [check, setCheck] = useState(true);

    const handleRegister = async (values) => {
        dispatch(register({values})).then((x) => {
            if (x.payload.username === undefined) {
                showErr("Username Exited PLease Change");
                navigate("/register")
            } else{
                showSuccess("Register successful");
                setTimeout(() => {
                    hideMessage();
                    navigate('/login');
                }, 3000);
            }
        });
    };

    const showSuccess = (mess) => {
        const a = document.getElementById("error-title");
        if (a) {
            a.innerHTML = mess;
            a.style.display = "block";
            document.getElementById(`background`).style.display = "block";
            setCheck(true);
        }
    };

    const showErr = (mess) => {
        const errs = document.getElementById("error-title");
        if (errs) {
            errs.innerHTML = mess;
            errs.style.display = "block";
            document.getElementById(`background`).style.display = "block";
            setCheck(false);
        }
    };

    const hideMessage = () => {
        const homes = document.getElementById(`background`);
        const err = document.getElementById("error-title");
        if (homes && err) {
            homes.style.display = 'none';
            err.style.display = "none";
        }
    };

    return (
        <>
            <div className={`alert ${check ? "alert-success" : "alert-danger"}`} role="alert" id="background"
                 style={{display: "none"}}>
                <div id="error-title"></div>
            </div>
            <div className="container pt-5 pb-5">
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
                                            <h3>Register</h3>
                                        </div>
                                    </div>
                                    <hr id={"hr"}/>
                                </div>
                                <Formik
                                    initialValues={{
                                        username: '',
                                        password: '',
                                        confirmPassword: '',
                                        phone: '',
                                        avatar: 'https://firebasestorage.googleapis.com/v0/b/test-91e51.appspot.com/o/music%2F7307z5196658011641_0329736c6cd4b9d272bbc529f19d1065.jpg?alt=media&token=993f59d3-9079-4bea-8590-1aba11cf47b7',
                                    }}
                                    validationSchema={validationSchema}
                                    onSubmit={(values ) => {
                                        handleRegister(values).then();
                                    }}
                                >
                                    <Form>
                                        <div className="row gy-3 overflow-hidden">
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        name="username"
                                                        id="username"
                                                        placeholder="Username"
                                                        required
                                                    />
                                                    <label htmlFor="Username" className="form-label">
                                                        Username
                                                    </label>
                                                    <ErrorMessage
                                                        name="username"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <Field
                                                        type="password"
                                                        className="form-control"
                                                        name="password"
                                                        id="password"
                                                        placeholder="Password"
                                                        required
                                                    />
                                                    <label htmlFor="Password" className="form-label">
                                                        Password
                                                    </label>
                                                    <ErrorMessage
                                                        name="password"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <Field
                                                        type="password"
                                                        className="form-control"
                                                        name="confirmPassword"
                                                        id="confirmPassword"
                                                        placeholder="Confirmpassword"
                                                        required
                                                    />
                                                    <label
                                                        htmlFor="ConfirmPassword"
                                                        className="form-label"
                                                    >
                                                        Confirm Password
                                                    </label>
                                                    <ErrorMessage
                                                        name="confirmPassword"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        name="phone"
                                                        id="phone"
                                                        placeholder="Phone"
                                                        required
                                                    />
                                                    <label htmlFor="Phone" className="form-label">
                                                        Phone
                                                    </label>
                                                    <ErrorMessage
                                                        name="phone"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid">
                                                    <button
                                                        className="btn bsb-btn-2xl btn-primary"
                                                        type="submit"
                                                    >
                                                        Register now
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
                                            <Link to={'/login'} className="link-secondary text-decoration-none">Login
                                                here</Link>
                                            {/*<a href="#!" className="link-secondary text-decoration-none">Forgot*/}
                                            {/*    password</a>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>);
};

