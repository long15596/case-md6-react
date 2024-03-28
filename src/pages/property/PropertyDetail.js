import {useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBath, faBed, faKitchenSet, faMapLocationDot, faMountainCity, faTv} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect} from "react";
import Comment from "../../components/Comment";
import {getImages} from "../../services/image/imageService";
import './propertyForm.css'

export default function PropertyDetail() {
    let {id} = useParams()
    let dispatch = useDispatch()
    let navigate = useNavigate()

    let currentUser = useSelector(state => {
        return state.users.currentUser
    })
    let images = useSelector(state => {
        return state.images.images
    })

    useEffect(() => {
        dispatch(getImages({id}))
    }, [])
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
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row">
                        <div className="row-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex justify-content-between align-items-start">
                                <h1 className="mb-4"><FontAwesomeIcon icon={faMountainCity}/> {properties[0].name}
                                </h1>
                                <h3 className="mb-4">{properties[0].category.name}</h3>
                            </div>
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    {images.map((image, index) => (
                                        <div className={`carousel-item ${index === 0 ? `active` : ''}`}>
                                            <img src={image.src} className="img-fluid d-block w-100 large-thumbnail"
                                                 alt={`Large Thumbnail ${index}`}/>
                                        </div>
                                    ))}
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
                                    {images.map((image, index) => (
                                        <div className="col">
                                            <img src={image.src} className="d-block w-100 square-thumbnail"
                                                 alt={`Thumbnail ${index}`}
                                                 data-bs-target="#carouselExampleControls"
                                                 data-bs-slide-to={index}/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center pt-2">
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <h2 className="mb-4"><FontAwesomeIcon
                                    icon={faMapLocationDot}/> {properties[0].location.name}</h2>
                                <p className="mb-4">{properties[0].information}</p>
                                <div className={`d-flex align-items-center`}>
                                    <h3 className="mb-4">{properties[0].price}$</h3><p>/ night</p>
                                </div>
                                <p><FontAwesomeIcon icon={faTv}/> {properties[0].livingRoom} Living Room</p>
                                <p><FontAwesomeIcon icon={faBed}/> {properties[0].bedroom} Bed</p>
                                <p><FontAwesomeIcon icon={faBath}/> {properties[0].bathroom} Bath</p>
                                <p><FontAwesomeIcon icon={faKitchenSet}/>{properties[0].kitchen} Kitchen</p>
                                <Link to={`/edit-property/${properties[0].id}`}
                                      className={`btn btn-primary py-3 px-5 mt-3`}>Edit</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Comment></Comment>
        </>
    )
}