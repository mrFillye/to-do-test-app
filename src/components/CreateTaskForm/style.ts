import styled from "styled-components";
import { Button as UiButton } from "ui/Button";

export const Title = styled.div`
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 24px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 12px;
`;

export const Button = styled(UiButton)`
  margin-top: 16px;
`;
