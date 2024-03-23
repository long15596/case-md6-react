import FileUpload from "../../services/FileUpload";
import React, {useState} from "react";
import './propertyForm.css'
export default function CreateForm() {
    let [urls, setUrls] = useState([])
    console.log(`url`, urls)
    return (
        <>
            <div className="row">
                <div className="col-7">
                    <div className="app">
                        <div className="container-fluid">
                            <div className="row d-flex justify-content-center mt-5">
                                <div className="col-6">
                                    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel"
                                         align="center">
                                        <div className="carousel-inner">
                                            {
                                                urls.map((url, index) => (
                                                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`}><img src={url} className="rounded"/>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <ol className="carousel-indicators list-inline overflow-y-auto w-100">
                                            {
                                                urls.map((url, index) => (
                                                    <li className={`list-inline-item ${index === 0 ? 'active' : ''}`}><a id={`carousel-selector-${index}`} data-bs-slide-to={index} data-bs-target="#myCarousel">
                                                        <img src={url} className="img-fluid rounded" style={{width: `50px`, height: `50px`}}/></a></li>
                                                ))
                                            }
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-5">
                    <FileUpload onUpload={ async (uploadedUrls) => {
                        await setUrls(uploadedUrls)
                    }}/>
                </div>
            </div>
        </>
    )
}