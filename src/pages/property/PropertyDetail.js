import {useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBath, faBed, faKitchenSet, faMapLocationDot, faMountainCity, faTv} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Comment from "../../components/Comment";

export default function PropertyDetail() {
    let {id} = useParams()
    let dispatch = useDispatch()
    let navigate = useNavigate()

    let currentUser = useSelector(state => {
        return state.users.currentUser
    })

    let properties = useSelector(state => {
        if (!state.properties.properties || state.properties.properties.length === 0) {
            return [];
        }
        return state.properties.properties.filter((property) => {
            if (property) return property.id == id
        })
    })
    if (!properties || properties.length === 0) {
        return <div>Loading...</div>;
    }
    return(
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="d-flex justify-content-between align-items-start">
                            <h1 className="mb-4"><FontAwesomeIcon icon={faMountainCity}/> {properties[0].name}</h1>
                            <h3 className="mb-4">{properties[0].category.name}</h3>
                        </div>
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="link_to_large_image1.jpg" className="d-block w-100"
                                         alt="Large Thumbnail 1"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="link_to_large_image2.jpg" className="d-block w-100"
                                         alt="Large Thumbnail 2"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="link_to_large_image3.jpg" className="d-block w-100"
                                         alt="Large Thumbnail 3"/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                            <div className="row mt-3">
                                <div className="col">
                                    <img src="link_to_thumbnail_image1.jpg" className="d-block w-100" alt="Thumbnail 1"
                                         data-bs-target="#carouselExampleControls" data-bs-slide-to="0"/>
                                </div>
                                <div className="col">
                                    <img src="link_to_thumbnail_image2.jpg" className="d-block w-100" alt="Thumbnail 2"
                                         data-bs-target="#carouselExampleControls" data-bs-slide-to="1"/>
                                </div>
                                <div className="col">
                                    <img src="link_to_thumbnail_image3.jpg" className="d-block w-100" alt="Thumbnail 3"
                                         data-bs-target="#carouselExampleControls" data-bs-slide-to="2"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 align-items-center pt-2">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h2 className="mb-4"><FontAwesomeIcon icon={faMapLocationDot} /> {properties[0].location.name}</h2>
                            <p className="mb-4">{properties[0].information}</p>
                            <div className={`d-flex align-items-center`}>
                                <h3 className="mb-4">{properties[0].price}$</h3><p>/ night</p>
                            </div>
                            <p><FontAwesomeIcon icon={faTv}/> {properties[0].livingRoom} Living Room</p>
                            <p><FontAwesomeIcon icon={faBed}/> {properties[0].bedroom} Bed</p>
                            <p><FontAwesomeIcon icon={faBath}/> {properties[0].bathroom} Bath</p>
                            <p><FontAwesomeIcon icon={faKitchenSet}/>{properties[0].kitchen} Kitchen</p>
                            {
                             currentUser.roles[0].authority === "ROLE_USER"
                                 ?
                                 <Link to={``} className="btn btn-primary py-3 px-5 mt-3">Book Now</Link>
                                 :
                                 <Link to={``} className={`btn btn-primary py-3 px-5 mt-3`}>Edit</Link>
                            }

                        </div>
                    </div>
                </div>
            </div>
            <Comment></Comment>
        </>
    )
}