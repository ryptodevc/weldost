import React, { useState }from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'react-vertical-timeline-component/style.min.css';
import Video from '../components/Video';

function AboutPage() {

    return (
        <div className="AboutPage">
            <Container>
                <section className='text-center text-lg-start text-white pb-5 mt-5'>
                    <div className='section-title  text-white-1 mb-2'><span className='text-secondary-1'>About Us</span></div>
                    <Row className='py-3 my-3'>
                        <Col>
                            <div className='fs-5 mb-3'>The Weldost project is a subsidiary of the software development company Invis Consultancy Ltd, which is active both offline and online. We connect the two worlds in a unique and innovative way. Offline, we focus on travel, construction real estate, hospitality, passenger transportation and products. Online WMPs, Apps, Cryptocurrency, Blockchain, Gaming. In the year 2023, one of the most important driving forces of the project was the modernization of NFTs. We were the first in the world to combine travel with NFT. Our goal was to further  develop NFTs and provide them with a unique function. </div>
                        </Col>
                    </Row>
                    {/* <Row className='py-3 my-3'>
                        <Col className="video-container">
                            <Video link="https://www.youtube.com/embed/LGCx54aB46E?si=0LdJ2axXnIBXg2LL"/>
                        </Col>
                    </Row> */}
                </section>
            </Container>
        </div>
    );
}

export default AboutPage;
