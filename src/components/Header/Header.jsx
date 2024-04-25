import { Link } from "react-router-dom";
import * as S from "./styled"
import cat from "../../assets/cat.jpeg"
import git from "../../assets/git.png"
import link from "../../assets/linkedin.png"
import ig from "../../assets/instagram.png"

export default function Header() {
  return (
    <S.Header>
        <S.BoxMenu>
          <S.BoxLogo>
            <img src={cat} alt="" />
            <h3>Danilo Moraes</h3>
            <p>Front-End Developer</p>
          </S.BoxLogo>
            <ul>
                <Link to="/"><S.Lista>Inicio</S.Lista></Link>
                <Link to="/sobre"><S.Lista>Sobre mim</S.Lista></Link>
                <Link to="/projeto"><S.Lista>Projetos</S.Lista></Link>
            </ul>
        </S.BoxMenu>
        <S.BoxIcon>
          <img src={git} alt="" />
          <img src={link} alt="" />
          <img src={ig} alt="" />
        </S.BoxIcon>
    </S.Header>
  )
}
