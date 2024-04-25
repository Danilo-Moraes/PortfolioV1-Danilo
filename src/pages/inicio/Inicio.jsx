import Header from '../../components/Header/Header'
import * as S from "./styled"
import cat from "../../assets/cat.jpeg"

export default function Inicio() {
  return (
    <S.Main>
      <Header/>
      <S.Container>
        <S.BoxInicio>
          <div>
            <a href=''>DEVELOPER FRONT-END</a>
            <h1>Danilo Moraes</h1>
            <p>Primeira versão do portifolio pessoal </p>
          </div>
          <img src={cat} alt="" />
       </S.BoxInicio>
      </S.Container>
    </S.Main>
  )
}
