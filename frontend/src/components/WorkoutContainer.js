import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    height: 215px;
    width: 90vw;
    background-color: #F5EBDD;
    margin-top: 20px;

`

function WorkoutContainer(props) {
    return (
        <div>
            <Link to="/Program">
            <Container>
                <h2>{props.title}</h2>
            </Container>
            </Link>
        </div>
    )
}

export default WorkoutContainer;