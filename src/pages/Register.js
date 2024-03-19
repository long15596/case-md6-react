import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Field, Form, Formik, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../services/user/usersServices';

export default function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const err = useSelector((state) => {
        console.log(state.users.error);
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

    const handleRegister = (values) => {
        dispatch(register({values})).then((x) => {
            console.log(x);
            if (x.payload === undefined) {
                navigate('/register');
            } else if (x.payload.username !== undefined) {
                navigate('/login');
            } else {
                navigate('/register');
            }
        });
    };

    return (<>
            <div className="container">
                <div>{err}</div>
                <div className="row justify-content-center">
                    <div className="col-4">
                        <div className="card border-0 shadow-sm rounded-4">
                            <div className="card-body p-3 p-md-4 p-xl-5">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-5">
                                            <h3 style={{textAlign: 'center'}}>Sign Up</h3>
                                        </div>
                                    </div>
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
                                    onSubmit={(values) => {
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
                                            className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                                            <Link
                                                to={'/login'}
                                                className="link-secondary text-decoration-none"
                                            >
                                                Login here
                                            </Link>
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
}
