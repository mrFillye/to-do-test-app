import { FCWithChildren } from "types/app";
import * as S from "./style";

export type ButtonProps = {
  className?: string;
  onClick?: () => void;
  type?: "submit" | "button";
  form?: string;
};

export const Button: FCWithChildren<ButtonProps> = ({ children, className, onClick, type = "button", form }) => {
  return (
    <S.Button className={className} form={form} onClick={onClick} type={type}>
      {children}
    </S.Button>
  );
};
