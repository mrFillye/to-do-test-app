import { Card } from "ui/Card";
import { Input } from "ui/Input";
import { Textarea } from "ui/Textarea";
import * as S from "./style";

export const CreateTaskForm = () => {
  return (
    <Card>
      <form>
        <S.Title>Создать задачу</S.Title>
        <S.Wrapper>
          <Input onChange={() => {}} placeholder="Имя" />
          <Input onChange={() => {}} placeholder="Email" />
        </S.Wrapper>
        <Textarea onChange={() => {}} value={""} placeholder="Опишите задачу" />
        <S.Button type="submit">Создать задачу</S.Button>
      </form>
    </Card>
  );
};
