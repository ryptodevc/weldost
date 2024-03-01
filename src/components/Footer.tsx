import { Button, Col, Container, FormControl, Image, Row } from "react-bootstrap";
import Logo from '../assets/images/logo.svg';
import { NavLink } from "react-router-dom";
import FacebookIcon from '../assets/images/icons/facebook-f.svg';
import YoutubeIcon from '../assets/images/icons/youtube.svg';
import TwitterIcon from '../assets/images/icons/twitter.svg';
import InstagramIcon from '../assets/images/icons/instagram.svg';
import RedditIcon from '../assets/images/icons/reddit.svg';

function Footer() {

    return (
        <div className="Footer">
            <Container className="text-center text-lg-start text-white my-5">
                <Row>
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
                        <Row>
                            <Col className="d-flex align-items-center justify-content-center justify-content-lg-start">
                                <NavLink to="/" className="nav-link mx-2"><Image src={FacebookIcon} width={30} alt="social" /></NavLink>
                                <NavLink to="/" className="nav-link mx-2"><Image src={TwitterIcon} width={30} alt="social" /></NavLink>
                                <NavLink to="/" className="nav-link mx-2"><Image src={YoutubeIcon} width={30} alt="social" /></NavLink>
                                <NavLink to="/" className="nav-link mx-2"><Image src={RedditIcon} width={30} alt="social" /></NavLink>
                                <NavLink to="/" className="nav-link mx-2"><Image src={InstagramIcon} width={30} alt="social" /></NavLink>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="text-center text-lg-start my-2">
                    <Col sm={12} lg={2} className="mb-2">
                        <Image src={Logo} width={150} alt="logo" className="me-5" />
                    </Col>
                    <Col sm={12} lg={10} className="mb-2  text-center text-lg-start">
                        <span className="fs-5"> © 2024 Welodost.com All Rights Reserved</span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;