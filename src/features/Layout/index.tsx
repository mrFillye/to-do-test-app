import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import * as S from "./style";

export const Layout: FC = () => {
  return (
    <S.Wrapper>
      <Outlet />
    </S.Wrapper>
  );
};
