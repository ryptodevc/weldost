import React, { useState }from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import 'react-vertical-timeline-component/style.min.css';
import Video from '../components/Video';

function PropertyPage() {

    return (
        <div className="PropertyPage">
            <Container>
                <section className='text-center text-lg-start text-white pb-5 mt-5'>
                    <div className='section-title  text-white-1 mb-2'><span className='text-secondary-1'>PROPERTIES</span></div>
                    <Row className='py-3 my-3'>
                        <Col className='mb-3'>
                            <div className='fs-5 my-5'>After you have purchased one of our WMP , you actually get a travel package of different value. You can stake it and you will get 5% of the value in every month for 36 months therefore your entire trip is paid for + generate a hefty profit. Refer to our whitepaper for detailes please. There are different programs in this package also. At the moment, Austria and the Maldives, whereat these are active. We are in the process of securing further trips, accomodations to various countries where our WMP packages will be available. Passes to Austria are now ready to purchase. </div>
                        </Col>
                        {/* <Col className="d-flex align-items-center justify-content-center mb-2">
                            <Image src={Partnership}  width={320} alt="logo" className="rounded-3"/>
                        </Col> */}
                    </Row>
                    <Row className='py-3 my-3'>
                        <h1 className='text-white-1'>Austria</h1>
                        <Col lg={12} className='mb-3'>
                            <div className='fs-5 my-3'>Our Chalet can accomodate up to 6 people and located in Mayrhofen , Zillertal. Three bedrooms, fully equipped kitchen great location overlooking the town from mountainside.  Please check :</div>
                        </Col>
                        <Col className="video-container">
                            <Video link="https://www.youtube.com/embed/LGCx54aB46E?si=0LdJ2axXnIBXg2LL"/>
                        </Col>
                    </Row>
                    <Row className='py-3 my-3'>
                        <h1 className='text-white-1'>Maldives</h1>
                        <Col lg={12} className='mb-3'>
                            <div className='fs-5 my-3'>Details coming soon</div>
                        </Col>
                        <Col className="video-container">
                            <video width="400" controls autoPlay={true} muted playsInline >
                                <source src="./maldives.mp4" type="video/mp4"/>   
                            </video>
                        </Col>
                    </Row>
                </section>
            </Container>
        </div>
    );
}

export default PropertyPage;
