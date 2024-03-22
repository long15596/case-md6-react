import './UserProfile.css'
import {ErrorMessage, Field, Form, Formik} from "formik";
import FileUpload from "../../services/FileUpload";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateUser} from "../../services/user/usersServices";
import {useNavigate, useParams} from "react-router";
import * as Yup from "yup";

export default function UpdateProfile() {
    let {id} = useParams();
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let users = useSelector(state => {
        return state.users.users.filter(user => user.id == id)
    })

    let [urls, setUrls] = useState(users[0].avatar)

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required('Username is required')
            .matches(/^[A-Z][a-zA-Z0-9]*$/, 'Username must start with an uppercase letter')
            .min(2, 'Username must be at least 2 characters')
            .max(32, 'Username must not exceed 32 characters'),
        phone: Yup.string().required('Phone is required'),
    });

    let handleUpdate = (id, values) => {
        dispatch(updateUser({id, values}))
        navigate(``)
    }
    return(
        <>
            <div className={`col-md-4 mb-3`}>
                <Formik initialValues={users[0]}
                        validationSchema={validationSchema}
                        onSubmit={values => {
                            values = {...values, avatar: urls}
                            handleUpdate(users[0].id, values)
                        }} enableReinitialize={true}>
                        <Form>
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src={urls} alt="user-avatar" className="rounded-circle"/>
                                        <div className="mt-3">
                                            <FileUpload onUpload={(uploadedUrls) => {
                                                setUrls(uploadedUrls[0])
                                                console.log(urls)
                                            }}></FileUpload>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                 stroke-width="2"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                                 className="feather feather-globe mr-2 icon-inline">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                                <path
                                                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                            </svg>
                                            Email
                                        </h6>
                                        <span className="text-secondary">https://bootdey.com</span>
                                    </li>
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Name</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <Field type="text" className="form-control"
                                                           aria-label="Username"
                                                           aria-describedby="basic-addon1" name={`name`}/>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Username</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <Field type="text" className="form-control"
                                                           aria-label="Username"
                                                           aria-describedby="basic-addon1" name={`username`}/>
                                                    <ErrorMessage
                                                        name="username"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Phone</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <Field type="number" className="form-control"
                                                           aria-label="Username"
                                                           aria-describedby="basic-addon1" name={`phone`}/>
                                                    <ErrorMessage
                                                        name="phone"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Address</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <Field type="text" className="form-control"
                                                           aria-label="Username"
                                                           aria-describedby="basic-addon1" name={`address`}/>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <button className="btn btn-primary px-3 d-none d-lg-flex"
                                                            type={`submit`}>Update
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </Form>
                </Formik>
            </div>
        </>
    )
}