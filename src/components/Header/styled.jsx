import styled,{createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: sans-serif;
}
`



export const Header = styled.header`
/* border: solid 1px green; */
width: 15vw;
position: static;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: #1b1b1b;
box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);
@media (max-width: 750px) {
    width: 20vw;
}
@media (max-width: 500px) {
    width: 100%;
    height: 30vh;
}
`

export const BoxLogo = styled.div`
width: 100%;
height: 32vh;
color: #cccbcb;
padding: 5px;
/* border: solid 1px pink; */
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
img{
    width: 10vw;
    border-radius: 50%;
}
@media (max-width: 500px) {
    height: 15vh;
    padding-left: 1rem;
    flex-direction: row;
}
`

export const Title = styled.h2`

width: 100%;
text-align: center;
`
export const Text = styled.p`

width: 100%;
text-align: center;
`

export const BoxMenu = styled.nav`
/* border: solid 1px gray; */
height: 38vh;
width: 100%;
li:nth-child(1){
    border-top: solid 1px #252525;
}
@media (max-width: 500px) {
    height: 15vh;
}
`
export const Lista = styled.li`
    height: 12.6vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #cccbcb;
    text-transform: uppercase;
    &:hover{
        width: 16vw;
        position: relative;
        background-color: rgba(0, 66, 128, 0.898);
        box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px 0px;
        &::before{
            content: '';
            position: absolute;
            width: 12px;
            height: 10px;
            right: 0;
            bottom: -10px;
            background: linear-gradient(-45deg, 
                    transparent 0%,
                    transparent 50%,
                    #004280e5 50%
                );
            }
    }
    @media (max-width: 500px) {
        height: 5vh;
        /* border: solid 1px yellow; */
}
`

export const BoxIcon = styled.div`
/* border: solid 1px yellow; */
width: 100%;
display: flex;
align-items: center;
justify-content: space-evenly;
margin-bottom: 10px;
img {
    width: 30px;
    &:hover{
        box-shadow: rgba(196, 196, 196, 0.5) 0px 7px 29px 0px;
        transition: all ease 0.5s;
        cursor: pointer;
    }
}
@media (max-width: 500px) {
   display: none;
}
`