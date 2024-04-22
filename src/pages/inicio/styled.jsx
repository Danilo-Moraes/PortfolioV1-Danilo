import styled, { css } from "styled-components";


const center = css`
display: flex;
justify-content: center;
align-items: center;
`

export const Main = styled.main`
/* border: solid 2px red; */
height: 100vh;
display: flex;
background-color: #1b1b1b;
@media (max-width: 500px) {
    flex-direction: column;
}
`
export const Container = styled.section`
width: 100%;
${center}
/* border: solid 2px red; */
`

export const BoxInicio = styled.div`
/* border: solid 2px red; */
${center}
h1{
    font-size: 4rem;
    width: 55vw;
    color: #cccbcb;
}
p{
   font-size: 2rem; 
   width: 45vw;
   color: #cccbcb;
}
img{
    width: 20vw;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
    border-radius: 50%;
    &:hover {
        box-shadow: rgba(255, 255, 255, 0.15) 0px 15px 25px, rgba(255, 255, 255, 0.05) 0px 5px 10px;
        transition: all ease 0.7s;
    }
}
`