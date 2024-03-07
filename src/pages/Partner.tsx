import React, { useState }from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import Partnership from '../assets/images/partnership.jpeg';
import Affiliate from '../assets/images/affiliate.jpeg';
import 'react-vertical-timeline-component/style.min.css';

function PartnerPage() {

    return (
        <div className="PartnerPage">
            <Container>
                <section className='text-center text-lg-start text-white pb-5 mt-5'>
                    <Row className='py-3 my-3'>
                        <Col className='mb-3'>
                            <div className='section-title  text-white-1 mb-2'><span className='text-secondary-1'>PARTNERSHIP WMP</span></div>
                            <div className='fs-5 my-5'>WMPs that we offer to new partners after an agreement has been reached on our cooperation. It's a vacation and a personal meeting with us at the same time. Available up to 5 people so bring your family and/or friends for 3 days. Our chalet located in beautiful Mayrhofen ski resort in Zillertal Austria. Various programs, including dinner for five people at one of the great restaurant the town can offer. Personal offer will be sent to the interested parties/participants by email. For more information We are available on social channels as well.</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={6} lg={6} className="d-flex align-items-center justify-content-center mb-3">
                            <Image src={Partnership}  width={320} alt="logo" className="rounded-3 mx-3"/>
                        </Col>
                        <Col sm={12} md={6} lg={6} className="d-flex align-items-center justify-content-center mb-3">
                            <Image src={Affiliate}  width={320} alt="logo" className="rounded-3 mx-3"/>
                        </Col>
                    </Row>

                </section>
            </Container>
        </div>
    );
}

export default PartnerPage;
