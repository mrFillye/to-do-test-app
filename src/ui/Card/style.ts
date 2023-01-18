import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 12px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.color.line};
  box-shadow: ${({ theme }) => theme.common.boxShadow};
`;
