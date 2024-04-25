import * as S from "./ProjectStyled"
import git from "../../assets/git.png"
import linkedin from "../../assets/linkedin.png"
import react from "../../assets/react.png"

export default function ProjectBox() {
  return (
    <S.BoxProject>
      <S.ExpoProject>
        <h2>ProjectName</h2>
      </S.ExpoProject>
      <S.AboutProject>
        <img src={git} alt="" />
        <img src={linkedin} alt="" />
        <img src={react} alt="" />
        <p align="justify">AboutProject</p>
      </S.AboutProject>
    </S.BoxProject>
  )
}
