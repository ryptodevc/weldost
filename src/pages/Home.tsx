import React, { useState, useEffect }from 'react';
import { Col, Container, Row, Image, Button, Accordion, Modal } from 'react-bootstrap';
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
import { Link, NavLink } from 'react-router-dom';
import 'react-vertical-timeline-component/style.min.css';

function HomePage() {

    const [show, setShow] = useState(true);
    const [checked, setChecked] = React.useState(false); 

    useEffect(() => {
        const notShow = localStorage.getItem('not-show');
        if(notShow === 'true') {
            setShow(false);
        }
    }, []);

    const handleConfirm = () => {
        if(checked) {
            localStorage.setItem('not-show', JSON.stringify(checked));
        }
        setShow(false)
    }
    console.log('log->isShow', show)
    return (
        <div className="HomePage">
            <Container>
                <Modal show={show} centered animation>
                    <Modal.Header>
                        <h4>Important Note:</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <b>
                            While we can assist you in claiming WELDOST tokens in the unfortunate event of your wallet being compromised or hacked, it's crucial to understand that we cannot recover lost funds. Protecting your assets remains a top priority.
                        </b>
                        <h5 className='mt-3'>
                            Beware of Scammers: 
                        </h5>
                        <b>
                            Remember that we will never ask for your private details, such as your Seed Phrase or Private Key. Be cautious of potential scams and always verify the authenticity of the support you're engaging with.
                            Also always make sure you are on <Link to="https://weldost.com" target="_blank">weldost.com</Link> site when engaging.
                        </b>
                        <p className='mt-2'>
                             Any questions you may have feel free to contact us!
                        </p>
                        <div className='d-flex justify-content-start align-center user-select-none' onClick = { () => setChecked(!checked)}>
                            <input value='' type = "checkbox"  checked={checked} className='me-1'/>
                            <p className='m-0'>Don't show this note again.</p>
                        </div>                        
                        <Button className='bg-primary-1 rounded-4 border-0 text-white px-3 me-3 fs-5 float-end' onClick={handleConfirm}>
                            Confirm
                        </Button>
                    </Modal.Body>
                </Modal>
                <section className='py-5'>
                    <Row className='text-center text-lg-start'>
                        <Col sm={12} md={12} lg={6} className='mb-3'>
                            <h1 className='text-uppercase text-white  fs-1 mb-3'>the journey between worlds</h1>
                            <div className='text-uppercase text-white mb-3 section-title'><span className='text-primary-1'>Travel</span> & <span className='text-secondary-1'>Earn</span></div>
                            <p className='text-white mb-5 fs-5'>The Weldost project is a subsidiary of the software development company Invis Consultancy Ltd, which is active both offline and online. We connect the two worlds in a unique and innovative way. Offline, we focus on travel, construction real estate, hospitality, passenger transportation and products. Online WMPs, Apps, Cryptocurrency, Blockchain, Gaming. In the year 2023, one of the most important driving forces of the project was the modernization of NFTs. We were the first in the world to combine travel with NFT. Our goal was to further  develop NFTs and provide them with a unique function. </p>
                            <div className='text-start text-center text-lg-start'>
                                <Button className='bg-primary-1 rounded-4 border-0 text-white px-3 me-3 fs-5' href="https://og.weldost.com/dashboard">Dapp</Button>
                                <Button className='bg-transparent rounded-4 border-1 border-secondary-1 text-white px-3 me-3 fs-5 presale-btn position-relative' href='https://presale.weldost.com/'>Join Presale</Button>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={6} className='mb-3 overflow-hidden'>
                            <Image src={MainBanner} width="100%" alt='main-banner' />
                        </Col>
                    </Row>
                    <Row className='align-items-end pt-5'>
                        <Col sm={12} lg={6} className='mb-3'>
                            <NavLink to="https://og.weldost.com/mint" className="sublink-item">
                                <Image src={BuyNftBanner} width="100%" alt='banner' />
                            </NavLink>
                        </Col>
                        <Col sm={12} lg={6} className='mb-3'>
                            <NavLink to="https://og.weldost.com/dashboard" className="sublink-item">
                                <Image src={StakeNftBanner} width="100%" alt='banner' />
                            </NavLink>
                        </Col>
                        <Col sm={12} lg={6} className='mb-3'>
                            <NavLink to="" className="comingsoon">
                                <Image src={BuyWmtBanner} width="100%" alt='banner' />
                                <p className='p1'>Coming Soon</p>
                            </NavLink>
                        </Col>
                        <Col sm={12} lg={6} className='mb-3'>
                            <NavLink to="" className="comingsoon">
                                <Image src={StakeWmtBanner} width="100%" alt='banner' />
                                <p className='p2'>Coming Soon</p>
                            </NavLink>
                        </Col>
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
                    <div className='section-title  text-primary-1 mb-5'>NFTs</div>
                    <Row>
                        <Col sm={12} lg={8}>
                            <div className='fs-5 mb-3'>The NFTs we have issued have their own unique properties. We are modernizing the use of NFTs. They can be used continuously in different areas which we offer. Also We keep their values stable regardless of Ethereum price movement.</div>
                        </Col>
                    </Row>
                    <Row className=''>
                        {
                            NftCardData.map((item, index) => (
                                <Col sm={12} lg={4} className='mb-5' key={index}>
                                    <NFTCard image={item.image} title={item.title} color={item.color} style={item.style} content={item.content}/>
                                </Col>
                            ))
                        }
                    </Row>
                </section>
                <section className='text-center text-lg-start text-white pb-5 mt-5'>
                    <div className='section-title  text-white-1 mb-2'><span className='text-secondary-1'>Partner programs</span></div>
                    <Row className='py-3 my-3'>
                        <Col>
                            <h1>PARTNERSHIP WMP</h1>
                            <div className='fs-5 mb-3'>WMPs that we offer to new partners after an agreement has been reached on our cooperation. It's a vacation and a personal meeting with us at the same time. Available up to 5 people so bring your family and/or friends. Our chalet located in beautiful Mayrhofen ski resort in Zillertal Austria. Various programs including dinner for five people at one of the great restaurant the town can offer. Please refer to our properties for more details.</div>
                        </Col>
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
                                <Col sm={12} md={6} lg={4} key={index}>
                                    <TeamMemberCard photo={item.photo} name={item.name} role={item.role} description={item.description} />
                                </Col>
                            ))
                        }
                    </Row>
                </section>
                <section className='text-center text-lg-start text-white pb-5 mt-5'>
                    <div className='section-title  text-white-1 mb-2'><span className='text-secondary-1'>Roadmap</span></div>
                    <Row className='roadmapRow'>
                        <Col>
                            <section className="main-timeline-section">
                                <div className="conference-center-line"></div>
                                <div className="conference-timeline-content text-white">
                                    <div className="timeline-article timeline-article-bottom">
                                        <div className="meta-date"></div>
                                        <div className="content-box">
                                            <div className='fs-5 fw-medium'>Q1 2024</div>
                                            <div>WELDOST TOKEN PRESALE</div>
                                            <div>WELDOST MULTIFUNCTIONAL PASS</div>
                                            <div>LIMITED WMP PASS</div>
                                            <div>FIRST WMP COLLECTION</div>
                                        </div>
                                    </div>
                                    <div className="timeline-article timeline-article-top">
                                        <div className="meta-date"></div>
                                        <div className="content-box">
                                            <div className='fs-5 fw-medium'>Q2 2024</div>
                                            <div>WELDOST TOKEN LAUNCH</div>
                                            <div>WELDOST TOKEN STAKING POOL</div>
                                            <div>WELDOST TOKEN LIQUIDITY POOL</div>
                                            <div>WELDOST SWAP</div>
                                            <div>WELDOST DAPP</div>
                                            <div>COINMARKETCAP</div>
                                            <div>COINGECO</div>
                                            <div>EXCHANGE LISTING</div>
                                        </div>
                                    </div>
                                    <div className="timeline-article timeline-article-bottom">
                                        <div className="meta-date"></div>
                                        <div className="content-box">
                                            <div className='fs-5 fw-medium'>Q3 2024</div>
                                            <div>WELDOST PRODUCT</div>
                                            <div>SECOND WMP COLLECTION</div>
                                            <div>EXCHANGE LISTING</div>
                                        </div>
                                    </div>
                                    <div className="timeline-article timeline-article-top">
                                        <div className="meta-date"></div>
                                        <div className="content-box">
                                            <div className='fs-5 fw-medium'>Q4 2024</div>
                                            <div>WELDOST GAME</div>
                                            <div>EXCHANGE LISTING</div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Col>
                    </Row>
                </section>
                <section className='text-center text-lg-start text-white mt-5'>
                    <div className='section-title  text-white-1 mb-2'>Still have <span className='text-primary-1'>question?</span></div>
                    <Row>
                        <Col sm={12} lg={9} className='mb-5'>
                            <Accordion defaultActiveKey="0" className='bg-transparent border-0 text-white'>
                                <Accordion.Item eventKey="0" className='bg-transparent border-0 text-white'>
                                    <Accordion.Header className='bg-transparent text-white fs-4 fw-bold'><div>Why this project is <span className='text-secondary-1 mx-2'>unique</span> by Weldost?</div></Accordion.Header>
                                    <Accordion.Body className='bg-transparent text-white fs-5 text-start'>
                                        This project is the first in the world to connect the offline and digital worlds in an unique way. Your NFT (WMP) acting as a pass to travel and earn bonus at the same time and not losing values like many other NFT s on market.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='bg-transparent border-0 text-white'>
                                    <Accordion.Header className='bg-transparent text-white fs-4 fw-bold'><div>How does the <span className='text-secondary-1 mx-2'>staking pool</span>works?</div></Accordion.Header>
                                    <Accordion.Body className='bg-transparent text-white fs-5 text-start'>
                                        WELDOST NFT  (WMP) owners can stake their PASS in the staking pool for 36 months, these yields passive income every 30 days.  Each WELDOST NFT brings different bonuses based on their value. Please refer to whitepaper for detailed percentage.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='bg-transparent border-0 text-white'>
                                    <Accordion.Header className='bg-transparent text-white fs-4 fw-bold'><div>What will happen to my NFTs after they have <span className='text-secondary-1 mx-2'>expired</span>(in 36 months)?</div></Accordion.Header>
                                    <Accordion.Body className='bg-transparent text-white fs-5 text-start'>
                                        After expiration it can be used for various things for examples games and tournaments. Also you can repurchase and stake it for another 36 months and/or use it for travel to one of our holiday destinations. ( We will be adding more in the future)
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='bg-transparent border-0 text-white'>
                                    <Accordion.Header className='bg-transparent text-white fs-4 fw-bold'><div>Why should I buy <span className='text-secondary-1 mx-2'>Weldost travel NFT pass?</span></div></Accordion.Header>
                                    <Accordion.Body className='bg-transparent text-white fs-5 text-start'>
                                        Very straightforward. You can travel to one of our properties (more property will be added in the future) and share it with family or friends. Participate in various programs organized by Weldost. Stake it and earn bonus every month in USDT. Refer to our whitepaper please for details.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='bg-transparent border-0 text-white'>
                                    <Accordion.Header className='bg-transparent text-white fs-4 fw-bold'><div>My wallet is <span className='text-secondary-1 mx-2'>compromised/hacked</span>, What should I do?</div></Accordion.Header>
                                    <Accordion.Body className='bg-transparent text-white fs-5 text-start'>
                                    If you suspect that your wallet has been compromised, it's essential to take immediate action to protect your assets. Please follow these steps:
Never Share Your Seed Phrase or Private Key: Under no circumstances should you share your Seed Phrase or Private Key with anyone. These are sensitive and should be kept secure.
Contact Us: Reach out to us at: contact@weldost.com to report the issue and seek guidance on how to proceed.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5" className='bg-transparent border-0 text-white'>
                                    <Accordion.Header className='bg-transparent text-white fs-4 fw-bold'><div>How much is <span className='text-secondary-1 mx-2'>affiliate compensated?</span></div></Accordion.Header>
                                    <Accordion.Body className='bg-transparent text-white fs-5 text-start'>
                                        10%  of the values of any NFT pass, transfered to you in USDT. Read our whitepaper please for more information.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6" className='bg-transparent border-0 text-white'>
                                    <Accordion.Header className='bg-transparent text-white fs-4 fw-bold'><div>What is <span className='text-secondary-1 mx-2'>affiliate NFT PASS?</span></div></Accordion.Header>
                                    <Accordion.Body className='bg-transparent text-white fs-5 text-start'>
                                        Our NFT pass will be implemented in the future for games and/or  sweepstakes. 
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7" className='bg-transparent border-0 text-white'>
                                    <Accordion.Header className='bg-transparent text-white fs-4 fw-bold'><div>In case <span className='text-secondary-1 mx-2'>I cant travel but bought NFT pass</span>, what is your policy?</div></Accordion.Header>
                                    <Accordion.Body className='bg-transparent text-white fs-5 text-start'>
                                        No worries, your NFT pass can be sold or utilized for friends/families. In that event contact us please.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="8" className='bg-transparent border-0 text-white'>
                                    <Accordion.Header className='bg-transparent text-white fs-4 fw-bold'><div>I staked my <span className='text-secondary-1 mx-2'>NFT PASS for 36 months</span>, what happens after this time limit?</div></Accordion.Header>
                                    <Accordion.Body className='bg-transparent text-white fs-5 text-start'>
                                        Your pass expires, by that time you have accumulated enough bonus for your travel expense + profit. Refer to our whitepaper please for more details.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="9" className='bg-transparent border-0 text-white'>
                                    <Accordion.Header className='bg-transparent text-white fs-4 fw-bold'><div>What <span className='text-secondary-1 mx-2'>wallet</span> should I use to buy tokens?</div></Accordion.Header>
                                    <Accordion.Body className='bg-transparent text-white fs-5 text-start'>
                                        We recommend Metamask wallet.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="10" className='bg-transparent border-0 text-white'>
                                    <Accordion.Header className='bg-transparent text-white fs-4 fw-bold'><div>Can I use <span className='text-secondary-1 mx-2'>Visa card</span> to purchase NFT/tokens?</div></Accordion.Header>
                                    <Accordion.Body className='bg-transparent text-white fs-5 text-start'>
                                        Yes, you can use platform for direct buy but we recommend sign up and create and account at one of crypto exchanges to avoid higher fees.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="11" className='bg-transparent border-0 text-white'>
                                    <Accordion.Header className='bg-transparent text-white fs-4 fw-bold'><div>How to book your <span className='text-secondary-1 mx-2'>accomodation ?</span></div></Accordion.Header>
                                    <Accordion.Body className='bg-transparent text-white fs-5 text-start'>
                                        Contact us by email when you are ready to travel and bought your pass, We will send you all the informations.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                        <Col sm={12} lg={3} className='d-none d-lg-block'>
                            <Image src={FaqBanner} width="100%" alt='banner' />
                        </Col>
                    </Row>
                </section>
            </Container>
        </div>
    );
}

export default HomePage;
