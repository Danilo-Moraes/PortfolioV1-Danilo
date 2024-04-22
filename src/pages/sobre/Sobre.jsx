import Header from '../../components/Header/Header'
import * as S from "./styled"

import css from "../../assets/css.png"
import react from "../../assets/react.png"
import html from "../../assets/html.png"
import styled from "../../assets/styled_components.png"

export default function Sobre() {
  return (
    <S.Main>
      <Header/>
      <S.Container>
        <S.Sobremim>
          <h2>Sobre Mim</h2>
          <p align="justify">Olá me chamo Danilo Moraes. Tenho 20 anos e moro na Bahia, atualmente eu estou estudando Front-End pela VnW ultilizando React e Styled-Components. Pretendo me aprofundar mais em React e Back-end.</p>
        </S.Sobremim>
        <S.Boxhabilit>
          <h2>Hanilidades</h2>
          <div>
            <img src={css} alt="" />
            <img src={html} alt="" />
            <img src={react} alt="" />
            <img src={styled} alt="" />
          </div>
        </S.Boxhabilit>
      </S.Container>
    </S.Main>
  )
}
