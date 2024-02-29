import React from 'react';
import { Col, Container, Row, Image, Button, Accordion, Card } from 'react-bootstrap';
import MainBanner from '../assets/images/banners/main.svg';
import BuyNftBanner from '../assets/images/banners/buy-nft.svg';
import StakeNftBanner from '../assets/images/banners/stake-nft.svg';
import BuyWmtBanner from '../assets/images/banners/buy-wmt.svg';
import StakeWmtBanner from '../assets/images/banners/stake-wmt.svg';
import TravelBanner from '../assets/images/banners/travel.png';
import StakingBanner from '../assets/images/banners/stake.png';
import ReferralBanner from '../assets/images/banners/referral.png';
import TeamBanner from '../assets/images/banners/team.png';
import ProgramBanner from '../assets/images/banners/program.png';
import Bg from '../assets/images/banners/bg.svg';
import { NFTCard, TeamMemberCard } from '../components/Card';
import FaqBanner from '../assets/images/banners/faq.svg';
import { NftCardData, TeamMemberData } from '../utils/contents';
import { NavLink } from 'react-router-dom';
import 'react-vertical-timeline-component/style.min.css';

function HomePage() {
    return (
        <div className="HomePage">
            <Container>
                <section className='py-5'>
                    <Row className='text-center text-lg-start'>
                        <Col sm={12} md={12} lg={6} className='mb-3'>
                            <h1 className='text-uppercase text-white  fs-1 mb-3'>the journey between worlds</h1>
                            <div className='text-uppercase text-white mb-3 section-title'><span className='text-primary-1'>Travel</span> & <span className='text-secondary-1'>Earn</span></div>
                            <p className='text-white mb-5 fs-5'>We connect the two worlds in a unique and innovative way. We focus on travel, construction, real estate, hospitality, passenger transportation and products. Online WMPs, Apps, Cryptocurrency, Blockchain, Gaming. In the year 2023, one of the most important driving forces of the project was the modernization of NFTs. We were the first in the world to combine travel with NFT.</p>
                            <div className='text-start text-center text-lg-start'>
                                <Button className='bg-primary-1 rounded-4 border-0 text-white px-3 me-3 fs-5'>Dapp</Button>
                                <Button className='bg-transparent rounded-4 border-1 border-secondary-1 text-white px-3 me-3 fs-5 presale-btn position-relative'>Join our Presale</Button>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={6} className='mb-3 overflow-hidden'>
                            <Image src={MainBanner} width="100%" alt='main-banner' />
                        </Col>
                    </Row>
                    <Row className='align-items-end pt-5'>
                        <Col sm={12} lg={6} className='mb-3'><NavLink to="/buy_nft" className="sublink-item"><Image src={BuyNftBanner} width="100%" alt='banner' /></NavLink></Col>
                        <Col sm={12} lg={6} className='mb-3'><NavLink to="/buy_nft" className="sublink-item"><Image src={StakeNftBanner} width="100%" alt='banner' /></NavLink></Col>
                        <Col sm={12} lg={6} className='mb-3'><NavLink to="/buy_nft" className="sublink-item"><Image src={BuyWmtBanner} width="100%" alt='banner' /></NavLink></Col>
                        <Col sm={12} lg={6} className='mb-3'><NavLink to="/buy_nft" className="sublink-item"><Image src={StakeWmtBanner} width="100%" alt='banner' /></NavLink></Col>
                    </Row>
                </section>
                <section>
                    <div className='section-title text-center text-lg-start text-white mb-5'>Why <span className='text-secondary-1'>Us?</span></div>
                    <Row className='justify-content-center'>
                        <Col sm={12} lg={4} className='mb-4 text-center advantage-card position-relative' style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                            <div className='position-relative  z-3'>
                                <Image src={TravelBanner} width={150} height={150} alt='banner' className='mb-2' />
                                <div className='fs-3 fw-medium text-white mb-2'>Travel</div>
                                <div className='fs-5 text-white mb-2'>Different holiday destinations you can travel to with our WMP pass</div>
                            </div>
                        </Col>
                        <Col sm={12} lg={4} className='mb-4 text-center advantage-card position-relative' style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                            <div className='position-relative  z-3'>
                                <Image src={StakingBanner} width={150} height={150} alt='banner' className='mb-2' />
                                <div className='fs-3 fw-medium text-white mb-2'>Staking</div>
                                <div className='fs-5 text-white mb-2'>All WMP packages generate 5% income for 36 months</div>
                            </div>
                        </Col>
                        <Col sm={12} lg={4} className='mb-4 text-center advantage-card position-relative' style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                            <div className='position-relative  z-3'>
                                <Image src={ReferralBanner} width={150} height={150} alt='banner' className='mb-2' />
                                <div className='fs-3 fw-medium text-white mb-2'>Referral</div>
                                <div className='fs-5 text-white mb-2'>Great referral program</div>
                            </div>
                        </Col>
                        <Col sm={12} lg={4} className='mb-4 text-center advantage-card position-relative' style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                            <div className='position-relative  z-3'>
                                <Image src={TeamBanner} width={190} height={150} alt='banner' className='mb-2' />
                                <div className='fs-3 fw-medium text-white mb-2'>Team</div>
                                <div className='fs-5 text-white mb-2'>Transparent dedicated team</div>
                            </div>
                        </Col>
                        <Col sm={12} lg={4} className='mb-4 text-center advantage-card position-relative' style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                            <div className='position-relative  z-3'>
                                <Image src={ProgramBanner} width={150} height={150} alt='banner' className='mb-2' />
                                <div className='fs-3 fw-medium text-white mb-2'>Program</div>
                                <div className='fs-5 text-white mb-2'> Free accommodations and programs for influencers/content creators</div>
                            </div>
                        </Col>
                    </Row>
                </section>
                <section className='text-center text-lg-start text-white'>
                    <div className='section-title  text-primary-1 mb-2'>NFTs</div>
                    <Row>
                        <Col sm={12} lg={8}>
                            <div className='fs-5 mb-3'>The NFTs we have issued have their own unique properties. We are modernizing the use of NFTs. They can be used continuously in different areas which we offer. Also We keep their values stable regardless of Ethereum price movement.</div>
                        </Col>
                    </Row>
                    <Row className=''>
                        {
                            NftCardData.map((item, index) => (
                                <Col sm={12} lg={4} className='mb-5' key={index}>
                                    <NFTCard image={item.image} title={item.title} color={item.color} style={item.style} />
                                </Col>
                            ))
                        }
                    </Row>
                </section>
                <section className='text-center text-lg-start text-white'>
                    <div className='section-title  text-white-1 mb-2'>Meet our <span className='text-secondary-1'>Team</span></div>
                    <Row>
                        <Col sm={12} lg={8}>
                            <div className='fs-5 mb-3'>We are an international team guided by common thinking, open mindedness and goals. Every team member has great skills on various levels with strong work ethics and commitment.</div>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        {
                            TeamMemberData.map((item, index) => (
                                <Col sm={12} md={6} lg={4}>
                                    <TeamMemberCard photo={item.photo} name={item.name} role={item.role} description={item.description} />
                                </Col>
                            ))
                        }
                    </Row>
                </section>
                <section className='text-center text-lg-start text-white'>
                    <div className='section-title  text-white-1 mb-2'>Still have <span className='text-primary-1'>question?</span></div>
                    <Row>
                        <Col sm={12} lg={9} className='mb-5'>
                            <Accordion defaultActiveKey="0" className='bg-transparent border-0 text-white'>
                                <Accordion.Item eventKey="0" className='bg-transparent border-0 text-white'>
                                    <Accordion.Header className='bg-transparent text-white fs-4 fw-bold'><div>How would you begin a <span className='text-secondary-1 mx-2'>not-for-profit</span> organization?</div></Accordion.Header>
                                    <Accordion.Body className='bg-transparent text-white fs-5 text-start'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='bg-transparent border-0 text-white'>
                                    <Accordion.Header className='bg-transparent text-white fs-4 fw-bold'><div>What is a <span className='text-secondary-1 mx-2'>public</span> foundation?</div></Accordion.Header>
                                    <Accordion.Body className='bg-transparent text-white fs-5 text-start'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='bg-transparent border-0 text-white'>
                                    <Accordion.Header className='bg-transparent text-white fs-4 fw-bold'><div>How would I choose what <span className='text-secondary-1 mx-2'>not-for-profit</span> to give to?</div></Accordion.Header>
                                    <Accordion.Body className='bg-transparent text-white fs-5 text-start'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='bg-transparent border-0 text-white'>
                                    <Accordion.Header className='bg-transparent text-white fs-4 fw-bold'><div>What is our <span className='text-secondary-1 mx-2'>story?</span></div></Accordion.Header>
                                    <Accordion.Body className='bg-transparent text-white fs-5 text-start'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                        <Col sm={12} lg={3} className='d-none d-lg-block'>
                            <Image src={FaqBanner} width="100%" alt='banner' />
                        </Col>
                    </Row>
                </section>
                <section className='text-center text-lg-start text-white pb-5'>
                    <div className='section-title  text-white-1 mb-2'><span className='text-secondary-1'>Roadmap</span></div>
                    <Row className='py-5 my-5'>
                        <Col>
                            <section className="main-timeline-section">
                                <div className="conference-center-line"></div>
                                <div className="conference-timeline-content text-white">
                                    <div className="timeline-article timeline-article-bottom">
                                        <div className="meta-date"></div>
                                        <div className="content-box">
                                            <div className='fs-5 fw-medium'>November 12th, 2024</div>
                                            <div>Weldost Token Launch</div>
                                            <div>Weldost Token Staking Pool</div>
                                            <div>Weldost Token Liquidity Pool</div>
                                            <div>Coinmarketcap</div>
                                        </div>
                                    </div>

                                    <div className="timeline-article timeline-article-top">
                                        <div className="meta-date"></div>
                                        <div className="content-box">
                                            <div className='fs-5 fw-medium'>December 12th, 2024</div>
                                            <div>Weldost Token Launch</div>
                                            <div>Weldost Token Staking Pool</div>
                                            <div>Weldost Token Liquidity Pool</div>
                                            <div>Coinmarketcap</div>
                                        </div>
                                    </div>
                                    <div className="timeline-article timeline-article-bottom">
                                        <div className="meta-date"></div>
                                        <div className="content-box">
                                            <div className='fs-5 fw-medium'>December 12th, 2024</div>
                                            <div>Weldost Token Launch</div>
                                            <div>Weldost Token Staking Pool</div>
                                            <div>Weldost Token Liquidity Pool</div>
                                            <div>Coinmarketcap</div>
                                        </div>
                                    </div>

                                    <div className="timeline-article timeline-article-top">
                                        <div className="meta-date"></div>
                                        <div className="content-box">
                                            <div className='fs-5 fw-medium'>November 12th, 2024</div>
                                            <div>Weldost Token Launch</div>
                                            <div>Weldost Token Staking Pool</div>
                                            <div>Weldost Token Liquidity Pool</div>
                                            <div>Coinmarketcap</div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='mb-5'>
                            <Card className='bg-primary-1 text-center ExploreCard rounded-5'>
                                <Card.Body>
                                    <Card.Title className='fw-medium mb-2 text-white mb-3'>Be a part of <span className='text-secondary-1'> WELDOST </span> and let's travel together into the <span className='text-secondary-1'> future! </span></Card.Title>
                                    <Button className='bg-white text-primary-1 fs-4 rounded-5 border-0'>Explore our Presale</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>
            </Container>
        </div>
    );
}

export default HomePage;
