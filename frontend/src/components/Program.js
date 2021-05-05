import React from "react";
import styled from "styled-components";
import GlobalStyle from '../globalStyles';
import BackArrow from "./Back";
import Info from "./InfoIcon";
import Partition from "./Partition";
import Button from "./Button/Button";

const TitleContainer = styled.div `
    display: flex;
    flex-direction: column;
    height: 70vh;
    background: linear-gradient(261.83deg, #FFB7D5 22.27%, rgba(255, 255, 255, 0) 89.6%), #FFBE21;
    justify-content: space-between;
    padding: 25px 19px 21px 19px;
`

const ProgramTitle = styled.h1 `
    align-self: center;
    justify-self: center;
`

const InfoContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const Description = styled.div `
    background: #F5EBDD;
    padding: 20px 31px 17px 24px;
`
const DescriptionText = styled.p `
    font-size: 16px;
`

function Program() {
    return (
        <div>
        <GlobalStyle/>
            <TitleContainer>
                <BackArrow/>
                <ProgramTitle>Titel des <br/> Programms</ProgramTitle>
                <InfoContainer>
                    <Info info="ABNEHMEN"/>
                    <Info info="LEICHT"/>
                    <Info info="6 WOCHEN"/>
                </InfoContainer>
            </TitleContainer>
            <Description>
                <DescriptionText>
                Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen.
                </DescriptionText>
            </Description>
            <main>
            <Partition/>
            </main>
        <Button Desc="jetzt starten" Dest="/"/>
        </div>
    )
}

export default Program;