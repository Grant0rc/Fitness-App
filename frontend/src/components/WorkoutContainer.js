import React from "react";
import styled from "styled-components";

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

function WorkoutContainer() {
    return (
        <div>
            <Container>
                <h2>Titel des Programms</h2>
            </Container>
        </div>
    )
}

export default WorkoutContainer;