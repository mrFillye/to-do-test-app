import { FCWithChildren } from "types/app";
import * as S from "./style";

export const Card: FCWithChildren = ({ children }) => {
  return <S.Card>{children}</S.Card>;
};
