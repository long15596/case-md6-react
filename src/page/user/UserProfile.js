import './UserProfile.css'
import {useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
export default function UserProfile(){
    let {id} = useParams();
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let users = useSelector(state => {
        return state.users.users.filter(user => user.id == id)
    })
    console.log(users)
    return(
        <>
            <div className="col-8">
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" id={'name-box'}>
                            <h1 className="mb-3">{users[0].username}</h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="row gy-4">
                                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                        <div className="bg-light rounded p-3">
                                            <div className="d-flex align-items-center bg-white rounded p-3"
                                                 id={'item-box'}>
                                                <div className="icon me-3" id={'icon-box'}>
                                                    <i className="fa fa-map-marker-alt text-primary"></i>
                                                </div>
                                                <span>{users[0].address}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                                        <div className="bg-light rounded p-3">
                                            <div className="d-flex align-items-center bg-white rounded p-3"
                                                 id={'item-box'}>
                                                <div className="icon me-3" id={'icon-box'}>
                                                    <i className="fa fa-envelope-open text-primary"></i>
                                                </div>
                                                <span>{users[0].email}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                                        <div className="bg-light rounded p-3">
                                            <div className="d-flex align-items-center bg-white rounded p-3"
                                                 id={'item-box'}>
                                                <div className="icon me-3" id={'icon-box'}>
                                                    <i className="fa fa-phone-alt text-primary"></i>
                                                </div>
                                                <span>{users[0].phone}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <img className="position-relative rounded w-100 h-100" src={users[0].avatar} id={`img-box`} alt={`user-avatar`}></img>
                            </div>
                            <div className="col-md-6">
                                <div className="wow fadeInUp" data-wow-delay="0.5s">
                                    <form>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="bg-light rounded p-3">
                                                    <div className="d-flex align-items-center bg-white rounded p-3"
                                                         id={'item-box'}>
                                                        <div className="icon me-3" id={'icon-box'}>
                                                            <i className="fa fa-phone-alt text-primary"></i>
                                                        </div>
                                                        <span>{users[0].name}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="bg-light rounded p-3">
                                                    <div className="d-flex align-items-center bg-white rounded p-3"
                                                         id={'item-box'}>
                                                        <div className="icon me-3" id={'icon-box'}>
                                                            <i className="fa fa-phone-alt text-primary"></i>
                                                        </div>
                                                        <span>{users[0].enabled}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="bg-light rounded p-3">
                                                    <div className="d-flex align-items-center bg-white rounded p-3"
                                                         id={'item-box'}>
                                                        <div className="icon me-3" id={'icon-box'}>
                                                            <i className="fa fa-phone-alt text-primary"></i>
                                                        </div>
                                                        <span>So Tien Da Chi Tieu</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="bg-light rounded p-3">
                                                    <div className="d-flex align-items-center bg-white rounded p-3"
                                                         id={'item-box'}>
                                                        <div className="icon me-3" id={'icon-box'}>
                                                            <i className="fa fa-phone-alt text-primary"></i>
                                                        </div>
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary w-100 py-3" type="submit">Edit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-4">
                Lich su thue nha
            </div>
        </>
    )
}