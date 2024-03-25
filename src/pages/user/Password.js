import './userdetail.css'
import {Link} from "react-router-dom";
import React from "react";

export default function Password() {
    return (
        <>
            <div className="container-fluid px-4 mt-4">
                <div className="row">
                    <div className="col-12">
                        <div className="card mb-4">
                            <div className="card-header" style={{display: "flex"}}>
                                <div className={`btn-close`} aria-label={`Close`} onClick={() => {
                                    document.getElementById("idForm").style.display = "none"
                                }}>
                                </div>
                                <div style={{marginLeft:"200px"}}>
                                    Change Password
                                </div>

                            </div>

                            <div className="card-body">
                                <form>
                                    <div className="row gx-3 mb-3">
                                        <div className="col-md-12">
                                            <label className="small mb-1" htmlFor="inputFirstName"> Present
                                                Password</label>
                                            <input className="form-control" id="inputFirstName" type="text"
                                                   placeholder="Enter your first name" value="Valerie"/>
                                        </div>
                                        <div className="col-md-12">
                                            <label className="small mb-2" htmlFor="inputLastName">New Password</label>
                                            <input className="form-control" id="inputLastName" type="text"
                                                   placeholder="Enter your last name" value="Luna"/>
                                        </div>
                                        <div className="col-md-12">
                                            <label className="small mb-3" htmlFor="inputLastName">Confirm
                                                NewPassWord</label>
                                            <input className="form-control" id="inputLastName" type="text"
                                                   placeholder="Enter your last name" value="Luna"/>
                                        </div>
                                    </div>

                                    <button className="btn btn-primary" type="button">Save changes</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}