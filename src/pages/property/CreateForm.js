import FileUpload from "../../services/FileUpload";
import React, {useEffect, useState} from "react";
import './propertyForm.css'
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBath,
    faBed,
    faCircleInfo, faKitchenSet,
    faMapLocationDot,
    faMoneyBill,
    faMountainCity,
    faTv
} from "@fortawesome/free-solid-svg-icons";
import {Field, Form, Formik} from "formik";
import {addProperty} from "../../services/property/propertyService";
import {getCategories} from "../../services/category/categoryService";
import {getLocations} from "../../services/location/locationService";

export default function CreateForm() {
    let dispatch = useDispatch()

    let [urls, setUrls] = useState([])

    let currentUser = useSelector((state) => {
        return state.users.currentUser
    })

    let locations = useSelector(state => {
        return state.locations.locations
    })

    let categories = useSelector(state => {
        return state.categories.categories
    })

    useEffect(() => {
        dispatch(getCategories())
        dispatch(getLocations())
    }, [])

    const handleAdd = async (values) => {
        console.log(values)
        await dispatch(addProperty(values))
    }

    return (
        <>
            <Formik initialValues={{
                name: "",
                price: "",
                bedroom: "",
                bathroom: "",
                livingRoom: "",
                kitchen: "",
                information: "",
                category: {
                    id: ""
                },
                location: {
                    id: ""
                },
                user: {
                    id: currentUser.id
                }
            }} onSubmit={values => {
                handleAdd({values}).then()
            }}>
                <Form>
                    <div className="container-xxl py-5">
                        <div className="container">
                            <div className="row-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                <div className="row g-2">
                                    <div className="col-md">
                                        <div className={`input-group`}>
                                            <span className="input-group-text"><FontAwesomeIcon icon={faMountainCity}/></span>
                                            <div className="form-floating">
                                                <Field type="text" className="form-control"
                                                       id="floatingInputGroup2"
                                                       placeholder="Username" required
                                                       name={`name`}/>
                                                <label htmlFor="floatingInputGroup2">Property Name</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <Field as={`select`} className="form-select" id="floatingSelectGrid"
                                                   name={`category`}>
                                                <option selected>Choice Property Type</option>
                                                {categories.map((category, index) => (
                                                    <option key={index} value={category.id}>{category.name}</option>
                                                ))}
                                            </Field>
                                            <label htmlFor="floatingSelectGrid">Works with selects</label>
                                        </div>
                                    </div>
                                </div>
                                <div id="carouselExampleControls" className="carousel slide pt-5"
                                     data-bs-ride="carousel">
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
                                            <img src="link_to_thumbnail_image1.jpg" className="d-block w-100"
                                                 alt="Thumbnail 1"
                                                 data-bs-target="#carouselExampleControls" data-bs-slide-to="0"/>
                                        </div>
                                        <div className="col">
                                            <img src="link_to_thumbnail_image2.jpg" className="d-block w-100"
                                                 alt="Thumbnail 2"
                                                 data-bs-target="#carouselExampleControls" data-bs-slide-to="1"/>
                                        </div>
                                        <div className="col">
                                            <img src="link_to_thumbnail_image3.jpg" className="d-block w-100"
                                                 alt="Thumbnail 3"
                                                 data-bs-target="#carouselExampleControls" data-bs-slide-to="2"/>
                                        </div>
                                    </div>
                                </div>
                                <div className={`row pt-2`}>
                                    <FileUpload/>
                                </div>
                            </div>
                            <div className="row g-5 align-items-center pt-5">
                                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <div className={`input-group`}>
                                                <span className="input-group-text"><FontAwesomeIcon icon={faMapLocationDot}/></span>
                                                <Field as={`select`} className="form-select" id="floatingSelectGrid"
                                                       name={`location`}>
                                                    <option selected>Choice Location</option>
                                                    {locations.map((location, index) => (
                                                        <option key={index} value={location.id}>{location.name}</option>
                                                    ))}
                                                </Field>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group pt-2">
                                        <span className="input-group-text"><FontAwesomeIcon icon={faCircleInfo}/></span>
                                        <div className="form-floating">
                                            <Field type="text" className="form-control"
                                                   id="floatingInputGroup2"
                                                   placeholder="Information" required
                                                   name={`information`}/>
                                            <label htmlFor="floatingInputGroup2">Information</label>
                                        </div>
                                    </div>
                                    <div className="input-group pt-2">
                                        <span className="input-group-text"><FontAwesomeIcon icon={faMoneyBill}/></span>
                                        <div className="form-floating">
                                            <Field type="text" className="form-control"
                                                   id="floatingInputGroup2"
                                                   placeholder="Price" required
                                                   name={`price`}/>
                                            <label htmlFor="floatingInputGroup2">Price</label>
                                        </div>
                                    </div>
                                    <div className="input-group pt-2">
                                        <span className="input-group-text"><FontAwesomeIcon icon={faTv}/></span>
                                        <div className="form-floating">
                                            <Field type="text" className="form-control"
                                                   id="floatingInputGroup2"
                                                   placeholder="Living Room" required
                                                   name={`livingRoom`}/>
                                            <label htmlFor="floatingInputGroup2">Living Room</label>
                                        </div>
                                    </div>
                                    <div className="input-group pt-2">
                                        <span className="input-group-text"><FontAwesomeIcon icon={faBed}/></span>
                                        <div className="form-floating">
                                            <Field type="text" className="form-control"
                                                   id="floatingInputGroup2"
                                                   placeholder="Bedroom" required
                                                   name={`bedroom`}/>
                                            <label htmlFor="floatingInputGroup2">Bedroom</label>
                                        </div>
                                    </div>
                                    <div className="input-group pt-2">
                                        <span className="input-group-text"><FontAwesomeIcon icon={faBath}/></span>
                                        <div className="form-floating">
                                            <Field type="text" className="form-control"
                                                   id="floatingInputGroup2"
                                                   placeholder="Bathroom" required
                                                   name={`bathroom`}/>
                                            <label htmlFor="floatingInputGroup2">Bathroom</label>
                                        </div>
                                    </div>
                                    <div className="input-group pt-2">
                                        <span className="input-group-text"><FontAwesomeIcon icon={faKitchenSet}/></span>
                                        <div className="form-floating">
                                            <Field type="text" className="form-control"
                                                   id="floatingInputGroup2"
                                                   placeholder="Kitchen" required
                                                   name={`kitchen`}/>
                                            <label htmlFor="floatingInputGroup2">Kitchen</label>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary py-3 px-5 mt-3">Add Property</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    )
}