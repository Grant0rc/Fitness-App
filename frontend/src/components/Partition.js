import React from "react";
import styled from "styled-components";
import PartitionDescription from "./PartitionDescription";


const PartitionContainer = styled.div `
    display: flex;
    padding: 30px 31px 31px 24px;
`

const DescriptionContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

function Partition () {
    return (
        <div>
            <h3>So ist das Programm aufgeteilt:</h3>
            <PartitionContainer>
            <svg width="161" height="161" viewBox="0 0 161 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M80.7157 80.7151L80.7157 1C124.741 1 160.431 36.6897 160.431 80.7151C160.431 97.5492 155.101 113.951 145.207 127.57L80.7157 80.7151Z" fill="#D2DDD0" stroke="white"/>
                <path d="M80.7156 80.7151L145.206 127.57C119.329 163.188 69.4776 171.083 33.8603 145.206C20.2412 135.311 10.1041 121.359 4.9021 105.348L80.7156 80.7151Z" fill="#BBC8B9" stroke="white"/>
                <path d="M80.7157 80.715L4.90214 105.348C-2.98311 81.08 1.2262 54.5035 16.2248 33.8596L80.7157 80.715Z" fill="#939C91" stroke="white"/>
                <path d="M80.7157 80.7151L16.2249 33.8597C31.2235 13.2159 55.1985 1 80.7157 1V80.7151Z" fill="#7A8778" stroke="white"/>
            </svg>
            <DescriptionContainer>
                <PartitionDescription color="#7A8778" description="Krafttraining"/>
                <PartitionDescription color="#939C91" description="Cardio"/>
                <PartitionDescription color="#BBC8B9" description="Koordination"/>
                <PartitionDescription color="#D2DDD0" description="Beweglichkeit"/>
            </DescriptionContainer>
            </PartitionContainer>
        </div>
    )
}

export default Partition;