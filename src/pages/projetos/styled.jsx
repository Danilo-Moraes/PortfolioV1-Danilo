import styled from "styled-components";


export const Main = styled.main`
height: 100vh;
display: flex;
background-color: #1b1b1b;
@media (max-width: 500px) {
    flex-direction: column;
}
`

export const Secproject = styled.section `
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
    h2 {
        color: #cccbcb;
    }
`

export const Boxproject = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`