import React from "react";
import { Card } from "ui/Card";
import * as S from "./style";

export const Taks = () => {
  return (
    <Card>
      <S.Title>title</S.Title>
      <div>имя пользователя</div>
      <div>email</div>
      <div>текст задачи</div>
      <div>статус</div>
    </Card>
  );
};
