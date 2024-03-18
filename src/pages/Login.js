import {Link,} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Formik, Form, Field} from 'formik';
import {login} from "../services/user/usersServices";
import {useNavigate} from "react-router";


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = async (values) => {
        dispatch(login(values)).then(user => {
            console.log("abc", user.payload)
            if (user.payload === undefined) {
                // alert(`sai`)
                document.getElementById(`error-title`).innerHTML = `Sai Username hoặc Password`
            } else {
                navigate(`/home`)
            }
        })
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
                                            <h3>Đăng Nhập</h3>
                                        </div>
                                    </div>
                                </div>
                                <Formik initialValues={{
                                    username: '',
                                    password: ''
                                }} onSubmit={values => {
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
                                                    <p id={`error-title`}></p>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <Field type="password" className="form-control" name={`password`}
                                                           id="password" placeholder="Password" required/>
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
                                                    <button className="btn bsb-btn-2xl btn-primary" type="submit">Đăng
                                                        nhập
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
                                            <Link to={'/register'} className="link-secondary text-decoration-none">Tạo tài khoản mới</Link>
                                            <Link href="#!" className="link-secondary text-decoration-none">Forgot password</Link>
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
