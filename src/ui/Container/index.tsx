import { FC, PropsWithChildren } from "react";
import * as S from "./style";

type ContainerProps = {
  className?: string;
};

const Container: FC<PropsWithChildren<ContainerProps>> = (props) => {
  const { children, className } = props;

  return <S.Wrapper className={className}>{children}</S.Wrapper>;
};

export default Container;
