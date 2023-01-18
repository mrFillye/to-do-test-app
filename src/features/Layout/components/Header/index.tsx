import React from "react";
import { Button } from "ui/Button";
import * as S from "./style";

export const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.Container>
        <S.Wrapper>
          <S.Logo>To Do test App</S.Logo>
          <Button>Логин</Button>
        </S.Wrapper>
      </S.Container>
    </S.HeaderWrapper>
  );
};
