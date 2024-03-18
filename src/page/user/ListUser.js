import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../services/user/usersServices";
import {Link} from "react-router-dom";
export default function ListUser() {
    const dispatch = useDispatch();
    const users = useSelector((state) => {
        console.log(state)
        return state.users.users
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const renderUsers = currentUsers.map((user, index) => (
        <tr key={user.id}>
            <th scope="row">{indexOfFirstUser + index + 1}</th>
            <Link to={`/userprofile/${user.id}`}>{user.name}</Link>
            <td>{user.phone}</td>
            <td>{user.enabled ? 'Kích hoạt' : 'Không kích hoạt'}</td>
        </tr>
    ));

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <h1>Danh sách người sử dụng</h1>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Họ và tên</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col">Trạng thái</th>
                        </tr>
                        </thead>
                        <tbody>
                        {renderUsers}
                        </tbody>
                    </table>
                    <nav>
                        <ul className="pagination">
                            {pageNumbers.map((number) => (
                                <li key={number} className="page-item">
                                    <a onClick={() => paginate(number)}  className="page-link">
                                        {number}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}
