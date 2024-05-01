import { Link } from "react-router-dom"
import * as S from "./ProjectStyled"
import git from "../../assets/git.png"
import linkedin from "../../assets/linkedin.png"
import varcel from "../../assets/varcel.png"

export default function ProjectBox() {
  return (
    <S.BoxProject>
      <S.ExpoProject>
        <h2>ProjectName</h2>
      </S.ExpoProject>
      <S.AboutProject>
        <div>
          <Link to=""><img src={git} alt="" /></Link>
          <Link to=""><img src={linkedin} alt="" /></Link>
          <Link to=""><img src={varcel} alt="" /></Link>
        </div>
        <p align="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta omnis eum adipisci, cumque repellendus dolore magni corporis velit repudiandae cum suscipit commodi quam unde officia corrupti, odit vitae repellat rerum?</p>
      </S.AboutProject>
    </S.BoxProject>
  )
}
