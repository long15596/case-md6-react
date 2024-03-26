import './Comment.css'
export default function Comment() {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div id={`comment-title`} className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="mb-3">Our Clients Say!</h1>
                        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum
                            sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div id="commentCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="comment-item">
                                    <img id={`user-avatar`} className="img-fluid flex-shrink-0 rounded"
                                         src="img/testimonial-1.jpg"/>
                                    <div className="ps-3">
                                        <h6 className="fw-bold mb-1">Client Name</h6>
                                        <small>Profession</small>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="comment-item">
                                    <div className="comment-item">
                                        <img id={`user-avatar`} className="img-fluid flex-shrink-0 rounded"
                                             src="img/testimonial-1.jpg"/>
                                        <div className="ps-3">
                                            <h6 className="fw-bold mb-1">Client Name</h6>
                                            <small>Profession</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="comment-item">
                                    <div className="comment-item">
                                        <img id={`user-avatar`} className="img-fluid flex-shrink-0 rounded"
                                             src="img/testimonial-1.jpg"/>
                                        <div className="ps-3">
                                            <h6 className="fw-bold mb-1">Client Name</h6>
                                            <small>Profession</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="comment-item">
                                    <div className="comment-item">
                                        <img id={`user-avatar`} className="img-fluid flex-shrink-0 rounded"
                                             src="img/testimonial-1.jpg"/>
                                        <div className="ps-3">
                                            <h6 className="fw-bold mb-1">Client Name</h6>
                                            <small>Profession</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#commentCarousel"
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#commentCarousel"
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}