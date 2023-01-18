import styled from "styled-components";

export const InputContainer = styled.div<{ error?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  border-radius: 12px;
  border: 1px solid #e2e2ee;
  outline: none;
  width: 100%;
  position: relative;
  box-shadow: 0px 2px 3px 0px rgba(129, 129, 182, 0.12);
  background-color: #fff;
`;

export const Input = styled.input<{ error?: boolean }>`
  color: #8388aa;
  font-size: 15px;
  background-color: #fff;
  width: 100%;
  outline: none;
  border: none;
  padding: 12px 0;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray};
  }
`;
