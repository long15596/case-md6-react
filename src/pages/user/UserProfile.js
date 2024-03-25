import './UserProfile.css'
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import { getUsers} from "../../services/user/usersServices";

export default function UserProfile() {
    let {id} = useParams();
    let dispatch = useDispatch()
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
    useEffect(() => {
        if (users === null || users.length === 0) {
           dispatch(getUsers())
        }
    }, []);

    if (!users || users.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <>
                <div className="row gutters-sm">
                    <div className="offset-2 col-md-4 mb-3">
                        <div className="card" style={{height: "280px"}}>
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center" style={{
                                    width: "374px",
                                    height: "359px"
                                }}>
                                    <img src={users[0].avatar} alt="Admin"
                                         className="rounded-circle"/>
                                    <div className="mt-3">
                                        <h4>{users[0].name}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mt-3">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                             stroke-linejoin="round" className="feather feather-globe mr-2 icon-inline">
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
                                                <h6 className="mb-0">Username</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">{users[0].username}</div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Phone</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">{users[0].phone}</div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Address</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">{users[0].address}</div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Status</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">{users[0].status}</div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Role</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">{users[0].roles[0].name}</div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <button className="btn btn-primary px-3 d-none d-lg-flex" onClick={() => {

                                                }}>Edit Profile
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="navbar">
                            <a className="navbar-brand">Lịch sử thuê nhà</a>
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-hover mb-0">
                                <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Order #</th>
                                    <th scope="col">Date Purchased</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><a className="navi-link" href="" data-toggle="modal">78A643CD409</a></td>
                                    <td>August 08, 2017</td>
                                    <td><span className="badge badge-danger">Canceled</span></td>
                                    <td><span>$760.50</span></td>
                                </tr>
                                <tr>
                                    <td><a className="navi-link" href="#" data-toggle="modal">34VB5540K83</a></td>
                                    <td>July 21, 2017</td>
                                    <td><span className="badge badge-info">In Progress</span></td>
                                    <td>$315.20</td>
                                </tr>
                                <tr>
                                    <td><a className="navi-link" href="" data-toggle="modal">112P45A90V2</a></td>
                                    <td>June 15, 2017</td>
                                    <td><span className="badge badge-warning">Delayed</span></td>
                                    <td>$1,264.00</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
    )
}