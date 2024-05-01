import styled from "styled-components";
import provisor from "../../assets/provisor.png"


export const BoxProject = styled.div`
    position: relative;
    width: 25vw;
    height: 70vh;
    padding: 20px 10px;
    background-color: #272727;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.5) 2px 1px 15px 0px;
    `

export const ExpoProject = styled.div`
    width: 100%;
    height: 45%;
    background-image: url(${provisor});
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    text-transform: uppercase;
`

export const AboutProject = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 10px;
    img {
        width: 35px;
    }
    div {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }
`