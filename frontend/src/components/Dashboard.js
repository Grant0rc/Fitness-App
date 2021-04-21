import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import GlobalStyle from '../globalStyles';
//import ProgrammeImg from "../images/DashboardImg";



const DashboardContainer = styled.div`
    padding: 0 22px 0 17px;
    background-color: white;        //variable here
    `

const Greeting = styled.h1`
    font-size: 36px;
    font-weight: 700;
    margin-top: 74px;
    margin-bottom: 55px;
    `

const YourWorkout = styled.h2`
    font-size: 24px;
    margin-bottom: 10px;
    `

const WorkoutContainer = styled.div `

`


function Dashboard() {
    return (
        <div>
        <GlobalStyle/>
        <DashboardContainer>
            <Greeting>
                Guten Morgen, User
            </Greeting>
            <YourWorkout>Dein Workout Heute:</YourWorkout>
        </DashboardContainer>
        <Navbar/>
        </div>
    )
}

export default Dashboard;