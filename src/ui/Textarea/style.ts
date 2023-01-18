import styled from "styled-components";

export const Textarea = styled.textarea<{
  error?: boolean;
  disabled?: boolean;
}>`
  color: ${({ error, theme }) => (error ? theme.color.red : theme.color.gray)};
  padding: 16px;
  font-size: 15px;
  border-radius: 12px;
  border: 1px solid ${({ error, theme }) => (error ? theme.color.red : theme.color.line)};
  outline: none;
  width: 100%;
  box-shadow: ${({ theme }) => theme.common.boxShadow};
  background-color: ${({ theme }) => theme.color.white};

  &:hover {
    border: 1px solid ${({ error, theme }) => (error ? theme.color.red : theme.color.gray)};
  }

  &:focus {
    border: 1px solid ${({ error, theme }) => (error ? theme.color.red : theme.color.gray)};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.gray};
  }
`;
