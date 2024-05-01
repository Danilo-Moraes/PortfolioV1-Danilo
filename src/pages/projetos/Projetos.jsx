import * as S from "./styled"
import Header from '../../components/Header/Header'
import ProjectBox from "../../components/Projetos/ProjectBox"

export default function Projetos() {
  return (
    <S.Main>
      <Header/>
      <S.Secproject>
        <div>
          <h2>Projetos</h2>
        </div>
        <S.Boxproject>
        <ProjectBox/>
        <ProjectBox/>
        <ProjectBox/>
        </S.Boxproject>
      </S.Secproject>
    </S.Main>
  )
}
