import { FC } from "react";
import * as S from "./style";

type TaskProps = {
  username: string;
  email: string;
  description: string;
  status: string;
};

export const Task: FC<TaskProps> = ({ username, email, description, status }) => {
  return (
    <S.Card>
      <S.UserInfo>
        <S.UserField>исполнитель: {username}</S.UserField>
        <S.UserField>email: {email}</S.UserField>
      </S.UserInfo>
      <S.Status>Cтатус: {status}</S.Status>
      <S.Description>{description}</S.Description>
    </S.Card>
  );
};
