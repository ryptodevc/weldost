import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';
// import WalletIcon from '../assets/images/icons/wallet.svg';

function Header() {
    return (
        <div className="Header">
            <Navbar collapseOnSelect expand="lg" className='py-3'>
                <Container>
                    <NavLink to="/" className="me-5"><Image src={Logo} width={150} alt='logo'/></NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" className="nav-link me-lg-3 mx-auto">Home</NavLink>
                            <NavLink to="/nfts" className="nav-link me-lg-3 mx-auto">NFTs</NavLink>
                            <NavLink to="/partner" className="nav-link me-lg-3 mx-auto">Partner</NavLink>
                            <NavLink to="/team" className="nav-link me-lg-3 mx-auto">Team</NavLink>
                            <NavLink to="/roadmap" className="nav-link me-lg-3 mx-auto">Roadmap</NavLink>
                            <NavLink to="/faq" className="nav-link me-lg-3 mx-auto">FAQ</NavLink>
                            <NavLink to="https://weldost.com/whitepaper.pdf" target="_blank" className="nav-link me-lg-3 mx-auto">Whitepaper</NavLink>        
                            <NavLink to="https://presale.weldost.com/" target="_blank" className="nav-link me-lg-3 mx-auto">Presale</NavLink>
                        </Nav>
                        <Nav>
                            <Button className='d-flex align-items-center rounded-4 justify-content-center bg-primary-1 border-0 fs-5'>Dapp</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
