import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../services/category/categoryService";
import {Link} from "react-router-dom";
import "./Category.css"
function Category() {
    const propertyItems = [
        {icon: 'img/icon-apartment.png', title: 'Apartment', properties: '123 Properties', delay: '0.1s'},
        {icon: 'img/icon-villa.png', title: 'Villa', properties: '123 Properties', delay: '0.3s'},
        {icon: 'img/icon-house.png', title: 'Home', properties: '123 Properties', delay: '0.5s'},
        {icon: 'img/icon-housing.png', title: 'Office', properties: '123 Properties', delay: '0.7s'},
        {icon: 'img/icon-building.png', title: 'Building', properties: '123 Properties', delay: '0.1s'},
        {icon: 'img/icon-neighborhood.png', title: 'Townhouse', properties: '123 Properties', delay: '0.3s'},
        {icon: 'img/icon-condominium.png', title: 'Shop', properties: '123 Properties', delay: '0.5s'},
        {icon: 'img/icon-luxury.png', title: 'Garage', properties: '123 Properties', delay: '0.7s'}
    ];

    let dispatch = useDispatch()
    let categories = useSelector(state => {
        return state.categories.categories
    })
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const [indexOfLastItem, setIndexOfLastItem] = useState(0);

    useEffect(() => {
        dispatch(getCategories())
    }, [])
    const renderPropertyItems = () => {
        const indexOfLastItem = currentPage * itemsPerPage; // Tính chỉ mục cuối cùng của mục cần hiển thị.
        const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Tính chỉ mục đầu tiên của mục cần hiển thị.
        const currentItems = categories.slice(indexOfFirstItem, indexOfLastItem);
        return currentItems.map((category, index) => (
            <div key={index} className={`col-lg-3 col-sm-6 wow fadeInUp`} data-wow-delay={`0.5s`}>
                <Link to={``} className="cat-item d-block bg-light text-center rounded p-3">
                    <div className="rounded p-4">
                        <div className="icon mb-3">
                            <img className="img-fluid" src={``} alt="Icon"/>
                        </div>
                        <h6>{category.name}</h6>
                        <span>10</span>
                    </div>
                </Link>
            </div>
        ));
    };
    const handleNextPage = () => {
        const nextIndexOfLastItem = currentPage * itemsPerPage;
        setIndexOfLastItem(nextIndexOfLastItem);
        setCurrentPage(currentPage + 1);
    };


    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };
    const totalItems = categories.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const isLastPage = currentPage === totalPages;
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s"
                         style={{maxWidth: '600px'}}>
                        <h1 className="mb-3">Property Types</h1>
                        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum
                            sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div className="wrapper ">
                        <button className="icon-container" onClick={handlePrevPage} disabled={currentPage === 1}>
                            <i className="bi bi-chevron-left"></i>
                        </button>
                        <div className="content-wrapper">
                            <div className="inner-wrapper">
                                <div className="row g-4">
                                    {renderPropertyItems()}
                                </div>
                            </div>
                        </div>
                        <button className="icon-container" onClick={handleNextPage} disabled={isLastPage || ((totalItems % itemsPerPage === 0) && currentPage === totalPages)}
                        >
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Category;
