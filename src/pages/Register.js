import './Register.css'
import {Link, useNavigate,} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {registerUser} from "../services/user/usersServices";

export default function Register() {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let handleRegister =async (values)=>{
            await  dispatch(registerUser({values}))
            // await  navigate("/login")
    }
    let eM = useSelector(state => {
        console.log(state)
        return state.users.error
    })
    return (
        <div>
            <div className="container">
                <h1>{eM}</h1>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="black-bg" data-bs-theme="dark">
                                    <Link to="/" className="close-link" aria-label="Close">Close</Link>
                                </div>
                                <h2 className="card-title text-center">Responsive Registration</h2>
                                <br/>

                                <Formik
                                    initialValues={{
                                        username: '',
                                        password: '',
                                        confirmPassword: '',
                                        phone: '',
                                        avatar:'https://firebasestorage.googleapis.com/v0/b/test-91e51.appspot.com/o/music%2F7307z5196658011641_0329736c6cd4b9d272bbc529f19d1065.jpg?alt=media&token=993f59d3-9079-4bea-8590-1aba11cf47b7'
                                    }}
                                    onSubmit={(values) => {
                                        handleRegister(values).then()
                                    }}
                                >
                                    <Form>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" style={{fontSize: '1.5em'}}><i
                                                        className="fa fa-envelope"></i></span>
                                                </div>
                                                <Field type="text" className="form-control" name="username"
                                                       placeholder="Username" required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" style={{fontSize: '1.5em'}}><i
                                                        className="fa fa-lock"></i></span>
                                                </div>
                                                <Field type="password" className="form-control with-border"
                                                       name="password" placeholder="Password" required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" style={{fontSize: '1.5em'}}><i
                                                        className="fa fa-lock"></i></span>
                                                </div>
                                                <Field type="password" className="form-control" name="confirmPassword"
                                                       placeholder="Confirm Password" required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" style={{fontSize: '1.5em'}}><i
                                                        className="fa fa-phone"></i></span>
                                                </div>
                                                <Field type="text" className="form-control" name="phone"
                                                       placeholder="Phone" required/>
                                            </div>
                                        </div>
                                        <div className="form-group top-10px">
                                        </div>
                                        <div className="form-group text-center">
                                            <button type="submit" className="btn btn-primary">Register</button>
                                        </div>
                                    </Form>
                                </Formik>
                                <div className="mx-3 my-2 py-2 bordert">
                                    <div className="text-center py-3">
                                        <a href="https://wwww.facebook.com" target="_blank" className="px-2">
                                            <img
                                                src="https://www.dpreview.com/files/p/articles/4698742202/facebook.jpeg"
                                                alt=""/>
                                        </a>
                                        <a href="https://www.google.com" target="_blank" className="px-2">
                                            <img
                                                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                                                alt=""/>
                                        </a>
                                        <a href="https://www.github.com" target="_blank" className="px-2">
                                            <img
                                                src="https://www.freepnglogos.com/uploads/512x512-logo-png/512x512-logo-github-icon-35.png"
                                                alt=""/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

