import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

const Button = styled.button `
    color: white;
    background: #1D2A73;
    border-radius: 50px;
    position: fixed;
    bottom: 20px;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    border: none;
    padding: 20px;
    display: flex;
    font-size: 16px;
`
const ButtonContainer = styled.div `
    display: flex;
    justify-content: center;
`

function button (props) {
    return (
        <ButtonContainer>
        <Link to={props.Dest}>
        <Button>
        {props.Desc}
        </Button>
        </Link>
        </ButtonContainer>
    )
}

export default button;