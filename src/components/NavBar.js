import {useState} from "react";
import './navbar.css'
export default function NavBar(){
    const [showPassword, setShowPassword] = useState(false); // State để theo dõi việc hiển thị mật khẩu
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginBtnClick = () => {
        setShowLoginForm(true);
        setShowRegisterForm(false);
    };

    const handleCloseBtnClick = () => {
        setShowLoginForm(false);
        setShowRegisterForm(false);
    };

    const handleRegisterClick = () => {
        setShowLoginForm(false);
        setShowRegisterForm(true);
    };
    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState); // Đảo ngược trạng thái hiển thị mật khẩu
    };
    const handleLoginFormSubmit = (event) => {
        event.preventDefault();
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        console.log("Email:", email);
        console.log("Password:", password);
        event.target.reset();
        // Here you can handle form submission, e.g., send data to server
    };

    const handleRegisterFormSubmit = (event) => {
        event.preventDefault();
    };
    return(
        <>
            <div className="container-fluid nav-bar bg-transparent">
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                    <a href="index.html" className="navbar-brand d-flex align-items-center text-center">
                        <div className="icon p-2 me-2">
                            <img className="img-fluid" src={"/img/icon-deal.png"} alt="Icon"
                                 style={{width: "30px", height: "30px"}}/>
                        </div>
                        <h1 className="m-0 text-primary">Makaan</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <a href="index.html" className="nav-item nav-link active">Home</a>
                            <a href="about.html" className="nav-item nav-link">About</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <a href="property-list.html" className="dropdown-item">Property List</a>
                                    <a href="property-type.html" className="dropdown-item">Property Type</a>
                                    <a href="property-agent.html" className="dropdown-item">Property Agent</a>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                    <a href="404.html" className="dropdown-item">404 Error</a>
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                        <a onClick={handleLoginBtnClick} className="btn btn-primary px-3 d-none d-lg-flex">Login</a>
                    </div>
                </nav>

                {showLoginForm && (
                    <div className="container">
                        <div className="row">
                            <div className="offset-md-2 col-lg-5 col-md-7 offset-lg-4 offset-md-3">
                                <div className="panel border bg-white position-relative"> {/* Thêm class position-relative để xác định vị trí của nút Close */}
                                    <button className="close-btn" onClick={handleCloseBtnClick}>
                                        <span>&times;</span>
                                    </button>
                                    <div className="panel-heading">
                                        <h3 className="pt-3 font-weight-bold">Đăng nhập</h3>
                                    </div>
                                    <div className="panel-body p-3">
                                        <form action="" method="POST">
                                            <div className="form-group py-2">
                                                <div className="input-field">
                                                    <span className="far fa-user p-2"></span>
                                                    <input type="text" placeholder="Username or Email" required />
                                                </div>
                                            </div>
                                            <div className="form-group py-1 pb-2">
                                                <div className="input-field">
                                                    <span className="fas fa-lock px-2"></span>
                                                    <input
                                                        type={showPassword ? "text" : "password"}
                                                        placeholder="Enter your Password"
                                                        required
                                                    />
                                                    <button type="button" className="btn bg-white text-muted" onClick={togglePasswordVisibility}>
                                                        <span className={showPassword ? "fas fa-eye" : "fas fa-eye-slash"}></span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="form-inline">
                                                <input type="checkbox" name="remember" id="remember" />
                                                <label htmlFor="remember" className="text-muted">Remember me</label>
                                                <a href="#" id="forgot" className="font-weight-bold">Forgot password ?</a>
                                            </div>
                                            <div className="btn-custom btn-primary btn-block mt-3">Login</div>
                                            <div className="text-center pt-4 text-muted">Don't have an account? <a onClick={handleRegisterClick} style={{ color: '#007BFF' }}>Sign up</a>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="mx-3 my-2 py-2 bordert">
                                        <div className="text-center py-3">
                                            <a href="https://wwww.facebook.com" target="_blank" className="px-2">
                                                <img src="https://www.dpreview.com/files/p/articles/4698742202/facebook.jpeg" alt="" />
                                            </a>
                                            <a href="https://www.google.com" target="_blank" className="px-2">
                                                <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                                                     alt="" />
                                            </a>
                                            <a href="https://www.github.com" target="_blank" className="px-2">
                                                <img src="https://www.freepnglogos.com/uploads/512x512-logo-png/512x512-logo-github-icon-35.png"
                                                     alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}


                {showRegisterForm && (
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <button className="close-btn" onClick={handleCloseBtnClick}>
                                            <span>&times;</span>
                                        </button>
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
                                        <form>
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
                                                    <input type="password" className="form-control with-border" name="password" placeholder="Password" required />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" style={{ fontSize: '1.5em' }}><i className="fa fa-lock" ></i></span>
                                                    </div>
                                                    <input type="password" className="form-control" name="password" placeholder="Re-type Password" required />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text" style={{ fontSize: '1.5em' }}><i className="fa fa-user"></i></span>
                                                            </div>
                                                            <input type="text" className="form-control" name="first_name" placeholder="First Name" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text" style={{ fontSize: '1.5em' }}><i className="fa fa-user"></i></span>
                                                            </div>
                                                            <input type="text" className="form-control" name="last_name" placeholder="Last Name" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group top-10px">
                                            </div>
                                            <div className="form-group text-center">
                                                <button type="submit" className="btn btn-primary">Register</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}