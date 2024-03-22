import {Col, Container, Image, Row} from 'react-bootstrap';
export default function Pagehome() {
    return(
        <div className="col-9 mx-auto mt-4">
            <h2>Đến cuối cùng</h2>
            <div className='col-6'>
                <div className="position-relative">
                    <Image
                        src="https://thanhvietcorp.vn/uploads/images/Bao%20chi/download-hinh-ngoi-nha-1024x684.jpg"
                        alt="Image of house"
                        fluid
                        style={{ width: "560px", height: "300px" }}
                        className="rounded-lg"
                    />
                </div>
                <div className='col-5'>
                    <div className="position-relative">
                        <Image
                            src="https://thanhvietcorp.vn/uploads/images/Bao%20chi/download-hinh-ngoi-nha-1024x684.jpg"
                            alt="Image of house"
                            fluid
                            className="rounded-lg"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}