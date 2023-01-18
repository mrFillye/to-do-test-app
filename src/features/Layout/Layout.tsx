import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components";
import * as S from "./style";

export const Layout: FC = () => {
  return (
    <S.Wrapper>
      <Header />
      <Outlet />
    </S.Wrapper>
  );
};
