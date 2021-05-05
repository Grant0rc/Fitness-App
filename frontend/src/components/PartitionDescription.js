//import { printIntrospectionSchema } from "graphql";
import React from "react";
import styled from "styled-components";


const DescriptionBox = styled.div `
    padding: 10px;
`

function PartitionDescription (props) {
    return (
        <DescriptionBox>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="7" r="7" fill={props.color}/>
            </svg>
            {props.description}
        </DescriptionBox>
    )
}


export default PartitionDescription;