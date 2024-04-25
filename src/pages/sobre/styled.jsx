import styled from "styled-components";


export const Main = styled.main`
height: 100vh;
display: flex;
background-color: #1b1b1b;
@media (max-width: 500px) {
    flex-direction: column;
}
`
export const Container = styled.section`
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
`

export const Sobremim = styled.div`
    width: 60vw;
    h2 {
        font-size: 2rem;
        color: #cccbcb;
        text-align: center;
        margin-bottom: 15px;
    }
    p {
        font-size: 1.5rem;
        color: #818181;
    }
`

export const Boxhabilit = styled.div`
    text-align: center;
    h2{
        color: #cccbcb;
        text-align: center;
        margin-bottom: 15px;
        font-size: 2rem;
    }
    div img{
        width: 100px;
    }
`