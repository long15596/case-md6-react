import FileUpload from "../../services/FileUpload";
import React, {useState} from "react";
import './propertyForm.css'
export default function CreateForm() {
    let [urls, setUrls] = useState([])


    console.log(`url`, urls)
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="about-img position-relative overflow-hidden p-5 pe-0">
                                <div className="container-fluid">
                                    <div className="row d-flex justify-content-center mt-5">
                                        <div className="col-6">
                                            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel"
                                                 align="center">
                                                <div className="carousel-inner">
                                                    {
                                                        urls.map((url, index) => (
                                                            <div
                                                                className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                                                <img
                                                                    src={url} className="rounded"/>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                                <ol className="carousel-indicators list-inline overflow-y-auto w-100">
                                                    {
                                                        urls.map((url, index) => (
                                                            <li className={`list-inline-item ${index === 0 ? 'active' : ''}`}>
                                                                <a
                                                                    id={`carousel-selector-${index}`}
                                                                    data-bs-slide-to={index}
                                                                    data-bs-target="#myCarousel">
                                                                    <img src={url} className="img-fluid rounded"
                                                                         style={{width: `50px`, height: `50px`}}/></a>
                                                            </li>
                                                        ))
                                                    }
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <FileUpload onUpload={async (uploadedUrls) => {
                                await setUrls(uploadedUrls)
                            }}/>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="mb-4">#1 Place To Find The Perfect Category</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
                                amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
                                magna dolore erat amet</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Tempor erat elitr rebum at clita</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Aliqu diam amet diam et eos</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Clita duo justo magna dolore erat amet
                            </p>
                            <a className="btn btn-primary py-3 px-5 mt-3" href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}