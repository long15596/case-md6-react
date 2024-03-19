import {Link, useNavigate,} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../services/user/usersServices";
import React from "react";

export default function Register() {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let err = useSelector(state => {
        console.log(state.users.error)
        return state.users.error
    })

    let handleRegister = (values) => {
        dispatch(register({values})).then((x) => {
            console.log(x)
            if (x.payload == undefined) {
                navigate('/register')
            } else if (x.payload.username !== undefined) {
                navigate('/login')
            }
            else {
                navigate('/register')
            }
        })
    }
    return (<>
            <div className="container pt-5 pb-5">
                <div>
                    {err}
                </div>
                <div className="row justify-content-center">
                    <div className="col-4">
                        <div className="card border-0 shadow-sm rounded-4">
                            <div className="card-body p-3 p-md-4 p-xl-5">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-5">
                                            <h3 style={{textAlign: "center"}}>Sign Up</h3>
                                        </div>
                                    </div>
                                </div>
                                <Formik
                                    initialValues={{
                                        username: '',
                                        password: '',
                                        confirmPassword: '',
                                        phone: '',
                                        avatar: 'https://firebasestorage.googleapis.com/v0/b/test-91e51.appspot.com/o/music%2F7307z5196658011641_0329736c6cd4b9d272bbc529f19d1065.jpg?alt=media&token=993f59d3-9079-4bea-8590-1aba11cf47b7'
                                    }}
                                    onSubmit={(values) => {
                                        handleRegister(values).then()
                                    }}
                                >
                                    <Form>
                                        <div className="row gy-3 overflow-hidden">
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <Field type="text" className="form-control" name="username"
                                                           id="username"
                                                           placeholder="Username" required/>
                                                    <label htmlFor="Username" className="form-label">Username</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <Field type="password" className="form-control" name="password"
                                                           id="password" placeholder="Password" required/>
                                                    <label htmlFor="Password" className="form-label">Password</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <Field type="password" className="form-control"
                                                           name="confirmPassword"
                                                           id="confirmPassword" placeholder="Confirmpassword" required/>
                                                    <label htmlFor="ConfirmPassword" className="form-label">Confirm
                                                        Password</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <Field type="text" className="form-control" name="phone"
                                                           id="phone" placeholder="Phone" required/>
                                                    <label htmlFor="Phone" className="form-label">Phone</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid">
                                                    <button className="btn bsb-btn-2xl btn-primary"
                                                            type="submit">Register
                                                        now
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
                                            className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                                            <Link to={'/login'} className="link-secondary text-decoration-none">Login here</Link>
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

