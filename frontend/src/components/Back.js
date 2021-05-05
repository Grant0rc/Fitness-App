import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

const Arrow = styled.div `
display: flex;
flex-direction: row-reverse;
`


function Back() {
    return (
        <Link to="/Browse">
        <Arrow>
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.3588 18.1987L2.82663 9.66659L11.3588 1.13446" stroke="#1D2A73" stroke-width="3"/>
                <path d="M4.45032 9.6665L12.8734 9.6665L20.5068 9.66651" stroke="#1D2A73" stroke-width="3"/>
            </svg>
        </Arrow>
        </Link>
    )
}

export default Back;