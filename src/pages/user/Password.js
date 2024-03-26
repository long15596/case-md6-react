import './userdetail.css';
import React, {useEffect, useState} from "react";
import {Field, Form, Formik, ErrorMessage} from "formik";
import * as Yup from 'yup';
import {useDispatch, useSelector} from "react-redux";
import {editPassword, getAllUser, logOut} from "../../services/user/usersServices";
import {useNavigate} from "react-router";

export default function Password() {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    const [showWarning, setShowWarning] = useState(false);

    let currentUser = useSelector(state => state.users.currentUser);
    let users = useSelector(state => state.users.users);

    useEffect(() => {
        dispatch(getAllUser())
    }, []);

    let handleChangePassword = (id, values) => {
        dispatch(editPassword({id, values})).then(users => {
            if (users.payload === undefined) {
                setShowWarning(true);
            } else {
                setShowWarning(false);
                dispatch(logOut())
                navigate('/');
            }
            console.log(users.payload)
        })
    }

    const validationSchema = Yup.object().shape({
        oldPassword: Yup.string()
            .matches(/^[a-zA-Z0-9]{6,8}$/, 'Old password must be between 6 and 8 characters and contain only alphanumeric characters')
            .required('Old password is required'),
        newPassword: Yup.string()
            .matches(/^[a-zA-Z0-9]{6,8}$/, 'New password must be between 6 and 8 characters and contain only alphanumeric characters')
            .notOneOf([Yup.ref('oldPassword')], 'New password must be different from old password')
            .required('New password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('newPassword')], 'Confirm password must match new password')
            .required('Confirm password is required'),
    });

    return (
        <div className="container-fluid px-4 mt-4">
            <Formik
                initialValues={{
                    oldPassword: "",
                    newPassword: "",
                    confirmPassword: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    handleChangePassword(currentUser.id, values);
                    console.log(values)
                }}
            >
                <Form>

                    <div className="row">
                        <div className="col-12">
                            <div className="card mb-4">
                                <div className="card-header" style={{display: "flex"}}>
                                    <div className={`btn-close`} aria-label={`Close`} onClick={() => {
                                        document.getElementById("idForm").style.display = "none"
                                    }}>
                                    </div>
                                    <div style={{marginLeft: "200px"}}>
                                        Change Password
                                    </div>
                                </div>
                                <div className="card-body">
                                    {showWarning && (
                                        <form action="">
                                            <div className="alert alert-danger" role="alert">
                                                Current password is wrong.
                                            </div>
                                        </form>

                                    )}
                                    <div className="row gx-3 mb-3">
                                        <div className="col-md-12">
                                            <label className="small mb-1" htmlFor="inputFirstName"> Present
                                                Password</label>
                                            <Field className="form-control" id="inputFirstName" type="text"
                                                   placeholder="password present" name="oldPassword"/>
                                            <ErrorMessage name="oldPassword" component="div" className="text-danger"/>
                                        </div>
                                        <div className="col-md-12">
                                            <label className="small mb-2" htmlFor="inputLastName">New Password</label>
                                            <Field className="form-control" id="inputLastName" type="text"
                                                   placeholder="new password" name="newPassword"/>
                                            <ErrorMessage name="newPassword" component="div" className="text-danger"/>
                                        </div>
                                        <div className="col-md-12">
                                            <label className="small mb-3" htmlFor="inputLastName">Confirm New
                                                Password</label>
                                            <Field className="form-control" id="inputLastName" type="text"
                                                   placeholder="confirmPassword" name="confirmPassword"/>
                                            <ErrorMessage name="confirmPassword" component="div"
                                                          className="text-danger"/>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary" type="submit">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}
