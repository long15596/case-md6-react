import './userdetail.css';
import {useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import * as Yup from "yup";
import {getUsers, logOut, updateUser} from "../../services/user/usersServices";
import {ErrorMessage, Field, Form, Formik} from "formik";
import FileUpload from "../../services/FileUpload";

export default function UserDetail() {
    let {id} = useParams();
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let [urls, setUrls] = useState('');
    let users = useSelector(state => {
        if (!state.users.users || state.users.users.length === 0) {
            return [];
        }
        return state.users.users.filter((user) => {
            if (user) {
                return user.id == id
            }
        });
    });
    let currentUser = useSelector(state => {
        console.log(state.users.currentUser)
        return state.users.currentUser
    })
    useEffect(() => {
        if (users === null || users.length === 0) {
            dispatch(getUsers());
        } else {
            setUrls(users[0].avatar);
        }
    }, []);

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        phone: Yup.string().required('Phone is required').matches(/^[0-9]+$/, 'Phone must be a number'),
    });

    let handleUpdate = (id, values) => {
        dispatch(updateUser({id, values}));
        navigate(`/`);
    };

    return (
        <>
            <div className="container-fluid px-4 mt-4">
                <Formik initialValues={users[0]}
                        validationSchema={validationSchema}
                        onSubmit={values => {
                            values = {...values, avatar: urls};
                            handleUpdate(users[0].id, values);
                        }} enableReinitialize={true}>
                    <Form>
                        <hr className="mt-0 mb-4"/>
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="card mb-4 mb-xl-0">
                                    <div className="card-header">Profile Picture</div>
                                    <div className="card-body text-center">
                                        <img src={urls} alt="user-avatar" className="rounded-circle" style={{
                                            marginLeft: " 0px",
                                            width: "209px",
                                            height: "200px"
                                        }}/>
                                        <div className="mt-3">
                                            <FileUpload onUpload={(uploadedUrls) => {
                                                if (uploadedUrls.length === 1) {
                                                    setUrls(uploadedUrls[0]);
                                                } else {
                                                    let lastImageUrl = uploadedUrls[uploadedUrls.length - 1];
                                                    setUrls(lastImageUrl);
                                                }
                                            }}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <div className="card mb-4">
                                    <div className="card-header">Account Details</div>
                                    <div className="card-body">
                                        <div className="mb-3">
                                            <label className="small mb-1" htmlFor="inputUsername">Username</label>
                                            <Field className="form-control" id="inputUsername" type="text"
                                                   placeholder="Enter your username" name={"username"} readOnly/>
                                            <ErrorMessage
                                                name="username"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="small mb-1" htmlFor="inputPhone">Phone</label>
                                            <Field className="form-control" id="inputPhone" type="text"
                                                   placeholder="Enter your phone" name={"phone"}/>
                                            <ErrorMessage
                                                name="phone"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                        <div className="row gx-3 mb-3">
                                            <div className="col-md-6">
                                                <label className="small mb-1" htmlFor="inputFirstName">Name</label>
                                                <Field className="form-control" id="inputFirstName" type="text"
                                                       placeholder="Enter your name" name={"name"}/>
                                                <ErrorMessage
                                                    name="name"
                                                    component="div"
                                                    className="text-danger"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="small mb-1" htmlFor="inputLastName">Address</label>
                                                <Field className="form-control" id="inputLastName" type="text"
                                                       placeholder="Enter your address" name={"address"}/>
                                                <ErrorMessage
                                                    name="address"
                                                    component="div"
                                                    className="text-danger"
                                                />
                                            </div>
                                        </div>
                                        <button className="btn btn-primary" type="submit">Save changes</button>
                                        {
                                            currentUser.roles[0].authority === "ROLE_ADMIN" ?
                                                <button className="btn btn-primary" style={{marginLeft: "15px"}}
                                                        onClick={() => {
                                                            navigate("/admin")
                                                        }}>Cancel</button> :
                                                <button className="btn btn-primary" style={{marginLeft: "15px"}}
                                                        onClick={() => {
                                                            navigate("/")
                                                        }}>Cancel</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    );
}
