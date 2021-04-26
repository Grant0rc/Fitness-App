import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import GlobalStyle from '../globalStyles';
import Image from "./img.js";




const Greeting = styled.h1`
    font-size: 36px;
    font-weight: 700;
    margin-top: 74px;
    margin-bottom: 55px;
    `

const YourWorkout = styled.h2`
    font-size: 24px;
    line-height: 24px;
    `

const WorkoutContainer = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    margin-bottom: 10px;
`

const Trainingsplan = styled.p `
    font-size: 12px;
`

const WorkoutInfo = styled.p `
    font-size: 16px;
`


function Dashboard() {
    return (
        <div>
        <GlobalStyle/>
        <main>
            <Greeting>
                Guten
                <br/>
                Morgen,
                <br/>
                User
            </Greeting>
            <WorkoutContainer>
            <YourWorkout>Dein Workout Heute</YourWorkout>
            <Trainingsplan>Trainingsplan</Trainingsplan>
            </WorkoutContainer>
            <Image/>
            <WorkoutInfo>Titel des Workouts</WorkoutInfo>
            <WorkoutInfo>Titel des Programms</WorkoutInfo>
            <p>XXX kcal - 26min - Beweglichkeit</p>
        </main>
        <Navbar/>
        </div>
    )
}

export default Dashboard;