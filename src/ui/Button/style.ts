import styled from "styled-components";

export const Button = styled.button`
  font-size: 15px;
  background-color: ${({ theme }) => theme.color.white};
  padding: 18px 24px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color.blue};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s, color 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.color.blue};
    color: ${({ theme }) => theme.color.white};
    cursor: pointer;
  }
`;
