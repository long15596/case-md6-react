import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import React, {useEffect, useState} from "react";
import {getUsers} from "../../services/user/usersServices";
import {Link} from "react-router-dom";

export default function UserTable() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let users = useSelector(state => {
        return state.users.users
    })
    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(10);
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <>
            <div>
                <div className="col-12">
                    <div className="navbar">
                        <p className="navbar-brand">List User</p>
                        <form className="form-inline d-flex">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-hover mb-0">
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col">User #</th>
                                <th scope="col">Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Enabled</th>
                                <th scope="col">Role</th>
                            </tr>
                            </thead>
                            <tbody>
                            {currentUsers.map((user, index) => (
                                <tr onClick={() => {
                                    navigate(`/admin/user/${user.id}`)

                                }}>
                                    <td>{index}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.enabled ? "Active" : "Block"}</td>
                                    <td><span>{user.roles[0].name}</span></td>
                                    {/*<Link to={`user/${user.id}`}>hihi</Link>*/}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <nav>
                <ul className="pagination">
                    {pageNumbers.map((number) => (
                        <li key={number} className="page-item">
                            <button onClick={() => paginate(number)} className="page-link">
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}