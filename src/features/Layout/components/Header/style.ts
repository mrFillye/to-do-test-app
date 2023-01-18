import styled from "styled-components";
import UiContainer from "ui/Container";

export const HeaderWrapper = styled.header`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
  box-shadow: ${({ theme }) => theme.common.boxShadow};
  background-color: ${({ theme }) => theme.color.white};
`;

export const Container = styled(UiContainer)`
  padding: 12px 150px;
`;

export const Logo = styled.div`
  font-size: 18px;
  font-weigth: 800;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
