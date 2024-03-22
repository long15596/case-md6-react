import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProperties} from "../../services/property/propertyService";

export default function ShowAllProperty() {
    const dispatch = useDispatch();
    let properties = useSelector(state => {
        return state.properties.properties
    })
    useEffect(() => {
        dispatch(getProperties())
    }, [])
    return(
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
                                    properties.map((item) => (
                                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                            <div className="property-item rounded overflow-hidden">
                                                <div className="position-relative overflow-hidden">
                                                    <a href=""><img className="img-fluid" src="img/property-1.jpg" alt=""/></a>
                                                    <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">{item.category && item.category.name}</div>
                                                </div>
                                                <div className="p-4 pb-0">
                                                    <h5 className="text-primary mb-3">{item.price}$</h5>
                                                    <a className="d-block h5 mb-2" href="">{item.name}</a>
                                                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>{item.location && item.location.name}</p>
                                                </div>
                                                <div className="d-flex border-top">
                                                    <small className="flex-fill text-center border-end py-2"><i
                                                        className="fa fa-ruler-combined text-primary me-2"></i>{item.livingRoom} Living Room</small>
                                                    <small className="flex-fill text-center border-end py-2"><i
                                                        className="fa fa-bed text-primary me-2"></i>{item.bedroom} Bed</small>
                                                    <small className="flex-fill text-center py-2"><i
                                                        className="fa fa-bath text-primary me-2"></i>{item.bathroom} Bath</small>
                                                </div>
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