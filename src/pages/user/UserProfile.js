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
            <div className="container-fluid px-4 mt-4">
                <hr className="mt-0 mb-4"/>
                <div className="row">
                    <div className="col-xl-4">
                        <div className="card mb-4 mb-xl-0">
                            <div className="card-header">Profile Picture</div>
                            <div className="card-body text-center " id='card-body'>
                                <img src={users[0].avatar} alt="user-avatar" className="rounded-circle" style={{
                                    marginLeft: " 0px",
                                    width: "209px",
                                    height: "200px"
                                }}/>
                                <div className="mt-3">
                                    <h4>{users[0].name}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="card mb-4">
                            <div className="card-header">Account Details</div>
                            <div className="card-body" >
                                <div className="mb-3">
                                    <label className="small mb-1" htmlFor="inputUsername">Username</label>
                                    <div className="col-sm-9 text-secondary">{users[0].username}</div>

                                </div>
                                <div className="mb-3">
                                    <label className="small mb-1" htmlFor="inputPhone">Phone</label>
                                    <div className="col-sm-9 text-secondary">{users[0].phone}</div>

                                </div>
                                <div className="mb-3">
                                    <label className="small mb-1" htmlFor="inputLastName">Address</label>
                                    <div className="col-sm-9 text-secondary">{users[0].address} NUll</div>
                                </div>
                                <div className="row gx-3 mb-3">
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputFirstName">Name</label>
                                        <div className="col-sm-9 text-secondary">{users[0].roles[0].name}</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="navbar" id='Nav-userProfile'>
                            <div className='col-md-8'>
                                <label className="navbar-brand">Lịch sử thuê nhà</label>
                            </div>
                            <div className='col-md-4'>
                                <form className="form-inline">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                           aria-label="Search"/>
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </div>
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