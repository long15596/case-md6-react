import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getOwners} from "../../services/admin/adminsServices";

export default function ListOwner() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.owners.owners);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5); // Số lượng người dùng trên mỗi trang

    useEffect(() => {
        dispatch(getOwners());
    }, []);

    // Tính toán index bắt đầu và kết thúc của danh sách người dùng cho trang hiện tại
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    // Render danh sách người dùng cho trang hiện tại
    const renderUsers = currentUsers.map((user, index) => (
        <tr key={user.id}>
            <th scope="row">{indexOfFirstUser + index + 1}</th>
            <td>{user.name}</td>
            <td>{user.phone}</td>
            <td>{user.enabled ? 'Kích hoạt' : 'Không kích hoạt'}</td>
        </tr>
    ));

    // Logic cho nút chuyển trang
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Tính toán số lượng trang
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <div className="col">

            </div>
            <h1>Danh sách chủ nhà</h1>
            <table className="table">
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
        </>
    );
}
