import styled from "styled-components";
import { Card as UiCard } from "ui/Card";

export const Card = styled(UiCard)`
  margin: 24px 0px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const Status = styled.div`
  margin-top: 12px;
`;

export const Description = styled.div`
  margin-top: 12px;
`;

export const UserField = styled.div`
  color: ${({ theme }) => theme.color.gray};
`;

export const Title = styled.div`
  font-weight: 800;
  font-size:18px;
  margin:bottom: 16px;
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
