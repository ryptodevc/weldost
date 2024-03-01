import { Button, Col, Container, FormControl, Image, Row, Card } from "react-bootstrap";
import Logo from '../assets/images/logo.svg';
import LogoCrop from '../assets/images/logoCrop.png';
import { NavLink } from "react-router-dom";
import FacebookIcon from '../assets/images/icons/facebook-f.svg';
import YoutubeIcon from '../assets/images/icons/youtube.svg';
import TwitterIcon from '../assets/images/icons/twitter.svg';
import InstagramIcon from '../assets/images/icons/instagram.svg';
import RedditIcon from '../assets/images/icons/reddit.svg';
import TiktokIcon from '../assets/images/icons/tiktok.svg';

function Footer() {

    return (
        <div className="Footer">
            <Container className="text-center text-lg-start text-white my-5">
                <Row>
                    <Col className='mb-5 mt-5'>
                        <Card className='bg-primary-1 text-center ExploreCard rounded-5'>
                            <Card.Body className='p-5'>
                                <Card.Title className='fw-medium mb-2 text-white mb-3'>Get in <span className='text-secondary-1'>touch</span> with us</Card.Title>
                                <Button className='bg-primary-1 text-white fs-5 rounded-5 border-1 border-white px-4 py-2 mx-1' href="https://t.me/weldost" target="_blank">Our Telegram</Button>
                                <Button className='bg-white text-primary-1 fs-5 rounded-5 border-0 px-4 py-2 mx-1' href="mailto:contact@weldost.com" target="_blank">Email Us</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* <Row>
                    <Col xs={12} sm={12} md={6} lg={3} className="mb-3">
                        <div className="fs-4 mb-4 fw-medium">Marketplace</div>
                        <NavLink to="/nfts" className="nav-link mb-3">ALL NFTs</NavLink>
                        <NavLink to="/art" className="nav-link mb-3">Art</NavLink>
                        <NavLink to="/music" className="nav-link mb-3">Music</NavLink>
                        <NavLink to="/domain" className="nav-link mb-3">Domain Name</NavLink>
                        <NavLink to="/virtual_world" className="nav-link mb-3">Virtual World</NavLink>
                        <NavLink to="/collectibles" className="nav-link mb-3">Collectibles</NavLink>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3} className="mb-3">
                        <div className="fs-4 mb-4 fw-medium">Resource</div>
                        <NavLink to="/help_center" className="nav-link mb-3">Help Center</NavLink>
                        <NavLink to="/partners" className="nav-link mb-3">Partners</NavLink>
                        <NavLink to="/suggestions" className="nav-link mb-3">Suggestions</NavLink>
                        <NavLink to="/discord" className="nav-link mb-3">Discord</NavLink>
                        <NavLink to="/docs" className="nav-link mb-3">Docs</NavLink>
                        <NavLink to="/news" className="nav-link mb-3">Newsletter</NavLink>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3} className="mb-3">
                        <div className="fs-4 mb-4 fw-medium">Community</div>
                        <NavLink to="/community" className="nav-link mb-3">Commnity</NavLink>
                        <NavLink to="/document" className="nav-link mb-3">Documentation</NavLink>
                        <NavLink to="/brand_assets" className="nav-link mb-3">Brand Assets</NavLink>
                        <NavLink to="/blog" className="nav-link mb-3">Blog</NavLink>
                        <NavLink to="/forum" className="nav-link mb-3">Forum</NavLink>
                        <NavLink to="/mailing_list" className="nav-link mb-3">Mailing List</NavLink>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3} className="mb-3">
                        <div className="fs-4 mb-4 fw-medium">Contact us</div>
                        <p>Signup for our newsletter to get the  latest news in your inbox </p>
                        <Row>
                            <Col xs={8} sm={8} lg={8} className="mb-3"><FormControl placeholder="Enter your email!" className="bg-white rounded-5 border-0" /></Col>
                            <Col xs={4} sm={4} lg={4} className="mb-3"><Button className="bg-primary-1 rounded-4 border-0 w-100">Submit</Button></Col>
                        </Row>

                    </Col>
                </Row> */}
                <Row className="text-center my-2">
                    <Col lg={12} className="d-flex align-items-center justify-content-center mb-2">
                        <Image src={LogoCrop}  width={360} alt="logo"/>
                    </Col>
                    <Col lg={12} className="d-flex align-items-center justify-content-center my-5">
                        <NavLink to="https://www.facebook.com/profile.php?id=61551065162435" target="_blank" className="nav-link mx-3"><Image src={FacebookIcon} width={30} alt="social" /></NavLink>
                        <NavLink to="https://twitter.com/WELDOSTGLOBAL?t=OEzRVkKCL0btr_uBMMeCPQ&s=07&fbclid=IwAR3OVNdMRfb7Vz1wgcfHM_Foyo6j46fS6XTVSCjn0o8kpRywzPdNJHfWVhI" target="_blank" className="nav-link mx-3"><Image src={TwitterIcon} width={30} alt="social" /></NavLink>
                        <NavLink to="https://instagram.com/weldost?igshid=MzRlODBiNWFlZA==" target="_blank" className="nav-link mx-3"><Image src={InstagramIcon} width={30} alt="social" /></NavLink>
                        <NavLink to="https://www.youtube.com/@WELDOST" target="_blank" className="nav-link mx-3"><Image src={YoutubeIcon} width={30} alt="social" /></NavLink>
                        <NavLink to="http://www.tiktok.com/@weldostglobal" target="_blank" className="nav-link mx-3"><Image src={RedditIcon} width={30} alt="social" /></NavLink>
                        <NavLink to="https://www.reddit.com/u/WELDOST?utm_medium=android_app&utm_source=sharehttps://instagram.com/weldost?igshid=MzRlODBiNWFlZA==" target="_blank" className="nav-link mx-3"><Image src={TiktokIcon} width={30} alt="social" /></NavLink>
                    </Col>
                    <Col sm={12} lg={12} className="text-center">
                        <span className="fs-5">Copyright © 2024. All Rights Reserved by Weldost</span>
                    </Col>
                    <Col sm={12} lg={12} className="d-flex align-items-center justify-content-center">
                        <NavLink to="/terms" target="_blank" className="nav-link mx-4">Terms & Conditions</NavLink>
                        <NavLink to="/privacy" target="_blank" className="nav-link mx-4">Privacy Notice</NavLink>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;