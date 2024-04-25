import styled from "styled-components";
import rukia from "../../assets/rukiaTST.jpeg"


export const BoxProject = styled.div`
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
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    color: #fff;
    text-transform: uppercase;
`

export const AboutProject = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    img {
        width: 35px;
    }
`