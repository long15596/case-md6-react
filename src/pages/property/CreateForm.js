import FileUpload from "../../services/FileUpload";
import React, {useEffect, useState} from "react";
import './propertyForm.css'
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBath,
    faBed,
    faCircleInfo, faKitchenSet, faLocationDot,
    faMapLocationDot,
    faMoneyBill,
    faMountainCity,
    faTv
} from "@fortawesome/free-solid-svg-icons";
import {Field, Form, Formik} from "formik";
import {addProperty} from "../../services/property/propertyService";
import {getCategories} from "../../services/category/categoryService";
import {getLocations} from "../../services/location/locationService";
import {addImages} from "../../services/image/imageService";

export default function CreateForm() {
    let dispatch = useDispatch()

    let currentUser = useSelector((state) => {
        return state.users.currentUser
    })

    let properties = useSelector(state => {
        return state.properties.properties
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

    let [showUpload, setShowUpload] = useState(false)
    let [locationId, setLocationId] = useState('')
    let [categoryId, setCategoryId] = useState('')
    let [propertyId, setPropertyId] = useState('')
    let [urls, setUrls] = useState([])
    let handleLocation = (event) => {
        setLocationId(event.target.value)
    }

    let handleCategory = (event) => {
        setCategoryId(event.target.value)
    }
    let handleAdd = async (values) => {
        values = {...values, category: {id: categoryId}, location: {id: locationId}}
        let resProperty = await dispatch(addProperty({values}))
        console.log(resProperty.payload.id)
        await setPropertyId(resProperty.payload.id)
        await setShowUpload(true)
    }
    let handleAddImage = async () => {
        for (let property of properties) {
            if (propertyId == property.id) {
                console.log(property.id)
                for (let url of urls) {
                    let values = {
                        src: url,
                        property: {id: property.id},
                    }
                    console.log(values)
                    await dispatch(addImages({values}))
                }
            }
        }
    }
    //     properties.map((property) => {
    //         if (propertyId === property.id ) {
    //             console.log(propertyId)
    //             urls.map(async (url) => {
    //                 let values = {
    //                     src: url,
    //                     property: {id: property.id},
    //                 }
    //                 console.log(values)
    //                 await dispatch(addImages({values}))
    //             })
    //         }
    //     })
    // }
    return (
        <>
            <div className="container-xxl py-5">
                <div className="row">
                    <div className="col-md-6 ">
                        <Formik initialValues={{
                            name: "",
                            price: "",
                            bedroom: "",
                            bathroom: "",
                            livingRoom: "",
                            kitchen: "",
                            information: "",
                            user: {
                                id: currentUser.id
                            }
                        }} onSubmit={values => {
                            handleAdd(values).then()
                        }}>
                            <Form>
                                <div className="container-xxl">
                                    <div className="row align-items-center">
                                        <div className="col wow fadeIn" data-wow-delay="0.5s">
                                            <div className="input-group">
                                                <span className="input-group-text"><FontAwesomeIcon
                                                    icon={faMountainCity}/></span>
                                                <div className="form-floating">
                                                    <Field type="text" className="form-control"
                                                           id="floatingInputGroup2"
                                                           placeholder="Information" required
                                                           name={`name`}/>
                                                    <label htmlFor="floatingInputGroup2">Name</label>
                                                </div>
                                            </div>
                                            <div className="col-md pt-2">
                                                <div className="form-floating">
                                                    <div className={`input-group`}>
                                                        <span className="input-group-text"><FontAwesomeIcon
                                                            icon={faLocationDot}/></span>
                                                        <select className="form-select" id="floatingSelectGrid"
                                                                onChange={handleCategory}>
                                                            <option selected>Choice Property Type</option>
                                                            {categories.map((category, index) => (
                                                                <option key={index}
                                                                        value={category.id}>{category.name}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md pt-2">
                                                <div className="form-floating">
                                                    <div className={`input-group`}>
                                                <span className="input-group-text"><FontAwesomeIcon
                                                    icon={faMapLocationDot}/></span>
                                                        <select className="form-select" id="floatingSelectGrid"
                                                                onChange={handleLocation}>
                                                            <option selected>Choice Location</option>
                                                            {locations.map((location, index) => (
                                                                <option key={index}
                                                                        value={location.id}>{location.name}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="input-group pt-2">
                                                <span className="input-group-text"><FontAwesomeIcon
                                                    icon={faCircleInfo}/></span>
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
                                                <span className="input-group-text"><FontAwesomeIcon
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
                                                <span className="input-group-text"><FontAwesomeIcon
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
                                                <span className="input-group-text"><FontAwesomeIcon
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
                    <div className="col-md-6 ">
                        {showUpload &&
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className={`row`}>
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
                                    {urls.map((url, index) => (
                                        <div className="col">
                                            <img src={url} className="d-block w-100 square-thumbnail"
                                                 alt={`Thumbnail ${index}`}
                                                 data-bs-target="#carouselExampleControls" data-bs-slide-to={index}/>
                                        </div>
                                    ))}
                                    <button className="btn btn-primary py-3 px-5 mt-3" onClick={handleAddImage}>Add Property</button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}