import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

const NavbarElements = styled.div `
    background-color: #F5EBDD;          //add variable here
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    position: fixed;
    bottom: 0;
    width: 100%;
`

const ButtonContainer = styled.div `
    display: flex;
    flex-direction: column;
    font-size: 10px;
    align-items: center;
    text-decoration: none;
`

function Navbar() {
    return (
        <div>
            <NavbarElements>
                <Link to="/">
                <ButtonContainer>
                <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 1.84314L1.12354 10.5529L1.12354 17.4982L1.12354 24.1177L8.86196 24.1177L8.86196 15.1309L15.8303 15.1309L15.8303 24.1177L23.8765 24.1177L23.8765 10.5529L12.5 1.84314Z" stroke="#1D2A73" strokeWidth="2"/>
                </svg>
                HOME
                </ButtonContainer>
                </Link>
                <Link to="/browse">
                <ButtonContainer>
                <svg width="38" height="20" viewBox="0 0 38 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6.01849" y="1.30469" width="6.81208" height="17.3514" stroke="#1D2A73" strokeWidth="2"/>
                    <rect x="12.8306" y="13.3865" width="6.81208" height="12.3387" transform="rotate(-90 12.8306 13.3865)" stroke="#1D2A73" strokeWidth="2"/>
                    <rect x="25.1694" y="1.30469" width="6.81208" height="17.3514" stroke="#1D2A73" strokeWidth="2"/>
                    <rect x="31.9815" y="4.3894" width="4.39001" height="11.182" stroke="#1D2A73" strokeWidth="2"/>
                    <rect x="1.62848" y="4.3894" width="4.39001" height="11.182" stroke="#1D2A73" strokeWidth="2"/>
                </svg>
                BROWSE
                </ButtonContainer>
                </Link>
                <Link to="/profile">
                <ButtonContainer>
                <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12.5" cy="12.9805" r="11.5" stroke="#1D2A73" strokeWidth="2"/>
                    <circle cx="12.5" cy="10.5354" r="4.33639" stroke="#1D2A73" strokeWidth="2"/>
                    <path d="M19.7267 22.2178C19.7267 17.6744 17.0435 14.9912 12.5001 14.9912C7.95662 14.9912 5.27344 17.6744 5.27344 22.2178" stroke="#1D2A73" strokeWidth="2"/>
                </svg>
                PROFIL
                </ButtonContainer>
                </Link>
            </NavbarElements>
        </div>
    )

}

export default Navbar;