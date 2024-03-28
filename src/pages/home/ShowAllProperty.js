import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getProperties} from "../../services/property/propertyService";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBath, faBed, faMapLocationDot, faMountainCity, faTv} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {getImagesByProperty} from "../../services/image/imageService";

export default function ShowAllProperty() {
    const dispatch = useDispatch();
    let properties = useSelector(state => {
        return state.properties.properties
    });
    // let images = useSelector(state => {
    //     return state.images.images;
    // });
    useEffect(() => {
        dispatch(getProperties())
    }, [])
    // useEffect(() => {
    //     if (properties) {
    //         properties.forEach(property => {
    //             dispatch(getImagesByProperty({id: property.id}))
    //         });
    //     }
    // }, [properties]);

    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-0 gx-5 align-items-end">
                        <div className="col-lg-6">
                            <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                                <h1 className="mb-3">Property Listing</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                            <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                                <li className="nav-item me-2">
                                    <a className="btn btn-outline-primary active" data-bs-toggle="pill"
                                       href="#tab-1">Featured</a>
                                </li>
                                <li className="nav-item me-2">
                                    <a className="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-2">For
                                        Sell</a>
                                </li>
                                <li className="nav-item me-0">
                                    <a className="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-3">For
                                        Rent</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                {
                                    properties.map((property) => (
                                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                            <div className="property-item rounded overflow-hidden">
                                                <Link to={`property-detail/${property.id}`}>
                                                    <div className="position-relative overflow-hidden">
                                                        <div><img style={{aspectRatio: `1`, objectFit: `cover`}}
                                                                  className="img-fluid" src={`${property.avatar}`}
                                                                  alt=""/></div>
                                                        <div
                                                            className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For
                                                            Sell
                                                        </div>
                                                        <div
                                                            className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">{property.category.name}</div>
                                                    </div>
                                                    <div className="p-4 pb-0">
                                                        <h5 className="text-primary mb-3"> {property.price}$/ night</h5>
                                                        <FontAwesomeIcon icon={faMountainCity}/> {property.name}
                                                        <p><FontAwesomeIcon
                                                            icon={faMapLocationDot}/> {property.location.name}</p>
                                                    </div>
                                                    <div className="d-flex border-top">
                                                        <small
                                                            className="flex-fill text-center border-end py-2"><FontAwesomeIcon
                                                            icon={faTv}/> {property.livingRoom} Living Room</small>
                                                        <small
                                                            className="flex-fill text-center border-end py-2"><FontAwesomeIcon
                                                            icon={faBed}/> {property.bedroom} Bed</small>
                                                        <small className="flex-fill text-center py-2"><FontAwesomeIcon
                                                            icon={faBath}/> {property.bathroom} Bath</small>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    ))
                                }
                                <div className="col-12 text-center">
                                    <a className="btn btn-primary py-3 px-5" href="">Browse More Property</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}