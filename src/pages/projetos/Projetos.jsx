import * as S from "./styled"
import Header from '../../components/Header/Header'
import ProjectBox from "../../components/Projetos/ProjectBox"

export default function Projetos() {
  return (
    <S.Main>
      <Header/>
      <section>
        <h2>Projetos</h2>
        <ProjectBox/>
      </section>
    </S.Main>
  )
}
