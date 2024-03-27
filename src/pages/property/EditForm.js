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
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {Field, Form, Formik} from "formik";
import FileUpload from "../../services/FileUpload";
import {addProperty, getProperties, updateProperty} from "../../services/property/propertyService";
import {addImages, deleteImages, getImages} from "../../services/image/imageService";
import {getCategories} from "../../services/category/categoryService";
import {getLocations} from "../../services/location/locationService";

export default function EditForm() {
    let {id} = useParams()
    let dispatch = useDispatch()
    let navigate = useNavigate()

    let currentUser = useSelector((state) => {
        return state.users.currentUser
    })

    let locations = useSelector(state => {
        return state.locations.locations
    })

    let categories = useSelector(state => {
        return state.categories.categories
    })

    let imageUrls = useSelector(state => state.images.images.map(image => image.src));

    console.log(imageUrls)

    useEffect(() => {
        dispatch(getImages({id}))
        dispatch(getProperties())
        dispatch(getCategories())
        dispatch(getLocations())
    }, [])

    let [locationId, setLocationId] = useState('')
    let [categoryId, setCategoryId] = useState('')
    let [urls, setUrls] = useState(imageUrls)

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
    let handleLocation = (event) => {
        setLocationId(event.target.value)
    }

    let handleCategory = (event) => {
        setCategoryId(event.target.value)
    }
    let handleUpdate = async (id, values) => {
        values = {...values, category: {id: categoryId}, location: {id: locationId}}
        await dispatch(updateProperty({id, values}))
    }
    let handleAddImage = async () => {
        for (const url of urls) {
            let values = {
                src: url,
                property: {
                    id: properties[0].id
                }
            }
            await dispatch(deleteImages({id: properties[0].id}))
            await dispatch(addImages({values}))
            navigate(`/property-detail/${properties[0].id}`)
        }
    }
    return (
        <>
            <div className="container-xxl py-5">
                <div className="row">
                    <div className="col-md-6 ">
                        <Formik initialValues={properties[0]} onSubmit={values => {
                            handleUpdate(properties[0].id, values).then()
                        }} enableReinitialize={true}>
                            <Form>
                                <div className="container-xxl">
                                    <div className="row align-items-center">
                                        <div className="col wow fadeIn" data-wow-delay="0.5s">
                                            <div className="input-group">
                                                <span
                                                    className="input-group-text d-flex justify-content-center align-items-center square-icon">
                                                    <FontAwesomeIcon icon={faMountainCity}/></span>
                                                <div className="form-floating">
                                                    <Field type="text" className="form-control"
                                                           id="floatingInputGroup2"
                                                           placeholder="Information" required
                                                           name={`name`}/>
                                                    <label htmlFor="floatingInputGroup2">Property Name</label>
                                                </div>
                                            </div>
                                            <div className="row g-2 pt-2">
                                                <div className="col-md">
                                                    <div className="form-floating">
                                                        <select className="form-select" id="floatingSelectGrid"
                                                                onChange={handleCategory}>
                                                            {categories.map((category, index) => (
                                                                <option key={index}
                                                                        value={category.id}>{category.name}</option>
                                                            ))}
                                                        </select>
                                                        <label htmlFor="floatingSelectGrid">Choice Property Type</label>
                                                    </div>
                                                </div>
                                                <div className="col-md">
                                                    <div className="form-floating">
                                                        <select className="form-select" id="floatingSelectGrid"
                                                                onChange={handleLocation}>
                                                            {locations.map((location, index) => (
                                                                <option key={index}
                                                                        value={location.id}>{location.name}</option>
                                                            ))}
                                                        </select>
                                                        <label htmlFor="floatingSelectGrid">Choice Location</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="input-group pt-2">
                                                <span
                                                    className="input-group-text d-flex justify-content-center align-items-center square-icon">
                                                    <FontAwesomeIcon icon={faCircleInfo}/></span>
                                                <div className="form-floating">
                                                    <Field type="text" className="form-control"
                                                           id="floatingInputGroup2"
                                                           placeholder="Information" required
                                                           name={`information`}/>
                                                    <label htmlFor="floatingInputGroup2">Information</label>
                                                </div>
                                            </div>
                                            <div className="input-group pt-2">
                                                <span
                                                    className="input-group-text d-flex justify-content-center align-items-center square-icon"><FontAwesomeIcon
                                                    icon={faMoneyBill}/></span>
                                                <div className="form-floating">
                                                    <Field type="text" className="form-control"
                                                           id="floatingInputGroup2"
                                                           placeholder="Price" required
                                                           name={`price`}/>
                                                    <label htmlFor="floatingInputGroup2">Price</label>
                                                </div>
                                            </div>
                                            <div className="input-group pt-2">
                                                <span
                                                    className="input-group-text d-flex justify-content-center align-items-center square-icon"><FontAwesomeIcon
                                                    icon={faTv}/></span>
                                                <div className="form-floating">
                                                    <Field type="text" className="form-control"
                                                           id="floatingInputGroup2"
                                                           placeholder="Living Room" required
                                                           name={`livingRoom`}/>
                                                    <label htmlFor="floatingInputGroup2">Living Room</label>
                                                </div>
                                            </div>
                                            <div className="input-group pt-2">
                                                <span
                                                    className="input-group-text d-flex justify-content-center align-items-center square-icon"><FontAwesomeIcon
                                                    icon={faBed}/></span>
                                                <div className="form-floating">
                                                    <Field type="text" className="form-control"
                                                           id="floatingInputGroup2"
                                                           placeholder="Bedroom" required
                                                           name={`bedroom`}/>
                                                    <label htmlFor="floatingInputGroup2">Bedroom</label>
                                                </div>
                                            </div>
                                            <div className="input-group pt-2">
                                                <span
                                                    className="input-group-text d-flex justify-content-center align-items-center square-icon"><FontAwesomeIcon
                                                    icon={faBath}/></span>
                                                <div className="form-floating">
                                                    <Field type="text" className="form-control"
                                                           id="floatingInputGroup2"
                                                           placeholder="Bathroom" required
                                                           name={`bathroom`}/>
                                                    <label htmlFor="floatingInputGroup2">Bathroom</label>
                                                </div>
                                            </div>
                                            <div className="input-group pt-2">
                                                <span
                                                    className="input-group-text d-flex justify-content-center align-items-center square-icon"><FontAwesomeIcon
                                                    icon={faKitchenSet}/></span>
                                                <div className="form-floating">
                                                    <Field type="text" className="form-control"
                                                           id="floatingInputGroup2"
                                                           placeholder="Kitchen" required
                                                           name={`kitchen`}/>
                                                    <label htmlFor="floatingInputGroup2">Kitchen</label>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary py-3 px-5 mt-3">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                    <div className="col-md-6 d-flex">
                        <div id="carouselLargeThumnail" className="carousel slide" data-bs-ride="carousel">
                            <div className={`col-md-10`}>
                                <FileUpload onUpload={(uploadedUrls) => {
                                    setUrls(uploadedUrls)
                                }}/>
                            </div>
                            <div className="carousel-inner pt-2">
                                {urls.map((url, index) => (
                                    <div className={`carousel-item ${index === 0 ? `active` : ''}`}>
                                        <img src={url} className="d-block w-100 square-thumbnail"
                                             alt={`Large Thumbnail ${index}`}/>
                                    </div>
                                ))}
                            </div>
                            <button className="carousel-control-prev" type="button"
                                    data-bs-target="#carouselLargeThumnail" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button"
                                    data-bs-target="#carouselLargeThumnail" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                            <div className="row mt-3">
                                {urls.map((url, index) => (
                                    <div className="col">
                                        <img src={url} className="d-block w-100 square-thumbnail"
                                             alt={`Thumbnail ${index}`}
                                             data-bs-target="#carouselLargeThumnail" data-bs-slide-to={index}/>
                                    </div>
                                ))}
                                <button className="btn btn-primary py-3 px-5 mt-3" onClick={handleAddImage}>
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}