import React from "react";
import styled from "styled-components";
import ProgramImage from "../images/ProgramImage.jpg";

const DashboardImage = styled.img `
    width: 90vw;
    border-radius: 5px;
`

function Image() {
    return (
        <div>
            <DashboardImage src= {ProgramImage} alt="Image"/>
        </div>
    )
} 

export default Image;