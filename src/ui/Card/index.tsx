import { FCWithChildren } from "types/app";
import * as S from "./style";

type CardProps = {
  className?: string;
};

export const Card: FCWithChildren<CardProps> = ({ children, className }) => {
  return <S.Card className={className}>{children}</S.Card>;
};
