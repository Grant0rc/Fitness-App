import React from "react";
import styled from "styled-components";

const InfoIcon = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const InfoDesc = styled.p `
    font-size: 10px;
    font-family: Roboto, sans-serif;
`

function Icon(props) {
    return (
        <InfoIcon>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12.5" cy="12.5" r="12.5" fill="#F5EBDD"/>
            </svg>
            <InfoDesc>{props.info}</InfoDesc>
        </InfoIcon>
    )
} 

export default Icon;