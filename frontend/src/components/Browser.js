import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import GlobalStyle from '../globalStyles';
import WorkoutContainer from '../components/WorkoutContainer';


const BrowseHeader = styled.h2 `
    margin-top: 75px;
    margin-bottom: 25px;
`

const BrowseFilter = styled.p `
    margin-bottom: 27px;
`

const WorkoutList = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`



function Browser() {

    return (
        <div>
        <GlobalStyle/>
        <main>
        <BrowseHeader>Browse</BrowseHeader>
        <BrowseFilter>Filter</BrowseFilter>
        <WorkoutList>
        <WorkoutContainer/>
        <WorkoutContainer/>
        <WorkoutContainer/>
        <WorkoutContainer/>
        <WorkoutContainer/>
        </WorkoutList>
        </main>
        <Navbar/>
        </div>
    )
} 

export default Browser;